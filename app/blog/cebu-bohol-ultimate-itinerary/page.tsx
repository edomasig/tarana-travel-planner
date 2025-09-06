import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Map, Calendar, Clock, Waves, Ship, Landmark, Utensils } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Footer } from '@/components/footer'
import { Metadata } from 'next'
import { RelatedArticles } from '@/components/related-articles'

export const metadata: Metadata = {
  title: 'Cebu–Bohol Ultimate Itinerary (5–7 Days): Ferries, Highlights, and Costs | GalaGPT',
  description: 'A complete Cebu–Bohol combo guide: ferries, day-by-day routes, best island hopping, top sights (Balicasag, Chocolate Hills), food stops, and budget ranges with planner CTA.',
  keywords: 'cebu bohol itinerary, cebu to bohol ferry, balicasag snorkeling, chocolate hills trip, panglao island hopping, cebu food guide',
}

export default function CebuBoholUltimateItineraryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-amber-50 to-emerald-50">
      <div className="container mx-auto max-w-5xl px-4 py-8">
        <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        <article className="space-y-8">
          <Card className="overflow-hidden shadow-2xl">
            <div className="relative h-80 md:h-96">
              <Image src="/iloilo.jpg" alt="Cebu and Bohol island scenes" fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center gap-2 mb-2 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>September 6, 2025 • 15 min read</span>
                </div>
                <h1 className="text-5xl font-bold mb-2">Cebu–Bohol Ultimate Itinerary</h1>
                <p className="text-xl text-gray-200">Ferries, highlights, and island hopping made easy</p>
              </div>
            </div>
          </Card>

          <Card>
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Pairing Cebu and Bohol gives you city energy, heritage spots, and world-class island hopping in one trip. 
                Use this plan to time ferries, pick the right beaches, and budget your days without stress.
              </p>
              <div className="bg-sky-50 border-l-4 border-sky-400 p-6">
                <h3 className="text-xl font-bold text-sky-900 mb-2">Quick Links</h3>
                <ul className="text-sky-800 space-y-1">
                  <li>• When to go: <Link href="/blog/philippines-travel-seasons" className="underline text-blue-700">Travel Seasons</Link></li>
                  <li>• Costs: <Link href="/blog/philippines-budget-travel-guide" className="underline text-blue-700">Budget Guide</Link></li>
                  <li>• Food stops: <Link href="/blog/ultimate-filipino-food-guide" className="underline text-blue-700">Food Guide</Link></li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-2"><Map className="h-7 w-7 text-emerald-700"/> 5–7 Day Plan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-lg border p-6">
                <h3 className="text-xl font-bold mb-2">Day 1: Cebu City Warm‑Up</h3>
                <p className="text-sm text-gray-700">Magellan’s Cross, Sto. Niño Basilica; lechon dinner and night market.</p>
              </div>
              <div className="rounded-lg border p-6">
                <h3 className="text-xl font-bold mb-2">Day 2: Ferry to Bohol • Panglao</h3>
                <p className="text-sm text-gray-700">Check in, Alona Beach sunset; seafood sutukil.</p>
              </div>
              <div className="rounded-lg border p-6">
                <h3 className="text-xl font-bold mb-2">Day 3: Balicasag Snorkeling + Virgin Island</h3>
                <p className="text-sm text-gray-700">Island hopping day tour; turtles, corals, sandbar.</p>
              </div>
              <div className="rounded-lg border p-6">
                <h3 className="text-xl font-bold mb-2">Day 4: Chocolate Hills + Loboc River</h3>
                <p className="text-sm text-gray-700">Viewpoints, tarsiers, and river cruise lunch.</p>
              </div>
              <div className="rounded-lg border p-6">
                <h3 className="text-xl font-bold mb-2">Day 5: Panglao Free Day</h3>
                <p className="text-sm text-gray-700">Beach hopping or dive; cafe crawl.</p>
              </div>
              <div className="rounded-lg border p-6">
                <h3 className="text-xl font-bold mb-2">Day 6–7: Back to Cebu • Mactan or South</h3>
                <p className="text-sm text-gray-700">Beach day in Mactan or explore Moalboal (sardines, Kawasan falls).</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Ferries, Costs, and Tips</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6 md:grid-cols-3">
              <div className="bg-white rounded-lg border p-6">
                <h4 className="font-semibold mb-2">Ferry Basics</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Cebu ↔ Bohol fast craft ~2 hours</li>
                  <li>• Book early for morning crossings</li>
                  <li>• Seas calmer in Amihan (Nov–Apr)</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg border p-6">
                <h4 className="font-semibold mb-2">Typical Costs</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Ferry: ₱700–1,500 one-way</li>
                  <li>• Island hopping: ₱1,200–2,500</li>
                  <li>• Private van (split): ₱3,000–5,000</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg border p-6">
                <h4 className="font-semibold mb-2">Save More</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Travel weekdays; bundle tours</li>
                  <li>• Choose shared bangka day tours</li>
                  <li>• Stay near ports to cut transfers</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-emerald-600 to-sky-600 text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Plan Your Cebu–Bohol Combo</h2>
              <p className="text-white/90 mb-6 text-lg">Tell us your dates and budget—GalaGPT will time ferries, pick calm‑sea windows, and map day‑by‑day stops.</p>
              <Link href="/plan" className="inline-block bg-white text-emerald-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">Start Planning</Link>
            </CardContent>
          </Card>
        </article>

        <RelatedArticles
          items={[
            { title: 'Island Hopping Strategies: Routes, Costs, and Safety', href: '/blog/island-hopping-strategies-philippines', image: '/tour-ad.png', category: 'Adventure' },
            { title: 'Philippines Travel Seasons: Month-by-Month Planner', href: '/blog/philippines-travel-seasons', image: '/manila.jpg', category: 'Travel Guides' },
            { title: 'Philippines Budget Travel Guide: Under ₱2,000/Day', href: '/blog/philippines-budget-travel-guide', image: '/manila.jpg', category: 'Budget Travel' },
          ]}
        />
      </div>
      <Footer />
    </div>
  )
}
