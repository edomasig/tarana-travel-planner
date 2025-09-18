'use client'

import { useSession, signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { User, Clock, Shield, LogOut } from 'lucide-react'

export default function SessionDebugger() {
  const { data: session, status } = useSession()

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/cms/login' })
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5" />
          Session Status
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Status:</span>
          <Badge 
            variant={
              status === 'authenticated' ? 'default' : 
              status === 'loading' ? 'secondary' : 
              'destructive'
            }
          >
            {status}
          </Badge>
        </div>

        {session && (
          <>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <div>
                <p className="text-sm font-medium">{session.user?.name}</p>
                <p className="text-xs text-gray-500">{session.user?.email}</p>
              </div>
            </div>

            <div className="text-xs text-gray-500 space-y-1">
              <div className="flex items-center gap-2">
                <Clock className="h-3 w-3" />
                <span>Session active</span>
              </div>
              <div className="bg-gray-50 p-2 rounded text-xs font-mono">
                User ID: {session.user?.id}
              </div>
            </div>

            <Button 
              onClick={handleSignOut} 
              variant="outline" 
              size="sm" 
              className="w-full"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </>
        )}

        {status === 'unauthenticated' && (
          <div className="text-center text-sm text-gray-500">
            Not authenticated. You should be redirected to login.
          </div>
        )}

        {status === 'loading' && (
          <div className="text-center text-sm text-gray-500">
            Loading session...
          </div>
        )}

        <div className="text-xs text-gray-400 border-t pt-2">
          Debug info: Session check at {new Date().toLocaleTimeString()}
        </div>
      </CardContent>
    </Card>
  )
}