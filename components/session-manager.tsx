'use client'

import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState, useCallback } from 'react'
import { toast } from '@/hooks/use-toast'

interface SessionManagerProps {
  children: React.ReactNode
  warningMinutes?: number // Show warning X minutes before expiration
  sessionDurationHours?: number // Expected session duration
}

export default function SessionManager({ 
  children, 
  warningMinutes = 5,
  sessionDurationHours = 24 
}: SessionManagerProps) {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [sessionWarningShown, setSessionWarningShown] = useState(false)
  const [isExpiring, setIsExpiring] = useState(false)

  // Calculate session expiration time
  const getSessionExpirationTime = useCallback(() => {
    if (!session) return null
    
    // For JWT tokens, we calculate based on session creation + duration
    // Since we can't access the exact JWT expiration, we estimate based on our config
    const sessionDurationMs = sessionDurationHours * 60 * 60 * 1000 // 24 hours in ms
    const estimatedExpiration = new Date().getTime() + sessionDurationMs
    
    return estimatedExpiration
  }, [session, sessionDurationHours])

  // Check if session is about to expire
  const checkSessionExpiration = useCallback(() => {
    if (status !== 'authenticated' || !session) return

    const expirationTime = getSessionExpirationTime()
    if (!expirationTime) return

    const now = Date.now()
    const timeUntilExpiration = expirationTime - now
    const warningTime = warningMinutes * 60 * 1000 // Convert to milliseconds

    // Show warning if within warning period
    if (timeUntilExpiration <= warningTime && timeUntilExpiration > 0 && !sessionWarningShown) {
      setSessionWarningShown(true)
      setIsExpiring(true)
      
      const minutesLeft = Math.ceil(timeUntilExpiration / (60 * 1000))
      
      toast({
        title: "Session Expiring Soon",
        description: `Your session will expire in ${minutesLeft} minute(s). Please save your work.`,
        variant: "destructive",
      })
    }

    // Auto-logout if session expired
    if (timeUntilExpiration <= 0) {
      handleSessionExpiration()
    }
  }, [session, status, warningMinutes, sessionWarningShown, getSessionExpirationTime])

  // Handle session expiration
  const handleSessionExpiration = useCallback(async () => {
    toast({
      title: "Session Expired",
      description: "You have been automatically logged out due to inactivity.",
      variant: "destructive",
    })

    // Wait a moment for toast to show
    setTimeout(async () => {
      await signOut({ 
        callbackUrl: '/cms/login?expired=true',
        redirect: true 
      })
    }, 2000)
  }, [])

  // Manual logout function
  const handleManualLogout = useCallback(async () => {
    await signOut({ 
      callbackUrl: '/cms/login',
      redirect: true 
    })
  }, [])

  // Session activity tracking
  const updateSessionActivity = useCallback(() => {
    if (status === 'authenticated') {
      // Reset warning state on activity
      setSessionWarningShown(false)
      setIsExpiring(false)
      
      // Store last activity time
      localStorage.setItem('lastActivity', Date.now().toString())
    }
  }, [status])

  // Check for inactivity
  const checkInactivity = useCallback(() => {
    const lastActivity = localStorage.getItem('lastActivity')
    if (!lastActivity) return

    const inactivityLimit = 2 * 60 * 60 * 1000 // 2 hours of inactivity
    const timeSinceActivity = Date.now() - parseInt(lastActivity)

    if (timeSinceActivity > inactivityLimit && status === 'authenticated') {
      toast({
        title: "Logged Out Due to Inactivity",
        description: "You have been logged out after 2 hours of inactivity.",
        variant: "destructive",
      })

      setTimeout(() => {
        signOut({ 
          callbackUrl: '/cms/login?reason=inactivity',
          redirect: true 
        })
      }, 2000)
    }
  }, [status])

  // Set up session monitoring
  useEffect(() => {
    if (status === 'authenticated') {
      // Update activity on mount
      updateSessionActivity()

      // Check session expiration every minute
      const sessionInterval = setInterval(checkSessionExpiration, 60 * 1000)

      // Check inactivity every 5 minutes
      const inactivityInterval = setInterval(checkInactivity, 5 * 60 * 1000)

      // Track user activity
      const activityEvents = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click']
      
      const handleActivity = () => updateSessionActivity()
      
      activityEvents.forEach(event => {
        document.addEventListener(event, handleActivity, true)
      })

      return () => {
        clearInterval(sessionInterval)
        clearInterval(inactivityInterval)
        activityEvents.forEach(event => {
          document.removeEventListener(event, handleActivity, true)
        })
      }
    }
  }, [status, checkSessionExpiration, checkInactivity, updateSessionActivity])

  // Handle authentication redirect
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/cms/login')
    }
  }, [status, router])

  // Show loading while checking authentication
  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  // Redirect to login if not authenticated
  if (status === 'unauthenticated') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Redirecting to login...</p>
        </div>
      </div>
    )
  }

  // Show session expiration warning overlay
  if (isExpiring) {
    return (
      <div className="relative">
        {children}
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-4">
            <h3 className="text-lg font-semibold text-red-600 mb-2">
              Session Expiring Soon
            </h3>
            <p className="text-gray-600 mb-4">
              Your session will expire in a few minutes. Please save your work and refresh the page to extend your session.
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => window.location.reload()}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Refresh Session
              </button>
              <button
                onClick={handleManualLogout}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
              >
                Logout Now
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // User is authenticated, show the content
  return <>{children}</>
}