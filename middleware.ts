import { withAuth } from "next-auth/middleware"

export default withAuth({
  pages: {
    signIn: "/cms/login",
  },
  callbacks: {
    authorized: ({ token, req }) => {
      const { pathname } = req.nextUrl
      // Always allow hitting the login route
      if (pathname.startsWith("/cms/login") || pathname.startsWith("/api/auth")) {
        return true
      }
      // Require a valid session token for all other /cms paths
      return !!token
    },
  },
})

export const config = {
  matcher: ["/cms/:path*"],
}