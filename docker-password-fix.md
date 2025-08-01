# Fix Docker Hub Authentication - Use Password

## The access token has insufficient scopes. Use your Docker Hub password instead.

### Steps to Fix:

1. **Go to GitHub Repository**
   - Settings → Secrets and variables → Actions

2. **Delete the old secret:**
   - Delete `DOCKERHUB_TOKEN`

3. **Add new secret:**
   - Name: `DOCKERHUB_PASSWORD`
   - Value: Your actual Docker Hub account password

4. **Keep existing:**
   - `DOCKERHUB_USERNAME`: Your Docker Hub username

### Alternative: Create Access Token with Full Permissions

If you prefer using access token:
1. Docker Hub → Account Settings → Security
2. Create new access token
3. Permissions: **Read, Write, Delete** (all permissions)
4. Use this token as `DOCKERHUB_PASSWORD` in GitHub secrets

The workflow now uses `DOCKERHUB_PASSWORD` instead of `DOCKERHUB_TOKEN`.