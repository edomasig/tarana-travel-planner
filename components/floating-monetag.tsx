'use client'

import { useState } from 'react'

export function FloatingMonetagButton() {
  const [isVisible, setIsVisible] = useState(true)

  const handleClick = () => {
    window.open('https://otieu.com/4/9874390', '_blank', 'noopener,noreferrer')
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <div className="relative">
        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full text-xs flex items-center justify-center z-10"
        >
          ×
        </button>
        
        {/* Main button */}
        <button
          onClick={handleClick}
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
        >
          <span className="text-lg">🎯</span>
          <span className="font-medium">Premium</span>
        </button>
      </div>
    </div>
  )
}