'use client'

import { useState } from 'react'
import { X, Hotel } from 'lucide-react'
import { AgodaSearchBox } from './agoda-search-box'

interface FloatingAgodaSearchProps {
  /** Initial visibility state */
  defaultOpen?: boolean
  /** Position of the floating widget */
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'
  /** Custom city code */
  cityCode?: string
  /** Custom destination name */
  destinationName?: string
}

export function FloatingAgodaSearch({
  defaultOpen = false,
  position = 'bottom-right',
  cityCode = '18218',
  destinationName = 'Tagaytay, Philippines'
}: FloatingAgodaSearchProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  const positionClasses = {
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4'
  }

  const toggleOpen = () => setIsOpen(!isOpen)

  return (
    <>
      {/* Floating Toggle Button */}
      {!isOpen && (
        <div className={`fixed ${positionClasses[position]} z-50`}>
          <button
            onClick={toggleOpen}
            className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center gap-2"
            aria-label="Open hotel search"
          >
            <Hotel size={24} />
            <span className="hidden sm:inline font-medium">Find Hotels</span>
          </button>
        </div>
      )}

      {/* Floating Search Box */}
      {isOpen && (
        <div className={`fixed ${positionClasses[position]} z-50`}>
          <div className="bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden max-w-sm w-80">
            {/* Header */}
            <div className="bg-blue-600 text-white p-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Hotel size={20} />
                <span className="font-semibold text-sm">Find Hotels</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors"
                aria-label="Close hotel search"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Search Box Content */}
            <div className="p-0">
              <AgodaSearchBox
                cityCode={cityCode}
                destinationName={destinationName}
                width="100%"
                height="360px"
                containerId={`floating-agoda-${Date.now()}`}
              />
            </div>
            
            {/* Footer */}
            <div className="p-3 bg-gray-50 text-center">
              <p className="text-xs text-gray-600">
                Powered by Agoda • Best prices guaranteed
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

// Preset floating search boxes for different locations
export const FloatingManilaSearch = (props: Omit<FloatingAgodaSearchProps, 'cityCode' | 'destinationName'>) => (
  <FloatingAgodaSearch 
    {...props} 
    cityCode="17196" 
    destinationName="Manila, Philippines" 
  />
)

export const FloatingTagaytaySearch = (props: Omit<FloatingAgodaSearchProps, 'cityCode' | 'destinationName'>) => (
  <FloatingAgodaSearch 
    {...props} 
    cityCode="18218" 
    destinationName="Tagaytay, Philippines" 
  />
)

export const FloatingCebuSearch = (props: Omit<FloatingAgodaSearchProps, 'cityCode' | 'destinationName'>) => (
  <FloatingAgodaSearch 
    {...props} 
    cityCode="16185" 
    destinationName="Cebu, Philippines" 
  />
)
