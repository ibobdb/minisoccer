# Docker Deployment Guide

This guide explains how to set up Docker Hub deployment for the minisoccer project using GitHub Actions.

## Prerequisites

1. **Docker Hub Account**: Create an account at [hub.docker.com](https://hub.docker.com)
2. **Docker Hub Repository**: Create a repository named `minisoccer` in your Docker Hub account
3. **GitHub Repository Secrets**: Configure the required secrets in your GitHub repository

## Required GitHub Secrets

Navigate to your GitHub repository → Settings → Secrets and variables → Actions, then add these secrets:

### Docker Hub Authentication

- `DOCKERHUB_USERNAME`: Your Docker Hub username
- `DOCKERHUB_TOKEN`: Your Docker Hub access token (create one in Docker Hub → Account Settings → Security → Access Tokens)

### Database Configuration

- `DATABASE_URL`: Your production database URL (e.g., PostgreSQL connection string)
- `DIRECT_URL`: Direct database connection URL (for Prisma migrations)

### Authentication Configuration

- `BETTER_AUTH_SECRET`: Secret key for Better Auth (generate a random 32+ character string)
- `BETTER_AUTH_URL`: Your production domain URL (e.g., `https://yourdomain.com`)
- `NEXT_PUBLIC_BETTER_AUTH_URL`: Same as BETTER_AUTH_URL (public environment variable)

## How to Use

### Manual Trigger

1. Go to your GitHub repository
2. Click on "Actions" tab
3. Select "Docker Build and Push to Docker Hub" workflow
4. Click "Run workflow"

### Automatic Trigger

The workflow automatically runs when you push a git tag:

```bash
git tag v1.0.0
git push origin v1.0.0
```

## Docker Images

The workflow creates two tags for each build:

- `yourusername/minisoccer:v1.0.0` (version-specific)
- `yourusername/minisoccer:latest` (always points to the latest build)

## Local Development

To test the Docker build locally:

```bash
# Build the image
docker build -t minisoccer:local .

# Run the container
docker run -p 3000:3000 \
  -e DATABASE_URL="your-database-url" \
  -e BETTER_AUTH_SECRET="your-secret" \
  -e BETTER_AUTH_URL="http://localhost:3000" \
  -e NEXT_PUBLIC_BETTER_AUTH_URL="http://localhost:3000" \
  minisoccer:local
```

## Deployment

Once the image is pushed to Docker Hub, you can deploy it anywhere:

```bash
# Pull and run the latest image
docker pull yourusername/minisoccer:latest
docker run -p 3000:3000 \
  -e DATABASE_URL="your-production-database-url" \
  -e BETTER_AUTH_SECRET="your-production-secret" \
  -e BETTER_AUTH_URL="https://yourdomain.com" \
  -e NEXT_PUBLIC_BETTER_AUTH_URL="https://yourdomain.com" \
  yourusername/minisoccer:latest
```

## Troubleshooting

1. **Build fails**: Check that all required secrets are configured in GitHub
2. **Authentication fails**: Verify your Docker Hub token has push permissions
3. **Runtime errors**: Ensure all environment variables are properly set
4. **Database connection**: Verify DATABASE_URL and DIRECT_URL are correct

## Security Notes

- Never commit secrets to your repository
- Use strong, randomly generated secrets
- Rotate your Docker Hub access tokens regularly
- Use HTTPS for all production URLs
