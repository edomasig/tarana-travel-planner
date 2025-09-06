import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Waves, Calendar, Map, Ship, Camera, Utensils } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Footer } from '@/components/footer'
import { Metadata } from 'next'
import { RelatedArticles } from '@/components/related-articles'

export const metadata: Metadata = {
  title: 'Siargao Essentials: Surf, Lagoons, and Island Hopping (4–6 Days) | GalaGPT',
  description: 'Plan Siargao the smart way—best surf seasons, 4–6 day itinerary, Sohoton & Sugba day trips, island hopping, food picks, budgets, and safety tips.',
  keywords: 'siargao travel guide, siargao itinerary, guyam daku naked islands, sohoton cove day trip, sugba lagoon siargao, siargao surf season',
}

export default function SiargaoEssentialsGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-cyan-50 to-rose-50">
      <div className="container mx-auto max-w-5xl px-4 py-8">
        <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        <article className="space-y-8">
          <Card className="overflow-hidden shadow-2xl">
            <div className="relative h-80 md:h-96">
              <Image src="/sagada.jpg" alt="Siargao islands and surf" fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center gap-2 mb-2 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>September 6, 2025 • 14 min read</span>
                </div>
                <h1 className="text-5xl font-bold mb-2">Siargao Essentials</h1>
                <p className="text-xl text-gray-200">Surf, lagoons, and island hopping—made simple</p>
              </div>
            </div>
          </Card>

          <Card>
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Siargao balances world-class surf with calm lagoons and laid-back island life. Use this to time your trip, 
                build a 4–6 day plan, and choose the right day tours.
              </p>
              <div className="bg-emerald-50 border-l-4 border-emerald-400 p-6">
                <h3 className="text-xl font-bold text-emerald-900 mb-2">Quick Links</h3>
                <ul className="text-emerald-800 space-y-1">
                  <li>• Seasons: <Link href="/blog/philippines-travel-seasons" className="underline text-blue-700">Travel Seasons</Link></li>
                  <li>• Budgets: <Link href="/blog/philippines-budget-travel-guide" className="underline text-blue-700">Budget Guide</Link></li>
                  <li>• Island hopping: <Link href="/blog/island-hopping-strategies-philippines" className="underline text-blue-700">Strategies</Link></li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">4–6 Day Plan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-lg border p-6">
                <h3 className="text-xl font-bold mb-2">Day 1: General Luna • Get Oriented</h3>
                <p className="text-sm text-gray-700">Cloud 9 sunset, boardwalk; dinner at a local eatery.</p>
              </div>
              <div className="rounded-lg border p-6">
                <h3 className="text-xl font-bold mb-2">Day 2: 3‑Island Hopping</h3>
                <p className="text-sm text-gray-700">Guyam, Daku, Naked Islands; calm seas in Amihan.</p>
              </div>
              <div className="rounded-lg border p-6">
                <h3 className="text-xl font-bold mb-2">Day 3: Sugba Lagoon & Kawhagan</h3>
                <p className="text-sm text-gray-700">Swim, SUP, and viewpoints; bring cash for fees.</p>
              </div>
              <div className="rounded-lg border p-6">
                <h3 className="text-xl font-bold mb-2">Day 4: Sohoton Cove Day Trip</h3>
                <p className="text-sm text-gray-700">Bucas Grande: caves, lagoons, and jellyfish (seasonal).</p>
              </div>
              <div className="rounded-lg border p-6">
                <h3 className="text-xl font-bold mb-2">Day 5–6: Surf & Free Day</h3>
                <p className="text-sm text-gray-700">Lessons for beginners; rent a motorbike for beaches.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Costs, Seasons, and Safety</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6 md:grid-cols-3">
              <div className="bg-white rounded-lg border p-6">
                <h4 className="font-semibold mb-2">Typical Costs</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Day tour: ₱1,200–2,500</li>
                  <li>• Motorbike: ₱400–600/day</li>
                  <li>• Surf lesson: ₱500–1,000</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg border p-6">
                <h4 className="font-semibold mb-2">Best Seasons</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Surf peak: Sep–Nov</li>
                  <li>• Calmer seas: Feb–Apr</li>
                  <li>• Fewer crowds: Jun–Oct (watch weather)</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg border p-6">
                <h4 className="font-semibold mb-2">Safety</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Wear life vests on boats</li>
                  <li>• Check surf flags; hire accredited guides</li>
                  <li>• Carry waterproof bags for electronics</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-cyan-600 to-emerald-600 text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Plan Your Siargao Trip</h2>
              <p className="text-white/90 mb-6 text-lg">Tell us your dates and interests—GalaGPT will map calm‑sea windows, surf lessons, and day tours.</p>
              <Link href="/plan" className="inline-block bg-white text-cyan-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">Start Planning</Link>
            </CardContent>
          </Card>
        </article>

        <RelatedArticles
          items={[
            { title: 'Island Hopping Strategies: Routes, Costs, and Safety', href: '/blog/island-hopping-strategies-philippines', image: '/tour-ad.png', category: 'Adventure' },
            { title: 'Philippines Travel Seasons: Month-by-Month Planner', href: '/blog/philippines-travel-seasons', image: '/manila.jpg', category: 'Travel Guides' },
            { title: 'Ultimate Filipino Food Guide', href: '/blog/ultimate-filipino-food-guide', image: '/filipino-woman-smiling.png', category: 'Food & Culture' },
          ]}
        />
      </div>
      <Footer />
    </div>
  )
}
