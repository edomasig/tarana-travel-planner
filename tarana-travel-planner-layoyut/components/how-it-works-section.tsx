import { Card, CardContent } from '@/components/ui/card'
import { MessageSquare, Sparkles, MapPin, Download } from 'lucide-react'

export function HowItWorksSection() {
  const steps = [
    {
      step: 1,
      icon: MessageSquare,
      title: 'Tell Us Your Dream',
      description: 'Describe your ideal Philippine adventure - destinations, activities, budget, and duration.',
      color: 'text-blue-600 bg-blue-100'
    },
    {
      step: 2,
      icon: Sparkles,
      title: 'AI Creates Magic',
      description: 'Our AI analyzes your preferences and generates a personalized itinerary with local insights.',
      color: 'text-purple-600 bg-purple-100'
    },
    {
      step: 3,
      icon: MapPin,
      title: 'Explore & Customize',
      description: 'Review your itinerary, make adjustments, and add personal touches to perfect your trip.',
      color: 'text-green-600 bg-green-100'
    },
    {
      step: 4,
      icon: Download,
      title: 'Save & Share',
      description: 'Download your itinerary, save it for later, or share it with your travel companions.',
      color: 'text-orange-600 bg-orange-100'
    }
  ]

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Creating your perfect Philippine adventure is as easy as 1-2-3-4
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.step} className="relative">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow h-full">
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center mx-auto`}>
                      <step.icon className="h-8 w-8" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              
              {/* Connector Arrow */}
              {step.step < 4 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-gray-300"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-300 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
