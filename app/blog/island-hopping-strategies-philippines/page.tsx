import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Ship, Waves, Map, Calendar, Clock, Compass, Anchor } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Footer } from '@/components/footer'
import { RelatedArticles } from '@/components/related-articles'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Island Hopping Strategies Philippines 2025: Routes, Costs, and Safety | GalaGPT',
  description: 'Plan smarter island hopping in Palawan, Cebu, Bohol, and Siargao. Routes, ferry vs. bangka tips, costs, weather windows, and safety essentials with sample 5–7 day routes.',
  keywords: 'island hopping philippines, palawan island hopping, cebu bohol route, bangka ferry tips, island hopping costs, safety',
}

export default function IslandHoppingStrategiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-cyan-50 to-emerald-50">
      <div className="container mx-auto max-w-5xl px-4 py-8">
        <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        <article className="space-y-8">
          <Card className="overflow-hidden shadow-2xl">
            <div className="relative h-80 md:h-96">
              <Image src="/tour-ad.png" alt="Island hopping boats in the Philippines" fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center gap-2 mb-2 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>September 6, 2025 • 15 min read</span>
                </div>
                <h1 className="text-5xl font-bold mb-2">Island Hopping Strategies</h1>
                <p className="text-xl text-gray-200">Routes, costs, weather windows, and safety essentials</p>
              </div>
            </div>
          </Card>

          {/* Intro */}
          <Card>
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                With 7,000+ islands, island hopping is the Philippines at its best. Use this guide to choose the right routes, 
                find the best value tours, time crossings for calm seas, and stay safe—so you see more for less.
              </p>
              <div className="bg-sky-50 border-l-4 border-sky-400 p-6">
                <h3 className="text-xl font-bold text-sky-900 mb-2">Quick Links</h3>
                <ul className="text-sky-800 space-y-1">
                  <li>• See seasonal timing: <Link href="/blog/philippines-travel-seasons" className="underline text-blue-700">Philippines Travel Seasons</Link></li>
                  <li>• Budget daily costs: <Link href="/blog/philippines-budget-travel-guide" className="underline text-blue-700">Budget Travel Guide</Link></li>
                  <li>• Plan with AI: Jump to the CTA below</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Routes */}
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-2"><Compass className="h-7 w-7 text-emerald-600"/> Sample 5–7 Day Routes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-lg border p-6">
                <h3 className="text-xl font-bold mb-2">Palawan Highlights (El Nido ↔ Coron)</h3>
                <p className="text-sm text-gray-700 mb-2">Day trips (Tours A–D) + 3D/2N expedition boats between El Nido and Coron.</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Day 1–2: El Nido Tours A & B</li>
                  <li>• Day 3–4: Expedition boat to Coron (camping on islands)</li>
                  <li>• Day 5–6: Coron lakes and wrecks; island hopping day tour</li>
                </ul>
              </div>
              <div className="rounded-lg border p-6">
                <h3 className="text-xl font-bold mb-2">Cebu → Bohol Loop</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Day 1: Cebu City → Lapu-Lapu beach day</li>
                  <li>• Day 2: Ferry to Bohol; Panglao island hopping</li>
                  <li>• Day 3: Chocolate Hills + Loboc river cruise</li>
                  <li>• Day 4: Balicasag snorkeling; return ferry</li>
                </ul>
              </div>
              <div className="rounded-lg border p-6">
                <h3 className="text-xl font-bold mb-2">Siargao & Nearby Islets</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Day 1: Guyam, Daku, Naked Islands</li>
                  <li>• Day 2: Sohoton Cove day trip (Bucas Grande)</li>
                  <li>• Day 3: Sugba Lagoon & Kawhagan Island</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Costs & Safety */}
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Costs, Boats, and Safety</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6 md:grid-cols-3">
              <div className="bg-white rounded-lg border p-6">
                <h4 className="font-semibold mb-2">Typical Costs</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Day tour: ₱1,200–2,500 (incl. lunch)</li>
                  <li>• Private boat (split): ₱6,000–10,000</li>
                  <li>• Expedition boat (3D/2N): ₱12,000–22,000</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg border p-6">
                <h4 className="font-semibold mb-2">Boat Types</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Bangka (outrigger): island hopping classics</li>
                  <li>• Ferry/fastcraft: inter‑island crossings</li>
                  <li>• Speedboat: weather‑flexible but pricier</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg border p-6">
                <h4 className="font-semibold mb-2">Safety</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Check weather (Amihan/Habagat) and coastguard advisories</li>
                  <li>• Life vests on; avoid overcrowded boats</li>
                  <li>• Waterproof bags; protect electronics</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="bg-gradient-to-r from-sky-600 to-emerald-600 text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Design Your Island Route</h2>
              <p className="text-sky-50 mb-6 text-lg">Tell us your dates, budget, and swim/snorkel comfort level—GalaGPT will pick calm‑sea windows and value routes.</p>
              <Link href="/plan" className="inline-block bg-white text-sky-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">Plan My Island Hopping</Link>
            </CardContent>
          </Card>
        </article>
        <RelatedArticles
          items={[
            { title: 'Philippines Travel Seasons: Month-by-Month Planner', href: '/blog/philippines-travel-seasons', image: '/manila.jpg', category: 'Travel Guides' },
            { title: 'Philippines Budget Travel Guide: Under ₱2,000/Day', href: '/blog/philippines-budget-travel-guide', image: '/manila.jpg', category: 'Budget Travel' },
            { title: 'Ultimate Filipino Food Guide', href: '/blog/ultimate-filipino-food-guide', image: '/filipino-woman-smiling.png', category: 'Food & Culture' },
          ]}
        />
      </div>
      <Footer />
    </div>
  )
}
