'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function GoogleAnalytics() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-MW68X98010', {
        page_path: pathname,
      })
    }
  }, [pathname])

  return null
}
