import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Sparkles, Calendar, MapPin, Heart, Music2, Landmark, BookOpen } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Footer } from '@/components/footer'
import { RelatedArticles } from '@/components/related-articles'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cultural Experiences in the Philippines: Festivals, History, and Local Life | GalaGPT',
  description: 'Discover the Philippines through festivals, heritage towns, and local life. Month-by-month festival calendar, respectful travel tips, and links to plan by season and budget.',
  keywords: 'philippines culture, festivals philippines, local life philippines, heritage towns, cultural travel philippines',
}

export default function CulturalExperiencesPhilippinesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-amber-50 to-emerald-50">
      <div className="container mx-auto max-w-5xl px-4 py-8">
        <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        <article className="space-y-8">
          <Card className="overflow-hidden shadow-2xl">
            <div className="relative h-80 md:h-96">
              <Image src="/Baguio_Session_Road_(Baguio_City;_12-04-2022).jpg" alt="Philippine festival street scene" fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center gap-2 mb-2 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>September 6, 2025 • 16 min read</span>
                </div>
                <h1 className="text-5xl font-bold mb-2">Cultural Experiences in the Philippines</h1>
                <p className="text-xl text-gray-200">Festivals, history, and everyday life—travel with respect</p>
              </div>
            </div>
          </Card>

          {/* Intro */}
          <Card>
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                The Philippines blends indigenous traditions, Spanish heritage, and modern vibrancy. Plan your trip around festivals, visit heritage towns, and connect with locals—this guide shows you how.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-2">Plan by Season and Budget</h3>
                <ul className="text-amber-800 space-y-1">
                  <li>• When to go: <Link href="/blog/philippines-travel-seasons" className="underline text-blue-700">Philippines Travel Seasons</Link></li>
                  <li>• What it costs: <Link href="/blog/philippines-budget-travel-guide" className="underline text-blue-700">Budget Travel Guide</Link></li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Festivals calendar */}
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-2"><Music2 className="h-7 w-7 text-rose-600"/> Month‑by‑Month Festivals</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
              <div className="rounded-lg border p-6">
                <h4 className="font-semibold mb-2">January – Sinulog (Cebu), Ati‑Atihan (Kalibo)</h4>
                <p className="text-sm text-gray-700">Street parades, drums, devotion. Book early; prime weather window.</p>
              </div>
              <div className="rounded-lg border p-6">
                <h4 className="font-semibold mb-2">February – Panagbenga (Baguio)</h4>
                <p className="text-sm text-gray-700">Flower floats and cool mountain air; pair with Northern Luzon road trip.</p>
              </div>
              <div className="rounded-lg border p-6">
                <h4 className="font-semibold mb-2">April/May – Moriones (Marinduque), Flores de Mayo</h4>
                <p className="text-sm text-gray-700">Lenten pageantry, community feasts; warmer temps, dry season ends.</p>
              </div>
              <div className="rounded-lg border p-6">
                <h4 className="font-semibold mb-2">June – Pintados‑Kasadyaan (Tacloban)</h4>
                <p className="text-sm text-gray-700">Body‑painting traditions; start of rains—check forecasts.</p>
              </div>
              <div className="rounded-lg border p-6">
                <h4 className="font-semibold mb-2">August – Kadayawan (Davao)</h4>
                <p className="text-sm text-gray-700">Bounty festivals; fruits in season, vibrant cultural showcases.</p>
              </div>
              <div className="rounded-lg border p-6">
                <h4 className="font-semibold mb-2">November – Higantes (Angono)</h4>
                <p className="text-sm text-gray-700">Folk art giants; great Manila side trip with museums.</p>
              </div>
              <div className="rounded-lg border p-6 md:col-span-2">
                <h4 className="font-semibold mb-2">December – Christmas Season Nationwide</h4>
                <p className="text-sm text-gray-700">Parols, dawn masses, family gatherings—expect peak travel volume.</p>
              </div>
            </CardContent>
          </Card>

          {/* Heritage & Local Life */}
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-2"><Landmark className="h-7 w-7 text-emerald-700"/> Heritage Towns & Local Life</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-lg border p-6">
                <h3 className="text-xl font-bold mb-2">Where to Go</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Vigan – Spanish colonial streets</li>
                  <li>• Intramuros – Manila’s walled city and museums</li>
                  <li>• Taal – Heritage homes and lake views</li>
                  <li>• Iloilo – Churches, Esplanade, and food culture</li>
                </ul>
              </div>
              <div className="rounded-lg border p-6">
                <h3 className="text-xl font-bold mb-2">Respectful Travel Tips</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Ask before photos; be mindful in religious spaces</li>
                  <li>• Dress modestly at churches and ceremonies</li>
                  <li>• Support community‑run tours and artisans</li>
                </ul>
              </div>
              <div className="rounded-lg border p-6">
                <h3 className="text-xl font-bold mb-2">Eat Like a Local</h3>
                <p className="text-sm text-gray-700 mb-2">Understand regional cuisine before you go:</p>
                <ul className="text-sm text-blue-700 space-y-1 underline">
                  <li>• <Link href="/blog/ultimate-filipino-food-guide">Ultimate Filipino Food Guide</Link></li>
                  <li>• <Link href="/blog/filipino-street-food-guide">Filipino Street Food Guide</Link></li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="bg-gradient-to-r from-rose-600 to-emerald-600 text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Plan a Culture‑Forward Trip</h2>
              <p className="text-white/90 mb-6 text-lg">Share your dates and interests—GalaGPT will align festivals, heritage stops, and budgets for your route.</p>
              <Link href="/plan" className="inline-block bg-white text-rose-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">Start Planning</Link>
            </CardContent>
          </Card>
        </article>
        <RelatedArticles
          items={[
            { title: 'Philippines Travel Seasons: Month-by-Month Planner', href: '/blog/philippines-travel-seasons', image: '/manila.jpg', category: 'Travel Guides' },
            { title: 'Ultimate Filipino Food Guide', href: '/blog/ultimate-filipino-food-guide', image: '/filipino-woman-smiling.png', category: 'Food & Culture' },
            { title: 'Filipino Street Food Guide', href: '/blog/filipino-street-food-guide', image: '/food-ad.png', category: 'Food & Culture' },
          ]}
        />
      </div>
      <Footer />
    </div>
  )
}
