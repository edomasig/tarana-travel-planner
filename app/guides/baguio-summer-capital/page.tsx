import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, MapPin, Clock, Star, Mountain, Thermometer, Camera, TreePine } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Footer } from '@/components/footer'

export default function BaguioGuidePage() {
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
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Baguio City mountain scenery"
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardHeader>
              <div className="flex items-center gap-2 text-green-600 mb-2">
                <Mountain className="h-4 w-4" />
                <span className="text-sm font-medium">Mountains • Baguio</span>
              </div>
              <CardTitle className="text-4xl">Baguio: The Summer Capital of the Philippines</CardTitle>
              <div className="flex items-center gap-4 text-gray-500 text-sm">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  10 min read
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
                Perched 1,540 meters above sea level in the mountains of northern Luzon, Baguio City offers 
                a refreshing escape from the tropical heat of the Philippines. Known as the "Summer Capital," 
                this charming highland city features cool temperatures year-round, making it a favorite retreat 
                for both locals and international visitors.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Beyond its pleasant climate, Baguio is renowned for its vibrant arts scene, rich cultural 
                heritage of the Cordillera region, beautiful parks and gardens, and some of the freshest 
                produce in the country. The city seamlessly blends American colonial charm with indigenous 
                mountain culture, creating a unique atmosphere found nowhere else in the Philippines.
              </p>
            </CardContent>
          </Card>

          {/* Weather & Climate */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Thermometer className="h-6 w-6 text-blue-500" />
                Climate & Best Time to Visit
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Year-Round Climate</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• <strong>Temperature:</strong> 15-23°C (59-73°F)</li>
                    <li>• <strong>Dry Season:</strong> November to April</li>
                    <li>• <strong>Wet Season:</strong> May to October</li>
                    <li>• <strong>Coldest Months:</strong> December-February</li>
                    <li>• <strong>Peak Season:</strong> December-May</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">What to Pack</h4>
                  <ul className="text-blue-700 space-y-2">
                    <li>• Light jacket or sweater</li>
                    <li>• Long pants and closed shoes</li>
                    <li>• Rain jacket (wet season)</li>
                    <li>• Comfortable walking shoes</li>
                    <li>• Warm sleepwear</li>
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
              
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <TreePine className="h-5 w-5 text-green-500" />
                  Burnham Park
                </h3>
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Burnham Park Baguio"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-600 mb-3">
                  The heart of Baguio City, this 32.84-hectare urban park features a man-made lake where 
                  you can rent paddle boats, beautiful gardens, walking paths, and recreational facilities. 
                  Perfect for morning jogs, family picnics, and people-watching.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Activities:</strong> Boat rides, biking, jogging, skateboarding, outdoor concerts
                </div>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <Camera className="h-5 w-5 text-orange-500" />
                  Session Road
                </h3>
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Session Road Baguio"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-600 mb-3">
                  Baguio's main commercial street and the city's beating heart. This pedestrian-friendly 
                  thoroughfare is lined with shops, restaurants, cafes, and local vendors. The famous 
                  Session Road in bloom during the Panagbenga Festival is a sight to behold.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Best for:</strong> Shopping, dining, nightlife, people-watching, festival events
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <Mountain className="h-5 w-5 text-purple-500" />
                  Mines View Park
                </h3>
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Mines View Park Baguio"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-600 mb-3">
                  Offering spectacular panoramic views of the mining towns of Itogon, Tuba, and Sablan, 
                  this popular viewpoint is perfect for photography and souvenir shopping. Local vendors 
                  sell traditional crafts, and you can even dress up in traditional Igorot costumes.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Highlights:</strong> Mountain views, souvenir shops, photo opportunities, traditional crafts
                </div>
              </div>

              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-xl font-bold mb-2">Strawberry Farm (La Trinidad)</h3>
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1464454709131-ffd692591ee5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Strawberry farms near Baguio"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-600 mb-3">
                  Just 20 minutes from Baguio in nearby La Trinidad, these strawberry farms offer a 
                  delightful pick-your-own experience. Visit during strawberry season (November to May) 
                  to enjoy the freshest berries and beautiful mountain scenery.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Season:</strong> November-May • <strong>Cost:</strong> ₱100-200 per basket
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Cultural Attractions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Arts & Culture</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3">BenCab Museum</h4>
                  <p className="text-gray-700 mb-3">
                    Showcasing the works of National Artist Benedicto Cabrera and other Filipino artists, 
                    this museum also features beautiful gardens and organic exhibits about Cordillera culture.
                  </p>
                  <div className="text-sm text-indigo-700">
                    <strong>Location:</strong> Asin Road, Tuba • <strong>Hours:</strong> Tue-Sun 9AM-6PM
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3">Tam-awan Village</h4>
                  <p className="text-gray-700 mb-3">
                    A reconstructed traditional Cordillera village showcasing authentic huts, local art, 
                    and cultural performances. Great for understanding indigenous mountain culture.
                  </p>
                  <div className="text-sm text-green-700">
                    <strong>Features:</strong> Traditional huts, art galleries, cultural shows, workshops
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Panagbenga Festival (February-March)</h4>
                <p className="text-gray-700 mb-3">
                  Baguio's famous Flower Festival celebrates the blooming season with grand street dancing, 
                  colorful floats made entirely of flowers, and various cultural performances throughout the city.
                </p>
                <div className="text-sm text-yellow-700">
                  <strong>Highlights:</strong> Grand float parade, street dancing, flower exhibits, night market
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Food & Dining */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Local Food Scene</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Must-Try Local Specialties</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Strawberry Taho:</strong> Sweet tofu with fresh strawberries</li>
                    <li>• <strong>Pinikpikan:</strong> Traditional Cordillera chicken dish</li>
                    <li>• <strong>Etag:</strong> Smoked/cured meat from the mountains</li>
                    <li>• <strong>Ube (Purple Yam):</strong> Ice cream, cakes, pastries</li>
                    <li>• <strong>Fresh Vegetables:</strong> From nearby farms</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Popular Food Areas</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Session Road:</strong> Restaurants and cafes</li>
                    <li>• <strong>Burnham Park:</strong> Food stalls and vendors</li>
                    <li>• <strong>Harrison Road:</strong> Local eateries</li>
                    <li>• <strong>Night Market:</strong> Street food paradise</li>
                    <li>• <strong>Good Shepherd:</strong> Famous ube jam</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Restaurant Recommendations</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <strong>Hill Station</strong><br/>
                    <span className="text-sm text-gray-600">Fine dining with mountain views and European cuisine</span>
                  </div>
                  <div>
                    <strong>Oh My Gulay!</strong><br/>
                    <span className="text-sm text-gray-600">Vegetarian restaurant with artistic ambiance</span>
                  </div>
                  <div>
                    <strong>Café by the Ruins</strong><br/>
                    <span className="text-sm text-gray-600">Local favorite for authentic Cordillera dishes</span>
                  </div>
                  <div>
                    <strong>50's Diner</strong><br/>
                    <span className="text-sm text-gray-600">American-style comfort food and milkshakes</span>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Activities & Shopping */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Activities & Shopping</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Outdoor Activities</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Hiking trails to Mt. Kabuyao and nearby peaks</li>
                    <li>• Biking around Burnham Park and city streets</li>
                    <li>• Strawberry picking in La Trinidad</li>
                    <li>• Golf at Baguio Country Club</li>
                    <li>• Horseback riding in Wright Park</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Shopping Destinations</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Baguio Public Market:</strong> Fresh produce, crafts</li>
                    <li>• <strong>Night Market:</strong> Souvenirs, street food</li>
                    <li>• <strong>Session Road:</strong> Shops and boutiques</li>
                    <li>• <strong>Maharlika Livelihood Center:</strong> Local handicrafts</li>
                    <li>• <strong>SM City Baguio:</strong> Modern shopping mall</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Best Souvenirs to Buy</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <strong>Woodcarvings</strong><br/>
                    <span className="text-sm text-gray-600">Traditional Cordillera crafts</span>
                  </div>
                  <div>
                    <strong>Woven Textiles</strong><br/>
                    <span className="text-sm text-gray-600">Colorful traditional fabrics</span>
                  </div>
                  <div>
                    <strong>Ube Products</strong><br/>
                    <span className="text-sm text-gray-600">Purple yam delicacies</span>
                  </div>
                  <div>
                    <strong>Strawberry Jam</strong><br/>
                    <span className="text-sm text-gray-600">From Good Shepherd</span>
                  </div>
                  <div>
                    <strong>Coffee Beans</strong><br/>
                    <span className="text-sm text-gray-600">High-quality mountain coffee</span>
                  </div>
                  <div>
                    <strong>Silver Jewelry</strong><br/>
                    <span className="text-sm text-gray-600">Local artisan pieces</span>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Practical Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Getting There & Around</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">How to Get to Baguio</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>By Bus:</strong> 5-6 hours from Manila (₱400-800)</li>
                    <li>• <strong>Bus Companies:</strong> Victory Liner, Genesis, Partas</li>
                    <li>• <strong>Terminals:</strong> Cubao, Pasay, Sampaloc (Manila)</li>
                    <li>• <strong>By Car:</strong> NLEX-SCTEX-TPLEX route</li>
                    <li>• <strong>Private Van:</strong> More expensive but faster</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Getting Around Baguio</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Jeepneys:</strong> Main public transport (₱10-15)</li>
                    <li>• <strong>Taxis:</strong> Metered, more convenient</li>
                    <li>• <strong>Tricycles:</strong> Short distances</li>
                    <li>• <strong>Walking:</strong> City center is walkable</li>
                    <li>• <strong>Grab:</strong> Available but limited</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Budget Estimates (Per Day)</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <strong>Budget:</strong> ₱1,200-2,000<br/>
                    <span className="text-sm text-gray-600">Backpacker inns, local food, public transport</span>
                  </div>
                  <div>
                    <strong>Mid-range:</strong> ₱2,500-4,500<br/>
                    <span className="text-sm text-gray-600">Hotels, restaurants, mix of activities</span>
                  </div>
                  <div>
                    <strong>Luxury:</strong> ₱5,000+<br/>
                    <span className="text-sm text-gray-600">Resort hotels, fine dining, private tours</span>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Plan Your Baguio Mountain Escape</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Let our AI travel planner create a personalized Baguio itinerary that includes the best 
                attractions, food experiences, and mountain activities for your perfect highland getaway.
              </p>
              <Link 
                href="/chat?prompt=Plan a trip to Baguio Philippines"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                <Mountain className="h-5 w-5" />
                Plan My Baguio Adventure
              </Link>
            </CardContent>
          </Card>
        </article>
      </div>
      <Footer />
    </div>
  )
}
