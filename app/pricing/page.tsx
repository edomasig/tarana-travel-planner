import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Check, Star, ArrowLeft, MessageSquare } from 'lucide-react'
import Link from 'next/link'
import { AdBanner } from '@/components/ads/ad-banner'
import { Footer } from '@/components/footer'

export default function PricingPage() {
  const plans = [
    {
      name: 'Free Explorer',
      price: '₱0',
      period: 'forever',
      description: 'Perfect for trying out GalaGPT.ph',
      features: [
        '10 messages per day',
        'Basic travel recommendations',
        'Save up to 3 conversations',
        'Community support'
      ],
      limitations: [
        'Limited daily usage',
        'Ads displayed',
        'Basic responses only'
      ],
      cta: 'Start Free',
      popular: false
    },
    {
      name: 'Premium Traveler',
      price: '₱299',
      period: 'per month',
      description: 'For serious Philippine explorers',
      features: [
        'Unlimited messages',
        'Advanced AI responses',
        'Unlimited saved conversations',
        'Export conversations to PDF',
        'Priority support',
        'No ads',
        'Detailed itineraries',
        'Budget optimization',
        'Real-time updates',
        'Early access to new features'
      ],
      limitations: [],
      cta: 'Start Premium Trial',
      popular: true
    },
    {
      name: 'Annual Explorer',
      price: '₱2,999',
      period: 'per year',
      description: 'Best value for frequent travelers',
      features: [
        'Everything in Premium',
        '2 months free',
        'VIP customer support',
        'Custom travel preferences',
        'Advanced planning tools'
      ],
      limitations: [],
      cta: 'Save with Annual',
      popular: false,
      savings: 'Save ₱588'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Chat
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Choose Your Plan</h1>
            <p className="text-gray-600">Unlock the full power of AI travel planning</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4 py-8">
        {/* Top Banner Ad */}
        <AdBanner position="top" className="mb-6" />
        
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start planning your Philippine adventures with our AI-powered chat assistant
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card key={plan.name} className={`relative ${plan.popular ? 'ring-2 ring-blue-600 shadow-lg' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white px-3 py-1">
                    <Star className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-1">/{plan.period}</span>
                  {plan.savings && (
                    <div className="mt-1">
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        {plan.savings}
                      </Badge>
                    </div>
                  )}
                </div>
                <p className="text-gray-600 mt-2">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <Button 
                  className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.cta}
                </Button>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">What's included:</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {plan.limitations.length > 0 && (
                    <div className="pt-2 border-t">
                      <h4 className="font-semibold text-gray-900 mb-2">Limitations:</h4>
                      <ul className="space-y-1">
                        {plan.limitations.map((limitation) => (
                          <li key={limitation} className="text-sm text-gray-500">
                            • {limitation}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Chat Preview */}
        <div className="mt-16 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            See GalaGPT.ph in Action
          </h3>
          <Card className="bg-white shadow-lg">
            <CardContent className="p-0">
              {/* Mock Chat Interface */}
              <div className="bg-gray-50 p-4 border-b">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-blue-600" />
                  <span className="font-medium">GalaGPT.ph Chat Preview</span>
                </div>
              </div>
              <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">U</span>
                  </div>
                  <div className="bg-blue-600 text-white p-3 rounded-lg max-w-xs">
                    <p className="text-sm">I want to visit Palawan for 5 days. What should I do?</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-white border p-3 rounded-lg flex-1">
                    <p className="text-sm text-gray-700">
                      Great choice! Palawan is absolutely stunning 🏝️ Here's a perfect 5-day itinerary:
                      <br /><br />
                      <strong>Day 1-2: Puerto Princesa</strong><br />
                      • Underground River tour (UNESCO site)<br />
                      • City tour and local food<br /><br />
                      <strong>Day 3-4: El Nido</strong><br />
                      • Island hopping tours A & C<br />
                      • Big Lagoon, Small Lagoon<br /><br />
                      <strong>Day 5: Departure</strong><br />
                      • Last-minute shopping<br />
                      • Airport transfer<br /><br />
                      Budget estimate: ₱25,000-35,000 per person. Would you like me to break down the costs?
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 mb-2">How does the AI work?</h4>
              <p className="text-gray-600 text-sm">Our AI is trained on extensive Philippine travel data and provides personalized recommendations based on your preferences.</p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 mb-2">Can I cancel anytime?</h4>
              <p className="text-gray-600 text-sm">Yes, you can cancel your subscription at any time. No questions asked.</p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 mb-2">What's the message limit?</h4>
              <p className="text-gray-600 text-sm">Free users get 10 messages per day. Premium users have unlimited messages.</p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 mb-2">Do you store conversations?</h4>
              <p className="text-gray-600 text-sm">Yes, you can save and export your travel planning conversations for future reference.</p>
            </div>
          </div>
        </div>
        
        {/* Bottom Banner Ad */}
        <AdBanner position="bottom" className="mt-8" />
      </div>
      <Footer />
    </div>
  )
}
