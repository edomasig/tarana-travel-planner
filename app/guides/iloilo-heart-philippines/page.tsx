import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, MapPin, Clock, Star, Heart, Building, Utensils, Calendar } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Footer } from '@/components/footer'

export default function IloiloGuidePage() {
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
                src="/Guides_Iloilo.jpeg"
                alt="Iloilo City skyline and Iloilo River"
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardHeader>
              <div className="flex items-center gap-2 text-red-600 mb-2">
                <Heart className="h-4 w-4" />
                <span className="text-sm font-medium">Cities • Iloilo</span>
              </div>
              <CardTitle className="text-4xl">Iloilo: The Heart of the Philippines</CardTitle>
              <div className="flex items-center gap-4 text-gray-500 text-sm">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  11 min read
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
                Known as the "Heart of the Philippines," Iloilo City and its surrounding province offer 
                visitors an authentic taste of Filipino culture, warm hospitality, and rich history. 
                Located in the Western Visayas region, Iloilo seamlessly blends colonial Spanish architecture 
                with modern development, creating a unique cityscape that tells the story of the Philippines' past and future.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                From the UNESCO World Heritage churches scattered throughout the province to the vibrant 
                food scene that rivals any culinary destination in Southeast Asia, Iloilo provides an 
                intimate and genuine Philippine experience away from the crowds of more touristy destinations.
              </p>
            </CardContent>
          </Card>

          {/* Quick Facts */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Quick Facts About Iloilo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Geographic Information</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Location: Western Visayas, Panay Island</li>
                    <li>• Population: 450,000+ (city), 2.1M+ (province)</li>
                    <li>• Languages: Hiligaynon, Filipino, English</li>
                    <li>• Airport: Iloilo International Airport</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Cultural Highlights</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Known for: Warm hospitality, delicious food</li>
                    <li>• Heritage: Spanish colonial architecture</li>
                    <li>• Famous festival: Dinagyang Festival</li>
                    <li>• Nickname: "Most Livable City in Philippines"</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Heritage Churches */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">UNESCO World Heritage Churches</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <div className="border-l-4 border-yellow-500 pl-6">
                <h3 className="text-xl font-bold mb-2">Miagao Church (Sto. Tomás de Villanueva)</h3>
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Miagao Church UNESCO World Heritage"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-600 mb-3">
                  Built in 1797, this fortress-church features a unique blend of European baroque and 
                  indigenous Filipino artistic traditions. The intricately carved façade includes tropical 
                  motifs like coconut palms and papaya trees, making it a masterpiece of Filipino baroque architecture.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Location:</strong> Miagao town, 40km from Iloilo City • <strong>Built:</strong> 1797
                </div>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-bold mb-2">Molo Church (St. Anne Parish)</h3>
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Molo Church Gothic architecture"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-600 mb-3">
                  Known as the "Gothic Church of the Philippines," this red-brick beauty was built in 1831 
                  and features an all-women saints gallery with 16 life-sized statues. The church's 
                  neo-Gothic architecture stands out among Philippine colonial churches.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Location:</strong> Molo District, Iloilo City • <strong>Special:</strong> All-female saints
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-bold mb-2">Jaro Cathedral (Our Lady of Candles)</h3>
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Jaro Cathedral bell tower"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-600 mb-3">
                  The seat of the Archdiocese of Jaro, this cathedral houses the venerated image of 
                  Our Lady of Candles, the patroness of Western Visayas. The separate bell tower 
                  and beautiful interior make it an important pilgrimage site.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Location:</strong> Jaro District, Iloilo City • <strong>Feast:</strong> February 2
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Food Culture */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Utensils className="h-6 w-6 text-orange-500" />
                Iloilo's Culinary Heritage
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Signature Dishes</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>La Paz Batchoy:</strong> Iloilo's most famous noodle soup</li>
                    <li>• <strong>Pancit Molo:</strong> Dumpling soup with ground pork</li>
                    <li>• <strong>Biscocho:</strong> Twice-baked bread with butter/sugar</li>
                    <li>• <strong>Barquillos:</strong> Crispy rolled wafers</li>
                    <li>• <strong>KBL:</strong> Kadios (pigeon peas), Baboy, Langka</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Best Food Districts</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>La Paz Market:</strong> Original batchoy capital</li>
                    <li>• <strong>Jaro District:</strong> Pancit Molo and local eateries</li>
                    <li>• <strong>Smallville Complex:</strong> Modern dining and bars</li>
                    <li>• <strong>Molo Plaza:</strong> Traditional snacks and delicacies</li>
                    <li>• <strong>Villa Beach:</strong> Fresh seafood restaurants</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Must-Try Restaurant Experiences</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <strong>Ted's La Paz Batchoy</strong><br/>
                    <span className="text-sm text-gray-600">The original and most famous batchoy house since 1945</span>
                  </div>
                  <div>
                    <strong>Netong's Original Special La Paz Batchoy</strong><br/>
                    <span className="text-sm text-gray-600">Another authentic batchoy institution</span>
                  </div>
                  <div>
                    <strong>Kap Ising</strong><br/>
                    <span className="text-sm text-gray-600">Best pancit molo in Jaro district</span>
                  </div>
                  <div>
                    <strong>Biscocho Haus</strong><br/>
                    <span className="text-sm text-gray-600">Famous for biscocho and other Ilonggo delicacies</span>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Attractions & Activities */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Top Attractions & Activities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <Building className="h-5 w-5 text-blue-500" />
                    Historic Walking Tour
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Explore Calle Real (Royal Street), once known as the "Queen City of the South" 
                    main commercial strip. Visit heritage houses, old hotels, and colonial-era buildings.
                  </p>
                  <div className="text-sm text-blue-700">
                    <strong>Highlights:</strong> Old Capitol Building, Plaza Libertad, heritage mansions
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3">Iloilo River Esplanade</h4>
                  <p className="text-gray-700 mb-3">
                    A beautiful waterfront development perfect for evening walks, biking, and enjoying 
                    views of the Iloilo River. The area comes alive at night with food stalls and activities.
                  </p>
                  <div className="text-sm text-green-700">
                    <strong>Best time:</strong> Late afternoon to evening for sunset views
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3">Guimaras Island Day Trip</h4>
                  <p className="text-gray-700 mb-3">
                    Just a 15-minute boat ride away, Guimaras is famous for its sweet mangoes, beautiful 
                    beaches, and wind farms. Perfect for a day trip from Iloilo City.
                  </p>
                  <div className="text-sm text-purple-700">
                    <strong>Famous for:</strong> World's sweetest mangoes, pristine beaches
                  </div>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3">Museo Iloilo</h4>
                  <p className="text-gray-700 mb-3">
                    The regional museum showcasing Ilonggo culture, history, and artifacts. 
                    Learn about the province's rich heritage and see traditional crafts and artworks.
                  </p>
                  <div className="text-sm text-red-700">
                    <strong>Features:</strong> Archaeological finds, traditional textiles, historical exhibits
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Festivals & Events */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Calendar className="h-6 w-6 text-purple-500" />
                Festivals & Cultural Events
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-bold mb-2">Dinagyang Festival (January)</h3>
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Dinagyang Festival Iloilo"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-600 mb-3">
                  One of the Philippines' most vibrant festivals, Dinagyang celebrates the Santo Niño 
                  (Holy Child Jesus) with spectacular street dancing, elaborate costumes, and tribal 
                  performances. The entire city transforms into a massive celebration.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>When:</strong> Fourth weekend of January • <strong>Duration:</strong> 4 days
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Other Notable Events</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <strong>Paraw Regatta Festival (February)</strong><br/>
                    <span className="text-sm text-gray-600">Traditional sailboat races and beach festivities</span>
                  </div>
                  <div>
                    <strong>Chinese New Year (February)</strong><br/>
                    <span className="text-sm text-gray-600">Dragon dances and cultural performances</span>
                  </div>
                  <div>
                    <strong>Holy Week (March/April)</strong><br/>
                    <span className="text-sm text-gray-600">Religious processions and church visitations</span>
                  </div>
                  <div>
                    <strong>Manggahan Festival (May)</strong><br/>
                    <span className="text-sm text-gray-600">Celebrating Guimaras mangoes</span>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Accommodation & Transport */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Accommodation & Transportation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Where to Stay</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Business District:</strong> Modern hotels near Smallville</li>
                    <li>• <strong>City Proper:</strong> Heritage hotels and budget inns</li>
                    <li>• <strong>Jaro:</strong> Near churches and university area</li>
                    <li>• <strong>Airport Area:</strong> Convenient for flights</li>
                    <li>• <strong>Guimaras:</strong> Beach resorts for island stay</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Getting Around</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Jeepneys:</strong> Main public transport (₱10-15)</li>
                    <li>• <strong>Taxis:</strong> Metered and readily available</li>
                    <li>• <strong>Tricycles:</strong> Short distances (₱20-50)</li>
                    <li>• <strong>Habal-habal:</strong> Motorcycle taxi</li>
                    <li>• <strong>Grab:</strong> App-based booking available</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Getting to Iloilo</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <strong>By Air</strong><br/>
                    <span className="text-sm text-gray-600">
                      Daily flights from Manila (1.5 hours), Cebu (1 hour), and other major Philippine cities
                    </span>
                  </div>
                  <div>
                    <strong>By Sea</strong><br/>
                    <span className="text-sm text-gray-600">
                      Regular ferries from Manila (22 hours), Cebu, and other Visayan islands
                    </span>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Budget Guide */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Budget Planning</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3">Budget Travel</h4>
                  <div className="text-2xl font-bold text-green-600 mb-2">₱1,500-2,500</div>
                  <p className="text-sm text-gray-600 mb-3">Per day</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Budget inn/hostel</li>
                    <li>• Local street food</li>
                    <li>• Public transportation</li>
                    <li>• Free attractions</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3">Mid-Range</h4>
                  <div className="text-2xl font-bold text-blue-600 mb-2">₱3,000-4,500</div>
                  <p className="text-sm text-gray-600 mb-3">Per day</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 3-star hotel</li>
                    <li>• Restaurant dining</li>
                    <li>• Mix of transport</li>
                    <li>• Paid tours/activities</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3">Luxury</h4>
                  <div className="text-2xl font-bold text-purple-600 mb-2">₱5,000+</div>
                  <p className="text-sm text-gray-600 mb-3">Per day</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Luxury hotel/resort</li>
                    <li>• Fine dining</li>
                    <li>• Private transportation</li>
                    <li>• Premium experiences</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Discover the Heart of the Philippines</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Let our AI travel planner create a personalized Iloilo itinerary that includes the best 
                heritage sites, culinary experiences, and cultural attractions for an authentic Philippine adventure.
              </p>
              <Link 
                href="/chat?prompt=Plan a trip to Iloilo Philippines"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
              >
                <Heart className="h-5 w-5" />
                Plan My Iloilo Journey
              </Link>
            </CardContent>
          </Card>
        </article>
      </div>
      <Footer />
    </div>
  )
}
