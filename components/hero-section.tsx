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
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center gap-2 text-blue-600">
                <Sparkles className="h-4 w-4 md:h-5 md:w-5" />
                <span className="font-poppins font-medium text-sm md:text-base">AI-Powered Travel Planning</span>
              </div>
              <h1 className="text-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-900 leading-tight">
                Discover the 
                <span className="text-blue-600"> Philippines</span> with AI
              </h1>
              <p className="text-body text-base md:text-lg lg:text-xl text-gray-600 max-w-lg leading-relaxed">
                Get personalized itineraries, budget estimates, and local insights for your perfect Philippine adventure.
              </p>
            </div>

            {/* Quick Planning Input */}
            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-lg border">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                <span className="font-poppins font-semibold text-gray-900 text-sm md:text-base">Quick Plan</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  placeholder="e.g., 3 days in Palawan"
                  value={quickPrompt}
                  onChange={(e) => setQuickPrompt(e.target.value)}
                  className="flex-1 font-poppins text-sm md:text-base"
                  onKeyPress={(e) => e.key === 'Enter' && handleQuickPlan()}
                />
                <Button onClick={handleQuickPlan} className="bg-blue-600 hover:bg-blue-700 font-inter font-medium whitespace-nowrap text-sm md:text-base">
                  <span className="hidden sm:inline">Plan Now</span>
                  <span className="sm:hidden">Plan</span>
                  <ArrowRight className="h-3 w-3 md:h-4 md:w-4 ml-1 md:ml-2" />
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-8">
              <div className="text-center md:text-left">
                <div className="text-xl md:text-2xl font-montserrat font-bold text-gray-900">10K+</div>
                <div className="text-body text-xs md:text-sm text-gray-600">Itineraries Created</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-xl md:text-2xl font-montserrat font-bold text-gray-900">500+</div>
                <div className="text-body text-xs md:text-sm text-gray-600">Destinations</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-xl md:text-2xl font-montserrat font-bold text-gray-900">95%</div>
                <div className="text-body text-xs md:text-sm text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/philippine-landscape.png"
                alt="Beautiful Philippine landscape with crystal clear waters and tropical islands"
                className="w-full h-64 md:h-80 lg:h-auto object-cover"
                width={600}
                height={500}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Cards - Hidden on mobile for cleaner look */}
            <div className="hidden md:block absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <div className="font-poppins font-semibold text-sm">Palawan</div>
                  <div className="text-body text-xs text-gray-600">3 days • ₱15,000</div>
                </div>
              </div>
            </div>
            
            <div className="hidden md:block absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Sparkles className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <div className="font-poppins font-semibold text-sm">AI Planned</div>
                  <div className="text-body text-xs text-gray-600">Personalized</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
