# syntax=docker.io/docker/dockerfile:1

# Base image with Node.js (v20 for compatibility)
FROM node:20-alpine AS base

# Install libc6-compat for compatibility with certain binaries
RUN apk add --no-cache libc6-compat

# Set working directory
WORKDIR /app

# Install dependencies only when needed
FROM base AS deps

# Copy package.json and lockfile
COPY package.json package-lock.json* ./

# Install dependencies using npm
RUN if [ -f package-lock.json ]; then npm ci; \
    else echo "Lockfile not found." && exit 1; \
    fi

# Rebuild the source code only when needed
FROM base AS builder

# Define build arguments for environment variables
ARG GIT_TAG
ARG DATABASE_URL
ARG DIRECT_URL
ARG BETTER_AUTH_SECRET
ARG BETTER_AUTH_URL
ARG NEXT_PUBLIC_BETTER_AUTH_URL
ARG NODE_ENV=production

# Set environment variables from build args
ENV DATABASE_URL=${DATABASE_URL}
ENV DIRECT_URL=${DIRECT_URL}
ENV BETTER_AUTH_SECRET=${BETTER_AUTH_SECRET}
ENV BETTER_AUTH_URL=${BETTER_AUTH_URL}
ENV NEXT_PUBLIC_BETTER_AUTH_URL=${NEXT_PUBLIC_BETTER_AUTH_URL}
ENV NODE_ENV=${NODE_ENV}
ENV NEXT_TELEMETRY_DISABLED=1

# Copy runtime dependencies
COPY --from=deps /app/node_modules ./node_modules

# Copy Prisma schema
COPY prisma ./prisma

# Generate Prisma Client
RUN npx prisma generate

# Copy the rest of the application source code
COPY . .

# Build the Next.js application with standalone output
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner

# Set non-root user for better security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Create necessary directories and set permissions before switching user
RUN mkdir -p /app/.next/static && chown -R nextjs:nodejs /app

# Switch to non-root user
USER nextjs

# Pass public environment variables and runtime configuration
ARG NEXT_PUBLIC_BETTER_AUTH_URL
ARG NODE_ENV=production
ARG GIT_TAG

# Set runtime environment variables
ENV NEXT_PUBLIC_BETTER_AUTH_URL=${NEXT_PUBLIC_BETTER_AUTH_URL}
ENV NODE_ENV=${NODE_ENV}
ENV PORT=3000
ENV NEXT_TELEMETRY_DISABLED=1

WORKDIR /app

# Copy necessary files for standalone mode
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Standalone output contains everything needed to run the application
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Expose port 3000 (default Next.js port)
EXPOSE 3000

# Start the Next.js application using the standalone server.js
CMD ["node", "server.js"]

LABEL git.tag=${GIT_TAG}
