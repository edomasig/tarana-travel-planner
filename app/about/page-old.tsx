import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, MapPin, Users, Award, Heart, Globe, Zap, Shield } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Footer } from '@/components/footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About GalaGPT - AI-Powered Philippines Travel Planner | Our Story & Mission',
  description: 'Discover the story behind GalaGPT, the leading AI travel planner for the Philippines. Learn about our mission to make Philippines travel accessible, sustainable, and unforgettable for everyone.',
  keywords: 'about GalaGPT, Philippines travel AI, travel planning technology, Philippines tourism, sustainable travel, travel innovation',
}t { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, MapPin, Sparkles, Users, Heart } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Footer } from '@/components/footer'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto max-w-4xl px-4">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="space-y-8">
          {/* Hero Section */}
          <Card>
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-4xl">About GalaGPT.ph</CardTitle>
              <p className="text-xl text-gray-600 mt-4">
                Your AI-powered companion for discovering the Philippines
              </p>
            </CardHeader>
          </Card>

          {/* Mission Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Heart className="h-6 w-6 text-red-500" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed">
                GalaGPT.ph was created to make Philippine travel planning accessible, personalized, and enjoyable for everyone. 
                We believe that exploring the Philippines should be an adventure that starts from the moment you begin planning, 
                not a stressful task filled with endless research and uncertainty.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Founded by travel enthusiasts who have explored every corner of the Philippines, our platform combines 
                advanced AI technology with deep local knowledge to provide travelers with authentic, practical, and 
                personalized recommendations that go beyond typical tourist attractions.
              </p>
            </CardContent>
          </Card>

          {/* What We Do */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-blue-500" />
                What We Do
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">AI-Powered Planning</h3>
                  <p className="text-gray-600">
                    Our advanced AI assistant understands your travel preferences and creates personalized itineraries 
                    tailored specifically for Philippine destinations.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Local Expertise</h3>
                  <p className="text-gray-600">
                    We combine cutting-edge technology with deep local knowledge to provide authentic recommendations 
                    for every region of the Philippines.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Budget-Friendly</h3>
                  <p className="text-gray-600">
                    Get detailed budget estimates and cost-saving tips to make your Philippine adventure affordable 
                    without compromising on experience.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Cultural Insights</h3>
                  <p className="text-gray-600">
                    Learn about local customs, traditions, and hidden gems that only locals know, making your trip 
                    more meaningful and authentic.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Why Philippines */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Why Focus on the Philippines?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed mb-4">
                The Philippines is a tropical paradise with over 7,641 islands, each offering unique experiences. 
                From the pristine beaches of Palawan to the cultural richness of Luzon, and the vibrant festivals 
                of Visayas and Mindanao, the Philippines offers diversity that can overwhelm even experienced travelers.
              </p>
              <p className="text-lg leading-relaxed">
                Our specialized focus allows us to provide deeper, more accurate, and culturally sensitive 
                recommendations that generic travel platforms simply cannot match.
              </p>
            </CardContent>
          </Card>

          {/* Team Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Users className="h-6 w-6 text-green-500" />
                Our Team
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed">
                GalaGPT.ph is built by a passionate team of travel enthusiasts, AI experts, and Filipino culture advocates. 
                We're dedicated to showcasing the beauty and diversity of the Philippines while making travel planning 
                accessible to everyone, from first-time visitors to seasoned adventurers.
              </p>
            </CardContent>
          </Card>

          {/* Values */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">🌍 Sustainable Tourism</h3>
                  <p className="text-gray-600">
                    We promote responsible travel that respects local communities and preserves the natural beauty of the Philippines.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">🤝 Cultural Respect</h3>
                  <p className="text-gray-600">
                    Every recommendation comes with cultural context to help travelers engage respectfully with local communities.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">💡 Innovation</h3>
                  <p className="text-gray-600">
                    We continuously improve our AI technology to provide more accurate, helpful, and personalized travel experiences.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">❤️ Accessibility</h3>
                  <p className="text-gray-600">
                    Travel planning should be easy and enjoyable for everyone, regardless of their experience level or budget.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed mb-4">
                Have questions, suggestions, or feedback? We'd love to hear from you! 
                Our team is always working to improve GalaGPT.ph and make your Philippine travel experience even better.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="mailto:admin@galagpt.ph" 
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
                >
                  📧 admin@galagpt.ph
                </a>
                <span className="text-gray-400 hidden sm:block">|</span>
                <a 
                  href="/" 
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
                >
                  🌐 galagpt.ph
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export const metadata = {
  title: 'About Us | GalaGPT.ph',
  description: 'Learn about GalaGPT.ph - Your AI-powered Philippine travel planning assistant. Discover our mission, values, and commitment to making Philippine travel accessible to everyone.',
}
