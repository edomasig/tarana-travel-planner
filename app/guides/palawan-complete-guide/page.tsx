import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, MapPin, Clock, Star, Camera, Plane, Hotel, Utensils, Navigation, Ship, Sun, Wind, Droplet, ShieldCheck, Briefcase, Wallet } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Footer } from '@/components/footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Complete Guide to Palawan 2025 - Philippines Last Frontier | GalaGPT',
  description: 'Discover pristine beaches, underground rivers, and hidden lagoons in Palawan. Complete travel guide with detailed itineraries, best time to visit, accommodation options, and insider tips for El Nido, Coron, and Puerto Princesa.',
  keywords: 'Palawan travel guide, El Nido, Coron, Puerto Princesa, Underground River, Philippines travel, island hopping, best beaches Palawan, travel itinerary, Palawan 2025',
  openGraph: {
    title: 'Complete Guide to Palawan - Philippines Last Frontier',
    description: 'Discover pristine beaches, underground rivers, and hidden lagoons in Palawan. Your complete travel guide with insider tips.',
    images: ['/Guides_Palawan.jpeg'],
  },
}

export default function PalawanGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto max-w-5xl px-4 py-8">
        <Link href="/guides" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Travel Guides
        </Link>

        <article className="space-y-8">
          <Card className="overflow-hidden shadow-2xl">
            <div className="relative h-80 md:h-96">
              <Image
                src="/Guides_Palawan.jpeg"
                alt="Crystal clear lagoon with limestone cliffs in Palawan, Philippines"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-5 w-5" />
                  <span className="text-sm font-medium">Mimaropa Region • Philippines</span>
                </div>
                <h1 className="text-5xl font-bold mb-2">Complete Guide to Palawan</h1>
                <p className="text-xl text-gray-200">The Philippines' Last Frontier - Pristine Paradise Awaits</p>
              </div>
            </div>
          </Card>

          <Card id="overview">
            <CardHeader>
              <CardTitle className="text-3xl">Why Palawan is the Philippines' Crown Jewel</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                Voted the "World's Best Island" multiple times, Palawan is a slice of paradise that lives up to the hype. This archipelagic province, often called the Philippines' "Last Ecological Frontier," is a breathtaking tapestry of crystal-clear waters, dramatic limestone cliffs, and vibrant coral reefs. It's a destination that caters to every type of traveler, from the luxury seeker to the budget backpacker, the adrenaline junkie to the beach bum.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Imagine waking up to the sound of gentle waves, spending your day exploring hidden lagoons and snorkeling with sea turtles, and ending it with a spectacular sunset over the ocean. This is the everyday magic of Palawan. This guide will walk you through everything you need to know to plan an unforgettable trip to this tropical wonderland.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Must-Visit Destinations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-2xl font-bold mb-2">El Nido: The Gateway to Bacuit Bay</h3>
                <p className="text-gray-700 leading-relaxed mb-4">Famous for its stunning karst landscapes and idyllic lagoons, El Nido is the postcard-perfect image of Palawan. The main attraction here is island hopping in the Bacuit Archipelago, a collection of islands and islets with some of the most beautiful scenery in the world.</p>
                <h4 className="font-semibold mb-2">Top things to do in El Nido:</h4>
                <ul className="list-disc ml-6 text-gray-600 space-y-2">
                  <li><b>Island Hopping Tours (A, B, C, D):</b> These standardized tours are the best way to see the highlights. Tour A (lagoons) and Tour C (hidden beaches) are the most popular. Don't miss the Big Lagoon, Small Lagoon, and Secret Beach.</li>
                  <li><b>Nacpan Beach:</b> A stunning 4-kilometer stretch of golden sand, perfect for swimming, sunbathing, and watching the sunset. You can rent a scooter or take a tricycle to get here.</li>
                  <li><b>Lio Beach:</b> A more developed beach area with restaurants, shops, and a beautiful pier. It's a great place to relax and enjoy a meal with a view.</li>
                  <li><b>Canopy Walk:</b> For a panoramic view of El Nido town and Bacuit Bay, take the canopy walk up to the limestone cliffs. It's a relatively easy climb and well worth the effort.</li>
                </ul>
              </div>
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-2xl font-bold mb-2">Coron: Wrecks, Reefs, and Lakes</h3>
                <p className="text-gray-700 leading-relaxed mb-4">Coron is a world-class destination for wreck diving, with a fleet of Japanese warships sunk here during World War II. But even if you're not a diver, Coron's stunning natural beauty, including the iconic Kayangan Lake, makes it a must-visit.</p>
                <h4 className="font-semibold mb-2">Top things to do in Coron:</h4>
                <ul className="list-disc ml-6 text-gray-600 space-y-2">
                  <li><b>Kayangan Lake:</b> Often called the cleanest lake in the Philippines, Kayangan Lake is a brackish body of water surrounded by towering limestone cliffs. The viewpoint overlooking the lake is one of the most photographed spots in the country.</li>
                  <li><b>Twin Lagoon:</b> A unique spot where you can swim through a small opening in the rock to enter a hidden lagoon. The water here is a mix of fresh and salt water, creating interesting temperature changes.</li>
                  <li><b>Wreck Diving:</b> Explore the sunken Japanese warships from WWII. There are options for all levels of divers, from shallow wrecks for beginners to deeper, more challenging dives for experienced divers.</li>
                  <li><b>Maquinit Hot Springs:</b> After a long day of island hopping, relax in the therapeutic saltwater hot springs of Maquinit. It's one of the few saltwater hot springs in the world.</li>
                </ul>
              </div>
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-2xl font-bold mb-2">Puerto Princesa: The Underground River and More</h3>
                <p className="text-gray-700 leading-relaxed mb-4">As the capital of Palawan, Puerto Princesa is the main gateway to the province. It's home to the world-famous Puerto Princesa Subterranean River National Park, a UNESCO World Heritage Site and one of the New7Wonders of Nature.</p>
                <h4 className="font-semibold mb-2">Top things to do in Puerto Princesa:</h4>
                <ul className="list-disc ml-6 text-gray-600 space-y-2">
                  <li><b>Underground River Tour:</b> A must-do experience. You'll take a paddleboat tour through a massive cave system, marveling at the impressive stalactites and stalagmites. Book your tour well in advance, as permits are limited.</li>
                  <li><b>Honda Bay Island Hopping:</b> Explore the beautiful islands of Honda Bay, including Cowrie Island, Luli Island, and Starfish Island. It's a great way to spend a day swimming, snorkeling, and sunbathing.</li>
                  <li><b>Firefly Watching:</b> Take a magical evening tour on the Iwahig River to see thousands of fireflies light up the mangrove trees. It's a truly enchanting experience.</li>
                  <li><b>City Tour:</b> Explore the city's landmarks, including the Immaculate Conception Cathedral, Plaza Cuartel, and the Palawan Wildlife Rescue and Conservation Center (Crocodile Farm).</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Planning Essentials</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2"><Plane className="h-5 w-5 text-blue-500"/> Getting To and Around Palawan</h4>
                <p className="text-gray-700 leading-relaxed mb-4"><b>By Air:</b> The main entry points are Puerto Princesa International Airport (PPS), El Nido's Lio Airport (LIO), and Coron's Francisco B. Reyes Airport (USU). Major airlines like Philippine Airlines, Cebu Pacific, and AirAsia have regular flights from Manila and Cebu.</p>
                <p className="text-gray-700 leading-relaxed mb-4"><b>Getting Between Destinations:</b></p>
                <ul className="list-disc ml-6 text-gray-600 space-y-2">
                    <li><b>Puerto Princesa to El Nido:</b> The most common way is by van (5-6 hours) or bus (6-8 hours). Vans are faster but more cramped.</li>
                    <li><b>El Nido to Coron:</b> You can take a fast ferry (3-4 hours) or a slow ferry (6-8 hours). There are also flights available between the two.</li>
                </ul>
                 <p className="text-gray-700 leading-relaxed mt-4"><b>Local Transportation:</b> Tricycles are the main mode of transport within towns. You can also rent a scooter to explore on your own, which is a popular option in El Nido.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2"><Hotel className="h-5 w-5 text-green-500"/> Where to Stay</h4>
                <p className="text-gray-700 leading-relaxed mb-4">Palawan offers a wide range of accommodation to suit every budget.</p>
                <ul className="list-disc ml-6 text-gray-600 space-y-2">
                  <li><b>Budget (₱500 - ₱1,500/night):</b> Hostels and guesthouses are plentiful in the town centers of Puerto Princesa, El Nido, and Coron. They are a great way to meet other travelers. Some popular options include Outpost Hostel in El Nido and Hop Hostel in Coron.</li>
                  <li><b>Mid-Range (₱2,000 - ₱5,000/night):</b> You can find boutique hotels, beachfront cottages, and comfortable resorts in this price range. Many offer great value with amenities like swimming pools and on-site restaurants.</li>
                  <li><b>Luxury (₱8,000+ /night):</b> For a truly special experience, treat yourself to a stay at one of Palawan's luxury resorts. Many are located on private islands and offer unparalleled service and amenities. El Nido Resorts is a well-known group of luxury resorts in the area.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2"><Utensils className="h-5 w-5 text-orange-500"/> What to Eat</h4>
                <p className="text-gray-700 leading-relaxed mb-4">Palawan's cuisine is heavily influenced by its fresh seafood and tropical fruits. Don't leave without trying:</p>
                <ul className="list-disc ml-6 text-gray-600 space-y-2">
                  <li><b>Kinilaw:</b> The Filipino version of ceviche, made with fresh raw fish marinated in vinegar, calamansi, onions, and ginger.</li>
                  <li><b>Lato (Sea Grapes):</b> A type of seaweed that looks like tiny green grapes. It's usually served as a salad with vinegar and onions.</li>
                  <li><b>Tamilok (Woodworm):</b> For the adventurous eater! Tamilok is a type of mollusk that lives in mangrove trees. It's usually eaten raw and dipped in vinegar.</li>
                  <li><b>Fresh Seafood BBQ:</b> You'll find grilled fish, squid, and prawns everywhere, especially on the island hopping tours.</li>
                </ul>
              </div>
            </CardContent>
          </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">Sample Itineraries</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div>
                        <h4 className="font-semibold mb-2">3-Day Palawan Quickie (Focus on El Nido)</h4>
                        <ul className="list-decimal ml-6 text-gray-600 space-y-2">
                            <li><b>Day 1:</b> Arrive in El Nido, check into your hotel. Explore the town and have dinner at a beachfront restaurant.</li>
                            <li><b>Day 2:</b> El Nido Tour A - explore the Big Lagoon, Small Lagoon, and Secret Lagoon.</li>
                            <li><b>Day 3:</b> Visit Nacpan Beach in the morning, then depart from El Nido.</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">7-Day Palawan Adventure (El Nido & Coron)</h4>
                        <ul className="list-decimal ml-6 text-gray-600 space-y-2">
                            <li><b>Day 1-3:</b> El Nido (as above).</li>
                            <li><b>Day 4:</b> Take the ferry from El Nido to Coron. Check into your hotel and relax.</li>
                            <li><b>Day 5:</b> Coron Ultimate Tour - visit Kayangan Lake, Twin Lagoon, and Siete Pecados.</li>
                            <li><b>Day 6:</b> Coron Wreck Diving or relax at Maquinit Hot Springs.</li>
                            <li><b>Day 7:</b> Depart from Coron.</li>
                        </ul>
                    </div>
                </CardContent>
            </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Budget Overview</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="text-sm text-green-800 font-semibold">Budget</div>
                <div className="text-2xl font-bold text-green-600">₱2,000–4,000</div>
                <div className="text-xs text-green-700">per day</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-sm text-blue-800 font-semibold">Mid-Range</div>
                <div className="text-2xl font-bold text-blue-600">₱4,000–8,000</div>
                <div className="text-xs text-blue-700">per day</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <div className="text-sm text-purple-800 font-semibold">Luxury</div>
                <div className="text-2xl font-bold text-purple-600">₱8,000+</div>
                <div className="text-xs text-purple-700">per day</div>
              </div>
            </CardContent>
          </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">Insider Tips for a Better Palawan Trip</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-start gap-4">
                        <Wallet className="h-6 w-6 text-blue-500 mt-1"/>
                        <div>
                            <h4 className="font-semibold">Bring Enough Cash</h4>
                            <p className="text-gray-600">While there are ATMs in the main towns, they can be unreliable. It's always a good idea to bring enough cash with you, especially when traveling to more remote areas.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <ShieldCheck className="h-6 w-6 text-green-500 mt-1"/>
                        <div>
                            <h4 className="font-semibold">Book in Advance</h4>
                            <p className="text-gray-600">Tours and accommodation, especially during peak season (December to May), can get booked up quickly. Book in advance to avoid disappointment.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Droplet className="h-6 w-6 text-red-500 mt-1"/>
                        <div>
                            <h4 className="font-semibold">Stay Hydrated and Protected</h4>
                            <p className="text-gray-600">The sun can be intense in Palawan. Bring a reusable water bottle, reef-safe sunscreen, a hat, and sunglasses.</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <Briefcase className="h-6 w-6 text-purple-500 mt-1"/>
                        <div>
                            <h4 className="font-semibold">Pack Light, but Smart</h4>
                            <p className="text-gray-600">You'll be doing a lot of getting on and off boats, so a backpack is more practical than a suitcase. Pack light, but don't forget essentials like a dry bag, insect repellent, and a basic first-aid kit.</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Explore Palawan?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Let our AI planner build a day-by-day Palawan itinerary based on your dates, budget, and interests.
              </p>
              <Link href="/plan" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                <MapPin className="h-5 w-5" /> Plan My Palawan Trip
              </Link>
            </CardContent>
          </Card>
        </article>
      </div>
      <Footer />
    </div>
  )
}