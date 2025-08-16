'use client'

import { useState } from 'react'
import { ExternalLink, MapPin, Calendar, Users } from 'lucide-react'

interface FallbackAgodaBannerProps {
  variant?: 'manila' | 'cebu'
  className?: string
}

export function FallbackAgodaBanner({ 
  variant = 'manila',
  className = ''
}: FallbackAgodaBannerProps) {
  const [isHovered, setIsHovered] = useState(false)

  const destinations = {
    manila: {
      name: 'Manila',
      image: '/manila.jpg',
      description: 'Discover amazing hotels in the heart of the Philippines'
    },
    cebu: {
      name: 'Cebu',
      image: '/cebu.jpg', 
      description: 'Find your perfect stay in the Queen City of the South'
    }
  }

  const dest = destinations[variant]

  const handleClick = () => {
    // Use your Agoda affiliate link
    const agodaUrl = `https://www.agoda.com/search?cid=1947165&city=${variant === 'manila' ? '17196' : '16185'}&utm_source=galagpt&utm_medium=banner&utm_campaign=fallback`
    window.open(agodaUrl, '_blank')
  }

  return (
    <div className={`w-full max-w-md mx-auto ${className}`}>
      <div 
        className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl shadow-lg border border-blue-200 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        {/* Header */}
        <div className="bg-blue-600 text-white p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-blue-600 font-bold text-sm">A</span>
              </div>
              <span className="font-semibold">Agoda</span>
            </div>
            <ExternalLink size={16} className={`transition-transform ${isHovered ? 'scale-110' : ''}`} />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 text-center">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              🏨 Find Hotels in {dest.name}
            </h3>
            <p className="text-gray-600 text-sm">
              {dest.description}
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <MapPin className="w-6 h-6 text-blue-500 mx-auto mb-1" />
              <span className="text-xs text-gray-600">Best Locations</span>
            </div>
            <div className="text-center">
              <Calendar className="w-6 h-6 text-blue-500 mx-auto mb-1" />
              <span className="text-xs text-gray-600">Flexible Dates</span>
            </div>
            <div className="text-center">
              <Users className="w-6 h-6 text-blue-500 mx-auto mb-1" />
              <span className="text-xs text-gray-600">Any Group Size</span>
            </div>
          </div>

          {/* CTA Button */}
          <button 
            className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 ${isHovered ? 'transform scale-105' : ''}`}
            onClick={handleClick}
          >
            Search Hotels Now
          </button>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-3 text-center">
          <p className="text-xs text-gray-500">
            ✨ Best prices guaranteed • Free cancellation on most bookings
          </p>
        </div>
      </div>
    </div>
  )
}
