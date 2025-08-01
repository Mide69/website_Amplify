# Fix Docker Hub Authentication Error

## Steps to Fix 401 Unauthorized Error:

### 1. Create Docker Hub Access Token
1. Go to https://hub.docker.com
2. Click your profile → Account Settings
3. Go to Security tab
4. Click "New Access Token"
5. Name: `github-actions`
6. Permissions: `Read, Write, Delete`
7. Copy the token immediately

### 2. Update GitHub Secrets
1. Go to your GitHub repo
2. Settings → Secrets and variables → Actions
3. Delete old secrets if they exist
4. Add new secrets:
   - `DOCKERHUB_USERNAME`: Your exact Docker Hub username
   - `DOCKERHUB_TOKEN`: The access token you just created

### 3. Create Docker Hub Repository
1. Go to https://hub.docker.com
2. Click "Create Repository"
3. Name: `tektribe-website`
4. Visibility: Public
5. Click "Create"

### 4. Verify Secrets Format
- Username should be lowercase
- Token should be the full access token (starts with `dckr_pat_`)
- No extra spaces or characters

### 5. Test Authentication
Push any change to trigger the workflow and verify it works.