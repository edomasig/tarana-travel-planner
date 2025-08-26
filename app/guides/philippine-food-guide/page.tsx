import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, MapPin, Clock, Star, Utensils, ChefHat, Coffee, Apple } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Footer } from '@/components/footer'

export default function PhilippineFoodGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto max-w-4xl px-4">
        <Link href="/guides" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Guides
        </Link>
        
        <article className="space-y-8">
          {/* Header */}
          <Card>
            <div className="relative h-64 md:h-80">
              <Image
                src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Filipino cuisine spread with various dishes"
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardHeader>
              <div className="flex items-center gap-2 text-orange-600 mb-2">
                <Utensils className="h-4 w-4" />
                <span className="text-sm font-medium">Cuisine • Filipino Food</span>
              </div>
              <CardTitle className="text-4xl">The Ultimate Philippine Food Guide</CardTitle>
              <div className="flex items-center gap-4 text-gray-500 text-sm">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  15 min read
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4" />
                  Last updated: January 2025
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Introduction */}
          <Card>
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Philippine cuisine is a vibrant tapestry woven from centuries of cultural influences, 
                indigenous traditions, and island-specific ingredients. Born from the marriage of Malay, 
                Chinese, Spanish, American, and indigenous cooking techniques, Filipino food offers 
                bold flavors, hearty comfort dishes, and unique combinations that might surprise 
                and delight international palates.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                From the world-famous adobo to lesser-known regional specialties, Philippine cuisine 
                celebrates balance – sweet meets salty, sour complements rich, and simple ingredients 
                transform into complex, satisfying meals. This comprehensive guide will take you 
                through the essential dishes, ingredients, and food experiences that define Filipino culinary culture.
              </p>
            </CardContent>
          </Card>

          {/* Essential Filipino Dishes */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Must-Try Filipino Dishes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <ChefHat className="h-5 w-5 text-red-500" />
                  Adobo - The National Dish
                </h3>
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Filipino Adobo chicken and pork"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-600 mb-3">
                  Considered the Philippines' national dish, adobo features meat (typically chicken, pork, 
                  or both) braised in vinegar, soy sauce, garlic, and black peppercorns. The dish varies 
                  significantly by region, with some versions adding coconut milk, different types of 
                  vinegar, or unique local ingredients.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Variations:</strong> Chicken adobo, pork adobo, adobong kangkong (water spinach), adobong pusit (squid)
                </div>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-bold mb-2">Lechon - The King of Filipino Celebrations</h3>
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Filipino Lechon roasted pig"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-600 mb-3">
                  A whole pig roasted over charcoal until the skin becomes perfectly crispy while the 
                  meat remains juicy and flavorful. Lechon is the centerpiece of Filipino celebrations 
                  and is often considered the ultimate test of a Filipino cook's skill. Cebu is 
                  particularly famous for its lechon.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Best regions:</strong> Cebu (known for the most flavorful), La Loma (Metro Manila)
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-bold mb-2">Sinigang - The Soul-Warming Soup</h3>
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Filipino Sinigang tamarind soup"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-600 mb-3">
                  This beloved sour soup is typically made with tamarind, tomatoes, and various vegetables 
                  with either pork, beef, fish, or shrimp. The signature tangy flavor comes from 
                  souring agents like tamarind, calamansi, or green mango. It's considered comfort 
                  food that brings families together.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Popular versions:</strong> Sinigang na baboy (pork), sinigang na hipon (shrimp), sinigang na bangus (milkfish)
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-bold mb-2">Kare-Kare - The Royal Stew</h3>
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Filipino Kare-kare peanut stew"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-600 mb-3">
                  A rich, thick stew made with oxtail, vegetables, and a signature peanut-based sauce. 
                  The dish is traditionally served with bagoong (fermented shrimp paste) and is 
                  considered one of the most sophisticated dishes in Filipino cuisine, often reserved 
                  for special occasions.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Key ingredients:</strong> Oxtail, peanut sauce, vegetables (eggplant, green beans, banana heart)
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Regional Specialties */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Regional Food Specialties</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3">Luzon Favorites</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Sisig (Pampanga):</strong> Sizzling chopped pig face and liver</li>
                    <li>• <strong>Pancit Habhab (Lucban):</strong> Stir-fried noodles on banana leaf</li>
                    <li>• <strong>Longganisa (various):</strong> Regional sausages with unique flavors</li>
                    <li>• <strong>Pinakbet (Ilocos):</strong> Mixed vegetable stew with bagoong</li>
                    <li>• <strong>Bagnet (Ilocos):</strong> Deep-fried crispy pork belly</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3">Visayas Delights</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>La Paz Batchoy (Iloilo):</strong> Rich noodle soup with organs</li>
                    <li>• <strong>Lechon Cebu:</strong> The Philippines' best roasted pig</li>
                    <li>• <strong>Chicken Inasal (Bacolod):</strong> Grilled chicken with annatto</li>
                    <li>• <strong>Puso (Cebu):</strong> Rice cooked in woven coconut leaves</li>
                    <li>• <strong>Humba (Visayas):</strong> Sweet braised pork belly</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3">Mindanao Specialties</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Durian:</strong> The controversial "king of fruits"</li>
                    <li>• <strong>Sinuglaw:</strong> Grilled pork belly with kinilaw (ceviche)</li>
                    <li>• <strong>Pastil (Maguindanao):</strong> Rice with shredded chicken in banana leaf</li>
                    <li>• <strong>Tuna dishes:</strong> Fresh tuna prepared various ways</li>
                    <li>• <strong>Halaan soup:</strong> Clam soup with ginger and lemongrass</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3">Street Food Classics</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Balut:</strong> Fertilized duck egg (adventure food!)</li>
                    <li>• <strong>Isaw:</strong> Grilled chicken intestines</li>
                    <li>• <strong>Fish ball:</strong> Deep-fried fish balls with sauce</li>
                    <li>• <strong>Taho:</strong> Soft tofu with syrup and tapioca pearls</li>
                    <li>• <strong>Halo-halo:</strong> Shaved ice dessert with mixed toppings</li>
                  </ul>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Filipino Breakfast */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Filipino Breakfast Culture</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <h4 className="font-semibold mb-3">The "Silog" Phenomenon</h4>
                <p className="text-gray-700 mb-3">
                  Filipino breakfast often follows the "silog" format: a combination of garlic fried rice 
                  (sinangag), fried egg (itlog), and a protein. The name combines the protein with 
                  "silog" (sinangag + itlog).
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="relative h-32 mb-3 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                      alt="Tapsilog Filipino breakfast"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h5 className="font-semibold mb-2">Tapsilog</h5>
                  <p className="text-sm text-gray-600">Tapa (cured beef) + silog</p>
                </div>
                
                <div className="text-center">
                  <div className="relative h-32 mb-3 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                      alt="Longsilog Filipino breakfast"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h5 className="font-semibold mb-2">Longsilog</h5>
                  <p className="text-sm text-gray-600">Longganisa (sausage) + silog</p>
                </div>
                
                <div className="text-center">
                  <div className="relative h-32 mb-3 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                      alt="Bangsilog Filipino breakfast"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h5 className="font-semibold mb-2">Bangsilog</h5>
                  <p className="text-sm text-gray-600">Bangus (milkfish) + silog</p>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Desserts & Sweets */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Apple className="h-6 w-6 text-pink-500" />
                Filipino Desserts & Sweet Treats
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Traditional Desserts</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Halo-halo:</strong> Layered shaved ice dessert with various toppings</li>
                    <li>• <strong>Leche flan:</strong> Filipino version of crème caramel</li>
                    <li>• <strong>Biko:</strong> Sticky rice cake with coconut caramel</li>
                    <li>• <strong>Ube halaya:</strong> Purple yam pudding</li>
                    <li>• <strong>Taho:</strong> Soft tofu with brown sugar syrup</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Regional Sweet Specialties</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Buko pie (Laguna):</strong> Young coconut pie</li>
                    <li>• <strong>Turrones de casuy (Silay):</strong> Cashew candy rolls</li>
                    <li>• <strong>Bibingka (various):</strong> Rice cake with cheese and salted egg</li>
                    <li>• <strong>Suman:</strong> Sticky rice wrapped in banana leaves</li>
                    <li>• <strong>Maja blanca:</strong> Coconut pudding with corn kernels</li>
                  </ul>
                </div>
              </div>

              <div className="bg-pink-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Must-Try Sweet Experiences</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <strong>Merienda Culture</strong><br/>
                    <span className="text-sm text-gray-600">
                      Afternoon snack time featuring kakanin (rice cakes), pandesal (bread rolls), 
                      and coffee or hot chocolate
                    </span>
                  </div>
                  <div>
                    <strong>Fiesta Sweets</strong><br/>
                    <span className="text-sm text-gray-600">
                      Special occasion desserts like leche flan, ube cake, and various coconut-based 
                      delicacies served during celebrations
                    </span>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Drinks & Beverages */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Coffee className="h-6 w-6 text-brown-500" />
                Filipino Drinks & Beverages
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-brown-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3">Coffee Culture</h4>
                  <p className="text-gray-700 mb-3">
                    The Philippines is one of the few countries that produce all four commercial 
                    coffee varieties. Filipino coffee culture includes both traditional and modern 
                    preparations, with local coffee shops becoming increasingly popular.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• <strong>Barako coffee:</strong> Strong Liberica variety</li>
                    <li>• <strong>Kapeng Alamid:</strong> Civet coffee (very expensive)</li>
                    <li>• <strong>Local coffee shops:</strong> Bo's Coffee, Figaro, etc.</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3">Traditional Beverages</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Calamansi juice:</strong> Filipino lime juice</li>
                    <li>• <strong>Buko juice:</strong> Fresh coconut water</li>
                    <li>• <strong>Sago't gulaman:</strong> Tapioca and gelatin drink</li>
                    <li>• <strong>Tsokolate:</strong> Thick hot chocolate</li>
                    <li>• <strong>Salabat:</strong> Ginger tea</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3">Alcoholic Beverages</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>San Miguel Beer:</strong> National beer brand</li>
                    <li>• <strong>Lambanog:</strong> Coconut wine/vodka</li>
                    <li>• <strong>Tuba:</strong> Fresh coconut wine</li>
                    <li>• <strong>Tanduay Rum:</strong> Popular local rum</li>
                    <li>• <strong>Rice wine:</strong> Traditional fermented rice drink</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3">Modern Filipino Drinks</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Milk tea culture:</strong> Various Asian-inspired flavors</li>
                    <li>• <strong>Fresh fruit shakes:</strong> Mango, avocado, melon</li>
                    <li>• <strong>Craft cocktails:</strong> Using local ingredients</li>
                    <li>• <strong>Specialty coffees:</strong> Third-wave coffee movement</li>
                  </ul>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Food Etiquette & Tips */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Filipino Food Culture & Etiquette</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Eating Customs</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Kamayan:</strong> Eating with hands (traditional)</li>
                    <li>• <strong>Shared meals:</strong> Food placed in center, everyone shares</li>
                    <li>• <strong>Rice staple:</strong> Rice accompanies almost every meal</li>
                    <li>• <strong>Mano gesture:</strong> Respect to elders before eating</li>
                    <li>• <strong>Pakimkim:</strong> Taking food home is encouraged</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Meal Timing</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Almusal:</strong> Breakfast (6-8 AM)</li>
                    <li>• <strong>Tanghalian:</strong> Lunch (11 AM-1 PM)</li>
                    <li>• <strong>Merienda:</strong> Afternoon snack (3-4 PM)</li>
                    <li>• <strong>Hapunan:</strong> Dinner (6-8 PM)</li>
                    <li>• <strong>Late-night snack:</strong> Common cultural practice</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Food Safety Tips for Travelers</h4>
                <ul className="space-y-2 text-orange-700">
                  <li>• Start with milder dishes if you're not used to bold flavors</li>
                  <li>• Choose busy, popular restaurants for street food</li>
                  <li>• Drink bottled water or properly boiled water</li>
                  <li>• Try local fruits but wash them properly</li>
                  <li>• Ask about spice levels - Filipino food can be quite salty/sweet</li>
                  <li>• Respect cultural dishes even if they seem unusual</li>
                </ul>
              </div>

            </CardContent>
          </Card>

          {/* Where to Experience */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Where to Experience Filipino Cuisine</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3">Food Markets & Street Food</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Mercato Centrale (BGC):</strong> Weekend gourmet market</li>
                    <li>• <strong>La Loma (Manila):</strong> Lechon capital</li>
                    <li>• <strong>Dampa seafood markets:</strong> Fresh seafood, various locations</li>
                    <li>• <strong>Night markets:</strong> Baguio, Iloilo, various cities</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3">Fine Dining Filipino</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Toyo Eatery:</strong> Modern Filipino cuisine</li>
                    <li>• <strong>Locavore:</strong> Contemporary Filipino dishes</li>
                    <li>• <strong>Gallery by Chele:</strong> Filipino ingredients, modern techniques</li>
                    <li>• <strong>Hey Handsome:</strong> Elevated comfort food</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3">Regional Food Destinations</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Pampanga:</strong> Culinary capital, sisig birthplace</li>
                    <li>• <strong>Iloilo:</strong> Batchoy and seafood paradise</li>
                    <li>• <strong>Cebu:</strong> Lechon and street food scene</li>
                    <li>• <strong>Bicol:</strong> Spicy dishes with coconut milk</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3">Food Tours & Experiences</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Manila food walks:</strong> Binondo, Malate districts</li>
                    <li>• <strong>Cooking classes:</strong> Learn to make traditional dishes</li>
                    <li>• <strong>Market tours:</strong> Learn about local ingredients</li>
                    <li>• <strong>Farm-to-table experiences:</strong> Rural cooking experiences</li>
                  </ul>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Embark on Your Filipino Food Adventure</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Let our AI travel planner create a personalized culinary journey through the Philippines, 
                featuring the best regional dishes, food markets, and authentic dining experiences 
                tailored to your taste preferences and dietary needs.
              </p>
              <Link 
                href="/chat?prompt=Plan a Filipino food tour across the Philippines"
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
