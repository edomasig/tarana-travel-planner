'use client'

import { useEffect } from 'react'

interface AgodaSearchBoxProps {
  /** Custom width (default: 320px) */
  width?: string
  /** Custom height (default: 420px) */
  height?: string
  /** Custom city code for Agoda API */
  cityCode?: string
  /** Custom destination name */
  destinationName?: string
  /** Custom container ID */
  containerId?: string
  /** Layout style */
  layout?: 'SquareCalendar' | 'RectangleCalendar'
}

export function AgodaSearchBox({ 
  width = '320px',
  height = '420px',
  cityCode = '18218',
  destinationName = 'Tagaytay, Philippines',
  containerId,
  layout = 'SquareCalendar'
}: AgodaSearchBoxProps) {
  const finalContainerId = containerId || 'adgshp1710790364'

  useEffect(() => {
    // Load Agoda Sherpa script if not already loaded
    if (!document.querySelector('script[src*="sherpa_init1_08.min.js"]')) {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = '//cdn0.agoda.net/images/sherpa/js/sherpa_init1_08.min.js'
      script.async = true
      document.head.appendChild(script)
    }

    // Initialize Agoda search box when script is ready
    const initSearchBox = () => {
      if (typeof window !== 'undefined' && (window as any).AgdSherpa) {
        const stg = {
          crt: "10041263910060",
          version: "1.04",
          id: finalContainerId,
          name: finalContainerId,
          width: "100%",
          height: height,
          ReferenceKey: "Xg0+iUgRKN9NAexFRjF9ig==",
          Layout: layout,
          Language: "en-us",
          Cid: "1947165",
          City: cityCode,
          DestinationName: destinationName,
          OverideConf: false
        }

        try {
          new (window as any).AgdSherpa(stg).initialize()
        } catch (error) {
          console.error('Agoda search box initialization error:', error)
        }
      }
    }

    // Check if AgdSherpa is available, if not wait for script to load
    if ((window as any).AgdSherpa) {
      initSearchBox()
    } else {
      const checkAgoda = setInterval(() => {
        if ((window as any).AgdSherpa) {
          clearInterval(checkAgoda)
          initSearchBox()
        }
      }, 100)

      // Cleanup interval after 10 seconds
      setTimeout(() => clearInterval(checkAgoda), 10000)
    }
  }, [width, height, cityCode, destinationName, finalContainerId, layout])

  return (
    <div className="agoda-search-box-container w-full max-w-full">
      <div 
        id={finalContainerId}
        style={{ 
          width: '100%', 
          height,
          minHeight: height,
          maxWidth: '100%',
          background: '#f8f9fa',
          border: '1px solid #e9ecef',
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          boxSizing: 'border-box'
        }}
      >
        <div className="text-sm text-gray-500 text-center px-2">
          Loading Hotel Search...
        </div>
      </div>
    </div>
  )
}

// Predefined search boxes for popular destinations
export const AgodaTagaytaySearch = (props: Omit<AgodaSearchBoxProps, 'cityCode' | 'destinationName'>) => (
  <AgodaSearchBox 
    {...props} 
    cityCode="18218" 
    destinationName="Tagaytay, Philippines"
  />
)

export const AgodaManilaSearch = (props: Omit<AgodaSearchBoxProps, 'cityCode' | 'destinationName'>) => (
  <AgodaSearchBox 
    {...props} 
    cityCode="17196" 
    destinationName="Manila, Philippines"
  />
)

export const AgodaCebuSearch = (props: Omit<AgodaSearchBoxProps, 'cityCode' | 'destinationName'>) => (
  <AgodaSearchBox 
    {...props} 
    cityCode="16185" 
    destinationName="Cebu, Philippines"
  />
)

// Responsive search box component
export function AgodaResponsiveSearchBox({ 
  cityCode = '18218',
  destinationName = 'Tagaytay, Philippines',
  className = ''
}: { 
  cityCode?: string
  destinationName?: string
  className?: string 
}) {
  return (
    <div className={`w-full ${className}`}>
      <AgodaSearchBox 
        cityCode={cityCode}
        destinationName={destinationName}
        width="100%"
        height="400px"
      />
    </div>
  )
}
