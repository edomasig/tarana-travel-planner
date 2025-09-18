'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Loader2 } from 'lucide-react'

interface CMSAuthWrapperProps {
  children: React.ReactNode
}

export default function CMSAuthWrapper({ children }: CMSAuthWrapperProps) {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [isChecking, setIsChecking] = useState(true)

  useEffect(() => {
    if (status === 'loading') {
      setIsChecking(true)
      return
    }

    if (status === 'unauthenticated') {
      console.log('No session found, redirecting to login...')
      router.push('/cms/login')
      return
    }

    if (status === 'authenticated' && session) {
      console.log('Session found:', session.user?.email)
      setIsChecking(false)
    }
  }, [status, session, router])

  // Show loading while checking authentication
  if (isChecking || status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-blue-600" />
          <p className="text-gray-600">Checking authentication...</p>
        </div>
      </div>
    )
  }

  // Show loading if not authenticated (will redirect)
  if (status === 'unauthenticated') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-blue-600" />
          <p className="text-gray-600">Redirecting to login...</p>
        </div>
      </div>
    )
  }

  // User is authenticated, show the content
  return <>{children}</>
}