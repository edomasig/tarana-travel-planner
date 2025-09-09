import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        // Check against environment variables for admin login
        const adminEmail = process.env.CMS_ADMIN_EMAIL
        const adminPassword = process.env.CMS_ADMIN_PASSWORD

        if (!adminEmail || !adminPassword) {
          console.error('Admin credentials not configured in environment variables')
          return null
        }

        // Check email and password
        if (credentials.email === adminEmail && credentials.password === adminPassword) {
          return {
            id: '1',
            email: adminEmail,
            name: 'CMS Admin'
          }
        }

        return null
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = 'admin'
      }
      return token
    },
    async session({ session, token }) {
      if (session.user && token) {
        session.user.id = token.sub || '1'
        session.user.role = token.role
      }
      return session
    }
  },
  pages: {
    signIn: '/cms/login',
    error: '/cms/login'
  },
  secret: process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }
