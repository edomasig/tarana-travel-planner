'use client'

import { useEffect, useRef, useState } from 'react'
import { ADSENSE_CONFIG } from '@/lib/adsense-config'

interface GoogleAdSenseProps {
  adSlot: string
  adFormat?: 'auto' | 'rectangle' | 'vertical' | 'horizontal'
  fullWidthResponsive?: boolean
  style?: React.CSSProperties
  className?: string
}

export function GoogleAdSense({ 
  adSlot, 
  adFormat = 'auto', 
  fullWidthResponsive = true,
  style = {},
  className = ''
}: GoogleAdSenseProps) {
  const adRef = useRef<HTMLModElement>(null)
  const [hasLoaded, setHasLoaded] = useState(false)
  const [adError, setAdError] = useState(false)

  useEffect(() => {
    if (hasLoaded || !adRef.current) return
    
    const loadAd = async () => {
      try {
        // Check if AdSense script is loaded
        if (typeof window === 'undefined' || !(window as any).adsbygoogle) {
          console.log('AdSense script not loaded yet')
          return
        }

        // Check if the ad element already has ads loaded
        const existingAds = adRef.current?.querySelector('.adsbygoogle')
        if (existingAds && existingAds.getAttribute('data-adsbygoogle-status')) {
          return // Ad already loaded
        }

        // Add a small delay to ensure DOM is ready
        await new Promise(resolve => setTimeout(resolve, 100))

        if (adRef.current) {
          // @ts-ignore
          (window.adsbygoogle = window.adsbygoogle || []).push({})
          setHasLoaded(true)
        }
      } catch (err) {
        console.error('AdSense error:', err)
        setAdError(true)
      }
    }

    loadAd()
  }, [hasLoaded])

  if (adError) {
    return (
      <div className={`ad-placeholder bg-gray-100 border border-gray-200 rounded p-4 text-center ${className}`} style={style}>
        <p className="text-xs text-gray-500">Advertisement</p>
      </div>
    )
  }

  return (
    <div className={`adsense-container ${className}`} style={style}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block', ...style }}
        data-ad-client={ADSENSE_CONFIG.publisherId}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive}
        key={`ad-${adSlot}-${Date.now()}`}
      />
    </div>
  )
}
