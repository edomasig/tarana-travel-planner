import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Calendar, Sun, CloudRain, Wind, Waves, Mountain, MapPinned } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Footer } from '@/components/footer'
import { RelatedArticles } from '@/components/related-articles'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Philippines Travel Seasons 2025: Regional Planner by Month | GalaGPT',
  description: 'Plan your Philippines trip by season and region. Month-by-month weather, crowd levels, and best activities for Luzon, Visayas, and Mindanao with practical timing tips.',
  keywords: 'Philippines travel seasons, when to visit Philippines by region, Philippines weather by month, Luzon Visayas Mindanao best time',
}

export default function PhilippinesTravelSeasonsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-blue-50 to-emerald-50">
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
                src="/manila.jpg"
                alt="Seasonal travel in the Philippines with beaches, mountains, and islands"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center gap-2 mb-2 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>September 6, 2025 • 14 min read</span>
                </div>
                <h1 className="text-5xl font-bold mb-2">Philippines Travel Seasons</h1>
                <p className="text-xl text-gray-200">A Regional, Month‑by‑Month Planner for Luzon, Visayas, Mindanao</p>
              </div>
            </div>
          </Card>

          {/* Intro */}
          <Card>
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                The Philippines is not one-size-fits-all when it comes to weather. While the classic advice is to
                visit between November and April, the reality is more nuanced across its 7,000+ islands. Use this
                regional, month-by-month guide to pick the right destination for the season—so your trip matches
                your goals, whether that’s island hopping, surfing, diving, hiking, or festivals.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg border p-4 bg-white">
                  <div className="flex items-center gap-2 font-semibold text-amber-700"><Sun className="h-5 w-5"/> Dry season</div>
                  <p className="text-sm text-amber-800 mt-1">Nov–Apr generally drier; coolest Dec–Feb.</p>
                </div>
                <div className="rounded-lg border p-4 bg-white">
                  <div className="flex items-center gap-2 font-semibold text-blue-700"><CloudRain className="h-5 w-5"/> Wet season</div>
                  <p className="text-sm text-blue-800 mt-1">May–Oct; heaviest rain Aug–Oct west, Dec–Jan east.</p>
                </div>
                <div className="rounded-lg border p-4 bg-white">
                  <div className="flex items-center gap-2 font-semibold text-emerald-700"><Wind className="h-5 w-5"/> Monsoons</div>
                  <p className="text-sm text-emerald-800 mt-1">Amihan (NE) Nov–Apr; Habagat (SW) May–Oct.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Regional Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Regional Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-lg border p-6">
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><MapPinned className="h-5 w-5 text-blue-600"/> Luzon</h3>
                  <p className="text-sm text-gray-700">West coast (Manila, Palawan west) has distinct dry Nov–Apr. Mountain areas (Baguio) are cooler year-round.</p>
                </div>
                <div className="rounded-lg border p-6">
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><Waves className="h-5 w-5 text-emerald-600"/> Visayas</h3>
                  <p className="text-sm text-gray-700">Central pattern with a short dry season; great year-round windows vary by island (Cebu, Bohol, Boracay).</p>
                </div>
                <div className="rounded-lg border p-6">
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><Mountain className="h-5 w-5 text-purple-600"/> Mindanao</h3>
                  <p className="text-sm text-gray-700">Eastern areas get more rain Dec–Jan; Siargao surf peaks Sep–Nov; dry windows Feb–Apr for island hopping.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Month-by-Month by Region */}
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Month‑by‑Month Planner</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* Dec–Feb */}
                <div className="rounded-lg border bg-green-50 p-6">
                  <h3 className="text-2xl font-bold text-green-800 mb-3">December – February</h3>
                  <div className="grid gap-6 md:grid-cols-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">Luzon</h4>
                      <ul className="text-sm text-gray-700 space-y-1 mt-2">
                        <li>• Manila, Subic, Zambales: driest, best city/beach weather</li>
                        <li>• Baguio/Sagada: cool, clear mornings; perfect for hiking</li>
                        <li>• Palawan (El Nido/Coron west): prime island‑hopping</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Visayas</h4>
                      <ul className="text-sm text-gray-700 space-y-1 mt-2">
                        <li>• Boracay: calm White Beach (Amihan), excellent visibility</li>
                        <li>• Cebu/Bohol: great for diving/snorkeling, whale shark sightings</li>
                        <li>• Iloilo/Negros: comfortable city/culture trips</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Mindanao</h4>
                      <ul className="text-sm text-gray-700 space-y-1 mt-2">
                        <li>• Siargao: drier by Feb, island hopping improves</li>
                        <li>• Davao: pleasant city weather, Mt. Apo treks begin</li>
                        <li>• Cagayan de Oro: river activities, adventure sports</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Mar–May */}
                <div className="rounded-lg border bg-orange-50 p-6">
                  <h3 className="text-2xl font-bold text-orange-800 mb-3">March – May</h3>
                  <div className="grid gap-6 md:grid-cols-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">Luzon</h4>
                      <ul className="text-sm text-gray-700 space-y-1 mt-2">
                        <li>• Very hot in Manila/lowlands; plan early activities</li>
                        <li>• Baguio/Sagada: best escape from heat</li>
                        <li>• Palawan: peak beach season; book boats early</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Visayas</h4>
                      <ul className="text-sm text-gray-700 space-y-1 mt-2">
                        <li>• Boracay: sunny beach days; more crowds</li>
                        <li>• Cebu/Bohol: clear seas, summer festivals</li>
                        <li>• Dumaguete/Siquijor: excellent for snorkeling</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Mindanao</h4>
                      <ul className="text-sm text-gray-700 space-y-1 mt-2">
                        <li>• Siargao: calmer seas by April for island hopping</li>
                        <li>• Davao: fruit season begins, outdoor adventures</li>
                        <li>• Camiguin: best for White Island sandbar</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Jun–Aug */}
                <div className="rounded-lg border bg-blue-50 p-6">
                  <h3 className="text-2xl font-bold text-blue-800 mb-3">June – August</h3>
                  <div className="grid gap-6 md:grid-cols-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">Luzon</h4>
                      <ul className="text-sm text-gray-700 space-y-1 mt-2">
                        <li>• Rains intensify west; expect afternoon downpours</li>
                        <li>• Mountain trails lush but muddy; watch for landslides</li>
                        <li>• Fewer crowds, better accommodation rates</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Visayas</h4>
                      <ul className="text-sm text-gray-700 space-y-1 mt-2">
                        <li>• Variable by island; Cebu/Bohol manageable</li>
                        <li>• Waterfalls at full flow; great for canyoneering</li>
                        <li>• Typhoon watch begins; flexible plans help</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Mindanao</h4>
                      <ul className="text-sm text-gray-700 space-y-1 mt-2">
                        <li>• Early surf pulses for Siargao</li>
                        <li>• Inland adventures benefit from greenery</li>
                        <li>• Check ferry/flight advisories during storms</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Sep–Nov */}
                <div className="rounded-lg border bg-purple-50 p-6">
                  <h3 className="text-2xl font-bold text-purple-800 mb-3">September – November</h3>
                  <div className="grid gap-6 md:grid-cols-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">Luzon</h4>
                      <ul className="text-sm text-gray-700 space-y-1 mt-2">
                        <li>• Peak rain and typhoon risk west; travel is cheaper</li>
                        <li>• Palawan sees improving weather by late Nov</li>
                        <li>• Manila: indoor attractions shine</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Visayas</h4>
                      <ul className="text-sm text-gray-700 space-y-1 mt-2">
                        <li>• Mixed conditions; Boracay wind shifts (Habagat → Amihan)</li>
                        <li>• Great deals on accommodation and tours</li>
                        <li>• Festivals return as weather stabilizes</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Mindanao</h4>
                      <ul className="text-sm text-gray-700 space-y-1 mt-2">
                        <li>• Siargao surf peak Sep–Nov (advanced surfers)</li>
                        <li>• Inland Mindanao pleasant by late Oct/Nov</li>
                        <li>• Monitor storms; keep buffer days</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Practical Timing Tips */}
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Practical Timing Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border p-6 bg-white">
                  <h3 className="text-xl font-bold mb-3">By Activity</h3>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Island hopping: Nov–Apr (calmer seas, clearer skies)</li>
                    <li>• Diving: Dec–May (best visibility); Apo Reef/Tubbataha peak Mar–Jun</li>
                    <li>• Surfing: Siargao Sep–Nov; La Union Nov–Mar</li>
                    <li>• Hiking: Dec–Feb (cool, clear mornings)</li>
                    <li>• Festivals: Jan–Feb (Sinulog, Ati‑Atihan, Panagbenga)</li>
                  </ul>
                </div>
                <div className="rounded-lg border p-6 bg-white">
                  <h3 className="text-xl font-bold mb-3">By Travel Style</h3>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Budget: Jun–Nov for lower rates, but add buffer days</li>
                    <li>• Family: Dec–Apr for predictable weather, book early</li>
                    <li>• Adventure: Sep–Nov for surf/waterfalls, flexible plans</li>
                    <li>• Photography: Dec–Feb for crisp light and clear horizons</li>
                    <li>• Remote work/slow travel: Jan–Mar shoulder of peak season</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Time Your Trip with Precision</h2>
              <p className="text-blue-50 mb-6 text-lg">
                Use GalaGPT to generate a season‑aware itinerary. We’ll match your dates to the best regions and
                activities, avoid storm‑prone windows, and optimize for budget or comfort.
              </p>
              <Link 
                href="/plan" 
                className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Build My Season‑Smart Plan
              </Link>
            </CardContent>
          </Card>
        </article>
        <RelatedArticles
          items={[
            { title: 'Island Hopping Strategies: Routes, Costs, and Safety', href: '/blog/island-hopping-strategies-philippines', image: '/tour-ad.png', category: 'Adventure' },
            { title: 'Philippines Budget Travel Guide: Under ₱2,000/Day', href: '/blog/philippines-budget-travel-guide', image: '/manila.jpg', category: 'Budget Travel' },
            { title: 'Cebu–Bohol Ultimate Itinerary (5–7 Days)', href: '/blog/cebu-bohol-ultimate-itinerary', image: '/iloilo.jpg', category: 'Travel Guides' },
          ]}
        />
      </div>
      <Footer />
    </div>
  )
}
