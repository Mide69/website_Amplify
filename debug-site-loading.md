# Debug Site Loading Issues

## Quick Checks:

### 1. Test Amplify Default URL
- Go to AWS Amplify Console
- Copy the default URL (e.g., `https://main.d1234567890.amplifyapp.com`)
- Test if this loads

### 2. Check Domain Status in Amplify
- Amplify Console → Domain management
- Status should be "Available" (green)
- SSL certificate should be "Issued"

### 3. DNS Propagation Check
- Use online tool: https://dnschecker.org
- Enter: www.tektribe.org.uk
- Check if DNS has propagated globally

### 4. Clear Browser Cache
- Hard refresh: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
- Try incognito/private browsing mode
- Try different browser

### 5. Check Build Status
- Amplify Console → Build history
- Ensure latest build is successful
- Check for any build errors

### 6. Test Different URLs
- Try: https://tektribe.org.uk (without www)
- Try: http://www.tektribe.org.uk (without https)

### Common Issues:
- DNS not propagated yet (can take 24-48 hours)
- SSL certificate still provisioning
- Build failed
- Domain configuration incomplete