import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Check, Crown, Star, Zap } from 'lucide-react'

interface PremiumFeature {
  title: string
  description: string
  included: boolean
}

interface PlanProps {
  name: string
  price: string
  period: string
  description: string
  features: PremiumFeature[]
  popular?: boolean
  ctaText: string
}

const PremiumPlan = ({ name, price, period, description, features, popular, ctaText }: PlanProps) => {
  return (
    <Card className={`relative ${popular ? 'border-2 border-blue-500 shadow-lg' : ''}`}>
      {popular && (
        <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-500">
          Most Popular
        </Badge>
      )}
      
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2">
          {name === 'Premium' && <Crown className="h-5 w-5 text-yellow-500" />}
          {name === 'Explorer' && <Star className="h-5 w-5 text-blue-500" />}
          {name === 'Adventure Pro' && <Zap className="h-5 w-5 text-purple-500" />}
          {name}
        </CardTitle>
        <div className="text-3xl font-bold">
          {price}
          <span className="text-sm font-normal text-muted-foreground">/{period}</span>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardHeader>
      
      <CardContent>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className={`h-4 w-4 mt-0.5 ${feature.included ? 'text-green-500' : 'text-gray-300'}`} />
              <div>
                <span className={feature.included ? '' : 'text-gray-400 line-through'}>
                  {feature.title}
                </span>
                <p className="text-xs text-muted-foreground">{feature.description}</p>
              </div>
            </li>
          ))}
        </ul>
        
        <Button 
          className={`w-full ${popular ? 'bg-blue-500 hover:bg-blue-600' : ''}`}
          onClick={() => {
            // Track premium subscription interest
            if (typeof window !== 'undefined' && (window as any).gtag) {
              (window as any).gtag('event', 'premium_subscription_interest', {
                event_category: 'monetization',
                event_label: name,
                value: parseInt(price.replace(/[^0-9]/g, ''))
              })
            }
            // In production: redirect to payment processor
            alert(`${name} subscription coming soon! Join our waitlist for early access.`)
          }}
        >
          {ctaText}
        </Button>
      </CardContent>
    </Card>
  )
}

export function PremiumSubscription() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')

  const plans: PlanProps[] = [
    {
      name: 'Explorer',
      price: billingCycle === 'monthly' ? '₱299' : '₱2,990',
      period: billingCycle === 'monthly' ? 'month' : 'year',
      description: 'Perfect for weekend warriors and casual travelers',
      ctaText: 'Start Exploring',
      features: [
        { title: 'Unlimited AI Travel Planning', description: 'No daily limits on GalaGPT conversations', included: true },
        { title: 'Detailed Itineraries with Maps', description: 'Interactive maps and turn-by-turn directions', included: true },
        { title: 'Budget Tracking & Expense Tips', description: 'Real-time budget monitoring and cost-saving suggestions', included: true },
        { title: 'Weather & Safety Updates', description: 'Live weather and travel advisory notifications', included: true },
        { title: 'Basic Booking Assistance', description: 'Links to trusted booking partners', included: true },
        { title: 'Priority Customer Support', description: '24/7 chat support with faster response times', included: false },
        { title: 'Exclusive Travel Deals', description: 'Member-only discounts and early access to promotions', included: false }
      ]
    },
    {
      name: 'Premium',
      price: billingCycle === 'monthly' ? '₱599' : '₱5,990',
      period: billingCycle === 'monthly' ? 'month' : 'year',
      description: 'For serious travelers who want the full experience',
      popular: true,
      ctaText: 'Go Premium',
      features: [
        { title: 'Unlimited AI Travel Planning', description: 'No daily limits on GalaGPT conversations', included: true },
        { title: 'Detailed Itineraries with Maps', description: 'Interactive maps and turn-by-turn directions', included: true },
        { title: 'Budget Tracking & Expense Tips', description: 'Real-time budget monitoring and cost-saving suggestions', included: true },
        { title: 'Weather & Safety Updates', description: 'Live weather and travel advisory notifications', included: true },
        { title: 'Priority Booking Assistance', description: 'Direct booking through our platform with best price guarantee', included: true },
        { title: 'Priority Customer Support', description: '24/7 chat support with faster response times', included: true },
        { title: 'Exclusive Travel Deals', description: 'Member-only discounts up to 20% off hotels and tours', included: true },
        { title: 'Offline Access & Downloads', description: 'Download itineraries and maps for offline use', included: true },
        { title: 'Group Travel Planning', description: 'Collaborative planning tools for group trips', included: true }
      ]
    },
    {
      name: 'Adventure Pro',
      price: billingCycle === 'monthly' ? '₱999' : '₱9,990',
      period: billingCycle === 'monthly' ? 'month' : 'year',
      description: 'Ultimate package for travel enthusiasts and professionals',
      ctaText: 'Join Adventure Pro',
      features: [
        { title: 'Everything in Premium', description: 'All Premium features included', included: true },
        { title: 'Personal Travel Concierge', description: 'Dedicated human travel agent for complex bookings', included: true },
        { title: 'Custom Destination Guides', description: 'Personalized PDF guides created just for you', included: true },
        { title: 'Exclusive Local Experiences', description: 'Access to private tours and unique local experiences', included: true },
        { title: 'Travel Insurance Included', description: 'Comprehensive travel insurance for all trips', included: true },
        { title: 'VIP Lounge Access', description: 'Airport lounge access worldwide', included: true },
        { title: 'Monthly Expert Webinars', description: 'Live sessions with travel experts and local guides', included: true },
        { title: 'Early Access to New Features', description: 'Beta test new GalaGPT.ph features before anyone else', included: true }
      ]
    }
  ]

  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">
            Unlock Premium Travel Planning
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Get more from your Philippines adventures with exclusive features and personalized support
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={billingCycle === 'monthly' ? 'font-semibold' : 'text-muted-foreground'}>
              Monthly
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative"
            >
              <div className={`w-12 h-6 rounded-full transition-colors ${
                billingCycle === 'yearly' ? 'bg-blue-500' : 'bg-gray-300'
              }`}>
                <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform absolute top-0.5 ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-0.5'
                }`} />
              </div>
            </Button>
            <span className={billingCycle === 'yearly' ? 'font-semibold' : 'text-muted-foreground'}>
              Yearly
            </span>
            {billingCycle === 'yearly' && (
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                Save 16%
              </Badge>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan, index) => (
            <PremiumPlan key={index} {...plan} />
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-4">
            All plans include a 14-day free trial. Cancel anytime. No hidden fees.
          </p>
          <p className="text-xs text-muted-foreground">
            Prices shown in Philippine Peso (₱). International cards accepted. 
            Student discounts available with valid ID.
          </p>
        </div>
      </div>
    </div>
  )
}

// Compact upgrade prompt for existing users
export function UpgradePrompt() {
  return (
    <Card className="border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50">
      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          <Crown className="h-5 w-5 text-amber-500" />
          <div className="flex-1">
            <h3 className="font-semibold text-amber-900">
              Unlock Premium Features
            </h3>
            <p className="text-sm text-amber-700">
              Get unlimited AI planning, exclusive deals, and priority support
            </p>
          </div>
          <Button size="sm" className="bg-amber-500 hover:bg-amber-600">
            Upgrade Now
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
