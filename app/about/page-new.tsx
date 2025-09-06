import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, MapPin, Users, Award, Heart, Globe, Zap, Shield, Target, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Footer } from '@/components/footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About GalaGPT - AI-Powered Philippines Travel Planner | Our Story & Mission',
  description: 'Discover the story behind GalaGPT, the leading AI travel planner for the Philippines. Learn about our mission to make Philippines travel accessible, sustainable, and unforgettable for everyone.',
  keywords: 'about GalaGPT, Philippines travel AI, travel planning technology, Philippines tourism, sustainable travel, travel innovation',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto max-w-5xl px-4 py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="space-y-8">
          {/* Hero Section */}
          <Card className="overflow-hidden shadow-2xl">
            <div className="relative h-80 md:h-96">
              <Image
                src="/galagpt-logo.svg"
                alt="GalaGPT Philippines Travel AI Logo"
                fill
                className="object-contain p-20"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h1 className="text-5xl font-bold mb-2">About GalaGPT</h1>
                <p className="text-xl text-gray-200">Your AI-Powered Philippines Travel Companion</p>
              </div>
            </div>
          </Card>

          {/* Mission Statement */}
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-3">
                <Target className="h-8 w-8 text-blue-600" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                At GalaGPT, we believe that exploring the Philippines should be accessible, exciting, and effortless for everyone. 
                Our mission is to democratize travel planning by leveraging artificial intelligence to create personalized, 
                culturally-rich, and sustainable travel experiences across the beautiful archipelago of the Philippines.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-3">🌟 Our Vision</h3>
                <p className="text-blue-800">
                  To become the world's most trusted AI travel companion for the Philippines, helping millions of travelers 
                  discover hidden gems, support local communities, and create unforgettable memories while preserving the 
                  natural beauty and cultural heritage of our beloved archipelago.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Our Story */}
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-3">
                <Heart className="h-8 w-8 text-red-500" />
                Our Story
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Born from Filipino Wanderlust</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    GalaGPT was founded by a team of passionate Filipino travelers and technologists who experienced 
                    firsthand the challenges of planning trips across our diverse archipelago. With over 7,000 islands, 
                    180 languages, and countless hidden gems, planning the perfect Philippines adventure can be overwhelming.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We recognized that traditional travel planning methods often missed the authentic local experiences 
                    that make the Philippines truly special. That's when we decided to combine our love for travel with 
                    cutting-edge AI technology to create something revolutionary.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Technology Meets Local Wisdom</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our AI doesn't just suggest popular tourist spots – it learns from local insights, seasonal patterns, 
                    cultural events, and real traveler experiences to recommend authentic adventures that match your 
                    unique preferences and travel style.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Since our launch, we've helped over 100,000 travelers discover the Philippines, from first-time 
                    visitors to seasoned explorers looking for new adventures. Each interaction makes our AI smarter 
                    and our recommendations more personalized.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What Makes Us Different */}
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-3">
                <Zap className="h-8 w-8 text-yellow-500" />
                What Makes GalaGPT Special
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Local Expertise</h3>
                  <p className="text-gray-600 text-sm">
                    Our AI is trained on authentic local knowledge, hidden gems, and cultural insights from Filipino locals and experienced travelers.
                  </p>
                </div>
                
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <Zap className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Instant Planning</h3>
                  <p className="text-gray-600 text-sm">
                    Get personalized itineraries in seconds, not hours. Our AI processes your preferences and creates detailed plans instantly.
                  </p>
                </div>
                
                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <Heart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Sustainable Travel</h3>
                  <p className="text-gray-600 text-sm">
                    We promote responsible tourism that supports local communities and preserves the Philippines' natural beauty.
                  </p>
                </div>
                
                <div className="text-center p-6 bg-orange-50 rounded-lg">
                  <Shield className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Always Updated</h3>
                  <p className="text-gray-600 text-sm">
                    Our recommendations stay current with real-time updates on weather, events, and local conditions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Our Impact */}
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-3">
                <Award className="h-8 w-8 text-yellow-600" />
                Our Impact on Philippines Tourism
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">100K+</div>
                  <div className="text-gray-600">Travelers Served</div>
                  <p className="text-sm text-gray-500 mt-2">
                    Helping visitors discover authentic Philippines experiences
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
                  <div className="text-gray-600">Local Partners</div>
                  <p className="text-sm text-gray-500 mt-2">
                    Supporting local businesses and communities
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">7,000+</div>
                  <div className="text-gray-600">Destinations</div>
                  <p className="text-sm text-gray-500 mt-2">
                    Covering islands, cities, and hidden gems nationwide
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
                <h3 className="text-xl font-bold text-green-800 mb-4">🌱 Sustainable Tourism Commitment</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">Environmental Protection:</h4>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• Promote eco-friendly accommodations</li>
                      <li>• Recommend sustainable transport options</li>
                      <li>• Support marine and wildlife conservation</li>
                      <li>• Encourage Leave No Trace principles</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">Community Support:</h4>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• Partner with local guides and businesses</li>
                      <li>• Promote cultural sensitivity and respect</li>
                      <li>• Support indigenous communities</li>
                      <li>• Encourage authentic local experiences</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Our Team */}
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-3">
                <Users className="h-8 w-8 text-blue-600" />
                Meet Our Team
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">
                Our diverse team combines expertise in artificial intelligence, travel industry knowledge, and deep 
                cultural understanding of the Philippines. We're united by our passion for travel and technology.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900">AI Development</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Machine learning engineers and data scientists
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <MapPin className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="font-bold text-gray-900">Travel Experts</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Local guides and travel industry professionals
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Heart className="h-10 w-10 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-gray-900">Cultural Advisors</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Anthropologists and local community leaders
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Zap className="h-10 w-10 text-orange-600" />
                  </div>
                  <h3 className="font-bold text-gray-900">Product Team</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    UX designers and product managers
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Our Values */}
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-3">
                <CheckCircle className="h-8 w-8 text-green-600" />
                Our Core Values
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Authenticity First</h3>
                      <p className="text-gray-600 text-sm">
                        We prioritize genuine local experiences over tourist traps, ensuring you discover the real Philippines.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Sustainability Commitment</h3>
                      <p className="text-gray-600 text-sm">
                        Every recommendation considers environmental impact and supports local communities.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Innovation & Excellence</h3>
                      <p className="text-gray-600 text-sm">
                        We continuously improve our AI to provide the most accurate and helpful travel recommendations.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Cultural Respect</h3>
                      <p className="text-gray-600 text-sm">
                        We promote understanding and respect for Filipino culture, traditions, and local customs.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Accessibility for All</h3>
                      <p className="text-gray-600 text-sm">
                        Travel planning should be accessible regardless of budget, experience level, or travel style.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Safety & Trust</h3>
                      <p className="text-gray-600 text-sm">
                        Your safety and privacy are paramount in everything we do and recommend.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Explore the Philippines?</h2>
              <p className="text-blue-100 mb-6 text-lg max-w-3xl mx-auto">
                Join thousands of travelers who've discovered their perfect Philippines adventure with GalaGPT. 
                Let our AI create a personalized itinerary that matches your dreams, budget, and travel style.
              </p>
              <div className="space-y-4">
                <Link 
                  href="/plan" 
                  className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Start Planning Your Adventure
                </Link>
                <div className="text-blue-100 text-sm">
                  ✨ Free Forever • 🌍 Local Insights • 🤖 AI-Powered
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact & Partnership */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Partnership Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Are you a local business, tour operator, or accommodation provider? 
                  Partner with us to reach more travelers and showcase authentic Philippines experiences.
                </p>
                <Link 
                  href="/contact"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Become a Partner →
                </Link>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Have questions, feedback, or suggestions? We'd love to hear from you. 
                  Your input helps us improve GalaGPT for everyone.
                </p>
                <Link 
                  href="/contact"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Contact Us →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
