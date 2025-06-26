# Secure Deployment Guide

## Platform-Specific Environment Variable Setup

### 1. **Heroku**
```bash
# Install Heroku CLI, then:
heroku config:set STRIPE_PUBLISHABLE_KEY=pk_live_your_key
heroku config:set STRIPE_SECRET_KEY=sk_live_your_key
heroku config:set EMAIL_USER=your_email@gmail.com
heroku config:set EMAIL_PASS=your_app_password
heroku config:set ADMIN_EMAIL=admin@tektribe.org.uk
```

### 2. **Vercel**
```bash
# In Vercel dashboard or CLI:
vercel env add STRIPE_PUBLISHABLE_KEY
vercel env add STRIPE_SECRET_KEY
vercel env add EMAIL_USER
vercel env add EMAIL_PASS
vercel env add ADMIN_EMAIL
```

### 3. **Netlify**
```bash
# In Netlify dashboard: Site settings > Environment variables
STRIPE_PUBLISHABLE_KEY=pk_live_your_key
STRIPE_SECRET_KEY=sk_live_your_key
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
ADMIN_EMAIL=admin@tektribe.org.uk
```

### 4. **AWS Amplify**
```bash
# In AWS Amplify Console: App settings > Environment variables
STRIPE_PUBLISHABLE_KEY=pk_live_your_key
STRIPE_SECRET_KEY=sk_live_your_key
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
ADMIN_EMAIL=admin@tektribe.org.uk
```

### 5. **Railway**
```bash
# In Railway dashboard: Variables tab
STRIPE_PUBLISHABLE_KEY=pk_live_your_key
STRIPE_SECRET_KEY=sk_live_your_key
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
ADMIN_EMAIL=admin@tektribe.org.uk
```

## Quick Deploy Commands

### Heroku
```bash
git add .
git commit -m "Deploy with secure env vars"
git push heroku main
```

### Vercel
```bash
npm install -g vercel
vercel --prod
```

### Railway
```bash
# Connect GitHub repo in Railway dashboard
# Auto-deploys on push
```

## Security Checklist
- ✅ Stripe keys in environment variables only
- ✅ .env file in .gitignore
- ✅ No hardcoded secrets in code
- ✅ Use HTTPS in production
- ✅ Validate all inputs server-side