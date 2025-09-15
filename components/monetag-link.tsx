'use client'

import { useState } from 'react'

interface MonetagLinkProps {
  className?: string
  variant?: 'button' | 'banner' | 'text' | 'card'
  children?: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
}

export function MonetagLink({ 
  className = '', 
  variant = 'button',
  children,
  size = 'md'
}: MonetagLinkProps) {
  const [isClicked, setIsClicked] = useState(false)
  
  const handleClick = () => {
    setIsClicked(true)
    // Open in new tab
    window.open('https://otieu.com/4/9874390', '_blank', 'noopener,noreferrer')
    
    // Reset after a short delay
    setTimeout(() => setIsClicked(false), 1000)
  }

  const baseStyles = "transition-all duration-200 cursor-pointer hover:opacity-80"
  
  const sizeStyles = {
    sm: "px-3 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  }
  
  const variantStyles = {
    button: `inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 ${sizeStyles[size]}`,
    banner: "block w-full p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center rounded-lg shadow-md",
    text: "text-blue-600 hover:text-blue-800 underline font-medium",
    card: "block w-full p-6 bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl shadow-sm hover:shadow-md transform hover:scale-[1.02]"
  }

  return (
    <div 
      onClick={handleClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className} ${isClicked ? 'scale-95' : ''}`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
    >
      {children || getDefaultContent(variant)}
    </div>
  )
}

function getDefaultContent(variant: string) {
  switch (variant) {
    case 'button':
      return '🎯 Discover Premium Content'
    case 'banner':
      return '💎 Unlock Exclusive Travel Offers'
    case 'text':
      return 'Premium Travel Resources'
    case 'card':
      return (
        <div className="text-center">
          <div className="text-2xl mb-2">🌟</div>
          <h3 className="font-bold text-purple-800 mb-2">Premium Travel Content</h3>
          <p className="text-purple-600 text-sm">Get exclusive access to premium travel guides and deals</p>
        </div>
      )
    default:
      return 'Click here for exclusive offers'
  }
}