import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, MapPin, Clock, Star, Camera, Utensils, Building, History, Train, Shield, Wallet, Lightbulb } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Footer } from '@/components/footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Manila Travel Guide 2025: Intramuros, Food & Insider Tips | GalaGPT',
  description: 'Your ultimate guide to Manila, Philippines. Explore historic Intramuros, discover the best food in Binondo, and get insider tips for navigating the vibrant capital. Perfect for first-timers and returning visitors.',
  keywords: 'Manila travel guide, Intramuros, Binondo Chinatown, things to do in Manila, Manila food trip, Manila itinerary, Philippines travel',
  openGraph: {
    title: 'Manila Travel Guide: Old Meets New in the Heart of the Philippines',
    description: 'Navigate the capital city\'s rich history, modern attractions, and vibrant food scene with our in-depth guide.',
    images: ['/Guides_Manila.jpeg'],
  },
}

export default function ManilaGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto max-w-5xl px-4 py-8">
        <Link href="/guides" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Guides
        </Link>

        <article className="space-y-8">
          <Card className="overflow-hidden shadow-2xl">
            <div className="relative h-80 md:h-96">
              <Image
                src="/Guides_Manila.jpeg"
                alt="Jeepney in front of a modern building in Manila"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-5 w-5" />
                  <span className="text-sm font-medium">Metro Manila • Philippines</span>
                </div>
                <h1 className="text-5xl font-bold mb-2">Manila Travel Guide</h1>
                <p className="text-xl text-gray-200">Where History, Chaos, and Charm Collide</p>
              </div>
            </div>
          </Card>

          <Card id="overview">
            <CardHeader>
              <CardTitle className="text-3xl">A City of Beautiful Contradictions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                Manila gets a bad rap. Often seen as just a chaotic stopover on the way to the Philippines' famous beaches, the nation's capital is a city that rewards those who give it a chance. It's a sprawling, energetic metropolis where centuries-old churches sit in the shadow of gleaming skyscrapers, and the symphony of roaring jeepneys is the soundtrack to daily life.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                To truly experience Manila is to embrace its beautiful chaos. It's about getting lost in the cobblestone streets of a 16th-century walled city, haggling for treasures in a bustling market, and indulging in a food scene that's as diverse as its people. This guide will help you peel back the layers of this complex and captivating city.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Top Attractions: Beyond the Obvious</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-2xl font-bold mb-2 flex items-center gap-2"><History className="h-6 w-6"/>Intramuros (The Walled City)</h3>
                <p className="text-gray-700 leading-relaxed mb-4">The historic soul of Manila. This 64-hectare Spanish colonial fortress is a time capsule of a bygone era. While here, don't just see the sights; feel the history.</p>
                <h4 className="font-semibold mb-2">What to Do:</h4>
                <ul className="list-disc ml-6 text-gray-600 space-y-2">
                  <li><b>Walk the Walls:</b> For a small fee, you can walk along the top of the ancient walls, offering a unique perspective of the city inside and out.</li>
                  <li><b>Rent a Bamboo Bicycle:</b> Explore the cobblestone streets in style with a locally-made bamboo bike from Bambike Ecotours.</li>
                  <li><b>Visit San Agustin Church:</b> A UNESCO World Heritage site and one of the oldest stone churches in the Philippines. Don't miss the adjacent museum.</li>
                  <li><b>Explore Fort Santiago:</b> This is where the national hero, Dr. José Rizal, was imprisoned before his execution. The Rizal Shrine is a poignant tribute.</li>
                </ul>
                <p className="text-sm text-orange-800 bg-orange-50 p-3 rounded-md mt-4"><b>Insider Tip:</b> Visit late in the afternoon to catch the golden hour light, then head to a rooftop bar like Sky Deck at The Bayleaf for stunning sunset views over the city.</p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-2xl font-bold mb-2 flex items-center gap-2"><Camera className="h-6 w-6"/>National Museum Complex</h3>
                <p className="text-gray-700 leading-relaxed mb-4">A cluster of world-class museums that are all free to the public. It's the perfect way to spend a hot afternoon immersing yourself in Filipino art, history, and natural wonders.</p>
                <h4 className="font-semibold mb-2">The Museums:</h4>
                <ul className="list-disc ml-6 text-gray-600 space-y-2">
                  <li><b>National Museum of Fine Arts:</b> Home to Juan Luna's massive and moving "Spoliarium."</li>
                  <li><b>National Museum of Anthropology:</b> Showcases the Philippines' rich ethnographic and archaeological heritage.</li>
                  <li><b>National Museum of Natural History:</b> A beautifully restored building housing the country's diverse flora and fauna.</li>
                </ul>
                 <p className="text-sm text-green-800 bg-green-50 p-3 rounded-md mt-4"><b>Insider Tip:</b> Don't try to see all three in one day. Pick one or two to fully appreciate the exhibits. The Museum of Natural History is particularly stunning, both inside and out.</p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-2xl font-bold mb-2 flex items-center gap-2"><Utensils className="h-6 w-6"/>Binondo (The World\'s Oldest Chinatown)</h3>
                <p className="text-gray-700 leading-relaxed mb-4">Established in 1594, Binondo is a chaotic, colorful, and delicious assault on the senses. This is the place to go for an unforgettable food trip.</p>
                <h4 className="font-semibold mb-2">Must-Try Food Stops:</h4>
                <ul className="list-disc ml-6 text-gray-600 space-y-2">
                  <li><b>Dong Bei Dumplings:</b> For freshly made dumplings (get the kuchay pork).</li>
                  <li><b>Sincerity Cafe & Restaurant:</b> Famous for their fried chicken and oyster cake.</li>
                  <li><b>Eng Bee Tin:</b> The place to buy hopia (a flaky pastry with a sweet filling) and other Chinese delicacies.</li>
                </ul>
                <p className="text-sm text-purple-800 bg-purple-50 p-3 rounded-md mt-4"><b>Insider Tip:</b> The best way to experience Binondo is on an empty stomach. Join a guided food tour or simply wander the streets and sample whatever looks good. Don't be afraid to try the street food!</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Sample Itineraries</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">2-Day Historical & Foodie Tour</h4>
                <ul className="list-decimal ml-6 text-gray-600 space-y-2">
                  <li><b>Day 1:</b> Morning in Intramuros (Fort Santiago, San Agustin). Afternoon at the National Museum of Fine Arts. Sunset drinks at a rooftop bar.</li>
                  <li><b>Day 2:</b> Morning food trip in Binondo. Afternoon shopping for souvenirs at Quiapo Market. Evening exploring the modern side of Manila in BGC.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">4-Day Manila Deep Dive</h4>
                <ul className="list-decimal ml-6 text-gray-600 space-y-2">
                  <li><b>Day 1 & 2:</b> As above.</li>
                  <li><b>Day 3:</b> Day trip to Tagaytay to see the Taal Volcano.</li>
                  <li><b>Day 4:</b> Explore the trendy neighborhoods of Poblacion in Makati, visit the Ayala Museum, and enjoy a final Filipino feast.</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Navigating Manila: A Survival Guide</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2"><Train className="h-5 w-5"/>Public Transport</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li><b>Jeepneys:</b> The iconic "kings of the road." A cheap and authentic way to get around, but can be confusing for first-timers.</li>
                    <li><b>LRT/MRT:</b> The train system is a fast way to travel long distances and avoid traffic, but it gets extremely crowded during rush hour.</li>
                    <li><b>Tricycles & Pedicabs:</b> Good for short distances within a neighborhood. Always agree on the fare before you get in.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2"><Building className="h-5 w-5"/>Private Transport</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li><b>Grab:</b> The most convenient and recommended option for tourists. It's the Southeast Asian version of Uber.</li>
                    <li><b>Taxis:</b> Metered taxis are available, but always insist on using the meter.</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-yellow-800 bg-yellow-50 p-3 rounded-md mt-4"><b>Traffic Tip:</b> Traffic in Manila is notoriously bad. Plan your day to minimize travel time, and avoid traveling during rush hour (7-9 AM and 5-8 PM) if possible. Sometimes, walking is faster!</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Safety & Practical Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <Shield className="h-6 w-6 text-red-500 mt-1"/>
                <div>
                  <h4 className="font-semibold">Be Street Smart</h4>
                  <p className="text-gray-600">Like any major city, be aware of your surroundings. Keep your valuables secure and out of sight. Avoid walking in poorly lit areas at night.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Wallet className="h-6 w-6 text-blue-500 mt-1"/>
                <div>
                  <h4 className="font-semibold">Money Matters</h4>
                  <p className="text-gray-600">Credit cards are widely accepted in malls and hotels, but you'll need cash for smaller restaurants, markets, and transportation. ATMs are everywhere.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Lightbulb className="h-6 w-6 text-green-500 mt-1"/>
                <div>
                  <h4 className="font-semibold">Embrace the Culture</h4>
                  <p className="text-gray-600">Filipinos are incredibly friendly and hospitable. A smile and a polite "Salamat po" (thank you) will go a long way.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Conquer Manila?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Manila is a city that will surprise and delight you if you let it. Use our AI travel planner to create a personalized itinerary that matches your interests and travel style.
              </p>
              <Link href="/plan" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                <MapPin className="h-5 w-5" /> Plan My Manila Adventure
              </Link>
            </CardContent>
          </Card>
        </article>
      </div>
      <Footer />
    </div>
  )
}