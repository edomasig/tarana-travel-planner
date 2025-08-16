'use client'

import { HeroSection } from '@/components/hero-section'
import { FeaturesSection } from '@/components/features-section'
import { HowItWorksSection } from '@/components/how-it-works-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'
import { AdBanner } from '@/components/ads/ad-banner'
import { AgodaResponsiveBanner } from '@/components/affiliate/agoda-banner'
import { FloatingTagaytaySearch } from '@/components/affiliate/floating-agoda-search'

export default function MarketingHomePage() {
  return (
    <main className="min-h-screen relative">
      <HeroSection />
      {/* Primary Ad just under hero */}
      <div className="my-6">
        <AdBanner position="top" className="mx-4" />
      </div>
      <FeaturesSection />
      {/* Agoda hotel booking banner */}
      <div className="my-8 flex justify-center">
        <AgodaResponsiveBanner variant="manila" />
      </div>
      {/* <HowItWorksSection /> */}
      {/* <TestimonialsSection /> */}
      {/* <CTASection /> */}
       <div className="my-6">
        <AdBanner position="bottom" className="mx-4" />
      </div>
      <Footer />
      
      {/* Floating Agoda Search Box */}
      <FloatingTagaytaySearch position="bottom-right" />
    </main>
  )
}
