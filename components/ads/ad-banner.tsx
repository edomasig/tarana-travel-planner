import { GoogleAdSense } from './google-adsense'
import { MockAd } from './mock-ad'
import { Card } from '@/components/ui/card'
import { ADSENSE_CONFIG, AD_SIZES } from '@/lib/adsense-config'

interface AdBannerProps {
  position: 'top' | 'sidebar' | 'between-messages' | 'bottom'
  className?: string
}

export function AdBanner({ position, className = '' }: AdBannerProps) {
  // Use mock ads in development to prevent console errors
  const isDevelopment = process.env.NODE_ENV === 'development'
  
  if (isDevelopment) {
    return <MockAd position={position} className={className} />
  }

  const getAdConfig = () => {
    switch (position) {
      case 'top':
        return {
          adSlot: ADSENSE_CONFIG.adSlots.topBanner,
          adFormat: 'horizontal' as const,
          style: AD_SIZES.leaderboard
        }
      case 'sidebar':
        return {
          adSlot: ADSENSE_CONFIG.adSlots.sidebarAd,
          adFormat: 'vertical' as const,
          style: AD_SIZES.skyscraper
        }
      case 'between-messages':
        return {
          adSlot: ADSENSE_CONFIG.adSlots.betweenMessages,
          adFormat: 'rectangle' as const,
          style: AD_SIZES.mediumRectangle
        }
      case 'bottom':
        return {
          adSlot: ADSENSE_CONFIG.adSlots.bottomBanner,
          adFormat: 'horizontal' as const,
          style: AD_SIZES.leaderboard
        }
      default:
        return {
          adSlot: ADSENSE_CONFIG.adSlots.topBanner,
          adFormat: 'auto' as const,
          style: AD_SIZES.responsive
        }
    }
  }

  const config = getAdConfig()

  return (
    <Card className={`ad-banner bg-gray-50 border-dashed ${className}`}>
      <div className="p-2">
        <div className="text-xs text-gray-500 text-center mb-2">Advertisement</div>
        <GoogleAdSense 
          {...config}
          className="w-full"
          key={`banner-${position}-${config.adSlot}`}
        />
      </div>
    </Card>
  )
}
