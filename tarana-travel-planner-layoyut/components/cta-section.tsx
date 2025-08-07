import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2 text-blue-200">
              <Sparkles className="h-5 w-5" />
              <span className="font-medium">Start Your Adventure Today</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
              Ready to Explore the
              <br />
              Beautiful Philippines?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Join thousands of travelers who have discovered amazing destinations 
              with our AI-powered travel planner. Your perfect Philippine adventure awaits!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg"
              asChild
            >
              <a href="/plan">
                Start Planning Free
                <ArrowRight className="h-5 w-5 ml-2" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg"
              asChild
            >
              <a href="/pricing">
                View Pricing
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 text-blue-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">Free</div>
              <div className="text-sm">to get started</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{'<30s'}</div>
              <div className="text-sm">to create itinerary</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-sm">AI assistance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
