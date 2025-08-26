import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Clock, Calendar, User, DollarSign, TrendingDown, Calculator } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Footer } from '@/components/footer'

export default function BudgetTravelPhilippinesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto max-w-4xl px-4">
        <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>
        
        <article className="space-y-8">
          {/* Header */}
          <Card>
            <div className="relative h-64 md:h-80">
              <Image
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Budget travel Philippines"
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardHeader>
              <div className="flex items-center gap-2 text-green-600 mb-2">
                <DollarSign className="h-4 w-4" />
                <span className="text-sm font-medium">Budget Travel • Money Saving</span>
              </div>
              <CardTitle className="text-4xl">Budget Travel Philippines: How to Travel for Under ₱2,000/Day</CardTitle>
              <div className="flex items-center gap-4 text-gray-500 text-sm">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  Lisa Chen
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  January 8, 2025
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  10 min read
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Introduction */}
          <Card>
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Traveling the Philippines doesn't have to break the bank. With careful planning and local know-how, 
                you can experience this tropical paradise for as little as ₱2,000 per day, including accommodation, 
                food, transportation, and activities.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                This comprehensive guide will show you exactly how to travel the Philippines on a shoestring budget 
                without sacrificing comfort or missing out on incredible experiences.
              </p>
            </CardContent>
          </Card>

          {/* Daily Budget Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Calculator className="h-6 w-6 text-green-500" />
                Daily Budget Breakdown (₱2,000)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <h4 className="font-semibold text-blue-800">Accommodation</h4>
                    <p className="text-2xl font-bold text-blue-600">₱800</p>
                    <p className="text-xs text-blue-700">Hostels/Budget hotels</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <h4 className="font-semibold text-green-800">Food</h4>
                    <p className="text-2xl font-bold text-green-600">₱600</p>
                    <p className="text-xs text-green-700">Local eateries</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg text-center">
                    <h4 className="font-semibold text-orange-800">Transport</h4>
                    <p className="text-2xl font-bold text-orange-600">₱400</p>
                    <p className="text-xs text-orange-700">Local transport</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg text-center">
                    <h4 className="font-semibold text-purple-800">Activities</h4>
                    <p className="text-2xl font-bold text-purple-600">₱200</p>
                    <p className="text-xs text-purple-700">Entrance fees</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Note:</strong> This budget excludes domestic flights and alcohol. Prices may vary by location and season.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Accommodation */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Budget Accommodation (₱500-1,000/night)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-bold mb-3">Hostels & Backpacker Places</h3>
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Budget hostel Philippines"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-700 mb-3">
                  Dormitory beds in backpacker hostels typically cost ₱500-800 per night. Many offer free WiFi, 
                  common areas, and shared kitchens where you can prepare your own meals.
                </p>
                <div className="bg-blue-50 p-3 rounded">
                  <p className="text-sm"><strong>Popular chains:</strong> Mad Monkey, Z Hostel, GreenBox Hostel</p>
                  <p className="text-sm"><strong>Book via:</strong> Hostelworld, Booking.com, direct booking</p>
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-bold mb-3">Guesthouses & Pension Houses</h3>
                <p className="text-gray-700 mb-3">
                  Family-run guesthouses offer private rooms with basic amenities for ₱800-1,200 per night. 
                  These provide more privacy and often include breakfast.
                </p>
                <div className="bg-green-50 p-3 rounded">
                  <p className="text-sm"><strong>Typical amenities:</strong> Private bathroom, fan/AC, WiFi</p>
                  <p className="text-sm"><strong>Best for:</strong> Couples, solo travelers wanting privacy</p>
                </div>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-bold mb-3">Alternative Options</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Homestays:</strong> ₱400-600/night with local families</li>
                  <li>• <strong>Couchsurfing:</strong> Free accommodation with locals</li>
                  <li>• <strong>House-sitting:</strong> Free stays in exchange for pet/house care</li>
                  <li>• <strong>Work exchanges:</strong> Free accommodation for volunteer work</li>
                </ul>
              </div>

            </CardContent>
          </Card>

          {/* Food */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Budget Eating (₱400-800/day)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Where to Eat</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Carenderias:</strong> ₱50-80 per meal</li>
                    <li>• <strong>Street food:</strong> ₱10-30 per item</li>
                    <li>• <strong>Fast food:</strong> ₱100-150 per meal</li>
                    <li>• <strong>Markets:</strong> Fresh fruits ₱20-50</li>
                    <li>• <strong>Convenience stores:</strong> Snacks ₱15-40</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Money-Saving Tips</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Eat where locals eat</li>
                    <li>• Try "turo-turo" (point-point) eateries</li>
                    <li>• Buy fruits from markets</li>
                    <li>• Cook in hostel kitchens</li>
                    <li>• Drink local water (boiled/filtered)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Sample Daily Food Budget</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <strong>Breakfast:</strong> ₱80<br/>
                    Rice + egg + coffee at carinderia
                  </div>
                  <div>
                    <strong>Lunch:</strong> ₱120<br/>
                    Set meal at local restaurant
                  </div>
                  <div>
                    <strong>Dinner:</strong> ₱150<br/>
                    Street food + local beer
                  </div>
                </div>
                <p className="text-sm text-yellow-700 mt-3">
                  <strong>Snacks & drinks:</strong> ₱250 (fruits, water, coffee)
                </p>
              </div>

            </CardContent>
          </Card>

          {/* Transportation */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Budget Transportation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Local Transport Costs</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Jeepney:</strong> ₱10-15 per ride</li>
                    <li>• <strong>Tricycle:</strong> ₱30-50 short distance</li>
                    <li>• <strong>Bus (city):</strong> ₱15-25 per ride</li>
                    <li>• <strong>MRT/LRT:</strong> ₱15-30 per ride</li>
                    <li>• <strong>Motorcycle taxi:</strong> ₱40-80</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Long-Distance Budget</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Bus:</strong> ₱500-1,200 (8-12 hours)</li>
                    <li>• <strong>Ferry:</strong> ₱800-2,000 between islands</li>
                    <li>• <strong>Budget airlines:</strong> ₱3,000-6,000</li>
                    <li>• <strong>Van/shuttle:</strong> ₱300-800</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Money-Saving Transport Tips</h4>
                <ul className="space-y-2 text-blue-700">
                  <li>• Walk when possible - it's free and you see more</li>
                  <li>• Use local transport instead of tourist shuttles</li>
                  <li>• Book flights 2-3 months in advance</li>
                  <li>• Travel during off-peak times</li>
                  <li>• Share costs with other travelers</li>
                  <li>• Ask locals for the cheapest routes</li>
                </ul>
              </div>

            </CardContent>
          </Card>

          {/* Free Activities */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <TrendingDown className="h-6 w-6 text-green-500" />
                Free & Cheap Activities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-green-600">Completely Free</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Beach lounging and swimming</li>
                    <li>• Hiking local trails</li>
                    <li>• Watching sunsets/sunrises</li>
                    <li>• Exploring city centers</li>
                    <li>• Visiting public markets</li>
                    <li>• People watching in parks</li>
                    <li>• Photography walks</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-blue-600">Under ₱100</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Museum entrance fees</li>
                    <li>• Church donations</li>
                    <li>• Local festival participation</li>
                    <li>• Hot spring entrance</li>
                    <li>• Jeepney city tours</li>
                    <li>• Street food tastings</li>
                    <li>• Local basketball games</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Budget-Friendly Destinations</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <strong>Baguio</strong><br/>
                    <span className="text-sm text-gray-600">Free hiking, parks, markets</span>
                  </div>
                  <div>
                    <strong>Siquijor</strong><br/>
                    <span className="text-sm text-gray-600">Affordable, mystical island</span>
                  </div>
                  <div>
                    <strong>Camiguin</strong><br/>
                    <span className="text-sm text-gray-600">Hot springs, waterfalls</span>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Money-Saving Tips */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Essential Money-Saving Strategies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Before You Go</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Travel during off-season (June-November)</li>
                    <li>• Book accommodations in advance</li>
                    <li>• Learn basic Filipino phrases</li>
                    <li>• Research free activities</li>
                    <li>• Download offline maps</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">While Traveling</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Always negotiate prices</li>
                    <li>• Avoid tourist restaurants</li>
                    <li>• Stay longer in fewer places</li>
                    <li>• Team up with other travelers</li>
                    <li>• Use refillable water bottles</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-red-800">Avoid These Budget Traps</h4>
                <ul className="space-y-1 text-red-700 text-sm">
                  <li>• Tourist area restaurants (3x more expensive)</li>
                  <li>• Hotel booking sites with no cancellation</li>
                  <li>• Tourist transport shuttles</li>
                  <li>• Buying water bottles constantly</li>
                  <li>• Not asking for local prices</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready for Your Budget Philippines Adventure?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Let our AI travel planner create a budget-friendly itinerary that maximizes your experiences 
                while keeping costs under ₱2,000 per day.
              </p>
              <Link 
                href="/chat?prompt=Plan a budget trip to Philippines under 2000 pesos per day"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                <DollarSign className="h-5 w-5" />
                Plan My Budget Trip
              </Link>
            </CardContent>
          </Card>
        </article>
      </div>
      <Footer />
    </div>
  )
}
