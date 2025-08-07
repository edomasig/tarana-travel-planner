import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, MapPin, Star } from 'lucide-react'

interface NativeAdProps {
  type: 'hotel' | 'tour' | 'restaurant' | 'transport'
  className?: string
}

export function NativeAd({ type, className = '' }: NativeAdProps) {
  const getAdContent = () => {
    switch (type) {
      case 'hotel':
        return {
          title: 'Book Hotels in Palawan',
          description: 'Find the best deals on beachfront resorts and budget accommodations',
          image: '/hotel-ad.png',
          price: 'From ₱2,500/night',
          rating: 4.8,
          sponsor: 'Booking.com',
          cta: 'View Deals'
        }
      case 'tour':
        return {
          title: 'El Nido Island Hopping Tours',
          description: 'Join our guided tours to hidden lagoons and pristine beaches',
          image: '/tour-ad.png',
          price: 'From ₱1,200/person',
          rating: 4.9,
          sponsor: 'GetYourGuide',
          cta: 'Book Now'
        }
      case 'restaurant':
        return {
          title: 'Best Filipino Restaurants',
          description: 'Discover authentic local cuisine and hidden food gems',
          image: '/food-ad.png',
          price: 'From ₱300/meal',
          rating: 4.7,
          sponsor: 'Zomato',
          cta: 'Order Now'
        }
      case 'transport':
        return {
          title: 'Airport Transfers & Car Rentals',
          description: 'Convenient and safe transportation for your Philippine adventure',
          image: '/transport-ad.png',
          price: 'From ₱500/trip',
          rating: 4.6,
          sponsor: 'Klook',
          cta: 'Book Transfer'
        }
      default:
        return {
          title: 'Travel Deals',
          description: 'Great offers for your Philippine adventure',
          image: '/default-ad.png',
          price: 'Special Offers',
          rating: 4.5,
          sponsor: 'Partner',
          cta: 'Learn More'
        }
    }
  }

  const ad = getAdContent()

  return (
    <Card className={`native-ad hover:shadow-md transition-shadow cursor-pointer ${className}`}>
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <img
            src={ad.image || "/placeholder.svg"}
            alt={ad.title}
            className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-1">
              <h4 className="font-semibold text-sm text-gray-900 truncate">{ad.title}</h4>
              <Badge variant="outline" className="text-xs ml-2">
                Sponsored
              </Badge>
            </div>
            <p className="text-xs text-gray-600 mb-2 line-clamp-2">{ad.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs text-gray-600">{ad.rating}</span>
                </div>
                <span className="text-xs font-semibold text-green-600">{ad.price}</span>
              </div>
              <div className="flex items-center gap-1 text-blue-600 text-xs">
                <span>{ad.cta}</span>
                <ExternalLink className="h-3 w-3" />
              </div>
            </div>
            <div className="text-xs text-gray-500 mt-1">by {ad.sponsor}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
