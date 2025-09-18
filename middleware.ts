import { withAuth } from "next-auth/middleware"

export default withAuth({
  pages: {
    signIn: "/cms/login",
  },
  callbacks: {
    authorized: ({ token, req }) => {
      const { pathname } = req.nextUrl
      
      // Log for debugging
      console.log('Middleware check:', {
        pathname,
        hasToken: !!token,
        userAgent: req.headers.get('user-agent')?.slice(0, 50)
      })
      
      // Always allow hitting the login route and API auth routes
      if (pathname.startsWith("/cms/login") || 
          pathname.startsWith("/api/auth") ||
          pathname.startsWith("/cms/debug")) {
        console.log('Allowing access to:', pathname)
        return true
      }
      
      // Require a valid session token for all other /cms paths
      const hasValidToken = !!token
      
      if (!hasValidToken) {
        console.log('No valid token, denying access to:', pathname)
      } else {
        console.log('Valid token found, allowing access to:', pathname)
      }
      
      return hasValidToken
    },
  },
})

export const config = {
  matcher: ["/cms/:path*"],
}