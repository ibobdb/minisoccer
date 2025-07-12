# Docker Deployment Guide

This guide explains how to deploy the minisoccer project using Docker Compose.

## Quick Start

### For Production (using Supabase)

1. Copy the environment variables:

```bash
cp .env.example .env.production
```

2. Edit `.env.production` with your production values
3. Deploy using the production compose file:

```bash
docker-compose -f docker-compose.prod.yml --env-file .env.production up -d
```

### For Development with Local Database

1. Use the main compose file:

```bash
docker-compose up -d
```

## Environment Configuration

Create a `.env.production` file with the following variables:

### Required Variables

- `DATABASE_URL`: Your Supabase connection string
- `DIRECT_URL`: Your direct Supabase connection string
- `BETTER_AUTH_SECRET`: Generate a secure random string (32+ characters)
- `BETTER_AUTH_URL`: Your production domain (e.g., `https://yourdomain.com`)
- `NEXT_PUBLIC_BETTER_AUTH_URL`: Same as BETTER_AUTH_URL

### Optional Variables

- `MAINTENANCE_MODE`: Set to `true` to enable maintenance mode (default: `false`)
- `ENABLE_SIGNUP`: Set to `false` to disable new user registrations (default: `true`)
- `RESEND_API_KEY`: For email functionality
- `EMAIL_USER`: Email sender address
- `CLOUDINARY_*`: For file uploads

## Compose Files

### docker-compose.yml

- Includes local PostgreSQL database
- Suitable for development and testing
- App runs on port 3000, database on port 5432

### docker-compose.prod.yml

- Production-ready configuration
- Uses external database (Supabase)
- Includes health checks and proper logging

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
