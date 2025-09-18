# CMS Authentication Fix Guide

## 🔍 Issues Found & Fixed

### 1. Missing Admin Credentials
**Problem**: The CMS admin credentials were not set in the environment variables.

**Fixed**: Added admin credentials to `.env`:
```bash
CMS_ADMIN_EMAIL="admin@tarana.ph"
CMS_ADMIN_PASSWORD="TaranaCMS2024!"
```

### 2. Session Timeout Issues
**Problem**: No session timeout configuration, causing indefinite sessions.

**Fixed**: Added proper session and JWT configuration:
- Session duration: 24 hours
- Auto-refresh: Every 1 hour
- JWT token expiration: 24 hours

### 3. Missing Authentication Wrapper
**Problem**: CMS pages were not properly checking authentication status.

**Fixed**: Added `CMSAuthWrapper` component that:
- Checks session status on page load
- Redirects to login if not authenticated
- Shows loading state during authentication check

## 🧪 Testing Instructions

### 1. Test Authentication Flow

1. **Clear browser data** (cookies, localStorage)
   ```
   Press F12 → Application Tab → Clear Storage → Clear site data
   ```

2. **Go to CMS**: http://localhost:3001/cms
   - Should redirect to login page automatically

3. **Try to login** with credentials:
   - Email: `admin@tarana.ph`
   - Password: `TaranaCMS2024!`

4. **Check debug page**: http://localhost:3001/cms/debug
   - Shows current session status
   - Displays authentication debugging info

### 2. Test Session Persistence

1. **Login successfully**
2. **Close browser** (not just tab)
3. **Reopen browser** and go to CMS
4. Should **stay logged in** (session persists)

### 3. Test Session Expiration

1. **Login successfully**
2. **Wait or manually expire session** (or change NEXTAUTH_SECRET temporarily)
3. **Try to access CMS**
4. Should **redirect to login** again

## 🔧 Troubleshooting Steps

### If still bypassing authentication:

1. **Check middleware logs** in terminal:
   ```bash
   # Look for "Middleware check:" messages in terminal
   npm run dev
   ```

2. **Force logout**:
   - Go to: http://localhost:3001/api/auth/signout
   - Or use the debug page logout button

3. **Clear Next.js cache**:
   ```bash
   rm -rf .next
   npm run dev
   ```

4. **Check environment variables**:
   ```bash
   # Make sure these are set:
   NEXTAUTH_SECRET="your-secret-key-here"
   NEXTAUTH_URL="http://localhost:3000"
   CMS_ADMIN_EMAIL="admin@tarana.ph"
   CMS_ADMIN_PASSWORD="TaranaCMS2024!"
   ```

### If authentication is too strict:

1. **Check middleware config** in `middleware.ts`
2. **Verify matcher patterns** are correct
3. **Check for conflicting auth providers**

## 🚀 Production Deployment

### For production (Vercel/live site):

1. **Update environment variables** in Vercel dashboard:
   ```bash
   NEXTAUTH_URL=https://your-domain.com
   NEXTAUTH_SECRET=your-production-secret-key
   CMS_ADMIN_EMAIL=your-admin-email
   CMS_ADMIN_PASSWORD=your-secure-password
   ```

2. **Test production authentication**:
   - Go to: https://your-domain.com/cms
   - Should redirect to login
   - Use production credentials

## 📊 Session Configuration Details

```javascript
// Current session settings:
session: {
  strategy: 'jwt',
  maxAge: 24 * 60 * 60,    // 24 hours
  updateAge: 60 * 60,      // 1 hour refresh
}

// JWT settings:
jwt: {
  maxAge: 24 * 60 * 60,    // 24 hours
}
```

## 🛡️ Security Features Added

- ✅ **Middleware protection** on all `/cms/*` routes
- ✅ **Automatic logout** after 24 hours
- ✅ **Token refresh** every hour
- ✅ **Secure JWT tokens** with proper expiration
- ✅ **Debug tools** for troubleshooting
- ✅ **Proper redirects** to login page

## 📞 Quick Commands

```bash
# Test authentication
curl -I http://localhost:3001/cms

# Check session
curl http://localhost:3001/api/auth/session

# Force logout
curl http://localhost:3001/api/auth/signout

# Check debug page
open http://localhost:3001/cms/debug
```

---

**Your CMS authentication should now work properly!** 🔒

If you're still able to access the CMS without login, follow the troubleshooting steps above.