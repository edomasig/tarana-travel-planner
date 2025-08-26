import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Clock, Calendar, User, MapPin, Camera, Heart } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Footer } from '@/components/footer'

export default function HiddenGemsNorthernPhilippinesPage() {
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
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Hidden gems in Northern Philippines"
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardHeader>
              <div className="flex items-center gap-2 text-blue-600 mb-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm font-medium">Travel Guides • Northern Philippines</span>
              </div>
              <CardTitle className="text-4xl">Hidden Gems of Northern Philippines: Beyond Baguio and Sagada</CardTitle>
              <div className="flex items-center gap-4 text-gray-500 text-sm">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  Maria Santos
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  January 15, 2025
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  8 min read
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Introduction */}
          <Card>
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                While Baguio and Sagada draw thousands of visitors each year, Northern Philippines harbors countless 
                hidden treasures waiting to be discovered. From pristine beaches that rival Boracay to mountain 
                villages untouched by mass tourism, this region offers authentic experiences for adventurous travelers 
                seeking something extraordinary.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Join us as we explore five incredible destinations that showcase the raw beauty and cultural richness 
                of Northern Luzon, each offering unique adventures away from the typical tourist trail.
              </p>
            </CardContent>
          </Card>

          {/* Destination 1 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Camera className="h-6 w-6 text-blue-500" />
                1. Kapurpurawan Rock Formation, Ilocos Norte
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Kapurpurawan Rock Formation"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-700 leading-relaxed">
                These stunning white limestone formations in Burgos, Ilocos Norte, create an otherworldly landscape 
                that looks like something from another planet. The name "Kapurpurawan" means "whiteness" in Ilocano, 
                perfectly describing these wind-carved sculptures created over millions of years.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Getting There:</h4>
                <p className="text-sm text-gray-600">
                  From Laoag, take a tricycle or van to Burgos (45 minutes). The rock formations are accessible 
                  via a short hike from the main road.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Destination 2 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Heart className="h-6 w-6 text-green-500" />
                2. Anawangin Cove, Zambales
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Anawangin Cove beach"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-700 leading-relaxed">
                This crescent-shaped cove features unique grey sand beaches lined with agoho trees, creating a 
                distinctive landscape unlike anywhere else in the Philippines. The dramatic backdrop of volcanic 
                mountains adds to its mystique, making it perfect for camping and stargazing.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Best Experience:</h4>
                <p className="text-sm text-gray-600">
                  Camp overnight to witness incredible sunsets and sunrises. The cove is accessible only by boat 
                  from Pundaquit, San Antonio, Zambales.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Destination 3 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <MapPin className="h-6 w-6 text-purple-500" />
                3. Batad Rice Terraces, Ifugao
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Batad Rice Terraces"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-700 leading-relaxed">
                While Banaue gets most of the attention, Batad offers the most spectacular amphitheater-shaped 
                rice terraces in the Cordilleras. This UNESCO World Heritage site requires a challenging hike 
                but rewards visitors with breathtaking 360-degree views of ancient agricultural engineering.
              </p>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Hiking Tips:</h4>
                <p className="text-sm text-gray-600">
                  The trek to Batad viewpoint takes 2-3 hours. Start early morning for the best lighting and 
                  consider staying overnight in the village for a cultural immersion experience.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Destination 4 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Camera className="h-6 w-6 text-orange-500" />
                4. Tangadan Falls, La Union
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Tangadan Falls"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-700 leading-relaxed">
                Hidden in the mountains of San Gabriel, La Union, this multi-tiered waterfall cascades through 
                lush tropical forest into crystal-clear pools perfect for swimming. The challenging trek through 
                river crossings and jungle paths adds to the adventure.
              </p>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Adventure Level:</h4>
                <p className="text-sm text-gray-600">
                  Moderate to difficult hike (2-3 hours each way). Bring proper hiking shoes and waterproof bags. 
                  Local guides are recommended for first-time visitors.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Destination 5 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Heart className="h-6 w-6 text-red-500" />
                5. Calaguas Islands, Camarines Norte
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Calaguas Islands beach"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-700 leading-relaxed">
                Often called the "Boracay of the North," Calaguas boasts pristine white sand beaches and 
                crystal-clear waters without the crowds. This group of islands offers a raw, untouched 
                paradise perfect for those seeking solitude and natural beauty.
              </p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Planning Your Visit:</h4>
                <p className="text-sm text-gray-600">
                  Accessible via Paracale port in Camarines Norte. Camping is the primary accommodation option. 
                  Bring all supplies as there are no stores on the islands.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Planning Tips */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Planning Your Hidden Gems Adventure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Best Time to Visit</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Dry season: November to April</li>
                    <li>• Avoid typhoon season: June to October</li>
                    <li>• Early morning visits for best lighting</li>
                    <li>• Weekdays for fewer crowds</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">What to Bring</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Proper hiking shoes and clothes</li>
                    <li>• Waterproof bags and camera protection</li>
                    <li>• Plenty of water and snacks</li>
                    <li>• First aid kit and insect repellent</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Responsible Tourism Tips</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Leave no trace - pack out all trash</li>
                  <li>• Respect local communities and customs</li>
                  <li>• Support local guides and businesses</li>
                  <li>• Follow designated trails and swimming areas</li>
                  <li>• Don't disturb wildlife or remove natural souvenirs</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Explore Northern Philippines?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Let our AI travel planner create a personalized Northern Luzon adventure that includes these 
                hidden gems and more destinations based on your interests and travel style.
              </p>
              <Link 
                href="/chat?prompt=Plan a trip to Northern Philippines hidden gems"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <MapPin className="h-5 w-5" />
                Plan My Northern Philippines Adventure
              </Link>
            </CardContent>
          </Card>
        </article>
      </div>
      <Footer />
    </div>
  )
}
