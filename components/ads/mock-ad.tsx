'use client'

import { Card } from '@/components/ui/card'

interface MockAdProps {
  position: 'top' | 'sidebar' | 'between-messages' | 'bottom'
  className?: string
}

export function MockAd({ position, className = '' }: MockAdProps) {
  const getAdConfig = () => {
    switch (position) {
      case 'top':
        return { 
          containerClass: 'h-[90px] md:h-[90px]',
          text: 'Top Banner Ad'
        }
      case 'sidebar':
        return { 
          containerClass: 'h-[200px] md:h-[400px] w-full md:w-[300px]',
          text: 'Sidebar Ad'
        }
      case 'between-messages':
        return { 
          containerClass: 'h-[150px] md:h-[200px]',
          text: 'Content Ad'
        }
      case 'bottom':
        return { 
          containerClass: 'h-[60px] md:h-[90px]',
          text: 'Bottom Banner Ad'
        }
      default:
        return { 
          containerClass: 'h-[60px] md:h-[90px]', 
          text: 'Advertisement'
        }
    }
  }

  const config = getAdConfig()

  return (
    <Card className={`ad-mock bg-transparent border-0 shadow-none ${className}`}>
      <div 
        className={`flex items-center justify-center text-gray-500 text-xs md:text-sm w-full ${config.containerClass}`}
      >
        <span className="text-center">{config.text} (Mock)</span>
      </div>
    </Card>
  )
}
