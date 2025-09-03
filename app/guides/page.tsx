import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, MapPin, Clock, Star, Camera } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Footer } from '@/components/footer'

export default function TravelGuidesPage() {
  const guides = [
    {
      title: "Complete Guide to Palawan",
      description: "Discover the pristine beaches, underground rivers, and hidden lagoons of the Philippines' last frontier.",
      image: "/Guides_Palawan.jpeg",
      readTime: "15 min read",
      category: "Islands",
      slug: "palawan-complete-guide"
    },
    {
      title: "Manila Travel Guide: Old Meets New",
      description: "Navigate the capital city's rich history, modern attractions, and vibrant food scene.",
      image: "/Guides_Manila.jpeg",
      readTime: "12 min read",
      category: "Cities",
      slug: "manila-travel-guide"
    },
    {
      title: "Baguio: Summer Capital Adventure",
      description: "Escape the heat in the Philippines' summer capital with cool weather, pine trees, and mountain adventures.",
      image: "/Guides_Baguio.jpeg",
      readTime: "10 min read",
      category: "Mountains",
      slug: "baguio-summer-capital"
    },
    {
      title: "Iloilo: The Heart of the Philippines",
      description: "Explore the cultural heart of the Philippines with its historic churches, festivals, and cuisine.",
      image: "/Guides_Iloilo.jpeg",
      readTime: "8 min read",
      category: "Culture",
      slug: "iloilo-heart-philippines"
    },
    {
      title: "Sagada: Mountain Province Magic",
      description: "Experience hanging coffins, rice terraces, and spelunking adventures in this mystical mountain town.",
      image: "/Guide_Sagada.jpeg",
      readTime: "11 min read",
      category: "Adventure",
      slug: "sagada-mountain-magic"
    },
    {
      title: "Philippine Food Guide",
      description: "A comprehensive guide to Filipino cuisine, from street food to fine dining, across different regions.",
      image: "/Guide_Food.jpeg",
      readTime: "20 min read",
      category: "Food",
      slug: "philippine-food-guide"
    }
  ]

  const categories = ["All", "Islands", "Cities", "Mountains", "Culture", "Adventure", "Food"]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto max-w-6xl px-4">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="space-y-8">
          {/* Header */}
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-4xl">Travel Guides</CardTitle>
              <p className="text-xl text-gray-600 mt-4">
                Comprehensive guides to help you explore the Philippines like a local
              </p>
            </CardHeader>
          </Card>

          {/* Category Filter */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="px-4 py-2 rounded-full border border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-colors"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Guides Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={guide.image}
                    alt={guide.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      {guide.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{guide.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {guide.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {guide.readTime}
                    </div>
                    <Link 
                      href={`/guides/${guide.slug}`}
                      className="text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      Read More →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Plan Your Philippine Adventure</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Ready to explore these amazing destinations? Use our AI travel planner to create 
                a personalized itinerary based on your interests, budget, and schedule.
              </p>
              <Link 
                href="/chat"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <MapPin className="h-5 w-5" />
                Start Planning
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  )
}
