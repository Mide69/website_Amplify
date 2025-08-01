# TEK Tribe Website - Docker Setup

## Step-by-Step Docker Guide

### 1. Prerequisites
- Install Docker Desktop
- Create Docker Hub account
- Have GitHub account

### 2. Local Docker Build & Test
```bash
# Build the image
docker build -t tektribe-website .

# Run the container
docker run -p 8080:80 tektribe-website

# Or use docker-compose
docker-compose up --build
```

### 3. Docker Hub Setup
1. Go to https://hub.docker.com
2. Create repository: `tektribe-website`
3. Generate Access Token:
   - Settings → Security → New Access Token
   - Copy the token

### 4. GitHub Secrets Setup
1. Go to your GitHub repository
2. Settings → Secrets and variables → Actions
3. Add these secrets:
   - `DOCKERHUB_USERNAME`: Your Docker Hub username
   - `DOCKERHUB_TOKEN`: Your Docker Hub access token

### 5. Auto-Deployment
- Push to main branch triggers automatic build
- Docker image updates on Docker Hub automatically
- Tagged with `latest` and commit SHA

### 6. Pull and Run from Docker Hub
```bash
# Pull latest image
docker pull yourusername/tektribe-website:latest

# Run the container
docker run -p 8080:80 yourusername/tektribe-website:latest
```

### 7. Access Website
- Local: http://localhost:8080
- Container runs on port 80 internally
- Mapped to port 8080 on host