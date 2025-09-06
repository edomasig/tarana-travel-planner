import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Utensils, MapPin, Calendar, Clock, ChefHat, Soup, Salad } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Footer } from '@/components/footer'
import { RelatedArticles } from '@/components/related-articles'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ultimate Filipino Food Guide 2025: Regional Dishes, Where to Eat, and Budget Tips | GalaGPT',
  description: 'A comprehensive guide to Filipino cuisine across Luzon, Visayas, and Mindanao. Discover regional specialties, market tips, karinderia hacks, and sample foodie itineraries—on any budget.',
  keywords: 'Filipino food guide, best Filipino dishes, regional Filipino cuisine, where to eat Philippines, karinderia, markets, food itinerary',
}

export default function UltimateFilipinoFoodGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-rose-50 to-amber-50">
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
                src="/filipino-woman-smiling.png"
                alt="Filipino food guide collage"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center gap-2 mb-2 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>September 6, 2025 • 16 min read</span>
                </div>
                <h1 className="text-5xl font-bold mb-2">Ultimate Filipino Food Guide</h1>
                <p className="text-xl text-gray-200">Regional dishes, where to eat, and how to eat well on any budget</p>
              </div>
            </div>
          </Card>

          {/* Intro */}
          <Card>
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Filipino cuisine is hearty, inventive, and deeply regional. From vinegar-bright adobos to coconut-rich Bicolano 
                stews, the best way to understand the Philippines is to eat your way across its islands. This guide breaks down 
                the must-try dishes by region, where to find the most authentic versions, and how to enjoy them without overspending.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-2">Quick Links</h3>
                <ul className="text-amber-800 space-y-1">
                  <li>• Street eats? See our <Link className="text-blue-700 underline" href="/blog/filipino-street-food-guide">Filipino Street Food Guide</Link></li>
                  <li>• Planning by season? Check <Link className="text-blue-700 underline" href="/blog/philippines-travel-seasons">Philippines Travel Seasons</Link></li>
                  <li>• Building a foodie itinerary? Use the planner below</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Regional */}
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-2"><ChefHat className="h-7 w-7 text-orange-600"/> Regional Highlights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-lg border p-6">
                  <h3 className="text-xl font-bold mb-2">Luzon</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Adobo (Manila)</li>
                    <li>• Laing & Bicol Express (Bicol)</li>
                    <li>• Pinikpikan (Cordillera)</li>
                    <li>• Pancit Batil Patong (Cagayan)</li>
                  </ul>
                </div>
                <div className="rounded-lg border p-6">
                  <h3 className="text-xl font-bold mb-2">Visayas</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Lechon Cebu</li>
                    <li>• La Paz Batchoy (Iloilo)</li>
                    <li>• Kansi (Negros)</li>
                    <li>• Binakol (Aklan)</li>
                  </ul>
                </div>
                <div className="rounded-lg border p-6">
                  <h3 className="text-xl font-bold mb-2">Mindanao</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Pastil (Maguindanao)</li>
                    <li>• Tiyula Itum (Tawi-Tawi)</li>
                    <li>• Satti (Zamboanga)</li>
                    <li>• Durian treats (Davao)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg border p-6">
                <h3 className="text-2xl font-bold mb-3">Where to Eat</h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold mb-2">Karinderias & Markets</h4>
                    <p className="text-sm text-gray-700">Your best value for authentic flavors. Look for high turnover, clean steam trays, and locals eating.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Food Streets & Night Markets</h4>
                    <p className="text-sm text-gray-700">Great for variety: Maginhawa (QC), Sugbo Mercado (Cebu), Roxas Night Market (Davao).</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Budgets */}
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Eating on a Budget</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="text-sm text-green-800 font-semibold">Ultra Budget</div>
                  <div className="text-2xl font-bold text-green-600">₱150–300</div>
                  <div className="text-xs text-green-700">per day</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-sm text-blue-800 font-semibold">Comfort Budget</div>
                  <div className="text-2xl font-bold text-blue-600">₱300–600</div>
                  <div className="text-xs text-blue-700">per day</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="text-sm text-purple-800 font-semibold">Foodie Splurge</div>
                  <div className="text-2xl font-bold text-purple-600">₱600–1,200</div>
                  <div className="text-xs text-purple-700">per day</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sample Itinerary */}
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">3‑Day Foodie Itinerary (Manila → Cebu)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <div>
                <h4 className="font-semibold">Day 1: Manila</h4>
                <p className="text-sm">Binondo food walk, adobo tasting, halo‑halo dessert run.</p>
              </div>
              <div>
                <h4 className="font-semibold">Day 2: Cebu</h4>
                <p className="text-sm">Lechon crawl, puso (hanging rice), seafood sutukil by the shore.</p>
              </div>
              <div>
                <h4 className="font-semibold">Day 3: Cebu Night Market</h4>
                <p className="text-sm">Sugbo Mercado: grilled skewers, local desserts, and fruit shakes.</p>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="bg-gradient-to-r from-orange-600 to-pink-600 text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Build Your Foodie Itinerary</h2>
              <p className="text-orange-100 mb-6 text-lg">Tell us your budget and preferred regions—GalaGPT will map markets, karinderias, and must‑try dishes into a day‑by‑day plan.</p>
              <Link href="/plan" className="inline-block bg-white text-orange-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">Plan My Food Trip</Link>
            </CardContent>
          </Card>
        </article>
        <RelatedArticles
          items={[
            { title: 'Filipino Street Food Guide', href: '/blog/filipino-street-food-guide', image: '/food-ad.png', category: 'Food & Culture' },
            { title: 'Philippines Travel Seasons: Month-by-Month Planner', href: '/blog/philippines-travel-seasons', image: '/manila.jpg', category: 'Travel Guides' },
            { title: 'Philippines Budget Travel Guide: Under ₱2,000/Day', href: '/blog/philippines-budget-travel-guide', image: '/manila.jpg', category: 'Budget Travel' },
          ]}
        />
      </div>
      <Footer />
    </div>
  )
}
