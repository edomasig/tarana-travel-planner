import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Clock, Calendar, User, Waves, Camera, MapPin } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Footer } from '@/components/footer'

export default function SiargaoIslandHoppingPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto max-w-4xl px-4">
        <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>
        
        <article className="space-y-8">
          {/* Header */}
          <Card>
            <div className="relative h-64 md:h-80">
              <Image
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Siargao island hopping"
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardHeader>
              <div className="flex items-center gap-2 text-blue-600 mb-2">
                <Waves className="h-4 w-4" />
                <span className="text-sm font-medium">Adventure • Island Hopping</span>
              </div>
              <CardTitle className="text-4xl">Island Hopping in Siargao: Surfer's Paradise and More</CardTitle>
              <div className="flex items-center gap-4 text-gray-500 text-sm">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  Jake Morrison
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  January 10, 2025
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  7 min read
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Introduction */}
          <Card>
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                While Siargao has gained international fame as the Philippines' surfing capital, this teardrop-shaped 
                island offers so much more than world-class waves. Beyond Cloud 9's legendary breaks lies an 
                archipelago of pristine islands, hidden lagoons, and marine sanctuaries waiting to be explored.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Join us as we discover the incredible island-hopping adventures that make Siargao a complete 
                tropical paradise, perfect for surfers and non-surfers alike seeking authentic island experiences.
              </p>
            </CardContent>
          </Card>

          {/* Island Hopping Tours */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Popular Island Hopping Tours</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              
              {/* Naked Island */}
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Camera className="h-5 w-5 text-blue-500" />
                  Naked Island
                </h3>
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Naked Island Siargao"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-700 mb-3">
                  A small sandbar with no vegetation (hence the name "naked"), this Instagram-famous spot offers 
                  360-degree views of crystal-clear waters. Perfect for swimming, sunbathing, and taking those 
                  postcard-perfect photos.
                </p>
                <div className="bg-blue-50 p-3 rounded">
                  <p className="text-sm"><strong>Best time:</strong> Low tide for the full sandbar experience</p>
                  <p className="text-sm"><strong>Activities:</strong> Swimming, photography, sunbathing</p>
                </div>
              </div>

              {/* Daku Island */}
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-green-500" />
                  Daku Island
                </h3>
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Daku Island beach"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-700 mb-3">
                  The largest island in the trio, Daku offers long stretches of white sand beaches lined with 
                  coconut palms. It's where most tour groups stop for lunch, and local vendors sell fresh coconuts 
                  and souvenirs.
                </p>
                <div className="bg-green-50 p-3 rounded">
                  <p className="text-sm"><strong>Perfect for:</strong> Lunch stops, coconut drinks, village visits</p>
                  <p className="text-sm"><strong>Facilities:</strong> Basic restrooms, local vendors</p>
                </div>
              </div>

              {/* Guyam Island */}
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Camera className="h-5 w-5 text-orange-500" />
                  Guyam Island
                </h3>
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Guyam Island coconut trees"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-700 mb-3">
                  A tiny circular island covered with coconut trees that you can walk around in just 15 minutes. 
                  Guyam offers excellent snorkeling spots and is perfect for those seeking a more intimate 
                  island experience.
                </p>
                <div className="bg-orange-50 p-3 rounded">
                  <p className="text-sm"><strong>Highlights:</strong> Snorkeling, swing for photos, peaceful atmosphere</p>
                  <p className="text-sm"><strong>Size:</strong> Walkable in 15 minutes</p>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Hidden Gems */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Hidden Island Gems</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-3">Sugba Lagoon</h4>
                <p className="text-gray-700 mb-3">
                  A stunning brackish lagoon surrounded by lush mangroves and limestone formations. The lagoon's 
                  emerald waters are perfect for kayaking, paddleboarding, and cliff jumping from the famous 
                  jumping platforms.
                </p>
                <div className="text-sm text-purple-700">
                  <strong>Activities:</strong> Kayaking, paddleboarding, cliff jumping, swimming
                </div>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-3">Sohoton Cove</h4>
                <p className="text-gray-700 mb-3">
                  A hidden lagoon accessible only during low tide through a narrow cave entrance. Inside, you'll 
                  find crystal-clear waters surrounded by towering limestone walls, creating a magical swimming hole.
                </p>
                <div className="text-sm text-teal-700">
                  <strong>Best visited:</strong> During low tide, guided tours recommended
                </div>
              </div>

              <div className="bg-pink-50 p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-3">Kawhagan Island</h4>
                <p className="text-gray-700 mb-3">
                  Less crowded than the main three islands, Kawhagan offers pristine beaches and excellent 
                  snorkeling opportunities. The island has a small local community and beautiful coral gardens.
                </p>
                <div className="text-sm text-pink-700">
                  <strong>Perfect for:</strong> Snorkeling, cultural interaction, peaceful relaxation
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Marine Life */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Marine Life & Snorkeling</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">What You'll See</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Colorful tropical fish</li>
                    <li>• Sea turtles (if you're lucky)</li>
                    <li>• Vibrant coral gardens</li>
                    <li>• Schools of sardines</li>
                    <li>• Starfish and sea urchins</li>
                    <li>• Tropical marine biodiversity</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Best Snorkeling Spots</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Guyam Island coral gardens</li>
                    <li>• Daku Island shallow reefs</li>
                    <li>• Kawhagan Island waters</li>
                    <li>• Sohoton Cove (when accessible)</li>
                    <li>• Various smaller islets</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Marine Conservation</h4>
                <p className="text-sm text-blue-700">
                  Siargao's marine ecosystems are protected areas. Please follow responsible snorkeling practices: 
                  don't touch corals, don't chase marine life, and use reef-safe sunscreen to help preserve these 
                  beautiful underwater gardens for future generations.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Practical Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Planning Your Island Hopping Adventure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Tour Options</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Shared group tours (₱1,500-2,000)</li>
                    <li>• Private boat tours (₱8,000-12,000)</li>
                    <li>• Half-day tours (3-4 hours)</li>
                    <li>• Full-day tours (6-8 hours)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">What's Included</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Boat transportation</li>
                    <li>• Life jackets and snorkeling gear</li>
                    <li>• Tour guide</li>
                    <li>• Island entrance fees</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">What to Bring</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                  <ul className="space-y-1">
                    <li>• Reef-safe sunscreen</li>
                    <li>• Waterproof bag</li>
                    <li>• Extra clothes</li>
                    <li>• Towel</li>
                  </ul>
                  <ul className="space-y-1">
                    <li>• Underwater camera</li>
                    <li>• Cash for extras</li>
                    <li>• Hat and sunglasses</li>
                    <li>• Water bottle</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Best Time to Go</h4>
                <p className="text-gray-700 mb-3">
                  <strong>Peak Season:</strong> March to May (calm seas, sunny weather)<br/>
                  <strong>Good Season:</strong> November to February (cooler, less crowded)<br/>
                  <strong>Avoid:</strong> June to October (typhoon season, rough seas)
                </p>
                <p className="text-sm text-green-700">
                  <strong>Pro tip:</strong> Book tours early morning (7-8 AM) to avoid crowds and get the best lighting for photos.
                </p>
              </div>

            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Explore Siargao's Islands?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Let our AI travel planner create the perfect Siargao adventure combining surfing, island hopping, 
                and cultural experiences based on your interests and travel dates.
              </p>
              <Link 
                href="/chat?prompt=Plan a Siargao island hopping adventure"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Waves className="h-5 w-5" />
                Plan My Siargao Adventure
              </Link>
            </CardContent>
          </Card>
        </article>
      </div>
      <Footer />
    </div>
  )
}
