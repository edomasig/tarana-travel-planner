'use client'

import { useState } from 'react'

interface MonetagLinkProps {
  className?: string
  variant?: 'button' | 'banner' | 'text'
  children?: React.ReactNode
}

export function MonetagLink({ 
  className = '', 
  variant = 'button',
  children 
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
  
  const variantStyles = {
    button: "inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105",
    banner: "block w-full p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center rounded-lg shadow-md",
    text: "text-blue-600 hover:text-blue-800 underline"
  }

  return (
    <div 
      onClick={handleClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className} ${isClicked ? 'scale-95' : ''}`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
    >
      {children || (variant === 'button' ? '🎯 Discover Premium Content' : 'Click here for exclusive offers')}
    </div>
  )
}