// 'use client'

import { getCurrentSeason } from '@/lib/seasonal-service'
import { loadSeason } from '@/lib/seasonal-loader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin, Thermometer, Umbrella, Sun, Snowflake, Heart, Star, Clock, DollarSign, Camera, Utensils, Bed } from 'lucide-react'
import { SeasonSwitcher } from './SeasonSwitcher'
import Link from 'next/link'

export default async function SeasonalPage({ searchParams }: { searchParams?: { season?: string } }) {
  const target = searchParams?.season || getCurrentSeason()
  const seasonalData = await loadSeason(target)
  const currentSeason = target
  const isLoading = false

  const getSeasonIcon = (season: string) => {
    switch (season) {
      case 'holiday': return Snowflake
      case 'summer': return Sun
      case 'rainy': return Umbrella
      case 'dry': return Sun
      default: return Calendar
    }
  }

  const getSeasonColor = (season: string) => {
    switch (season) {
      case 'holiday': return 'text-red-600 bg-red-100'
      case 'summer': return 'text-orange-600 bg-orange-100'
      case 'rainy': return 'text-blue-600 bg-blue-100'
      case 'dry': return 'text-green-600 bg-green-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'food': return Utensils
      case 'accommodation': return Bed
      case 'transport': return MapPin
      default: return Camera
    }
  }

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'food': return 'text-orange-600 bg-orange-100'
      case 'accommodation': return 'text-purple-600 bg-purple-100'
      case 'transport': return 'text-blue-600 bg-blue-100'
      default: return 'text-green-600 bg-green-100'
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading seasonal recommendations...</p>
        </div>
      </div>
    )
  }

  if (!seasonalData) {
    return <div className="min-h-screen flex items-center justify-center">No seasonal data found.</div>
  }

  const SeasonIcon = getSeasonIcon(currentSeason)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 mb-4`}>
              <SeasonIcon className="h-5 w-5" />
              <span className="font-medium">{seasonalData.season.name}</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              {seasonalData.season.title}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              {seasonalData.season.description}
            </p>
            <SeasonSwitcher active={currentSeason} />
            <div className="flex items-center justify-center gap-6 mt-6 text-blue-100">
              <div className="flex items-center gap-2">
                <Thermometer className="h-5 w-5" />
                <span>{seasonalData.season.temperature}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{seasonalData.season.months}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 space-y-12">
        {/* Weather & Travel Tips */}
        <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
          <CardContent className="p-6">
            {/* Added illustrative seasonal image */}
            <div className="mb-6">
              <img
                src={'/philippine-landscape.png'}
                alt={`${seasonalData.season.name} season in the Philippines`}
                className="w-full h-40 md:h-56 object-cover rounded-xl shadow-sm"
                loading="lazy"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Thermometer className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Weather</h3>
                <p className="text-sm text-gray-600">{seasonalData.season.weather}</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Best For</h3>
                <p className="text-sm text-gray-600">{seasonalData.season.bestFor}</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Special Events</h3>
                <p className="text-sm text-gray-600">{seasonalData.season.events}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Featured Destinations */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Perfect Destinations for {seasonalData.season.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seasonalData.destinations.map((destination, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{destination.name}</h3>
                    <p className="text-sm text-gray-200">{destination.location}</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-gray-900">
                      {destination.rating} ⭐
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {destination.description}
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Best time to visit:</span>
                      <span className="font-medium">{destination.bestTime}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Budget range:</span>
                      <span className="font-medium text-green-600">{destination.budget}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {destination.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button asChild className="w-full mt-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    {(() => {
                      const destPrompt = destination.prompt
                      const itineraryPrompt = seasonalData.featuredItinerary.prompt
                      const fallback = `Generate a detailed ${seasonalData.season.name} itinerary for ${destination.name} including highlights: ${destination.highlights.join(', ')}. Provide budget guidance, local food suggestions, and practical travel tips.`
                      const effective = destPrompt || itineraryPrompt || fallback
                      const href = `/chat?prompt=${encodeURIComponent(effective)}`
                      return <Link href={href} aria-label={`Open AI itinerary for ${destination.name}`}>View Itinerary</Link>
                    })()}
                  </Button>
                </CardContent>
              </Card>
            ))}

          </div>
        </section>

        {/* Featured Itinerary */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {seasonalData.featuredItinerary.title}
          </h2>
          
          {/* Itinerary Header */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{seasonalData.featuredItinerary.duration}</div>
                  <div className="text-sm text-gray-600">Duration</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{seasonalData.featuredItinerary.budget}</div>
                  <div className="text-sm text-gray-600">Budget Range</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{seasonalData.featuredItinerary.difficulty}</div>
                  <div className="text-sm text-gray-600">Difficulty</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">{seasonalData.featuredItinerary.season}</div>
                  <div className="text-sm text-gray-600">Best Season</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Daily Itinerary */}
          <div className="space-y-6">
            {seasonalData.featuredItinerary.days.map((day, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50">
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {day.day}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Day {day.day}</h3>
                      <p className="text-gray-600 font-normal">{day.location}</p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Day Image */}
                    <div className="lg:col-span-1">
                      <img
                        src={day.image || "/placeholder.svg"}
                        alt={`Day ${day.day} - ${day.location}`}
                        className="w-full h-48 lg:h-full object-cover rounded-lg"
                      />
                    </div>
                    
                    {/* Activities */}
                    <div className="lg:col-span-2 space-y-4">
                      {day.activities.map((activity, actIndex) => {
                        const ActivityIcon = getActivityIcon(activity.type)
                        const colorClass = getActivityColor(activity.type)
                        
                        return (
                          <div key={actIndex} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                            <div className="flex-shrink-0">
                              <div className={`w-10 h-10 rounded-lg ${colorClass} flex items-center justify-center`}>
                                <ActivityIcon className="h-5 w-5" />
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-2">
                                <h4 className="font-semibold text-gray-900">{activity.activity}</h4>
                                <div className="flex items-center gap-2">
                                  <Badge variant="outline" className="text-xs">
                                    <Clock className="h-3 w-3 mr-1" />
                                    {activity.time}
                                  </Badge>
                                  <Badge variant="outline" className="text-xs">
                                    <DollarSign className="h-3 w-3 mr-1" />
                                    {activity.cost}
                                  </Badge>
                                </div>
                              </div>
                              <p className="text-gray-600 text-sm leading-relaxed">{activity.description}</p>
                              {activity.tips && (
                                <div className="mt-2 p-2 bg-blue-50 rounded text-xs text-blue-700">
                                  💡 <strong>Tip:</strong> {activity.tips}
                                </div>
                              )}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

          </div>
        </section>

        {/* Seasonal Tips */}
        <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-green-600" />
              {seasonalData.season.name} Travel Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              {/* Added contextual image for tips */}
              <div className="md:col-span-1 order-last md:order-first">
                <img
                  src={'/tour-ad.png'}
                  alt={`Travel tips for ${seasonalData.season.name} season`}
                  className="w-full h-40 md:h-full object-cover rounded-lg shadow-sm"
                  loading="lazy"
                />
              </div>
              <div className="space-y-6 md:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">What to Pack</h4>
                    <ul className="space-y-2">
                      {seasonalData.tips.packing.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Travel Advice</h4>
                    <ul className="space-y-2">
                      {seasonalData.tips.advice.map((tip, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Plan Your {seasonalData.season.name} Adventure?</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Chat with our AI travel assistant to create a personalized itinerary based on current seasonal conditions and your preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Start Planning Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View More Destinations
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
