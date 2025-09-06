import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, MapPin, Clock, Star, Camera, Plane, Hotel, Utensils, Navigation } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Footer } from '@/components/footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Complete Guide to Palawan 2025 - Philippines Last Frontier | GalaGPT',
  description: 'Discover pristine beaches, underground rivers, and hidden lagoons in Palawan. Complete travel guide with detailed itineraries, best time to visit, accommodation options, and insider tips for El Nido, Coron, and Puerto Princesa.',
  keywords: 'Palawan travel guide, El Nido, Coron, Puerto Princesa, Underground River, Philippines travel, island hopping, best beaches Palawan, travel itinerary, Palawan 2025',
  openGraph: {
    title: 'Complete Guide to Palawan - Philippines Last Frontier',
    description: 'Discover pristine beaches, underground rivers, and hidden lagoons in Palawan. Your complete travel guide with insider tips.',
    images: ['/Guides_Palawan.jpeg'],
  },
}

export default function PalawanGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto max-w-5xl px-4 py-8">
        <Link href="/guides" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Travel Guides
        </Link>

        <article className="space-y-8">
          <Card className="overflow-hidden shadow-2xl">
            <div className="relative h-80 md:h-96">
              <Image
                src="/Guides_Palawan.jpeg"
                alt="Crystal clear lagoon with limestone cliffs in Palawan, Philippines"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-5 w-5" />
                  <span className="text-sm font-medium">Mimaropa Region • Philippines</span>
                </div>
                <h1 className="text-5xl font-bold mb-2">Complete Guide to Palawan</h1>
                <p className="text-xl text-gray-200">The Philippines' Last Frontier - Pristine Paradise Awaits</p>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="text-center p-4">
              <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold">Best Duration</h3>
              <p className="text-sm text-gray-600">5-7 Days</p>
            </Card>
            <Card className="text-center p-4">
              <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
              <h3 className="font-semibold">Best Time</h3>
              <p className="text-sm text-gray-600">Nov - Apr</p>
            </Card>
            <Card className="text-center p-4">
              <Plane className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold">Getting There</h3>
              <p className="text-sm text-gray-600">Fly to Puerto Princesa</p>
            </Card>
            <Card className="text-center p-4">
              <Navigation className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h3 className="font-semibold">Top Activity</h3>
              <p className="text-sm text-gray-600">Island Hopping</p>
            </Card>
          </div>

          <Card id="overview">
            <CardHeader>
              <CardTitle className="text-3xl">Why Palawan is the Philippines' Crown Jewel</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed text-gray-700">
                Palawan, often called the Philippines' "Last Frontier," offers powder‑white beaches, dramatic limestone
                cliffs, crystal‑clear lagoons, and a UNESCO‑listed underground river. From El Nido to Coron and Puerto
                Princesa, this guide highlights the best times to visit, how to get around, and where to stay.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Must‑Visit Destinations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-bold mb-2">El Nido</h3>
                <p className="text-gray-600">Lagoons and beaches of the Bacuit Archipelago. Island hopping A–D.</p>
              </div>
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-bold mb-2">Coron</h3>
                <p className="text-gray-600">Kayangan Lake, Twin Lagoon, and WWII wreck diving.</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-bold mb-2">Puerto Princesa</h3>
                <p className="text-gray-600">Underground River, firefly watching, and city baywalk.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Planning Essentials</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2"><Plane className="h-5 w-5 text-blue-500"/> Getting There</h4>
                <p className="text-gray-600">Fly to Puerto Princesa (PPS) then van/bus to El Nido (5–6h) or fly direct to El Nido (LIO).
                Coron has its own airport (USU) from Manila/Cebu.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2"><Hotel className="h-5 w-5 text-green-500"/> Where to Stay</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Budget: hostels/guesthouses in town centers</li>
                  <li>• Mid‑range: boutique beachfront stays</li>
                  <li>• Luxury: private island and eco‑resorts</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2"><Utensils className="h-5 w-5 text-orange-500"/> Food to Try</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Fresh seafood BBQ, lato seaweed, kinilaw</li>
                  <li>• Cashew specialties; tamilok for the bold</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Budget Overview</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="text-sm text-green-800 font-semibold">Budget</div>
                <div className="text-2xl font-bold text-green-600">₱2,000–4,000</div>
                <div className="text-xs text-green-700">per day</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-sm text-blue-800 font-semibold">Mid‑Range</div>
                <div className="text-2xl font-bold text-blue-600">₱4,000–8,000</div>
                <div className="text-xs text-blue-700">per day</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <div className="text-sm text-purple-800 font-semibold">Luxury</div>
                <div className="text-2xl font-bold text-purple-600">₱8,000+</div>
                <div className="text-xs text-purple-700">per day</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Explore Palawan?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Let our AI planner build a day‑by‑day Palawan itinerary based on your dates, budget, and interests.
              </p>
              <Link href="/plan" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                <MapPin className="h-5 w-5" /> Plan My Palawan Trip
              </Link>
            </CardContent>
          </Card>
        </article>
      </div>
      <Footer />
    </div>
  )
}
