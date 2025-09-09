import { PrismaClient } from '@prisma/client'
import fs from 'fs'
import path from 'path'

const prisma = new PrismaClient()

// Static blog posts data extracted from existing pages
const staticBlogPosts = [
  {
    title: "Ultimate Filipino Food Guide 2025: Regional Dishes, Where to Eat, and Budget Tips",
    slug: "ultimate-filipino-food-guide",
    excerpt: "A comprehensive guide to Filipino cuisine across Luzon, Visayas, and Mindanao. Discover regional specialties, market tips, karinderia hacks, and sample foodie itineraries—on any budget.",
    featuredImage: "/filipino-woman-smiling.png",
    author: "GalaGPT Team",
    published: true,
    featured: false,
    metaTitle: "Ultimate Filipino Food Guide 2025: Regional Dishes, Where to Eat, and Budget Tips | GalaGPT",
    metaDescription: "A comprehensive guide to Filipino cuisine across Luzon, Visayas, and Mindanao. Discover regional specialties, market tips, karinderia hacks, and sample foodie itineraries—on any budget.",
    tags: ["Food & Culture", "Travel Guides", "Budget Travel"],
    content: `
      <div class="space-y-8">
        <div class="bg-gradient-to-br from-orange-50 via-rose-50 to-amber-50 p-8 rounded-lg">
          <h2 class="text-3xl font-bold mb-4 flex items-center gap-2">
            <span class="text-orange-600">🍽️</span> Regional Highlights
          </h2>
          <div class="grid gap-6 md:grid-cols-3 mb-8">
            <div class="rounded-lg border p-6 bg-white">
              <h3 class="text-xl font-bold mb-2">Luzon</h3>
              <ul class="text-sm text-gray-700 space-y-1">
                <li>• Adobo (Manila)</li>
                <li>• Laing & Bicol Express (Bicol)</li>
                <li>• Pinikpikan (Cordillera)</li>
                <li>• Pancit Batil Patong (Cagayan)</li>
              </ul>
            </div>
            <div class="rounded-lg border p-6 bg-white">
              <h3 class="text-xl font-bold mb-2">Visayas</h3>
              <ul class="text-sm text-gray-700 space-y-1">
                <li>• Lechon Cebu</li>
                <li>• La Paz Batchoy (Iloilo)</li>
                <li>• Kansi (Negros)</li>
                <li>• Binakol (Aklan)</li>
              </ul>
            </div>
            <div class="rounded-lg border p-6 bg-white">
              <h3 class="text-xl font-bold mb-2">Mindanao</h3>
              <ul class="text-sm text-gray-700 space-y-1">
                <li>• Pastil (Maguindanao)</li>
                <li>• Tiyula Itum (Tawi-Tawi)</li>
                <li>• Satti (Zamboanga)</li>
                <li>• Durian treats (Davao)</li>
              </ul>
            </div>
          </div>

          <div class="bg-amber-50 border-l-4 border-amber-400 p-6 rounded">
            <h3 class="text-xl font-bold text-amber-900 mb-2">Essential Filipino Food Tips</h3>
            <ul class="text-amber-800 space-y-2">
              <li>• <strong>Karinderia:</strong> Local eateries with home-style cooking (₱50-150/meal)</li>
              <li>• <strong>Markets:</strong> Best fresh ingredients and street food</li>
              <li>• <strong>Regional specialties:</strong> Each region has unique flavors</li>
              <li>• <strong>Rice is life:</strong> Paired with almost every dish</li>
            </ul>
          </div>

          <h3 class="text-2xl font-bold mt-8 mb-4">Must-Try Dishes by Region</h3>
          
          <div class="space-y-6">
            <div class="bg-white p-6 rounded-lg border">
              <h4 class="text-xl font-semibold mb-3">🏝️ Luzon Favorites</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 class="font-semibold">Manila & Metro</h5>
                  <ul class="text-sm space-y-1">
                    <li>• Adobo - National dish</li>
                    <li>• Pancit Canton - Stir-fried noodles</li>
                    <li>• Lumpia - Filipino spring rolls</li>
                  </ul>
                </div>
                <div>
                  <h5 class="font-semibold">Bicol Region</h5>
                  <ul class="text-sm space-y-1">
                    <li>• Bicol Express - Spicy coconut curry</li>
                    <li>• Laing - Taro leaves in coconut milk</li>
                    <li>• Pinangat - Fish in banana leaves</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg border">
              <h4 class="text-xl font-semibold mb-3">🏖️ Visayas Specialties</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 class="font-semibold">Cebu</h5>
                  <ul class="text-sm space-y-1">
                    <li>• Lechon - Roasted pig</li>
                    <li>• Cebu Chorizo - Spicy sausage</li>
                    <li>• Sutukil - Grilled seafood</li>
                  </ul>
                </div>
                <div>
                  <h5 class="font-semibold">Iloilo</h5>
                  <ul class="text-sm space-y-1">
                    <li>• La Paz Batchoy - Noodle soup</li>
                    <li>• Pancit Molo - Dumpling soup</li>
                    <li>• Inasal - Grilled chicken</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    title: "Cebu–Bohol Ultimate Itinerary (5–7 Days)",
    slug: "cebu-bohol-ultimate-itinerary", 
    excerpt: "A complete Cebu–Bohol combo guide: ferries, day-by-day routes, best island hopping, top sights (Balicasag, Chocolate Hills), food stops, and budget ranges.",
    featuredImage: "/iloilo.jpg",
    author: "GalaGPT Team",
    published: true,
    featured: false,
    metaTitle: "Cebu–Bohol Ultimate Itinerary (5–7 Days): Ferries, Highlights, and Costs | GalaGPT",
    metaDescription: "A complete Cebu–Bohol combo guide: ferries, day-by-day routes, best island hopping, top sights (Balicasag, Chocolate Hills), food stops, and budget ranges with planner CTA.",
    tags: ["Travel Guides", "Itinerary", "Island Hopping"],
    content: `
      <div class="space-y-8">
        <div class="bg-gradient-to-br from-sky-50 via-amber-50 to-emerald-50 p-8 rounded-lg">
          <p class="text-lg leading-relaxed text-gray-700 mb-6">
            Pairing Cebu and Bohol gives you city energy, heritage spots, and world-class island hopping in one trip. 
            Use this plan to time ferries, pick the right beaches, and budget your days without stress.
          </p>

          <div class="bg-sky-50 border-l-4 border-sky-400 p-6 rounded mb-8">
            <h3 class="text-xl font-bold text-sky-900 mb-2">Trip Overview</h3>
            <div class="grid md:grid-cols-2 gap-4 text-sky-800">
              <div>
                <strong>Duration:</strong> 5-7 days<br>
                <strong>Best time:</strong> December-May<br>
                <strong>Budget range:</strong> ₱8,000-25,000
              </div>
              <div>
                <strong>Highlights:</strong> Chocolate Hills, Balicasag Island<br>
                <strong>Ferry time:</strong> 2 hours Cebu-Bohol<br>
                <strong>Must-do:</strong> Island hopping, heritage tour
              </div>
            </div>
          </div>

          <h2 class="text-3xl font-bold mb-6 flex items-center gap-2">
            <span class="text-blue-600">🗓️</span> Day-by-Day Itinerary
          </h2>

          <div class="space-y-6">
            <div class="bg-white p-6 rounded-lg border shadow-sm">
              <h3 class="text-xl font-semibold mb-3 text-blue-600">Day 1: Arrival in Cebu</h3>
              <ul class="space-y-2">
                <li>• <strong>Morning:</strong> Land at Mactan-Cebu Airport</li>
                <li>• <strong>Afternoon:</strong> Check into Cebu City hotel, explore Colon Street</li>
                <li>• <strong>Evening:</strong> Dinner at Larsian BBQ or Sutukil</li>
                <li>• <strong>Budget:</strong> ₱1,500-3,000 (hotel + meals)</li>
              </ul>
            </div>

            <div class="bg-white p-6 rounded-lg border shadow-sm">
              <h3 class="text-xl font-semibold mb-3 text-green-600">Day 2: Cebu Heritage & Food</h3>
              <ul class="space-y-2">
                <li>• <strong>Morning:</strong> Magellan's Cross, Basilica del Santo Niño</li>
                <li>• <strong>Afternoon:</strong> Fort San Pedro, Heritage Monument</li>
                <li>• <strong>Evening:</strong> Temple of Leah, Sirao Flower Garden</li>
                <li>• <strong>Must-try:</strong> Authentic lechon at CNT or Zubuchon</li>
              </ul>
            </div>

            <div class="bg-white p-6 rounded-lg border shadow-sm">
              <h3 class="text-xl font-semibold mb-3 text-purple-600">Day 3: Ferry to Bohol</h3>
              <ul class="space-y-2">
                <li>• <strong>Morning:</strong> Take 8AM ferry to Tagbilaran (2 hours)</li>
                <li>• <strong>Afternoon:</strong> Check into Panglao resort</li>
                <li>• <strong>Evening:</strong> Sunset at Alona Beach</li>
                <li>• <strong>Ferry cost:</strong> ₱800-1,200 per person</li>
              </ul>
            </div>

            <div class="bg-white p-6 rounded-lg border shadow-sm">
              <h3 class="text-xl font-semibold mb-3 text-orange-600">Day 4: Chocolate Hills & Countryside</h3>
              <ul class="space-y-2">
                <li>• <strong>Early morning:</strong> Chocolate Hills Complex</li>
                <li>• <strong>Mid-morning:</strong> Tarsier Sanctuary</li>
                <li>• <strong>Afternoon:</strong> Loboc River cruise</li>
                <li>• <strong>Evening:</strong> Return to Panglao</li>
              </ul>
            </div>

            <div class="bg-white p-6 rounded-lg border shadow-sm">
              <h3 class="text-xl font-semibold mb-3 text-teal-600">Day 5: Island Hopping Adventure</h3>
              <ul class="space-y-2">
                <li>• <strong>Full day:</strong> Balicasag Island snorkeling</li>
                <li>• <strong>Stops:</strong> Virgin Island, Dolphin watching</li>
                <li>• <strong>Includes:</strong> Lunch on boat, snorkel gear</li>
                <li>• <strong>Cost:</strong> ₱1,500-2,500 per person</li>
              </ul>
            </div>
          </div>

          <div class="mt-8 bg-emerald-50 border-l-4 border-emerald-400 p-6 rounded">
            <h3 class="text-xl font-bold text-emerald-900 mb-2">💰 Budget Breakdown</h3>
            <div class="grid md:grid-cols-3 gap-4 text-emerald-800">
              <div>
                <h4 class="font-semibold">Budget (₱8,000-12,000)</h4>
                <ul class="text-sm space-y-1">
                  <li>• Hostels/guesthouses</li>
                  <li>• Local restaurants</li>
                  <li>• Public transport</li>
                  <li>• Group tours</li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold">Mid-range (₱12,000-20,000)</h4>
                <ul class="text-sm space-y-1">
                  <li>• 3-star hotels</li>
                  <li>• Mix of local/tourist spots</li>
                  <li>• Private transfers</li>
                  <li>• Some tours</li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold">Luxury (₱20,000+)</h4>
                <ul class="text-sm space-y-1">
                  <li>• Beach resorts</li>
                  <li>• Fine dining</li>
                  <li>• Private tours</li>
                  <li>• Premium activities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    title: "Hidden Gems of Northern Philippines: Beyond Baguio and Sagada",
    slug: "hidden-gems-northern-philippines",
    excerpt: "Discover lesser-known destinations in Luzon that offer incredible experiences without the crowds. From pristine beaches to mountain adventures, Northern Philippines has secrets waiting to be explored.",
    featuredImage: "/Baguio_Session_Road_(Baguio_City;_12-04-2022).jpg",
    author: "Maria Santos",
    published: true,
    featured: true, // Make this the featured post
    metaTitle: "Hidden Gems of Northern Philippines: Beyond Baguio and Sagada | GalaGPT",
    metaDescription: "Discover lesser-known destinations in Luzon that offer incredible experiences without the crowds. From pristine beaches to mountain adventures, Northern Philippines has secrets waiting to be explored.",
    tags: ["Adventure", "Hidden Gems", "Northern Philippines"],
    content: `
      <div class="space-y-8">
        <div class="bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 p-8 rounded-lg">
          <p class="text-lg leading-relaxed text-gray-700 mb-6">
            While Baguio and Sagada capture most travelers' attention, Northern Philippines harbors incredible destinations 
            that remain beautifully untouched. These hidden gems offer authentic experiences, pristine nature, and the chance 
            to explore the Philippines like few tourists ever do.
          </p>

          <div class="bg-blue-50 border-l-4 border-blue-400 p-6 rounded mb-8">
            <h3 class="text-xl font-bold text-blue-900 mb-2">Why Go Off the Beaten Path?</h3>
            <ul class="text-blue-800 space-y-1">
              <li>• Fewer crowds = better photos and experiences</li>
              <li>• Lower costs compared to popular destinations</li>
              <li>• Authentic interactions with local communities</li>
              <li>• Pristine natural environments</li>
            </ul>
          </div>

          <h2 class="text-3xl font-bold mb-6 flex items-center gap-2">
            <span class="text-green-600">🏔️</span> Mountain Hidden Gems
          </h2>

          <div class="space-y-6">
            <div class="bg-white p-6 rounded-lg border shadow-sm">
              <h3 class="text-xl font-semibold mb-3 text-green-600">Kabayan, Benguet</h3>
              <p class="text-gray-700 mb-3">
                Home to the famous Kabayan mummies and Mt. Pulag's less crowded trails. This highland town offers 
                a glimpse into ancient Ibaloi culture while providing access to some of Luzon's best mountain scenery.
              </p>
              <div class="bg-green-50 p-4 rounded">
                <strong>Best for:</strong> Cultural immersion, mountain climbing, photography<br>
                <strong>When to visit:</strong> December-February for clear skies<br>
                <strong>Budget:</strong> ₱2,000-4,000 for 2-3 days
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg border shadow-sm">
              <h3 class="text-xl font-semibold mb-3 text-purple-600">Tinglayan, Kalinga</h3>
              <p class="text-gray-700 mb-3">
                Experience authentic Kalinga culture in this remote mountain town. Trek through rice terraces, 
                meet traditional tattoo artists, and witness age-old customs that have survived centuries.
              </p>
              <div class="bg-purple-50 p-4 rounded">
                <strong>Best for:</strong> Cultural immersion, trekking, traditional crafts<br>
                <strong>When to visit:</strong> March-May for dry weather<br>
                <strong>Budget:</strong> ₱3,000-5,000 for 3-4 days
              </div>
            </div>
          </div>

          <h2 class="text-3xl font-bold mt-8 mb-6 flex items-center gap-2">
            <span class="text-blue-600">🏖️</span> Coastal Secrets
          </h2>

          <div class="space-y-6">
            <div class="bg-white p-6 rounded-lg border shadow-sm">
              <h3 class="text-xl font-semibold mb-3 text-blue-600">Palaui Island, Cagayan</h3>
              <p class="text-gray-700 mb-3">
                Often called the "Northern Batanes," this volcanic island offers dramatic cliffs, pristine beaches, 
                and some of the clearest waters in the Philippines - without the Batanes price tag.
              </p>
              <div class="bg-blue-50 p-4 rounded">
                <strong>Best for:</strong> Beach camping, cliff jumping, snorkeling<br>
                <strong>When to visit:</strong> March-June for calm seas<br>
                <strong>Budget:</strong> ₱2,500-4,500 for 2-3 days
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg border shadow-sm">
              <h3 class="text-xl font-semibold mb-3 text-teal-600">Dinadiawan, Aurora</h3>
              <p class="text-gray-700 mb-3">
                A surfer's paradise that rivals Siargao but with a fraction of the crowds. Perfect waves, 
                laid-back vibes, and stunning sunrises make this Aurora's best-kept secret.
              </p>
              <div class="bg-teal-50 p-4 rounded">
                <strong>Best for:</strong> Surfing, beach relaxation, photography<br>
                <strong>When to visit:</strong> September-February for best swells<br>
                <strong>Budget:</strong> ₱2,000-3,500 for 2-3 days
              </div>
            </div>
          </div>

          <div class="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
            <h3 class="text-xl font-bold text-yellow-900 mb-2">🚗 Getting There</h3>
            <p class="text-yellow-800 mb-3">
              Most hidden gems require a bit more effort to reach, but that's what keeps them special:
            </p>
            <ul class="text-yellow-800 space-y-1">
              <li>• <strong>Bus + jeepney:</strong> Most economical option (₱500-800 total)</li>
              <li>• <strong>Van rental:</strong> Best for groups (₱3,000-5,000 per day)</li>
              <li>• <strong>Motorcycle:</strong> For the adventurous (₱800-1,200 per day)</li>
              <li>• <strong>Local guides:</strong> Essential for some destinations (₱1,000-2,000)</li>
            </ul>
          </div>
        </div>
      </div>
    `
  },
  {
    title: "Best Filipino Street Food: A Culinary Adventure Guide",
    slug: "filipino-street-food-guide",
    excerpt: "Explore the vibrant world of Filipino street food, from savory BBQ to sweet delicacies. Learn where to find the best treats and how to eat safely while discovering authentic local flavors.",
    featuredImage: "/food-ad.png",
    author: "Chef Miguel Reyes",
    published: true,
    featured: false,
    metaTitle: "Best Filipino Street Food Guide 2025: Where to Eat Safely | GalaGPT",
    metaDescription: "Explore the vibrant world of Filipino street food, from savory BBQ to sweet delicacies. Learn where to find the best treats and how to eat safely while discovering authentic local flavors.",
    tags: ["Food & Culture", "Street Food", "Budget Travel"],
    content: `
      <div class="space-y-8">
        <div class="bg-gradient-to-br from-red-50 via-yellow-50 to-orange-50 p-8 rounded-lg">
          <p class="text-lg leading-relaxed text-gray-700 mb-6">
            Filipino street food is an adventure for the senses. From sizzling BBQ stalls to colorful kakanin (rice cakes), 
            the streets offer an authentic taste of Philippine culture. This guide will help you navigate the delicious world 
            of street food safely and deliciously.
          </p>

          <div class="bg-red-50 border-l-4 border-red-400 p-6 rounded mb-8">
            <h3 class="text-xl font-bold text-red-900 mb-2">🛡️ Street Food Safety Tips</h3>
            <ul class="text-red-800 space-y-1">
              <li>• Choose busy stalls with high turnover</li>
              <li>• Look for food cooked fresh in front of you</li>
              <li>• Avoid raw or cold items if you have a sensitive stomach</li>
              <li>• Bring hand sanitizer or find handwashing stations</li>
              <li>• Start with small portions to test your tolerance</li>
            </ul>
          </div>

          <h2 class="text-3xl font-bold mb-6 flex items-center gap-2">
            <span class="text-orange-600">🍢</span> Must-Try Street Foods
          </h2>

          <div class="space-y-6">
            <div class="bg-white p-6 rounded-lg border shadow-sm">
              <h3 class="text-xl font-semibold mb-3 text-orange-600">Barbecue Favorites</h3>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 class="font-semibold">🥩 Meat Skewers</h4>
                  <ul class="text-sm space-y-1 mb-3">
                    <li>• <strong>Pork BBQ:</strong> Sweet marinade, perfectly grilled (₱15-25/stick)</li>
                    <li>• <strong>Chicken Inasal:</strong> Annatto-rubbed, citrusy flavor (₱20-30/stick)</li>
                    <li>• <strong>Beef Tapa:</strong> Cured, salty-sweet beef strips (₱25-35/stick)</li>
                  </ul>
                </div>
                <div>
                  <h4 class="font-semibold">🐾 Adventurous Options</h4>
                  <ul class="text-sm space-y-1">
                    <li>• <strong>Isaw:</strong> Grilled chicken/pork intestines (₱10-15/stick)</li>
                    <li>• <strong>Betamax:</strong> Grilled pork blood cubes (₱8-12/stick)</li>
                    <li>• <strong>Adidas:</strong> Grilled chicken feet (₱5-10/piece)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg border shadow-sm">
              <h3 class="text-xl font-semibold mb-3 text-yellow-600">Fried Delights</h3>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 class="font-semibold">🍤 Seafood & Fish</h4>
                  <ul class="text-sm space-y-1 mb-3">
                    <li>• <strong>Fish Balls:</strong> Deep-fried fish paste balls (₱1-2/piece)</li>
                    <li>• <strong>Squid Balls:</strong> Chewy squid in batter (₱2-3/piece)</li>
                    <li>• <strong>Tempura:</strong> Battered fish/vegetables (₱3-5/piece)</li>
                  </ul>
                </div>
                <div>
                  <h4 class="font-semibold">🥟 Snacks & Sides</h4>
                  <ul class="text-sm space-y-1">
                    <li>• <strong>Kwek-kwek:</strong> Orange battered quail eggs (₱2-3/piece)</li>
                    <li>• <strong>Tokneneng:</strong> Battered chicken eggs (₱5-8/piece)</li>
                    <li>• <strong>Taho:</strong> Soft tofu with syrup (₱10-20/cup)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg border shadow-sm">
              <h3 class="text-xl font-semibold mb-3 text-purple-600">Sweet Treats (Kakanin)</h3>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 class="font-semibold">🍯 Rice-Based Sweets</h4>
                  <ul class="text-sm space-y-1 mb-3">
                    <li>• <strong>Bibingka:</strong> Rice cake with cheese & salted egg (₱25-40)</li>
                    <li>• <strong>Puto:</strong> Steamed rice cakes, often with cheese (₱5-10/piece)</li>
                    <li>• <strong>Suman:</strong> Sticky rice with latik sauce (₱15-25/serving)</li>
                  </ul>
                </div>
                <div>
                  <h4 class="font-semibold">🥥 Coconut Specialties</h4>
                  <ul class="text-sm space-y-1">
                    <li>• <strong>Buko Pie:</strong> Young coconut pie slices (₱25-40/slice)</li>
                    <li>• <strong>Mais con Yelo:</strong> Corn with ice and milk (₱15-25/cup)</li>
                    <li>• <strong>Halo-halo:</strong> Mixed shaved ice dessert (₱40-80/serving)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 class="text-3xl font-bold mt-8 mb-6 flex items-center gap-2">
            <span class="text-green-600">📍</span> Best Street Food Destinations
          </h2>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-6 rounded-lg border shadow-sm">
              <h3 class="text-xl font-semibold mb-3 text-green-600">Manila Hotspots</h3>
              <ul class="space-y-2">
                <li>• <strong>Roxas Boulevard:</strong> Weekend night market vibes</li>
                <li>• <strong>Chinatown (Binondo):</strong> Fusion Filipino-Chinese treats</li>
                <li>• <strong>University Belt:</strong> Student-friendly prices</li>
                <li>• <strong>Divisoria:</strong> Authentic local atmosphere</li>
              </ul>
            </div>
            
            <div class="bg-white p-6 rounded-lg border shadow-sm">
              <h3 class="text-xl font-semibold mb-3 text-blue-600">Regional Favorites</h3>
              <ul class="space-y-2">
                <li>• <strong>Cebu:</strong> Larsian BBQ complex</li>
                <li>• <strong>Iloilo:</strong> La Paz market for batchoy</li>
                <li>• <strong>Davao:</strong> Roxas Avenue night market</li>
                <li>• <strong>Baguio:</strong> Session Road for strawberry taho</li>
              </ul>
            </div>
          </div>

          <div class="mt-8 bg-orange-50 border-l-4 border-orange-400 p-6 rounded">
            <h3 class="text-xl font-bold text-orange-900 mb-2">💰 Budget Guide</h3>
            <div class="text-orange-800">
              <p class="mb-3">Street food is incredibly budget-friendly. Here's what to expect:</p>
              <ul class="space-y-1">
                <li>• <strong>Snack budget:</strong> ₱50-100 can get you 5-10 different items</li>
                <li>• <strong>Full meal:</strong> ₱150-250 for BBQ + rice + drink</li>
                <li>• <strong>Sweet treats:</strong> ₱20-50 for desserts</li>
                <li>• <strong>Drinks:</strong> ₱10-30 for fresh juices or soft drinks</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    title: "Philippines Budget Travel Guide: How to Explore for Less",
    slug: "philippines-budget-travel-guide",
    excerpt: "Master the art of budget travel in the Philippines with insider tips on affordable accommodation, cheap eats, and free activities. Stretch your pesos without missing the best experiences.",
    featuredImage: "/baguio.jpg",
    author: "Budget Travel Expert",
    published: true,
    featured: false,
    metaTitle: "Philippines Budget Travel Guide 2025: Complete Money-Saving Tips | GalaGPT",
    metaDescription: "Master the art of budget travel in the Philippines with insider tips on affordable accommodation, cheap eats, and free activities. Stretch your pesos without missing the best experiences.",
    tags: ["Budget Travel", "Travel Tips", "Money Saving"],
    content: `
      <div class="space-y-8">
        <div class="bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-50 p-8 rounded-lg">
          <p class="text-lg leading-relaxed text-gray-700 mb-6">
            The Philippines doesn't have to break the bank. With smart planning and local know-how, you can experience 
            world-class beaches, incredible food, and rich culture on a shoestring budget. This guide reveals the secrets 
            to traveling the Philippines affordably without sacrificing experiences.
          </p>

          <div class="bg-emerald-50 border-l-4 border-emerald-400 p-6 rounded mb-8">
            <h3 class="text-xl font-bold text-emerald-900 mb-2">💡 Quick Budget Reality Check</h3>
            <div class="grid md:grid-cols-3 gap-4 text-emerald-800">
              <div>
                <h4 class="font-semibold">Ultra Budget (₱800-1,200/day)</h4>
                <ul class="text-sm space-y-1">
                  <li>• Dorm beds</li>
                  <li>• Street food only</li>
                  <li>• Local transport</li>
                  <li>• Free activities</li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold">Budget (₱1,200-2,000/day)</h4>
                <ul class="text-sm space-y-1">
                  <li>• Basic private rooms</li>
                  <li>• Mix of local restaurants</li>
                  <li>• Some tours</li>
                  <li>• Occasional treats</li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold">Comfort Budget (₱2,000-3,500/day)</h4>
                <ul class="text-sm space-y-1">
                  <li>• Nice guesthouses</li>
                  <li>• Tourist restaurants</li>
                  <li>• Tours & activities</li>
                  <li>• Some shopping</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 class="text-3xl font-bold mb-6 flex items-center gap-2">
            <span class="text-blue-600">🏨</span> Accommodation Hacks
          </h2>

          <div class="space-y-6">
            <div class="bg-white p-6 rounded-lg border shadow-sm">
              <h3 class="text-xl font-semibold mb-3 text-blue-600">Where to Stay Cheap</h3>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 class="font-semibold mb-2">🛏️ Budget Options</h4>
                  <ul class="space-y-1 text-sm">
                    <li>• <strong>Hostels:</strong> ₱400-800/night (dorms)</li>
                    <li>• <strong>Pension houses:</strong> ₱800-1,500/night (private)</li>
                    <li>• <strong>Guesthouses:</strong> ₱1,000-2,000/night</li>
                    <li>• <strong>Homestays:</strong> ₱600-1,200/night</li>
                  </ul>
                </div>
                <div>
                  <h4 class="font-semibold mb-2">💰 Money-Saving Tips</h4>
                  <ul class="space-y-1 text-sm">
                    <li>• Book directly with properties</li>
                    <li>• Stay longer for discounts</li>
                    <li>• Choose fan rooms over A/C</li>
                    <li>• Look for kitchen access</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg border shadow-sm">
              <h3 class="text-xl font-semibold mb-3 text-green-600">Alternative Accommodation</h3>
              <div class="space-y-3">
                <div class="bg-green-50 p-4 rounded">
                  <h4 class="font-semibold">⛺ Beach Camping</h4>
                  <p class="text-sm">Many beaches allow camping for ₱100-300/night. Perfect for island hopping!</p>
                </div>
                <div class="bg-green-50 p-4 rounded">
                  <h4 class="font-semibold">🏡 House Sitting</h4>
                  <p class="text-sm">Free accommodation in exchange for pet/house care through online platforms.</p>
                </div>
                <div class="bg-green-50 p-4 rounded">
                  <h4 class="font-semibold">🤝 Couchsurfing</h4>
                  <p class="text-sm">Free stays with locals, plus instant cultural immersion.</p>
                </div>
              </div>
            </div>
          </div>

          <h2 class="text-3xl font-bold mt-8 mb-6 flex items-center gap-2">
            <span class="text-orange-600">🍽️</span> Eating on a Budget
          </h2>

          <div class="space-y-6">
            <div class="bg-white p-6 rounded-lg border shadow-sm">
              <h3 class="text-xl font-semibold mb-3 text-orange-600">Local Eating Strategies</h3>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 class="font-semibold mb-2">🏪 Where Locals Eat</h4>
                  <ul class="space-y-1 text-sm">
                    <li>• <strong>Karinderia:</strong> ₱50-120/meal</li>
                    <li>• <strong>Carinderias:</strong> Home-style cooking</li>
                    <li>• <strong>Turo-turo:</strong> Point-and-eat style</li>
                    <li>• <strong>Street food:</strong> ₱5-50/item</li>
                  </ul>
                </div>
                <div>
                  <h4 class="font-semibold mb-2">🛒 Self-Catering Tips</h4>
                  <ul class="space-y-1 text-sm">
                    <li>• Shop at public markets</li>
                    <li>• Buy fruits from vendors</li>
                    <li>• Cook simple meals</li>
                    <li>• Share cooking costs</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg border shadow-sm">
              <h3 class="text-xl font-semibold mb-3 text-yellow-600">Daily Food Budget</h3>
              <div class="grid md:grid-cols-3 gap-4">
                <div class="bg-yellow-50 p-4 rounded text-center">
                  <h4 class="font-semibold">Street Food Only</h4>
                  <p class="text-2xl font-bold text-yellow-600">₱150-250</p>
                  <p class="text-sm">Per day, all meals</p>
                </div>
                <div class="bg-yellow-50 p-4 rounded text-center">
                  <h4 class="font-semibold">Local Restaurants</h4>
                  <p class="text-2xl font-bold text-yellow-600">₱300-500</p>
                  <p class="text-sm">Mix of local spots</p>
                </div>
                <div class="bg-yellow-50 p-4 rounded text-center">
                  <h4 class="font-semibold">Tourist Areas</h4>
                  <p class="text-2xl font-bold text-yellow-600">₱600-1,200</p>
                  <p class="text-sm">Resort/tourist dining</p>
                </div>
              </div>
            </div>
          </div>

          <h2 class="text-3xl font-bold mt-8 mb-6 flex items-center gap-2">
            <span class="text-purple-600">🚌</span> Transportation Savings
          </h2>

          <div class="space-y-6">
            <div class="bg-white p-6 rounded-lg border shadow-sm">
              <h3 class="text-xl font-semibold mb-3 text-purple-600">Getting Around Cheaply</h3>
              <div class="space-y-4">
                <div class="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 class="font-semibold mb-2">🚌 Land Transport</h4>
                    <ul class="space-y-1 text-sm">
                      <li>• <strong>Jeepney:</strong> ₱9-15 (city rides)</li>
                      <li>• <strong>Bus:</strong> ₱1.50/km (long distance)</li>
                      <li>• <strong>Tricycle:</strong> ₱10-50 (short rides)</li>
                      <li>• <strong>Habal-habal:</strong> ₱20-100 (mountain areas)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 class="font-semibold mb-2">⛵ Sea Transport</h4>
                    <ul class="space-y-1 text-sm">
                      <li>• <strong>Ferry:</strong> ₱200-800 (island hopping)</li>
                      <li>• <strong>Bangka:</strong> ₱50-300 (short trips)</li>
                      <li>• <strong>2GO/FastCat:</strong> ₱800-2,000 (major routes)</li>
                      <li>• <strong>Cargo ship:</strong> ₱500-1,500 (adventure option)</li>
                    </ul>
                  </div>
                </div>
                
                <div class="bg-purple-50 p-4 rounded">
                  <h4 class="font-semibold mb-2">✈️ Flight Hacks</h4>
                  <ul class="space-y-1 text-sm">
                    <li>• Book Cebu Pacific/PAL Express promos</li>
                    <li>• Fly on weekdays (Tuesday-Thursday)</li>
                    <li>• Book 2-3 months in advance</li>
                    <li>• Use airline apps for exclusive deals</li>
                    <li>• Consider Clark Airport for Manila trips</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-8 bg-cyan-50 border-l-4 border-cyan-400 p-6 rounded">
            <h3 class="text-xl font-bold text-cyan-900 mb-2">🎯 Pro Budget Tips</h3>
            <div class="grid md:grid-cols-2 gap-4 text-cyan-800">
              <div>
                <h4 class="font-semibold mb-2">💳 Money Matters</h4>
                <ul class="space-y-1 text-sm">
                  <li>• Use GCash for payments (no fees)</li>
                  <li>• Withdraw from bank ATMs (lower fees)</li>
                  <li>• Negotiate prices politely</li>
                  <li>• Keep small bills for transport</li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold mb-2">🎪 Free Activities</h4>
                <ul class="space-y-1 text-sm">
                  <li>• Beach lounging and swimming</li>
                  <li>• Hiking and nature walks</li>
                  <li>• Church visits and heritage sites</li>
                  <li>• Local festivals and markets</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }
]

