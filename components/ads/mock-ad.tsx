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
        return { width: '100%', height: '90px', text: 'Top Banner Ad' }
      case 'sidebar':
        return { width: '300px', height: '600px', text: 'Sidebar Ad' }
      case 'between-messages':
        return { width: '100%', height: '250px', text: 'Content Ad' }
      case 'bottom':
        return { width: '100%', height: '90px', text: 'Bottom Banner Ad' }
      default:
        return { width: '100%', height: '90px', text: 'Advertisement' }
    }
  }

  const config = getAdConfig()

  return (
    <Card className={`ad-mock bg-gray-100 border-dashed border-gray-300 ${className}`}>
      <div 
        className="flex items-center justify-center text-gray-500 text-sm"
        style={{ width: config.width, height: config.height }}
      >
        {config.text} (Mock)
      </div>
    </Card>
  )
}
