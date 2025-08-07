import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ExternalLink, MapPin, Calendar, Users } from 'lucide-react'
import { generateAffiliateLink, trackAffiliateClick } from '@/lib/affiliate-config'

interface AffiliateCardProps {
  type: 'hotel' | 'activity' | 'transport'
  title: string
  description: string
  price?: string
  destination: string
  imageUrl?: string
  rating?: number
  provider: string
}

export function AffiliateCard({ 
  type, 
  title, 
  description, 
  price, 
  destination, 
  imageUrl, 
  rating,
  provider 
}: AffiliateCardProps) {
  const handleClick = () => {
    trackAffiliateClick(type, destination)
    const affiliateLink = generateAffiliateLink(type, destination, {})
    if (affiliateLink) {
      window.open(affiliateLink, '_blank', 'noopener,noreferrer')
    }
  }

  const getIcon = () => {
    switch (type) {
      case 'hotel': return <MapPin className="h-4 w-4" />
      case 'activity': return <Calendar className="h-4 w-4" />
      case 'transport': return <Users className="h-4 w-4" />
    }
  }

  return (
    <Card className="w-full max-w-sm mx-auto hover:shadow-lg transition-shadow">
      {imageUrl && (
        <div className="aspect-video relative overflow-hidden rounded-t-lg">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover"
          />
          {rating && (
            <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
              ⭐ {rating}
            </div>
          )}
        </div>
      )}
      
      <CardContent className="p-4">
        <div className="flex items-start gap-2 mb-2">
          {getIcon()}
          <div className="flex-1">
            <h3 className="font-semibold text-lg line-clamp-2">{title}</h3>
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
              {description}
            </p>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            {price && (
              <div className="text-lg font-bold text-green-600">{price}</div>
            )}
            <div className="text-xs text-muted-foreground">via {provider}</div>
          </div>
          
          <Button 
            size="sm" 
            onClick={handleClick}
            className="flex items-center gap-1"
          >
            Book Now
            <ExternalLink className="h-3 w-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

// Component for embedding affiliate recommendations in AI responses
export function AffiliateRecommendations({ destination }: { destination: string }) {
  const recommendations = [
    {
      type: 'hotel' as const,
      title: 'Best Hotels in ' + destination,
      description: 'Find the perfect accommodation for your stay',
      provider: 'Booking.com',
      price: 'From ₱2,500/night'
    },
    {
      type: 'activity' as const,
      title: 'Top Activities in ' + destination,
      description: 'Discover amazing tours and experiences',
      provider: 'Klook',
      price: 'From ₱850'
    },
    {
      type: 'transport' as const,
      title: 'Transportation Options',
      description: 'Easy rides and transfers around the city',
      provider: 'Grab',
      price: 'From ₱120'
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
      {recommendations.map((rec, index) => (
        <AffiliateCard
          key={index}
          type={rec.type}
          title={rec.title}
          description={rec.description}
          price={rec.price}
          destination={destination}
          provider={rec.provider}
        />
      ))}
    </div>
  )
}
