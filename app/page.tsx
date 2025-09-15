'use client'

import { HeroSection } from '@/components/hero-section'
import { FeaturesSection } from '@/components/features-section'
import { FeaturedBlogsSection } from '@/components/featured-blogs-section'
import { HowItWorksSection } from '@/components/how-it-works-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'
import { AdBanner } from '@/components/ads/ad-banner'
import { FallbackAgodaBanner } from '@/components/affiliate/fallback-agoda-banner'
import { FloatingTagaytaySearch } from '@/components/affiliate/floating-agoda-search'
import { MonetagLink } from '@/components/monetag-link' // Add this import


export default function MarketingHomePage() {
  return (
    <main className="min-h-screen relative">
      <HeroSection />
      
      {/* Monetag promotional section */}
      <div className="my-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            🌟 Exclusive Travel Deals & Premium Content
          </h2>
          <p className="text-gray-600 mb-6">
            Unlock exclusive travel offers and premium destination guides
          </p>
          <MonetagLink variant="button" className="mx-auto">
            🎯 Discover Premium Travel Content
          </MonetagLink>
        </div>
      </div>

      {/* Primary Ad just under hero */}
      <div className="my-6">
        <AdBanner position="top" className="mx-4" />
      </div>
      <FeaturesSection />
      
      {/* Featured Blog Posts */}
      <FeaturedBlogsSection />
      
      {/* Agoda hotel booking banner - using fallback for better design */}
      <div className="my-8 flex justify-center">
        <FallbackAgodaBanner variant="manila" />
      </div>
      
      {/* Another Monetag placement */}
      <div className="my-8 px-4">
        <MonetagLink variant="banner" className="max-w-2xl mx-auto">
          💎 Get VIP Access to Exclusive Travel Resources
        </MonetagLink>
      </div>

      <div className="my-6">
        <AdBanner position="bottom" className="mx-4" />
      </div>
      <Footer />
      
      {/* Floating Agoda Search Box */}
      <FloatingTagaytaySearch position="bottom-right" />

      
    </main>
  )
}
