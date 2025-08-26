import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, MapPin, Clock, Star, Camera, Plane, Hotel, Utensils } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Footer } from '@/components/footer'

export default function PalawanGuidePage() {
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
                src="/placeholder.jpg"
                alt="Palawan Beaches"
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardHeader>
              <div className="flex items-center gap-2 text-blue-600 mb-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm font-medium">Islands • Palawan</span>
              </div>
              <CardTitle className="text-4xl">Complete Guide to Palawan</CardTitle>
              <div className="flex items-center gap-4 text-gray-500 text-sm">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  15 min read
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
                Palawan, often called the Philippines' "Last Frontier," is a stunning province that stretches from Mindoro to Borneo. 
                This narrow island paradise is home to pristine beaches, crystal-clear waters, underground rivers, and some of the 
                world's most beautiful islands. Whether you're seeking adventure, relaxation, or cultural experiences, Palawan offers 
                something extraordinary for every traveler.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                From the UNESCO World Heritage Underground River in Puerto Princesa to the breathtaking limestone cliffs of El Nido 
                and the pristine waters of Coron, this comprehensive guide will help you plan the perfect Palawan adventure.
              </p>
            </CardContent>
          </Card>

          {/* Quick Facts */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Quick Facts About Palawan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Geography</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Length: 425 kilometers</li>
                    <li>• Width: 8.5-40 kilometers</li>
                    <li>• Capital: Puerto Princesa</li>
                    <li>• Major islands: 1,780</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Travel Info</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Best time: November to May</li>
                    <li>• Main airport: Puerto Princesa</li>
                    <li>• Languages: Filipino, English, Cuyonon</li>
                    <li>• Currency: Philippine Peso (PHP)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Top Destinations */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Must-Visit Destinations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-bold mb-2">El Nido</h3>
                <p className="text-gray-600 mb-3">
                  Famous for its dramatic limestone cliffs, hidden lagoons, and pristine beaches. The Bacuit Archipelago 
                  offers some of the most photographed landscapes in the Philippines.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Highlights:</strong> Big Lagoon, Small Lagoon, Secret Beach, Shimizu Island
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-bold mb-2">Coron</h3>
                <p className="text-gray-600 mb-3">
                  A paradise for divers and adventure seekers, known for Japanese shipwrecks from WWII, 
                  crystal-clear freshwater lakes, and stunning limestone formations.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Highlights:</strong> Kayangan Lake, Twin Lagoon, Barracuda Lake, Japanese shipwrecks
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-bold mb-2">Puerto Princesa</h3>
                <p className="text-gray-600 mb-3">
                  The capital city and gateway to Palawan, home to the famous Underground River and 
                  serving as a base for exploring the southern part of the island.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Highlights:</strong> Underground River, City Baywalk, Iwahig Firefly Watching
                </div>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-bold mb-2">San Vicente</h3>
                <p className="text-gray-600 mb-3">
                  Home to Long Beach, the longest white sand beach in the Philippines, offering a more 
                  secluded and peaceful alternative to other tourist destinations.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Highlights:</strong> Long Beach (14.7 km), Port Barton, Turtle watching
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Activities */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Things to Do in Palawan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Camera className="h-5 w-5 text-blue-500" />
                    Adventure Activities
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Island hopping tours</li>
                    <li>• Scuba diving and snorkeling</li>
                    <li>• Underground river exploration</li>
                    <li>• Rock climbing and rappelling</li>
                    <li>• Kayaking through lagoons</li>
                    <li>• Zip-lining adventures</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Star className="h-5 w-5 text-green-500" />
                    Cultural Experiences
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Tagbanua tribal village visits</li>
                    <li>• Traditional fishing experiences</li>
                    <li>• Local handicraft workshops</li>
                    <li>• Firefly watching tours</li>
                    <li>• Mangrove ecosystem tours</li>
                    <li>• Wildlife sanctuary visits</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Practical Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Planning Your Visit</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Plane className="h-5 w-5 text-blue-500" />
                  Getting There
                </h4>
                <p className="text-gray-600 mb-2">
                  Puerto Princesa Airport (PPS) is the main gateway to Palawan with direct flights from Manila, Cebu, 
                  Clark, and Iloilo. For El Nido, you can fly directly to Lio Airport or take a bus from Puerto Princesa 
                  (approximately 5-6 hours).
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm"><strong>Pro Tip:</strong> Book flights in advance for better rates, especially during peak season (December-May).</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Hotel className="h-5 w-5 text-green-500" />
                  Where to Stay
                </h4>
                <div className="space-y-3">
                  <div className="border rounded-lg p-4">
                    <h5 className="font-medium">Budget (₱1,000-3,000/night)</h5>
                    <p className="text-sm text-gray-600">Hostels, guesthouses, and basic beach resorts</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h5 className="font-medium">Mid-Range (₱3,000-8,000/night)</h5>
                    <p className="text-sm text-gray-600">Boutique hotels, beachfront resorts with amenities</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h5 className="font-medium">Luxury (₱8,000+/night)</h5>
                    <p className="text-sm text-gray-600">5-star resorts, overwater bungalows, private islands</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Utensils className="h-5 w-5 text-orange-500" />
                  Local Cuisine
                </h4>
                <p className="text-gray-600 mb-3">
                  Palawan's cuisine reflects its coastal location and diverse cultural influences. Don't miss these local specialties:
                </p>
                <ul className="grid md:grid-cols-2 gap-2 text-gray-600">
                  <li>• Tamilok (woodworm delicacy)</li>
                  <li>• Lato seaweed salad</li>
                  <li>• Crocodile sisig</li>
                  <li>• Fresh seafood BBQ</li>
                  <li>• Cashew products</li>
                  <li>• Balut (duck embryo)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Budget Guide */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Budget Planning</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800">Budget Travel</h4>
                    <p className="text-2xl font-bold text-green-600">₱2,000-4,000</p>
                    <p className="text-sm text-green-700">per day</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800">Mid-Range</h4>
                    <p className="text-2xl font-bold text-blue-600">₱4,000-8,000</p>
                    <p className="text-sm text-blue-700">per day</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800">Luxury</h4>
                    <p className="text-2xl font-bold text-purple-600">₱8,000+</p>
                    <p className="text-sm text-purple-700">per day</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Note:</strong> Prices include accommodation, meals, transportation, and activities. 
                    Flights to/from Palawan are additional.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Explore Palawan?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Let our AI travel planner create a personalized Palawan itinerary based on your interests, 
                budget, and travel dates. Get detailed day-by-day plans with insider tips!
              </p>
              <Link 
                href="/chat?prompt=Plan a trip to Palawan"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <MapPin className="h-5 w-5" />
                Plan My Palawan Trip
              </Link>
            </CardContent>
          </Card>
        </article>
      </div>
      <Footer />
    </div>
  )
}
