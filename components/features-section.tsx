import { Card, CardContent } from '@/components/ui/card'
import { Sparkles, MapPin, DollarSign, Download, Users, Clock } from 'lucide-react'

export function FeaturesSection() {
  const features = [
    {
      icon: Sparkles,
      title: 'AI-Powered Planning',
      description: 'Our advanced AI understands your preferences and creates personalized itineraries tailored just for you.',
      color: 'text-blue-600 bg-blue-100'
    },
    {
      icon: MapPin,
      title: 'Local Expertise',
      description: 'Access insider knowledge about hidden gems, local favorites, and authentic Philippine experiences.',
      color: 'text-green-600 bg-green-100'
    },
    {
      icon: DollarSign,
      title: 'Budget Optimization',
      description: 'Get the most value for your money with smart budget recommendations and cost-saving tips.',
      color: 'text-yellow-600 bg-yellow-100'
    },
    {
      icon: Download,
      title: 'Export & Share',
      description: 'Download your itineraries as PDF or share them with friends and family with a simple link.',
      color: 'text-purple-600 bg-purple-100'
    },
    {
      icon: Clock,
      title: 'Real-time Updates',
      description: 'Stay informed with current weather, events, and travel advisories for your destinations.',
      color: 'text-red-600 bg-red-100'
    },
    {
      icon: Users,
      title: 'Community Insights',
      description: 'Benefit from reviews and tips shared by fellow travelers who have explored the Philippines.',
      color: 'text-indigo-600 bg-indigo-100'
    }
  ]

  return (
    <section className="py-12 md:py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Why Choose GalaGPT.ph?
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We combine cutting-edge AI technology with deep local knowledge to create 
            the perfect Philippine travel experience for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 md:p-8">
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4 md:mb-6`}>
                  <feature.icon className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
