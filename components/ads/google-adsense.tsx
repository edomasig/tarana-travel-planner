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
  const [isVisibleWidth, setIsVisibleWidth] = useState(false)

  // Observe element width and only initialize when width > 0
  useEffect(() => {
    const el = adRef.current as unknown as HTMLElement | null
    if (!el) return

    const checkWidth = () => {
      const w = el.offsetWidth || el.parentElement?.offsetWidth || 0
      if (w > 0) {
        setIsVisibleWidth(true)
        return true
      }
      return false
    }

    if (checkWidth()) return

    const ro = new ResizeObserver(() => {
      checkWidth()
    })
    ro.observe(el)
    if (el.parentElement) ro.observe(el.parentElement)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    if (hasLoaded || adError || !isVisibleWidth || !adRef.current) return

    let cancelled = false
    let retries = 0

    const tryInit = async () => {
      try {
        if (cancelled) return

        // Ensure AdSense script is loaded
        if (typeof window === 'undefined' || !(window as any).adsbygoogle) {
          if (retries < 10) {
            retries += 1
            setTimeout(tryInit, 300)
            return
          }
          return
        }

        const ins = adRef.current as unknown as HTMLElement
        // If already initialized, skip
        const already = ins.getAttribute('data-adsbygoogle-status')
        if (already === 'done') {
          setHasLoaded(true)
          return
        }

        // Small delay to allow layout settle
        await new Promise<void>((resolve) => setTimeout(resolve, 50))

        // @ts-ignore
        ;(window.adsbygoogle = (window.adsbygoogle || [])).push({})
        setHasLoaded(true)
      } catch (err) {
        console.error('AdSense error:', err)
        setAdError(true)
      }
    }

    tryInit()

    return () => {
      cancelled = true
    }
  }, [hasLoaded, adError, isVisibleWidth])

  if (adError) {
    return (
      <div className={`ad-placeholder bg-gray-100 border border-gray-200 rounded p-4 text-center ${className}`} style={style}>
        <p className="text-xs text-gray-500">Advertisement</p>
      </div>
    )
  }

  return (
    <div className={`adsense-container ${className}`} style={{ width: '100%', ...style }}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block', width: '100%' }}
        data-ad-client={ADSENSE_CONFIG.publisherId}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive}
        // Stable key to avoid remount loops
        key={`ad-${adSlot}`}
      />
    </div>
  )
}
