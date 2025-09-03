import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, MapPin, Clock, Star, Mountain, Eye, Camera, Sun } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Footer } from '@/components/footer'

export default function SagadaGuidePage() {
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
                src="/Guide_Sagada.jpeg"
                alt="Sagada hanging coffins and mountain landscape"
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardHeader>
              <div className="flex items-center gap-2 text-green-600 mb-2">
                <Mountain className="h-4 w-4" />
                <span className="text-sm font-medium">Mountains • Sagada</span>
              </div>
              <CardTitle className="text-4xl">Sagada: Where Mountain Magic Lives</CardTitle>
              <div className="flex items-center gap-4 text-gray-500 text-sm">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  13 min read
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
                Hidden in the mountains of Mountain Province in northern Luzon, Sagada is a mystical 
                destination that offers visitors a glimpse into ancient Filipino burial traditions, 
                breathtaking mountain landscapes, and a culture that has remained largely untouched 
                by modern development. This small town of around 11,000 residents has become a 
                pilgrimage site for travelers seeking authentic cultural experiences and natural wonders.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                From the famous hanging coffins that cling to limestone cliffs to the spectacular 
                sea of clouds at sunrise, Sagada provides an otherworldly experience that combines 
                spiritual awakening with adventure tourism. The town's commitment to preserving 
                its indigenous Igorot culture while welcoming respectful visitors makes it one 
                of the Philippines' most unique and memorable destinations.
              </p>
            </CardContent>
          </Card>

          {/* Weather & Best Time */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Climate & Best Time to Visit</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Mountain Climate</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Elevation: 1,500 meters above sea level</li>
                    <li>• Temperature: 15-24°C (59-75°F)</li>
                    <li>• Dry Season: November to April</li>
                    <li>• Wet Season: May to October</li>
                    <li>• Coolest: December to February</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">What to Pack</h4>
                  <ul className="text-blue-700 space-y-2">
                    <li>• Warm jacket for early morning/evening</li>
                    <li>• Sturdy hiking boots</li>
                    <li>• Rain gear (wet season)</li>
                    <li>• Flashlight for cave exploration</li>
                    <li>• Respectful clothing for cultural sites</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Iconic Attractions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Iconic Sagada Experiences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <Eye className="h-5 w-5 text-orange-500" />
                  Hanging Coffins (Echo Valley)
                </h3>
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Sagada hanging coffins"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-600 mb-3">
                  Sagada's most famous attraction, these ancient wooden coffins hang precariously from 
                  limestone cliffs, following a centuries-old Igorot burial tradition. According to 
                  local belief, the higher the coffin, the closer the deceased is to heaven. Some 
                  coffins are over 2,000 years old.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Cultural Note:</strong> Photography allowed but maintain respectful distance and behavior
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <Sun className="h-5 w-5 text-blue-500" />
                  Kiltepan Peak (Sea of Clouds)
                </h3>
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Kiltepan Peak sunrise sea of clouds"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-600 mb-3">
                  Wake up before dawn for a challenging 30-45 minute hike to Kiltepan Peak to witness 
                  one of the Philippines' most spectacular sunrises. On clear mornings, you'll see a 
                  breathtaking sea of clouds flowing between mountain peaks like a white ocean.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Best time:</strong> 5:30-6:30 AM • <strong>Difficulty:</strong> Moderate hike
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <Camera className="h-5 w-5 text-purple-500" />
                  Sumaguing Cave (Big Cave)
                </h3>
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Sumaguing Cave interior"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-600 mb-3">
                  Sagada's most accessible and popular cave system features impressive limestone 
                  formations, underground chambers, and crystal-clear pools. The adventure involves 
                  crawling, climbing, and swimming through various cave sections with a local guide.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Duration:</strong> 1-3 hours • <strong>Requirement:</strong> Local guide mandatory
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-bold mb-2">Lumiang Burial Cave</h3>
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Lumiang Cave entrance"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-600 mb-3">
                  This sacred cave contains hundreds of ancient coffins stacked from floor to ceiling, 
                  some dating back over 1,000 years. The entrance alone reveals dozens of wooden 
                  coffins, making it a powerful cultural and historical experience.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Cultural significance:</strong> Sacred burial site requiring utmost respect
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Adventure Activities */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Adventure Activities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3">Cave Connections</h4>
                  <p className="text-gray-700 mb-3">
                    For the adventurous, attempt the challenging cave connection between Lumiang and 
                    Sumaguing caves. This 3-4 hour underground journey involves spelunking through 
                    tight passages and underground rivers.
                  </p>
                  <div className="text-sm text-green-700">
                    <strong>Difficulty:</strong> Expert level • <strong>Duration:</strong> 3-4 hours
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3">Mountain Hiking</h4>
                  <p className="text-gray-700 mb-3">
                    Explore numerous hiking trails leading to waterfalls, viewpoints, and traditional 
                    villages. Popular hikes include Bomod-ok Falls and various peaks offering 
                    panoramic mountain views.
                  </p>
                  <div className="text-sm text-blue-700">
                    <strong>Popular trails:</strong> Bomod-ok Falls, Mt. Ampacao, traditional villages
                  </div>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3">Rock Climbing</h4>
                  <p className="text-gray-700 mb-3">
                    The limestone cliffs around Sagada offer excellent rock climbing opportunities 
                    for both beginners and experienced climbers, with routes of varying difficulty.
                  </p>
                  <div className="text-sm text-orange-700">
                    <strong>Best spots:</strong> Various limestone formations around town
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3">Cultural Tours</h4>
                  <p className="text-gray-700 mb-3">
                    Join guided tours to traditional villages, learn about Igorot culture, 
                    witness traditional weaving, and understand the significance of burial practices.
                  </p>
                  <div className="text-sm text-purple-700">
                    <strong>Includes:</strong> Village visits, cultural demonstrations, traditional crafts
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Local Culture */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Respecting Local Culture</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <h4 className="font-semibold mb-3">Important Cultural Guidelines</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Burial sites are sacred:</strong> Maintain respectful behavior and distance</li>
                  <li>• <strong>Photography etiquette:</strong> Ask permission before photographing locals</li>
                  <li>• <strong>Dress modestly:</strong> Especially when visiting cultural and religious sites</li>
                  <li>• <strong>Hire local guides:</strong> Support the community and ensure safety</li>
                  <li>• <strong>No loud music/noise:</strong> Respect the peaceful mountain environment</li>
                  <li>• <strong>Sustainable tourism:</strong> Follow Leave No Trace principles</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Local Traditions</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Dap-ay:</strong> Traditional men's dormitory system</li>
                    <li>• <strong>Ebgan:</strong> Traditional women's dormitory</li>
                    <li>• <strong>Bayanihan:</strong> Community cooperation spirit</li>
                    <li>• <strong>Begnas:</strong> Thanksgiving rituals and festivals</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Traditional Crafts</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Weaving:</strong> Traditional textiles and bags</li>
                    <li>• <strong>Wood carving:</strong> Sculptures and functional items</li>
                    <li>• <strong>Jewelry making:</strong> Silver and traditional ornaments</li>
                    <li>• <strong>Basket weaving:</strong> Functional and decorative baskets</li>
                  </ul>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Food & Accommodation */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Food & Accommodation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Local Food Specialties</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Etag:</strong> Smoked/cured native pork</li>
                    <li>• <strong>Pinikpikan:</strong> Traditional chicken soup</li>
                    <li>• <strong>Rice wine (Tapuy):</strong> Traditional alcoholic beverage</li>
                    <li>• <strong>Organic vegetables:</strong> Fresh from mountain farms</li>
                    <li>• <strong>Native coffee:</strong> High-altitude grown beans</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Where to Stay</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Guesthouses:</strong> Family-run, authentic experience</li>
                    <li>• <strong>Hostels:</strong> Budget-friendly, backpacker-oriented</li>
                    <li>• <strong>Inns:</strong> Mid-range comfort with local charm</li>
                    <li>• <strong>Homestays:</strong> Cultural immersion opportunities</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Recommended Establishments</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <strong>Yoghurt House</strong><br/>
                    <span className="text-sm text-gray-600">Famous for homemade yogurt and traditional dishes</span>
                  </div>
                  <div>
                    <strong>Sagada Brew</strong><br/>
                    <span className="text-sm text-gray-600">Local coffee shop with mountain-grown beans</span>
                  </div>
                  <div>
                    <strong>Lemon Pie House</strong><br/>
                    <span className="text-sm text-gray-600">Comfort food and famous lemon pie</span>
                  </div>
                  <div>
                    <strong>Log Cabin</strong><br/>
                    <span className="text-sm text-gray-600">Cozy accommodation with mountain views</span>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Getting There */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Getting to Sagada</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Transportation Options</h4>
                <div className="space-y-4">
                  <div>
                    <strong>From Manila (8-10 hours)</strong>
                    <ul className="text-sm text-gray-600 mt-2 space-y-1">
                      <li>• Bus to Baguio (5-6 hours) → Bus to Sagada (5-6 hours)</li>
                      <li>• Direct bus services available during peak season</li>
                      <li>• Private van hire (faster but more expensive)</li>
                    </ul>
                  </div>
                  <div>
                    <strong>From Baguio (5-6 hours)</strong>
                    <ul className="text-sm text-gray-600 mt-2 space-y-1">
                      <li>• GL Trans or Lizardo Trans buses</li>
                      <li>• Jeepneys to Bontoc, then to Sagada</li>
                      <li>• Departure times: Early morning (6-7 AM)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Travel Tips</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Book transportation in advance during peak season</li>
                    <li>• Bring warm clothes for the mountain climate</li>
                    <li>• Prepare for winding, mountainous roads</li>
                    <li>• Carry cash - limited ATM availability</li>
                    <li>• Respect local customs and environment</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">What to Bring</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Philippine Pesos (cash only)</li>
                    <li>• Sturdy hiking shoes</li>
                    <li>• Warm jacket and layers</li>
                    <li>• Flashlight for caves</li>
                    <li>• Camera with extra batteries</li>
                  </ul>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Budget Planning */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Budget Planning</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3">Budget Travel</h4>
                  <div className="text-2xl font-bold text-green-600 mb-2">₱1,200-2,000</div>
                  <p className="text-sm text-gray-600 mb-3">Per day</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Hostel dormitory</li>
                    <li>• Local eateries</li>
                    <li>• Group tours</li>
                    <li>• Basic cave tours</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3">Mid-Range</h4>
                  <div className="text-2xl font-bold text-blue-600 mb-2">₱2,500-4,000</div>
                  <p className="text-sm text-gray-600 mb-3">Per day</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Private room in guesthouse</li>
                    <li>• Restaurant dining</li>
                    <li>• Private guides</li>
                    <li>• Multiple activities</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3">Comfortable</h4>
                  <div className="text-2xl font-bold text-purple-600 mb-2">₱4,500+</div>
                  <p className="text-sm text-gray-600 mb-3">Per day</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Best available accommodation</li>
                    <li>• All meals included</li>
                    <li>• Private transportation</li>
                    <li>• Premium experiences</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Experience Sagada's Mountain Magic</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Let our AI travel planner create a personalized Sagada itinerary that balances adventure, 
                cultural respect, and the mystical experiences this mountain town has to offer.
              </p>
              <Link 
                href="/chat?prompt=Plan a trip to Sagada Philippines"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                <Mountain className="h-5 w-5" />
                Plan My Sagada Adventure
              </Link>
            </CardContent>
          </Card>
        </article>
      </div>
      <Footer />
    </div>
  )
}
