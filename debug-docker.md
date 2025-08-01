# Debug Docker Hub Authentication

## Quick Fix Steps:

### 1. Check Your Docker Hub Username
- Go to https://hub.docker.com
- Note your EXACT username (case-sensitive)
- Username should NOT have uppercase letters

### 2. Generate New Access Token
- Docker Hub → Account Settings → Security
- Delete old tokens
- Create new token with name: `github-actions`
- Permissions: `Read, Write, Delete`
- Copy the FULL token (starts with `dckr_pat_`)

### 3. Update GitHub Secrets
- GitHub repo → Settings → Secrets and variables → Actions
- Delete existing secrets
- Add new secrets:
  - Name: `DOCKERHUB_USERNAME` Value: `yourusername` (lowercase)
  - Name: `DOCKERHUB_TOKEN` Value: `dckr_pat_...` (full token)

### 4. Create Repository on Docker Hub
- Go to Docker Hub
- Create Repository
- Name: `tektribe-website`
- Visibility: Public

### 5. Test Locally First
```bash
# Test login locally
echo "your_token" | docker login -u "yourusername" --password-stdin

# If this works, GitHub Actions should work too
```

The workflow is now simplified to use direct docker commands instead of actions.