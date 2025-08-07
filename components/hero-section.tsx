'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MapPin, Sparkles, ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function HeroSection() {
  const [quickPrompt, setQuickPrompt] = useState('')
  const router = useRouter()

  const handleQuickPlan = () => {
    if (quickPrompt.trim()) {
      router.push(`/plan?prompt=${encodeURIComponent(quickPrompt)}`)
    } else {
      router.push('/plan')
    }
  }

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-blue-600">
                <Sparkles className="h-5 w-5" />
                <span className="font-medium">AI-Powered Travel Planning</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Discover the
                <span className="text-blue-600"> Philippines</span>
                <br />
                Like Never Before
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Get personalized travel itineraries for the Philippines in seconds. 
                Just tell us what you're looking for, and our AI will create the perfect adventure for you.
              </p>
            </div>

            {/* Quick Planning Input */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span className="font-medium text-gray-900">Quick Plan</span>
              </div>
              <div className="flex gap-3">
                <Input
                  placeholder="e.g., 3 days in Palawan with beaches and adventure"
                  value={quickPrompt}
                  onChange={(e) => setQuickPrompt(e.target.value)}
                  className="flex-1"
                  onKeyPress={(e) => e.key === 'Enter' && handleQuickPlan()}
                />
                <Button onClick={handleQuickPlan} className="bg-blue-600 hover:bg-blue-700">
                  Plan Now
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              <div>
                <div className="text-2xl font-bold text-gray-900">10K+</div>
                <div className="text-gray-600">Itineraries Created</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-gray-600">Destinations</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/philippine-landscape.png"
                alt="Beautiful Philippine destinations"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -left-4 top-20 bg-white p-4 rounded-xl shadow-lg max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Banaue Rice Terraces</div>
                  <div className="text-sm text-gray-600">UNESCO World Heritage</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -right-4 bottom-20 bg-white p-4 rounded-xl shadow-lg max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">AI-Generated</div>
                  <div className="text-sm text-gray-600">Perfect for your budget</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
