import { withAuth } from 'next-auth/middleware'

export default withAuth(
  function middleware(req) {
    // Additional middleware logic can go here
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Check if user is accessing CMS routes
        if (req.nextUrl.pathname.startsWith('/cms')) {
          // Allow access to login page
          if (req.nextUrl.pathname === '/cms/login') {
            return true
          }
          // Require authentication for other CMS pages
          return !!token
        }
        return true
      },
    },
  }
)

export const config = {
  matcher: ['/cms/:path*']
}
