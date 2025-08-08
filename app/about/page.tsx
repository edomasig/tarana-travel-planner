import { HeroSection } from '@/components/hero-section'
import { FeaturesSection } from '@/components/features-section'
import { HowItWorksSection } from '@/components/how-it-works-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'
import { AdBanner } from '@/components/ads/ad-banner'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      
      {/* Top Banner Ad - Hidden on mobile for cleaner experience */}
      <div className="hidden md:block">
        <AdBanner position="top" className="my-4 mx-4" />
      </div>
      
      <FeaturesSection />
      <HowItWorksSection />
      
      {/* Between sections ad - smaller on mobile */}
      <div className="my-6 md:my-8">
        <AdBanner position="between-messages" className="mx-4" />
      </div>
      
      <TestimonialsSection />
      <CTASection />
      
      {/* Bottom Banner Ad - Hidden on mobile */}
      <div className="hidden md:block">
        <AdBanner position="bottom" className="mx-4 mb-4" />
      </div>
      
      <Footer />
    </main>
  )
}
