import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, MapPin, Clock, Star, Camera, Utensils, Building, History } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Footer } from '@/components/footer'

export default function ManilaGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto max-w-4xl px-4">
        <Link href="/guides" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Guides
        </Link>
        
        <article className="space-y-8">
          {/* Header */}
          <Card>
            <div className="relative h-64 md:h-80">
              <Image
                src="https://images.unsplash.com/photo-1555993539-1732b0258235?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Manila skyline"
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardHeader>
              <div className="flex items-center gap-2 text-blue-600 mb-2">
                <Building className="h-4 w-4" />
                <span className="text-sm font-medium">Cities • Manila</span>
              </div>
              <CardTitle className="text-4xl">Manila Travel Guide: Old Meets New</CardTitle>
              <div className="flex items-center gap-4 text-gray-500 text-sm">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  12 min read
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4" />
                  Last updated: January 2025
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Introduction */}
          <Card>
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Manila, the bustling capital of the Philippines, is a city where centuries-old churches stand 
                alongside gleaming skyscrapers, and street food vendors serve up local delicacies steps away 
                from world-class shopping malls. This vibrant metropolis offers visitors a unique blend of 
                Spanish colonial heritage, American influences, and distinctly Filipino culture.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                From the historic walls of Intramuros to the modern business district of Makati, Manila 
                provides an authentic urban Philippine experience that serves as the perfect introduction 
                to the country's rich history and dynamic future.
              </p>
            </CardContent>
          </Card>

          {/* Quick Facts */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Quick Facts About Manila</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Basic Information</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Population: 1.8 million (13+ million metro area)</li>
                    <li>• Founded: 1571 by Spanish colonizers</li>
                    <li>• Language: Filipino, English, Tagalog</li>
                    <li>• Currency: Philippine Peso (PHP)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Travel Info</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Best time: November to April (dry season)</li>
                    <li>• Main airport: Ninoy Aquino International</li>
                    <li>• Getting around: LRT, MRT, buses, jeepneys</li>
                    <li>• Time zone: Philippine Standard Time (UTC+8)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Top Attractions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Must-Visit Attractions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <History className="h-5 w-5 text-orange-500" />
                  Intramuros (The Walled City)
                </h3>
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Intramuros Manila"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-600 mb-3">
                  The historic heart of Manila, this 16th-century Spanish colonial fortress city features 
                  well-preserved walls, cobblestone streets, and significant landmarks including Manila Cathedral, 
                  San Agustin Church, and Fort Santiago.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Highlights:</strong> Kalesa rides, Casa Manila Museum, Bahay Tsinoy, historic churches
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <Building className="h-5 w-5 text-blue-500" />
                  Rizal Park (Luneta)
                </h3>
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Rizal Park Manila"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-600 mb-3">
                  A historic urban park dedicated to the Philippines' national hero, Dr. José Rizal. The park 
                  features the iconic Rizal Monument, beautiful gardens, and serves as a popular gathering 
                  place for locals and tourists alike.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Best for:</strong> Morning walks, picnics, cultural shows, sunset viewing
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <Camera className="h-5 w-5 text-green-500" />
                  National Museum Complex
                </h3>
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="National Museum Manila"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-600 mb-3">
                  Home to the country's most important artifacts, including the Spoliarium by Juan Luna, 
                  extensive collections of Philippine art, natural history specimens, and cultural treasures 
                  that tell the story of Filipino heritage.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Museums:</strong> Fine Arts, Anthropology, Natural History, Planetarium
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Neighborhoods */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Explore Manila's Diverse Neighborhoods</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-3">Binondo (Chinatown)</h4>
                <p className="text-gray-700 mb-3">
                  The world's oldest Chinatown, established in 1594. A food lover's paradise with authentic 
                  Chinese-Filipino cuisine, traditional medicine shops, and historic temples.
                </p>
                <div className="text-sm text-purple-700">
                  <strong>Must-try:</strong> Hopia, tikoy, fresh noodles, authentic dim sum
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-3">Makati Business District</h4>
                <p className="text-gray-700 mb-3">
                  The financial heart of the Philippines, featuring luxury shopping malls, upscale restaurants, 
                  rooftop bars, and modern skyscrapers. Perfect for shopping and fine dining.
                </p>
                <div className="text-sm text-blue-700">
                  <strong>Highlights:</strong> Greenbelt Mall, Ayala Museum, vibrant nightlife
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-3">Malate & Ermita</h4>
                <p className="text-gray-700 mb-3">
                  Historic districts known for budget accommodations, art galleries, cafes, and Manila Bay 
                  sunset views. Great base for backpackers and culture enthusiasts.
                </p>
                <div className="text-sm text-green-700">
                  <strong>Perfect for:</strong> Budget travelers, art scene, Manila Bay walks
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Food Scene */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Utensils className="h-6 w-6 text-orange-500" />
                Manila's Food Scene
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Must-Try Local Dishes</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Adobo:</strong> Philippines' national dish</li>
                    <li>• <strong>Halo-halo:</strong> Famous shaved ice dessert</li>
                    <li>• <strong>Sisig:</strong> Sizzling pork dish</li>
                    <li>• <strong>Lechon:</strong> Roasted whole pig</li>
                    <li>• <strong>Kare-kare:</strong> Peanut stew with vegetables</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Best Food Areas</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Binondo:</strong> Chinese-Filipino cuisine</li>
                    <li>• <strong>Maginhawa Street:</strong> Hip food corridor</li>
                    <li>• <strong>Poblacion, Makati:</strong> Trendy restaurants</li>
                    <li>• <strong>Malate:</strong> Street food and budget eats</li>
                    <li>• <strong>BGC:</strong> International dining</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Food Market Recommendations</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <strong>Mercato Centrale</strong><br/>
                    <span className="text-sm text-gray-600">Weekend night market in BGC with gourmet food trucks</span>
                  </div>
                  <div>
                    <strong>Salcedo Saturday Market</strong><br/>
                    <span className="text-sm text-gray-600">Upscale weekend market in Makati</span>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Transportation */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Getting Around Manila</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Public Transportation</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>MRT/LRT:</strong> Fast rail system (₱15-30)</li>
                    <li>• <strong>Jeepneys:</strong> Iconic public transport (₱10-15)</li>
                    <li>• <strong>Buses:</strong> City and provincial routes (₱12-25)</li>
                    <li>• <strong>Tricycles:</strong> Short distances (₱30-50)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Private Options</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Grab:</strong> Ride-hailing app</li>
                    <li>• <strong>Taxi:</strong> Metered and negotiated fares</li>
                    <li>• <strong>Habal-habal:</strong> Motorcycle taxi</li>
                    <li>• <strong>Car rental:</strong> For day trips outside city</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Transportation Tips</h4>
                <ul className="space-y-2 text-yellow-700">
                  <li>• Download offline maps before traveling</li>
                  <li>• Avoid rush hours (7-9 AM, 5-7 PM) when possible</li>
                  <li>• Always carry exact change for public transport</li>
                  <li>• Use Grab for convenience and safety, especially at night</li>
                  <li>• Walking is often faster than driving in heavy traffic</li>
                </ul>
              </div>

            </CardContent>
          </Card>

          {/* Practical Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Practical Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Safety Tips</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Keep valuables secure and hidden</li>
                    <li>• Avoid displaying expensive electronics</li>
                    <li>• Use reputable transportation</li>
                    <li>• Stay in well-lit, populated areas at night</li>
                    <li>• Keep copies of important documents</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Money Matters</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• ATMs widely available</li>
                    <li>• Credit cards accepted in malls/hotels</li>
                    <li>• Always carry some cash</li>
                    <li>• Tipping is appreciated (10%)</li>
                    <li>• Bargaining acceptable in markets</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Budget Estimates (Per Day)</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <strong>Budget:</strong> ₱1,500-2,500<br/>
                    <span className="text-sm text-gray-600">Hostels, street food, public transport</span>
                  </div>
                  <div>
                    <strong>Mid-range:</strong> ₱3,000-5,000<br/>
                    <span className="text-sm text-gray-600">Hotels, restaurants, mix of transport</span>
                  </div>
                  <div>
                    <strong>Luxury:</strong> ₱5,000+<br/>
                    <span className="text-sm text-gray-600">5-star hotels, fine dining, private transport</span>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Explore Manila?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Let our AI travel planner create a personalized Manila itinerary that includes the best 
                historical sites, food experiences, and cultural attractions based on your interests.
              </p>
              <Link 
                href="/chat?prompt=Plan a trip to Manila Philippines"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <MapPin className="h-5 w-5" />
                Plan My Manila Adventure
              </Link>
            </CardContent>
          </Card>
        </article>
      </div>
      <Footer />
    </div>
  )
}
