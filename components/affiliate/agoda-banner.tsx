'use client'

import { useEffect } from 'react'

interface AgodaBannerProps {
  /** Banner variant - manila or cebu */
  variant?: 'manila' | 'cebu'
  /** Custom width (default: 300px) */
  width?: string
  /** Custom height (default: 300px) */
  height?: string
  /** Custom city code for Agoda API */
  cityCode?: string
  /** Custom area code for Agoda API */
  areaCode?: string
  /** Custom container ID */
  containerId?: string
}

export function AgodaBanner({ 
  variant = 'manila',
  width = '300px',
  height = '300px',
  cityCode,
  areaCode,
  containerId
}: AgodaBannerProps) {
  // Banner configurations
  const bannerConfigs = {
    manila: {
      id: 'adgshp54910484',
      crt: '451816451424',
      refKey: 'CTsl4EWMcmgd3Gyvc5Nfhg==',
      city: '17196',
      area: undefined
    },
    cebu: {
      id: 'adgshp-92892569', 
      crt: '10038987338364',
      refKey: '2fGy2GOj/nbHk0anRZgfhw==',
      city: '16185',
      area: '539836'
    }
  }

  const config = bannerConfigs[variant]
  const finalContainerId = containerId || config.id

  useEffect(() => {
    // Load Agoda script if not already loaded
    if (!document.querySelector('script[src*="init-dynamic_v8.min.js"]')) {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = '//cdn0.agoda.net/images/sherpa/js/init-dynamic_v8.min.js'
      script.async = true
      document.head.appendChild(script)
    }

    // Initialize Agoda banner when script is ready
    const initBanner = () => {
      if (typeof window !== 'undefined' && (window as any).AgdDynamic) {
        const stg = {
          crt: config.crt,
          version: "1.05",
          id: finalContainerId,
          name: finalContainerId,
          Width: width,
          Height: height,
          RefKey: config.refKey,
          AutoScrollSpeed: 3000,
          AutoScrollToggle: true,
          SearchboxShow: true,
          DiscountedOnly: true,
          Layout: "squaredynamic",
          Language: "en-us",
          ApiKey: "ed9ce8b0-3f76-40b3-a3e5-8da361fb865b",
          Cid: "1947165",
          ...(cityCode ? { City: cityCode } : { City: config.city }),
          ...(areaCode ? { Area: areaCode } : (config.area && config.area !== undefined ? { Area: config.area } : {})),
          Currency: "PHP",
          OverideConf: false
        }

        try {
          new (window as any).AgdDynamic(finalContainerId).initialize(stg)
        } catch (error) {
          console.error('Agoda banner initialization error:', error)
        }
      }
    }

    // Check if AgdDynamic is available, if not wait for script to load
    if ((window as any).AgdDynamic) {
      initBanner()
    } else {
      const checkAgoda = setInterval(() => {
        if ((window as any).AgdDynamic) {
          clearInterval(checkAgoda)
          initBanner()
        }
      }, 100)

      // Cleanup interval after 10 seconds
      setTimeout(() => clearInterval(checkAgoda), 10000)
    }
  }, [variant, width, height, cityCode, areaCode, finalContainerId, config])

  return (
    <div className="agoda-banner-container">
      <div 
        id={finalContainerId}
        style={{ 
          width, 
          height,
          minHeight: height,
          background: '#f8f9fa',
          border: '1px solid #e9ecef',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="text-sm text-gray-500">
          Loading Agoda Hotels...
        </div>
      </div>
    </div>
  )
}

// Predefined banner variants for easy use
export const AgodaManilaBanner = (props: Omit<AgodaBannerProps, 'variant'>) => (
  <AgodaBanner {...props} variant="manila" />
)

export const AgodaCebuBanner = (props: Omit<AgodaBannerProps, 'variant'>) => (
  <AgodaBanner {...props} variant="cebu" />
)

// Responsive banner component
export function AgodaResponsiveBanner({ 
  variant = 'manila',
  className = ''
}: { 
  variant?: 'manila' | 'cebu'
  className?: string 
}) {
  return (
    <div className={`w-full max-w-sm mx-auto ${className}`}>
      <AgodaBanner 
        variant={variant}
        width="100%"
        height="300px"
      />
    </div>
  )
}
