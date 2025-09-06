import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Calendar, Thermometer, Umbrella, Sun, Cloud, MapPin } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Footer } from '@/components/footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Time to Visit the Philippines 2025 - Complete Seasonal Guide | GalaGPT',
  description: 'Discover the perfect time to visit the Philippines with our comprehensive seasonal guide. Weather patterns, peak seasons, and best times for each destination including Palawan, Boracay, and more.',
  keywords: 'best time visit Philippines, Philippines weather, when to go Philippines, Philippines seasons, travel weather Philippines, Philippines climate guide',
}

export default function BestTimeVisitPhilippinesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto max-w-5xl px-4 py-8">
        <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>
        
        <article className="space-y-8">
          {/* Header */}
          <Card className="overflow-hidden shadow-2xl">
            <div className="relative h-80 md:h-96">
              <Image
                src="/philippine-landscape.png"
                alt="Beautiful Philippines landscape showing tropical weather and scenery"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center gap-2 mb-2 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>September 5, 2025 • 12 min read</span>
                </div>
                <h1 className="text-5xl font-bold mb-2">Best Time to Visit the Philippines</h1>
                <p className="text-xl text-gray-200">Complete Seasonal Guide for Perfect Travel Timing</p>
              </div>
            </div>
          </Card>

          {/* Introduction */}
          <Card>
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Planning your Philippines adventure but confused about when to visit? You're not alone. With over 7,000 islands 
                spanning different climate zones, timing your visit can make or break your tropical getaway. This comprehensive 
                guide breaks down everything you need to know about Philippines weather patterns, peak seasons, and the optimal 
                times to visit each major destination.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3">🌴 Quick Answer</h3>
                <p className="text-blue-800">
                  The best time to visit the Philippines is during the <strong>dry season from November to April</strong>, 
                  with December to February offering the most comfortable temperatures. However, the "best" time varies 
                  by destination and your travel priorities.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Philippines Climate Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Understanding Philippines Climate</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">
                The Philippines has a tropical maritime climate characterized by high temperatures, high humidity, and 
                abundant rainfall. The country experiences two main seasons with transitional periods, but regional 
                variations are significant.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Sun className="h-6 w-6 text-yellow-600" />
                    <h3 className="text-xl font-bold text-yellow-800">Dry Season</h3>
                  </div>
                  <p className="text-yellow-700 mb-3"><strong>November to April</strong></p>
                  <ul className="text-yellow-700 space-y-1 text-sm">
                    <li>• Minimal rainfall (less than 60mm per month)</li>
                    <li>• Lower humidity levels</li>
                    <li>• Calm seas ideal for island hopping</li>
                    <li>• Cool northeast monsoon (Amihan)</li>
                    <li>• Peak tourist season</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Umbrella className="h-6 w-6 text-blue-600" />
                    <h3 className="text-xl font-bold text-blue-800">Wet Season</h3>
                  </div>
                  <p className="text-blue-700 mb-3"><strong>May to October</strong></p>
                  <ul className="text-blue-700 space-y-1 text-sm">
                    <li>• Heavy rainfall (200mm+ per month)</li>
                    <li>• High humidity and temperatures</li>
                    <li>• Southwest monsoon (Habagat)</li>
                    <li>• Typhoon season (June-November)</li>
                    <li>• Lower tourist numbers, better prices</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Climate Zones Across the Philippines</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-800 mb-2">Type I (Western Philippines)</h4>
                    <p className="text-gray-600 text-sm">
                      Distinct dry (Nov-Apr) and wet (May-Oct) seasons<br/>
                      <em>Examples: Manila, Palawan west coast</em>
                    </p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-800 mb-2">Type II (Eastern Philippines)</h4>
                    <p className="text-gray-600 text-sm">
                      No distinct dry season, max rainfall Dec-Jan<br/>
                      <em>Examples: Eastern Visayas, Eastern Mindanao</em>
                    </p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-800 mb-2">Type III (Central Philippines)</h4>
                    <p className="text-gray-600 text-sm">
                      Short dry season, max rainfall May-Oct<br/>
                      <em>Examples: Cebu, Bohol, Northern Mindanao</em>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Monthly Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Month-by-Month Weather Guide</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* December - February */}
                <div className="border border-green-200 rounded-lg p-6 bg-green-50">
                  <h3 className="text-2xl font-bold text-green-800 mb-4">Peak Season: December - February</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Thermometer className="h-5 w-5 text-green-600" />
                      <span className="text-green-700"><strong>Temperature:</strong> 24-30°C</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Umbrella className="h-5 w-5 text-green-600" />
                      <span className="text-green-700"><strong>Rainfall:</strong> Minimal</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sun className="h-5 w-5 text-green-600" />
                      <span className="text-green-700"><strong>Humidity:</strong> 65-75%</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-green-800 mb-2">Perfect For:</h4>
                      <ul className="text-green-700 space-y-1 text-sm">
                        <li>• Island hopping in Palawan, Boracay</li>
                        <li>• Beach activities and water sports</li>
                        <li>• Diving and snorkeling</li>
                        <li>• Outdoor adventures and hiking</li>
                        <li>• City exploration without rain</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-green-800 mb-2">Considerations:</h4>
                      <ul className="text-green-700 space-y-1 text-sm">
                        <li>• Highest accommodation prices</li>
                        <li>• Crowded popular destinations</li>
                        <li>• Need advance bookings</li>
                        <li>• Christmas/New Year premium rates</li>
                        <li>• Cool evenings in mountain areas</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* March - May */}
                <div className="border border-orange-200 rounded-lg p-6 bg-orange-50">
                  <h3 className="text-2xl font-bold text-orange-800 mb-4">Hot Dry Season: March - May</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Thermometer className="h-5 w-5 text-orange-600" />
                      <span className="text-orange-700"><strong>Temperature:</strong> 27-35°C</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Umbrella className="h-5 w-5 text-orange-600" />
                      <span className="text-orange-700"><strong>Rainfall:</strong> Low</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sun className="h-5 w-5 text-orange-600" />
                      <span className="text-orange-700"><strong>Humidity:</strong> 70-80%</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-orange-800 mb-2">Perfect For:</h4>
                      <ul className="text-orange-700 space-y-1 text-sm">
                        <li>• Beach destinations and swimming</li>
                        <li>• Festivals (Sinulog, Ati-Atihan)</li>
                        <li>• Mountain destinations (cooler temps)</li>
                        <li>• Diving in clear waters</li>
                        <li>• Graduation/summer travel</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-orange-800 mb-2">Considerations:</h4>
                      <ul className="text-orange-700 space-y-1 text-sm">
                        <li>• Very hot and humid conditions</li>
                        <li>• Early morning activities recommended</li>
                        <li>• Higher UV levels, need sun protection</li>
                        <li>• Increased fire danger</li>
                        <li>• Some brown landscapes</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* June - August */}
                <div className="border border-blue-200 rounded-lg p-6 bg-blue-50">
                  <h3 className="text-2xl font-bold text-blue-800 mb-4">Early Wet Season: June - August</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Thermometer className="h-5 w-5 text-blue-600" />
                      <span className="text-blue-700"><strong>Temperature:</strong> 25-32°C</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Umbrella className="h-5 w-5 text-blue-600" />
                      <span className="text-blue-700"><strong>Rainfall:</strong> Heavy</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Cloud className="h-5 w-5 text-blue-600" />
                      <span className="text-blue-700"><strong>Humidity:</strong> 80-90%</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-blue-800 mb-2">Perfect For:</h4>
                      <ul className="text-blue-700 space-y-1 text-sm">
                        <li>• Budget travelers (lower prices)</li>
                        <li>• Experiencing local life</li>
                        <li>• Lush green landscapes</li>
                        <li>• Fewer crowds at attractions</li>
                        <li>• Surfing (good swells)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-800 mb-2">Considerations:</h4>
                      <ul className="text-blue-700 space-y-1 text-sm">
                        <li>• Daily afternoon thunderstorms</li>
                        <li>• Possible flight delays/cancellations</li>
                        <li>• Limited island hopping</li>
                        <li>• Muddy hiking trails</li>
                        <li>• Potential typhoons</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* September - November */}
                <div className="border border-purple-200 rounded-lg p-6 bg-purple-50">
                  <h3 className="text-2xl font-bold text-purple-800 mb-4">Peak Wet Season: September - November</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Thermometer className="h-5 w-5 text-purple-600" />
                      <span className="text-purple-700"><strong>Temperature:</strong> 24-30°C</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Umbrella className="h-5 w-5 text-purple-600" />
                      <span className="text-purple-700"><strong>Rainfall:</strong> Heaviest</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Cloud className="h-5 w-5 text-purple-600" />
                      <span className="text-purple-700"><strong>Humidity:</strong> 85-95%</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-purple-800 mb-2">Perfect For:</h4>
                      <ul className="text-purple-700 space-y-1 text-sm">
                        <li>• Lowest travel costs</li>
                        <li>• Cultural experiences</li>
                        <li>• Indoor attractions and museums</li>
                        <li>• Spa and wellness retreats</li>
                        <li>• Waterfalls at full flow</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-purple-800 mb-2">Considerations:</h4>
                      <ul className="text-purple-700 space-y-1 text-sm">
                        <li>• Peak typhoon season</li>
                        <li>• Flooding in low-lying areas</li>
                        <li>• Ferry services may be suspended</li>
                        <li>• High humidity and rain</li>
                        <li>• Some attractions may close</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Destination-Specific Timing */}
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Best Times by Destination</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Popular Destinations */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Popular Beach Destinations</h3>
                  
                  <div className="border-l-4 border-blue-400 pl-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Palawan</h4>
                    <div className="text-sm text-gray-600 mb-2">
                      <strong>Best:</strong> November - April<br/>
                      <strong>Peak:</strong> December - February<br/>
                      <strong>Avoid:</strong> July - September (heavy rains)
                    </div>
                    <p className="text-gray-700 text-sm">
                      El Nido and Coron are best during dry season for island hopping. 
                      Underground River tours available year-round.
                    </p>
                  </div>

                  <div className="border-l-4 border-green-400 pl-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Boracay</h4>
                    <div className="text-sm text-gray-600 mb-2">
                      <strong>Best:</strong> November - April<br/>
                      <strong>Peak:</strong> December - February<br/>
                      <strong>Avoid:</strong> June - October (habagat winds)
                    </div>
                    <p className="text-gray-700 text-sm">
                      Amihan season brings calm waters to White Beach. 
                      Habagat season can bring strong winds and seaweed.
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-400 pl-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Siargao</h4>
                    <div className="text-sm text-gray-600 mb-2">
                      <strong>Best for surfing:</strong> September - November<br/>
                      <strong>Best weather:</strong> February - April<br/>
                      <strong>Typhoon season:</strong> December - January
                    </div>
                    <p className="text-gray-700 text-sm">
                      Unique weather pattern with best surf during wet season. 
                      Island hopping better during dry months.
                    </p>
                  </div>
                </div>

                {/* Cultural and City Destinations */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Cultural & City Destinations</h3>
                  
                  <div className="border-l-4 border-orange-400 pl-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Manila</h4>
                    <div className="text-sm text-gray-600 mb-2">
                      <strong>Best:</strong> December - February<br/>
                      <strong>Festivals:</strong> January (Ati-Atihan nearby)<br/>
                      <strong>Avoid:</strong> April - May (hottest months)
                    </div>
                    <p className="text-gray-700 text-sm">
                      City exploration best during cooler months. 
                      Malls and indoor attractions provide relief year-round.
                    </p>
                  </div>

                  <div className="border-l-4 border-red-400 pl-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Baguio</h4>
                    <div className="text-sm text-gray-600 mb-2">
                      <strong>Best:</strong> November - February<br/>
                      <strong>Flower Festival:</strong> February<br/>
                      <strong>Strawberry season:</strong> December - May
                    </div>
                    <p className="text-gray-700 text-sm">
                      Mountain climate means cooler temperatures year-round. 
                      Fog can be heavy during wet season.
                    </p>
                  </div>

                  <div className="border-l-4 border-teal-400 pl-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Cebu</h4>
                    <div className="text-sm text-gray-600 mb-2">
                      <strong>Best:</strong> December - April<br/>
                      <strong>Sinulog Festival:</strong> January<br/>
                      <strong>Dry season:</strong> February - May
                    </div>
                    <p className="text-gray-700 text-sm">
                      Central location means year-round accessibility. 
                      Nearby islands best during calm weather months.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Practical Tips */}
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Practical Weather Planning Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">🌦️ Weather Preparation</h3>
                  <div className="space-y-4">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-bold text-blue-800 mb-2">Dry Season Packing</h4>
                      <ul className="text-blue-700 text-sm space-y-1">
                        <li>• Light, breathable clothing</li>
                        <li>• Strong sunscreen (SPF 50+)</li>
                        <li>• Sun hat and sunglasses</li>
                        <li>• Light jacket for AC and mountains</li>
                        <li>• Swimwear and quick-dry clothes</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-800 mb-2">Wet Season Packing</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Waterproof jacket and pants</li>
                        <li>• Quick-dry clothing</li>
                        <li>• Waterproof bags for electronics</li>
                        <li>• Anti-slip footwear</li>
                        <li>• Umbrella and extra socks</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">💰 Budget & Booking Tips</h3>
                  <div className="space-y-4">
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-bold text-green-800 mb-2">Save Money</h4>
                      <ul className="text-green-700 text-sm space-y-1">
                        <li>• Visit during shoulder seasons (May-Jun, Nov)</li>
                        <li>• Book accommodations 2-3 months ahead</li>
                        <li>• Avoid Christmas/New Year premiums</li>
                        <li>• Consider wet season for 30-50% savings</li>
                        <li>• Monitor typhoon forecasts for rebooking</li>
                      </ul>
                    </div>
                    
                    <div className="bg-yellow-50 rounded-lg p-4">
                      <h4 className="font-bold text-yellow-800 mb-2">Peak Season Planning</h4>
                      <ul className="text-yellow-700 text-sm space-y-1">
                        <li>• Book flights 3-4 months in advance</li>
                        <li>• Resort reservations 6+ months ahead</li>
                        <li>• Island hopping tours fill up quickly</li>
                        <li>• Consider alternative destinations</li>
                        <li>• Have backup plans for weather</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-orange-800 mb-4">🌪️ Typhoon Season Safety</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-orange-800 mb-2">Before You Go:</h4>
                    <ul className="text-orange-700 text-sm space-y-1">
                      <li>• Check PAGASA weather forecasts</li>
                      <li>• Get comprehensive travel insurance</li>
                      <li>• Have flexible flight bookings</li>
                      <li>• Download weather apps</li>
                      <li>• Inform embassy of travel plans</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-orange-800 mb-2">During Your Trip:</h4>
                    <ul className="text-orange-700 text-sm space-y-1">
                      <li>• Monitor local weather updates</li>
                      <li>• Have emergency contact numbers</li>
                      <li>• Keep extra cash and supplies</li>
                      <li>• Follow local authority advisories</li>
                      <li>• Stay in sturdy accommodations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Conclusion CTA */}
          <Card className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Perfect Philippines Trip?</h2>
              <p className="text-blue-100 mb-6 text-lg">
                Now that you know the best times to visit, let GalaGPT help you create the perfect itinerary 
                based on your travel dates and preferences. Our AI considers weather patterns, local events, 
                and seasonal highlights to optimize your Philippines adventure.
              </p>
              <div className="space-y-4">
                <Link 
                  href="/plan" 
                  className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Create My Weather-Optimized Itinerary
                </Link>
                <div className="text-blue-100 text-sm">
                  ✨ Weather-Smart Planning • 🌍 Local Insights • 📱 Real-Time Updates
                </div>
              </div>
            </CardContent>
          </Card>
        </article>
      </div>
      <Footer />
    </div>
  )
}
