import { GoogleAdSense } from './google-adsense'
import { Card } from '@/components/ui/card'

interface AdBannerProps {
  position: 'top' | 'sidebar' | 'between-messages' | 'bottom'
  className?: string
}

export function AdBanner({ position, className = '' }: AdBannerProps) {
  const getAdConfig = () => {
    switch (position) {
      case 'top':
        return {
          adSlot: '1234567890', // Replace with actual ad slot
          adFormat: 'horizontal' as const,
          style: { width: '100%', height: '90px' }
        }
      case 'sidebar':
        return {
          adSlot: '1234567891', // Replace with actual ad slot
          adFormat: 'vertical' as const,
          style: { width: '300px', height: '600px' }
        }
      case 'between-messages':
        return {
          adSlot: '1234567892', // Replace with actual ad slot
          adFormat: 'rectangle' as const,
          style: { width: '100%', height: '250px' }
        }
      case 'bottom':
        return {
          adSlot: '1234567893', // Replace with actual ad slot
          adFormat: 'horizontal' as const,
          style: { width: '100%', height: '90px' }
        }
      default:
        return {
          adSlot: '1234567890',
          adFormat: 'auto' as const,
          style: {}
        }
    }
  }

  const config = getAdConfig()

  return (
    <Card className={`ad-banner bg-gray-50 border-dashed ${className}`}>
      <div className="p-2">
        <div className="text-xs text-gray-500 text-center mb-2">Advertisement</div>
        <GoogleAdSense {...config} />
      </div>
    </Card>
  )
}
