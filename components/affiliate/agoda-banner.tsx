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
      script.onload = () => {
        console.log('Agoda script loaded successfully')
        initBanner()
      }
      script.onerror = () => {
        console.error('Failed to load Agoda script')
      }
      document.head.appendChild(script)
    } else {
      initBanner()
    }

    // Initialize Agoda banner when script is ready
    function initBanner() {
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
          console.log('Initializing Agoda banner with config:', stg)
          new (window as any).AgdDynamic(finalContainerId).initialize(stg)
        } catch (error) {
          console.error('Agoda banner initialization error:', error)
        }
      } else {
        // Retry initialization
        setTimeout(() => {
          if ((window as any).AgdDynamic) {
            initBanner()
          }
        }, 500)
      }
    }
  }, [variant, width, height, cityCode, areaCode, finalContainerId, config])

  return (
    <div className="agoda-banner-container w-full">
      <div 
        id={finalContainerId}
        style={{ 
          width, 
          height,
          minHeight: height,
          maxWidth: '100%',
          background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
          border: '1px solid #0ea5e9',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          position: 'relative'
        }}
      >
        {/* Loading State with Hotel Theme */}
        <div className="text-center p-4">
          <div className="animate-pulse">
            <div className="w-16 h-16 bg-blue-200 rounded-lg mx-auto mb-3 flex items-center justify-center">
              🏨
            </div>
            <div className="text-sm font-medium text-blue-700 mb-1">
              Loading Agoda Hotels...
            </div>
            <div className="text-xs text-blue-500">
              Best prices guaranteed
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div 
          style={{
            position: 'absolute',
            top: '-2px',
            right: '-2px',
            width: '20px',
            height: '20px',
            background: '#0ea5e9',
            borderRadius: '0 12px 0 12px',
            opacity: 0.1
          }}
        />
        <div 
          style={{
            position: 'absolute',
            bottom: '-2px',
            left: '-2px',
            width: '16px',
            height: '16px',
            background: '#0ea5e9',
            borderRadius: '12px 0 12px 0',
            opacity: 0.1
          }}
        />
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
    <div className={`w-full max-w-md mx-auto ${className}`}>
      <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
        <div className="text-center mb-3">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center justify-center gap-2">
            🏨 Find Hotels with Agoda
          </h3>
          <p className="text-sm text-gray-600">Best prices guaranteed</p>
        </div>
        <AgodaBanner 
          variant={variant}
          width="100%"
          height="280px"
        />
        <div className="mt-3 text-center">
          <p className="text-xs text-gray-500">
            Powered by Agoda • Trusted by millions
          </p>
        </div>
      </div>
    </div>
  )
}
