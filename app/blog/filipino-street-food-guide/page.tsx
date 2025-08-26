import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Clock, Calendar, User, Utensils, Star, AlertTriangle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Footer } from '@/components/footer'

export default function FilipinoStreetFoodGuidePage() {
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
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Filipino street food"
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardHeader>
              <div className="flex items-center gap-2 text-orange-600 mb-2">
                <Utensils className="h-4 w-4" />
                <span className="text-sm font-medium">Food & Culture • Street Food</span>
              </div>
              <CardTitle className="text-4xl">Best Filipino Street Food: A Culinary Adventure Guide</CardTitle>
              <div className="flex items-center gap-4 text-gray-500 text-sm">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  Chef Miguel Reyes
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  January 12, 2025
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  6 min read
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Introduction */}
          <Card>
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Filipino street food is a vibrant tapestry of flavors, textures, and aromas that tells the story 
                of the Philippines' rich culinary heritage. From sizzling barbecue stalls to sweet delicacies, 
                the streets of the Philippines offer an incredible gastronomic adventure for adventurous eaters.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Join us as we explore the must-try Filipino street foods, learn where to find the best versions, 
                and discover how to eat safely while experiencing the authentic flavors of Filipino street cuisine.
              </p>
            </CardContent>
          </Card>

          {/* Safety First */}
          <Card className="border-yellow-200 bg-yellow-50">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2 text-yellow-800">
                <AlertTriangle className="h-5 w-5" />
                Safety First: Street Food Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-yellow-700">
                <li>• Choose stalls with high turnover and fresh ingredients</li>
                <li>• Look for places where locals are eating</li>
                <li>• Ensure food is cooked thoroughly and served hot</li>
                <li>• Avoid raw vegetables and unpeeled fruits from street vendors</li>
                <li>• Carry hand sanitizer and use it before eating</li>
                <li>• Start with small portions to test your tolerance</li>
              </ul>
            </CardContent>
          </Card>

          {/* Top Street Foods */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Must-Try Filipino Street Foods</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              
              {/* Isaw */}
              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Star className="h-5 w-5 text-red-500" />
                  Isaw (Grilled Chicken Intestines)
                </h3>
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Filipino Isaw"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-700 mb-3">
                  Perhaps the most iconic Filipino street food, isaw consists of grilled chicken or pork intestines 
                  marinated in soy sauce, vinegar, and spices. The chewy texture and smoky flavor make it addictive.
                </p>
                <div className="bg-red-50 p-3 rounded">
                  <p className="text-sm"><strong>Where to find:</strong> Any "ihaw-ihaw" (grill) stall, especially around schools and busy streets</p>
                  <p className="text-sm"><strong>Price:</strong> ₱3-5 per stick</p>
                </div>
              </div>

              {/* Balut */}
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Star className="h-5 w-5 text-blue-500" />
                  Balut (Duck Embryo)
                </h3>
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Filipino Balut"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-700 mb-3">
                  The ultimate test of culinary courage, balut is a partially developed duck embryo boiled and eaten 
                  from the shell. It's actually quite delicious once you get past the initial shock.
                </p>
                <div className="bg-blue-50 p-3 rounded">
                  <p className="text-sm"><strong>Best time:</strong> Evening vendors walking through neighborhoods</p>
                  <p className="text-sm"><strong>Price:</strong> ₱15-25 per egg</p>
                </div>
              </div>

              {/* Kwek-kwek */}
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Star className="h-5 w-5 text-orange-500" />
                  Kwek-kwek (Battered Quail Eggs)
                </h3>
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Filipino Kwek-kwek"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-700 mb-3">
                  Deep-fried quail eggs coated in orange batter, served with sweet and sour sauce or spicy vinegar. 
                  The bright orange color comes from annatto seeds (atsuete).
                </p>
                <div className="bg-orange-50 p-3 rounded">
                  <p className="text-sm"><strong>Perfect with:</strong> Spiced vinegar dipping sauce</p>
                  <p className="text-sm"><strong>Price:</strong> ₱1-2 per piece</p>
                </div>
              </div>

              {/* Taho */}
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Star className="h-5 w-5 text-green-500" />
                  Taho (Soft Tofu Dessert)
                </h3>
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Filipino Taho"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-700 mb-3">
                  A beloved morning treat consisting of soft silken tofu topped with arnibal (brown sugar syrup) 
                  and sago pearls. Listen for the distinctive "Tahoooo!" call of vendors.
                </p>
                <div className="bg-green-50 p-3 rounded">
                  <p className="text-sm"><strong>Best time:</strong> Early morning (6-10 AM)</p>
                  <p className="text-sm"><strong>Price:</strong> ₱20-30 per cup</p>
                </div>
              </div>

              {/* Halo-halo */}
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Star className="h-5 w-5 text-purple-500" />
                  Halo-halo (Mixed Dessert)
                </h3>
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Filipino Halo-halo"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-700 mb-3">
                  The king of Filipino desserts, halo-halo means "mix-mix" and consists of shaved ice with various 
                  toppings like beans, jellies, ube, leche flan, and ice cream.
                </p>
                <div className="bg-purple-50 p-3 rounded">
                  <p className="text-sm"><strong>Perfect for:</strong> Hot afternoons and sharing</p>
                  <p className="text-sm"><strong>Price:</strong> ₱50-150 depending on toppings</p>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Regional Specialties */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Regional Street Food Specialties</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Manila & Metro Manila</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Fish balls with sweet sauce</li>
                    <li>• Dirty ice cream (sorbetes)</li>
                    <li>• Turon (banana spring rolls)</li>
                    <li>• Mais (grilled corn)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Cebu</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Ngohiong (spring rolls)</li>
                    <li>• Tempura (fried squid balls)</li>
                    <li>• Puso (hanging rice)</li>
                    <li>• Sutukil (grilled seafood)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Iloilo</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Batchoy (noodle soup)</li>
                    <li>• Biscocho (toasted bread)</li>
                    <li>• Pancit Molo</li>
                    <li>• Fresh lumpia</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Davao</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Durian candy</li>
                    <li>• Pomelo</li>
                    <li>• Rambutan</li>
                    <li>• Marang fruit</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Best Places to Find Street Food */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Best Street Food Destinations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Manila</h4>
                  <p className="text-sm text-gray-600">
                    Binondo (Chinatown), Quiapo Market, University Belt area, and Divisoria Market offer 
                    the best variety of street food options.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Cebu City</h4>
                  <p className="text-sm text-gray-600">
                    Colon Street, Lahug night market, and Temple of Leah area have excellent street food scenes.
                  </p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Baguio</h4>
                  <p className="text-sm text-gray-600">
                    Session Road, Burnham Park area, and night market offer mountain-style street food.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready for a Filipino Food Adventure?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Let our AI travel planner create a culinary itinerary that includes the best street food destinations 
                and local food experiences across the Philippines.
              </p>
              <Link 
                href="/chat?prompt=Plan a Filipino food tour"
                className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
              >
                <Utensils className="h-5 w-5" />
                Plan My Food Adventure
              </Link>
            </CardContent>
          </Card>
        </article>
      </div>
      <Footer />
    </div>
  )
}
