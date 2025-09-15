'use client'

import { useState, useEffect } from 'react'

interface FloatingMonetagButtonProps {
  position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right'
  showDelay?: number
}

export function FloatingMonetagButton({ 
  position = 'bottom-left',
  showDelay = 3000 
}: FloatingMonetagButtonProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, showDelay)

    return () => clearTimeout(timer)
  }, [showDelay])

  const handleClick = () => {
    setIsClicked(true)
    window.open('https://otieu.com/4/9874390', '_blank', 'noopener,noreferrer')
    
    // Reset after a short delay
    setTimeout(() => setIsClicked(false), 1000)
  }

  const positionStyles = {
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4'
  }

  if (!isVisible) return null

  return (
    <div className={`fixed ${positionStyles[position]} z-[101] animate-fade-in`}>
      <div className="relative">
        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 hover:bg-red-600 text-white rounded-full text-xs flex items-center justify-center z-10 transition-colors"
          aria-label="Close"
        >
          ×
        </button>
        
        {/* Main button */}
        <button
          onClick={handleClick}
          className={`bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-200 flex items-center space-x-2 ${
            isClicked ? 'scale-95' : 'hover:scale-105'
          }`}
          aria-label="Access Premium Content"
        >
          <span className="text-lg">🎯</span>
          <span className="font-medium hidden sm:inline">Premium</span>
        </button>
        
        {/* Pulse animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-ping opacity-20"></div>
      </div>
    </div>
  )
}