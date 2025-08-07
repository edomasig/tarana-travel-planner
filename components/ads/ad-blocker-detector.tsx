'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Shield, AlertTriangle } from 'lucide-react'

export function AdBlockerDetector() {
  const [adBlockerDetected, setAdBlockerDetected] = useState(false)
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    // Simple ad blocker detection
    const detectAdBlocker = () => {
      const testAd = document.createElement('div')
      testAd.innerHTML = '&nbsp;'
      testAd.className = 'adsbox'
      testAd.style.position = 'absolute'
      testAd.style.left = '-10000px'
      document.body.appendChild(testAd)

      setTimeout(() => {
        if (testAd.offsetHeight === 0) {
          setAdBlockerDetected(true)
          setShowMessage(true)
        }
        document.body.removeChild(testAd)
      }, 100)
    }

    detectAdBlocker()
  }, [])

  if (!showMessage || !adBlockerDetected) return null

  return (
    <Card className="mx-4 mt-4 border-orange-200 bg-orange-50">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <h4 className="font-semibold text-orange-900 mb-1">
              Ad Blocker Detected
            </h4>
            <p className="text-sm text-orange-800 mb-3">
              We notice you're using an ad blocker. GalaGPT.ph is free because of ads. 
              Please consider disabling your ad blocker or upgrading to Premium for an ad-free experience.
            </p>
            <div className="flex gap-2">
              <Button 
                size="sm" 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => window.location.href = '/pricing'}
              >
                Upgrade to Premium
              </Button>
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => setShowMessage(false)}
              >
                I'll Disable Ad Blocker
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
