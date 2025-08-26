import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, ChevronDown, HelpCircle, MapPin, CreditCard, Plane, Shield } from 'lucide-react'
import Link from 'next/link'
import { Footer } from '@/components/footer'

export default function FAQPage() {
  const faqCategories = [
    {
      title: "General Questions",
      icon: <HelpCircle className="h-5 w-5" />,
      questions: [
        {
          question: "What is GalaGPT.ph?",
          answer: "GalaGPT.ph is an AI-powered travel planning platform specifically designed for exploring the Philippines. We help travelers create personalized itineraries, discover hidden gems, plan budgets, and get expert local insights for their Philippine adventures."
        },
        {
          question: "How does the AI travel planner work?",
          answer: "Our AI analyzes your preferences, budget, travel dates, and interests to create customized itineraries. Simply chat with our AI assistant, tell it what you're looking for, and it will generate detailed day-by-day plans including accommodations, activities, transportation, and dining recommendations."
        },
        {
          question: "Is GalaGPT.ph free to use?",
          answer: "Yes! Our basic travel planning features are completely free. You can create itineraries, get destination recommendations, and access our travel guides without any cost. We may introduce premium features in the future for enhanced functionality."
        },
        {
          question: "Do I need to create an account?",
          answer: "No account is required to use our basic features. You can start planning your trip immediately by chatting with our AI. However, creating an account allows you to save your itineraries, access them from multiple devices, and receive personalized recommendations."
        }
      ]
    },
    {
      title: "Planning Your Trip",
      icon: <MapPin className="h-5 w-5" />,
      questions: [
        {
          question: "What destinations in the Philippines do you cover?",
          answer: "We cover all major destinations across the Philippines including Luzon (Manila, Baguio, Bataan), Visayas (Boracay, Bohol, Cebu), and Mindanao (Davao, Siargao, Camiguin). Our database includes popular tourist spots as well as hidden gems and off-the-beaten-path locations."
        },
        {
          question: "Can you help plan multi-island trips?",
          answer: "Absolutely! Our AI specializes in complex multi-island itineraries. We'll help you optimize your route, suggest the best transportation between islands, and ensure you have enough time to enjoy each destination without feeling rushed."
        },
        {
          question: "How detailed are the itineraries?",
          answer: "Our itineraries include detailed day-by-day plans with specific activities, restaurant recommendations, transportation options, estimated costs, and travel times. We also provide backup options for rainy days and suggest local cultural experiences."
        },
        {
          question: "Can I customize the generated itinerary?",
          answer: "Yes! The AI-generated itinerary is fully customizable. You can modify activities, change accommodations, adjust budgets, or request alternative suggestions. Simply chat with our AI to make any changes you want."
        }
      ]
    },
    {
      title: "Budget & Costs",
      icon: <CreditCard className="h-5 w-5" />,
      questions: [
        {
          question: "How accurate are the budget estimates?",
          answer: "Our budget estimates are based on current market prices and are updated regularly. We provide ranges for different travel styles (budget, mid-range, luxury) and include accommodation, food, activities, and transportation costs. Actual costs may vary based on season and personal choices."
        },
        {
          question: "What currency are prices shown in?",
          answer: "All prices are displayed in Philippine Peso (PHP) as it's the local currency. We also provide USD equivalents for international travelers. Our budget calculator can help you understand costs in your home currency."
        },
        {
          question: "Are there additional costs not included in estimates?",
          answer: "Our estimates cover main travel expenses but may not include personal shopping, optional insurance, visa fees (for international travelers), or unexpected expenses. We always recommend budgeting an extra 10-20% for miscellaneous costs."
        },
        {
          question: "Can you help find budget-friendly options?",
          answer: "Definitely! Our AI can create budget-conscious itineraries with affordable accommodations, free activities, local transportation tips, and street food recommendations. Just specify your budget constraints when planning."
        }
      ]
    },
    {
      title: "Travel Logistics",
      icon: <Plane className="h-5 w-5" />,
      questions: [
        {
          question: "Do you help with flight bookings?",
          answer: "We provide flight recommendations and suggestions for the best routes and times, but we don't directly book flights. We'll guide you to trusted booking platforms and help you understand the best airports for your itinerary."
        },
        {
          question: "What about accommodation recommendations?",
          answer: "We recommend accommodations across all budget ranges and provide links to booking platforms. Our suggestions include hotels, resorts, hostels, and unique local stays like homestays and eco-lodges, complete with reviews and location advantages."
        },
        {
          question: "How do you handle transportation between destinations?",
          answer: "We provide detailed transportation guides including flights, ferries, buses, and private transfers. Our recommendations include estimated travel times, costs, booking information, and tips for the most comfortable and efficient routes."
        },
        {
          question: "What about travel insurance and safety?",
          answer: "We strongly recommend travel insurance and provide information about reputable providers. Our travel tips include safety guidelines, health recommendations, emergency contacts, and cultural etiquette to ensure a safe and respectful trip."
        }
      ]
    },
    {
      title: "Technical Support",
      icon: <Shield className="h-5 w-5" />,
      questions: [
        {
          question: "What if the AI doesn't understand my request?",
          answer: "Try rephrasing your request with more specific details about your preferences, dates, budget, or interests. If you're still having trouble, you can contact our support team at admin@galagpt.ph for assistance."
        },
        {
          question: "Can I access my itineraries offline?",
          answer: "You can download your itineraries as PDF files for offline access. We recommend doing this before traveling, especially if you'll be visiting remote areas with limited internet connectivity."
        },
        {
          question: "Is my personal information secure?",
          answer: "Yes, we take privacy seriously. We use industry-standard encryption and don't share your personal information with third parties without consent. You can read our full privacy policy for detailed information about data handling."
        },
        {
          question: "How can I report issues or provide feedback?",
          answer: "We welcome feedback! You can reach us at admin@galagpt.ph or use the contact form on our website. We use feedback to continuously improve our AI and add new features that travelers need."
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto max-w-4xl px-4">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="space-y-8">
          {/* Header */}
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-4xl">Frequently Asked Questions</CardTitle>
              <p className="text-xl text-gray-600 mt-4">
                Everything you need to know about planning your Philippine adventure with GalaGPT.ph
              </p>
            </CardHeader>
          </Card>

          {/* Quick Links */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-4">Quick Navigation</h3>
              <div className="grid md:grid-cols-3 gap-3">
                {faqCategories.map((category, index) => (
                  <a
                    key={index}
                    href={`#${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex items-center gap-2 p-3 rounded-lg border hover:border-blue-500 hover:text-blue-600 transition-colors"
                  >
                    {category.icon}
                    <span className="font-medium">{category.title}</span>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* FAQ Categories */}
          {faqCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} id={category.title.toLowerCase().replace(/\s+/g, '-')}>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  {category.icon}
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <details key={faqIndex} className="group">
                      <summary className="flex items-center justify-between cursor-pointer p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <h4 className="font-semibold text-gray-900">{faq.question}</h4>
                        <ChevronDown className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform" />
                      </summary>
                      <div className="mt-3 p-4 text-gray-600 leading-relaxed bg-white rounded-lg border">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Contact Section */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our support team is here to help you plan 
                the perfect Philippine adventure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Contact Support
                </Link>
                <Link 
                  href="/chat"
                  className="inline-flex items-center gap-2 border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <MapPin className="h-5 w-5" />
                  Start Planning
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  )
}