async function importBlogPosts() {
  console.log('Starting blog post import...')

  try {
    // Clear existing blog posts (optional - remove if you want to keep existing ones)
    // await prisma.blogPost.deleteMany()
    // console.log('Cleared existing blog posts')

    for (const postData of staticBlogPosts) {
      console.log(`Importing: ${postData.title}`)

      // Handle tags - create if they don't exist
      const tagConnections = []
      for (const tagName of postData.tags) {
        const tag = await prisma.tag.upsert({
          where: { name: tagName },
          update: {},
          create: {
            name: tagName,
            slug: tagName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
          }
        })
        tagConnections.push({ id: tag.id })
      }

      // If this post is featured, unfeature all others first
      if (postData.featured) {
        await prisma.blogPost.updateMany({
          where: { featured: true },
          data: { featured: false }
        })
        console.log('Unfeatured existing featured posts')
      }

      // Create the blog post
      const blogPost = await prisma.blogPost.create({
        data: {
          title: postData.title,
          slug: postData.slug,
          content: postData.content,
          excerpt: postData.excerpt,
          featuredImage: postData.featuredImage,
          metaTitle: postData.metaTitle,
          metaDescription: postData.metaDescription,
          published: postData.published,
          featured: postData.featured,
          author: postData.author,
          publishedAt: postData.published ? new Date() : null,
          tags: {
            connect: tagConnections
          }
        },
        include: {
          tags: true
        }
      })

      console.log(`✅ Created: ${blogPost.title} (${blogPost.published ? 'Published' : 'Draft'})`)
    }

    console.log('\n🎉 Blog post import completed successfully!')
    console.log(`📝 Imported ${staticBlogPosts.length} blog posts`)
    console.log(`⭐ Featured post: ${staticBlogPosts.find(p => p.featured)?.title || 'None'}`)

  } catch (error) {
    console.error('❌ Error importing blog posts:', error)
  } finally {
    await prisma.$disconnect()
  }
}

// Run the import
importBlogPosts()
