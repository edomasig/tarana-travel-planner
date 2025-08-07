// Mock AI service - in production, this would integrate with OpenAI API
// System prompt from PRD: You are GalaGPT.ph, a friendly and helpful Filipino AI travel assistant. 
// Your role is to create personalized, real-world travel itineraries in the Philippines based on user questions. 
// Always suggest real destinations and give practical travel advice like transportation, estimated budget, 
// places to eat, and local tips. Use a warm and informative tone, and format answers in a clear day-by-day 
// breakdown when possible. Avoid repeating information unless asked.

export async function generateTravelResponse(userMessage: string): Promise<string> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  const message = userMessage.toLowerCase()
  
  // Palawan queries
  if (message.includes('palawan') || message.includes('el nido') || message.includes('coron')) {
    return `🏝️ **5-Day Palawan Island Paradise**

**Day 1 – Puerto Princesa**
- Morning: Arrive Puerto Princesa Airport
- Afternoon: Underground River tour (₱1,500/person)
- Evening: Dinner at Kalui Restaurant (₱800/person)
- Stay: Flamenco Hotel (~₱2,200/night)
- Travel: Flight from Manila (~1.5 hrs, ₱4,500)

**Day 2 – Travel to El Nido**
- Morning: Van transfer to El Nido (5-6 hours, ₱800)
- Afternoon: Check-in and beach relaxation at Nacpan Beach
- Evening: Sunset dinner at The Alternative (₱600/person)
- Stay: Mad Monkey Hostel El Nido (~₱1,800/night)

**Day 3 – El Nido Island Hopping Tour A**
- Morning: Big Lagoon and Small Lagoon visit
- Lunch: Beach picnic included in tour (₱1,800/person)
- Afternoon: Shimizu Island and Secret Lagoon
- Evening: Night market food crawl (₱400/person)

**Day 4 – Travel to Coron**
- Morning: Ferry from El Nido to Coron (4 hours, ₱2,500)
- Afternoon: Kayangan Lake and Twin Lagoon tour
- Evening: Sunset at Mt. Tapyas viewpoint
- Stay: Coron Westown Resort (~₱2,000/night)

**Day 5 – Coron Island Hopping**
- Morning: Siete Pecados Marine Park snorkeling
- Lunch: Fresh seafood at Santino's Grill (₱500/person)
- Afternoon: Barracuda Lake diving experience
- Evening: Return flight to Manila (₱5,200)

**💰 Total Budget Estimate: ₱25,000-35,000 per person**

**🚗 Transportation:** Mix of flights, vans, and island ferries
**🍽️ Local Tips:** Try tamilok (woodworm), fresh kinilaw, and coconut crab
**📅 Best Time:** November to April for perfect weather

Need more details about any specific day or activity?`
  }
  
  // Baguio/North Luzon queries
  if (message.includes('baguio') || message.includes('sagada') || message.includes('north luzon') || message.includes('mountain')) {
    if (message.includes('weekend') || message.includes('budget')) {
      return `🏔️ **Weekend Baguio Budget Guide**

**Day 1 – Saturday**
- Morning: Travel from Manila via bus (₱700, 6 hours)
- Arrival: Check-in at Z Hostel Baguio (₱800/night)
- Lunch: Good Taste Restaurant famous fried chicken (₱250/person)
- Afternoon: Session Road shopping and people watching
- Evening: Burnham Park boat rides and night market (₱200)

**Day 2 – Sunday**
- Morning: Mines View Park and strawberry picking (₱150)
- Breakfast: Café by the Ruins pancakes (₱300/person)
- Late Morning: Tam-awan Village art gallery (₱30 entrance)
- Lunch: Hill Station bagnet and pinikpikan (₱400/person)
- Afternoon: Return bus to Manila (₱700)

**💰 Total Weekend Budget: ₱3,500-4,500 per person**
- Transportation: ₱1,400
- Accommodation: ₱800
- Food: ₱1,200-1,500
- Activities: ₱500-800

**🧥 What to Bring:** Jacket (temp drops to 15°C), comfortable walking shoes
**🍽️ Must-Try:** Strawberry taho, good shepherd ube jam, Baguio longganisa

Perfect affordable mountain escape from the city heat! 🌲`
    }
    
    return `🏔️ **North Luzon Mountain Adventure**

**Day 1 – Baguio City**
- Morning: Arrive via bus from Manila (6 hours, ₱700)
- Afternoon: Mines View Park and Tam-awan Village
- Evening: Session Road night market food crawl
- Stay: Microtel Baguio (~₱3,200/night)

**Day 2 – Sagada**
- Morning: Van to Sagada (3 hours, ₱400)
- Afternoon: Hanging coffins and Echo Valley tour
- Evening: Yoghurt House dinner (₱500/person)
- Stay: Residential Lodge Sagada (~₱1,500/night)

**Day 3 – Banaue Rice Terraces**
- Morning: Sunrise viewing at Kiltepan Peak
- Travel: Van to Banaue (4 hours, ₱600)
- Afternoon: UNESCO Rice Terraces viewpoint
- Stay: Banaue Hotel and Youth Hostel (~₱2,000/night)

**💰 Budget Estimate: ₱12,000-18,000 per person (3 days)**
**🚐 Transportation:** Combination of buses and vans
**🌡️ Climate:** Cool weather year-round (15-25°C)
**📸 Best Photos:** Early morning terraces with mist

This route offers the perfect mix of culture, nature, and cool mountain air!`
  }
  
  // Manila queries
  if (message.includes('manila') || message.includes('makati') || message.includes('bgc') || message.includes('food tour') || message.includes('cultural')) {
    return `🏙️ **3-Day Manila Cultural & Food Experience**

**Day 1 – Old Manila Heritage**
- Morning: Intramuros walking tour and Fort Santiago (₱150)
- Lunch: Barbara's Heritage Restaurant heirloom recipes (₱600/person)
- Afternoon: National Museum complex (Free entry)
- Evening: Rizal Park sunset and street food at nearby stalls (₱300)
- Stay: Z Hostel Makati (~₱1,200/night)

**Day 2 – Chinatown & Local Culture**
- Morning: Binondo food crawl - hopia, siopao, tikoy (₱400/person)
- Lunch: Authentic Chinese cuisine at Eng Bee Tin (₱500/person)
- Afternoon: Quiapo Church and local market exploration
- Evening: Poblacion bar district and craft cocktails (₱800-1,500)

**Day 3 – Modern Manila**
- Morning: BGC high street and modern Filipino brunch (₱600/person)
- Afternoon: Greenbelt shopping and Filipino designer boutiques
- Late Afternoon: Ayala Museum Filipino art and culture (₱425)
- Evening: Sunset dinner at rooftop restaurant in Makati (₱1,200/person)

**🍽️ Must-Try Manila Specialties:**
- Sisig at Manam Restaurant
- Halo-halo at Razon's
- Adobo variations at Purple Yam
- Fresh lumpia at Aristocrat

**💰 Total Budget: ₱8,000-12,000 per person (3 days)**
**🚗 Transportation:** Grab, MRT, and walking
**📱 Local Tip:** Download Grab app for easy transportation

Manila offers the perfect blend of history, culture, and incredible food!`
  }
  
  // Siargao queries  
  if (message.includes('siargao') || message.includes('surf') || message.includes('island hopping')) {
    return `🏄 **Siargao Island Paradise**

**Day 1 – Arrival & Cloud 9**
- Morning: Arrive Sayak Airport, transfer to General Luna (₱200)
- Afternoon: Check-in and Cloud 9 surfing lesson (₱1,500/3 hours)
- Evening: Sunset drinks at Rum Bar (₱400/person)
- Stay: Mad Monkey Hostel Siargao (~₱1,000/night)

**Day 2 – Island Hopping Tour**
- Full Day: Naked Island, Daku Island, and Guyam Island tour
- Includes: Boat, lunch, and snorkeling gear (₱1,800/person)
- Evening: Seafood dinner at Kalipay Resort (₱600/person)

**Day 3 – Magpupungko Pools & Sugba Lagoon**
- Morning: Magpupungko tidal pools (best at low tide)
- Afternoon: Sugba Lagoon kayaking and swimming
- Tour cost: ₱2,200/person including transport and lunch
- Evening: Night market food crawl (₱300/person)

**Day 4 – More Surfing & Departure**
- Morning: Final surf session at Cloud 9 or Jacking Horse
- Afternoon: Souvenir shopping in General Luna
- Evening: Flight back to Manila

**🏄 Surfing Info:**
- Best waves: September to March
- Beginner lessons: ₱1,500/3 hours
- Board rental: ₱500/day

**💰 Total Budget: ₱15,000-22,000 per person (4 days)**
**✈️ Getting There:** Direct flights from Manila or Cebu

Siargao is pure island bliss with world-class surfing! 🌊`
  }
  
  // Budget queries
  if (message.includes('budget') || message.includes('cheap') || message.includes('affordable') || message.includes('cost')) {
    return `💰 **Philippines Travel Budget Guide**

**🎒 BACKPACKER BUDGET (₱1,500-2,500/day):**
- Hostels/dorms: ₱500-800/night
- Local food/street food: ₱300-500/day
- Public transport: ₱200-400/day
- Activities: ₱300-500/day

**🏨 MID-RANGE (₱3,000-5,000/day):**
- Hotels/private rooms: ₱1,500-3,000/night
- Mix of local and tourist restaurants: ₱800-1,200/day
- Private transport/Grab: ₱500-800/day
- Tours and activities: ₱800-1,500/day

**💎 LUXURY (₱8,000+/day):**
- Resorts and luxury hotels: ₱5,000+/night
- Fine dining: ₱2,000+/day
- Private transfers and tours: ₱2,000+/day
- Premium experiences: ₱3,000+/day

**💡 Money-Saving Tips:**
- Travel during off-season (June-November)
- Eat at local carinderias (₱100-200/meal)
- Use public jeepneys and buses
- Book accommodations in advance
- Travel in groups to split costs

**📍 Budget-Friendly Destinations:**
- Siquijor: ₱2,000-3,000/day
- Bohol: ₱2,500-4,000/day  
- Cebu: ₱2,000-4,500/day
- Ilocos: ₱1,800-3,500/day

**💳 Payment Tips:**
- Bring cash - many places don't accept cards
- ATMs available in cities but limited on islands
- Exchange money at banks for better rates

What's your target daily budget? I can suggest specific destinations! 💸`
  }

  // Beach and islands queries
  if (message.includes('beach') || message.includes('island') || message.includes('swimming') || message.includes('snorkel')) {
    return `🏖️ **Best Philippine Beach Destinations**

**🌟 TOP BEACH DESTINATIONS:**

**🏝️ Boracay** - Famous white sand beaches
- Best for: Parties, water sports, nightlife
- Budget: ₱3,000-6,000/day
- Best time: November-April

**🏊 Bohol** - Diverse activities and beautiful beaches
- Best for: Families, nature lovers, diving
- Must-see: Chocolate Hills, tarsiers, Alona Beach
- Budget: ₱2,500-5,000/day

**🐠 Siquijor** - Mystical island vibes
- Best for: Quiet relaxation, healing traditions
- Highlights: Cambugahay Falls, cliff jumping
- Budget: ₱2,000-3,500/day

**🌺 Camiguin** - Island born of fire
- Best for: Adventure, hot springs, unique landscapes  
- Must-do: Island hopping, volcano climbing
- Budget: ₱2,200-4,000/day

**🏄 La Union** - Surfing and beach vibes
- Best for: Surfing, food scene, San Juan beaches
- Surf season: October-March
- Budget: ₱1,800-3,500/day

**🐢 Apo Island** - World-class diving
- Best for: Diving, sea turtles, marine life
- Day trip from Dumaguete
- Budget: ₱3,000-4,500/day including boat

**🌊 Beach Activities:**
- Island hopping: ₱1,500-3,000/person
- Snorkeling gear rental: ₱300-500/day
- Diving: ₱2,500-4,000/dive
- Kayak rental: ₱500-800/hour

Which type of beach experience are you looking for? Party, relaxation, or adventure? 🌅`
  }

  // Food queries
  if (message.includes('food') || message.includes('eat') || message.includes('restaurant') || message.includes('cuisine')) {
    return `🍽️ **Filipino Food Guide - Must-Try Dishes!**

**🇵🇭 ICONIC FILIPINO DISHES:**

**Main Dishes:**
- **Adobo** - Philippines' national dish (soy sauce, vinegar, garlic)
- **Sisig** - Sizzling chopped pork with onions and peppers  
- **Lechon** - Whole roasted pig (try Cebu's version!)
- **Kare-kare** - Oxtail stew with peanut sauce
- **Sinigang** - Sour soup with tamarind base

**Street Food:**
- **Balut** - Duck embryo (for the adventurous!)
- **Isaw** - Grilled chicken intestines
- **Fish balls** - Deep-fried fish balls with sauce
- **Banana cue** - Fried banana with brown sugar
- **Halo-halo** - Mixed shaved ice dessert

**Regional Specialties:**
- **Cebu:** Lechon and dried mangoes
- **Bicol:** Laing (taro leaves in coconut milk)
- **Ilocos:** Bagnet, longganisa, empanada
- **Palawan:** Tamilok (woodworm), crocodile sisig

**🍴 BEST FOOD DESTINATIONS:**

**Manila/Metro Manila:**
- Binondo - Chinese-Filipino fusion
- Poblacion - Modern Filipino cuisine
- Kapitolyo - Food park central

**Cebu:**
- Larsian BBQ - Famous grilled food
- Temple of Leah area - Upscale dining

**Iloilo:**
- La Paz Batchoy - Famous noodle soup
- Fresh seafood markets

**💰 Food Budget:**
- Street food: ₱20-100/item
- Local carinderia: ₱150-300/meal
- Mid-range restaurant: ₱500-1,000/meal
- Fine dining: ₱1,500+/meal

**🥭 Must-Try Fruits:**
- Rambutan, lanzones, durian
- Philippine mangoes (world's best!)
- Dragon fruit, passion fruit

What type of cuisine adventure interests you most? 🌶️`
  }

  // General Philippines queries
  if (message.includes('philippines') || message.includes('travel') || message.includes('visit') || message.includes('trip')) {
    return `🇵🇭 **Welcome to the Philippines! Here's your complete travel guide:**

**🌟 TOP DESTINATIONS BY REGION:**

**🏝️ LUZON (North)**
- **Baguio** - Cool mountain climate, strawberry farms
- **Vigan** - Spanish colonial architecture  
- **Sagada** - Hanging coffins, rice terraces
- **La Union** - Surfing and beach town vibes

**🏙️ METRO MANILA**
- **Intramuros** - Historical walled city
- **Makati/BGC** - Modern shopping and dining
- **Binondo** - World's oldest Chinatown

**🏖️ VISAYAS (Central)**
- **Boracay** - World-famous white sand beaches
- **Bohol** - Chocolate Hills, tarsiers, diving
- **Cebu** - Historical sites, excellent food
- **Siquijor** - Mystical island, healing traditions

**🌺 MINDANAO (South)**
- **Siargao** - Surfing capital, island hopping
- **Camiguin** - Volcanoes, hot springs
- **Davao** - Durian fruit, Mount Apo

**📅 BEST TIME TO VISIT:**
- **Dry Season:** November-April (best weather)
- **Wet Season:** May-October (fewer crowds, lower prices)

**✈️ GETTING AROUND:**
- **Domestic flights** - Island hopping made easy
- **Ferry/boat** - Scenic inter-island travel  
- **Bus** - Affordable overland transport
- **Jeepney** - Iconic Filipino public transport

**💰 SAMPLE BUDGETS (per person/day):**
- Backpacker: ₱1,500-2,500
- Mid-range: ₱3,000-5,000  
- Luxury: ₱8,000+

**🗣️ USEFUL PHRASES:**
- "Kumusta?" - How are you?
- "Salamat" - Thank you
- "Magkano?" - How much?
- "Nasaan ang..." - Where is...?

**📱 ESSENTIAL APPS:**
- Grab - Transportation
- GCash - Digital payments
- Google Translate - Filipino/English

What specific aspect of your Philippines trip would you like me to help you plan? 🗺️`
  }

  // Default response for unmatched queries
  return `👋 **Kumusta! I'm GalaGPT.ph, your Filipino travel assistant!**

I'd love to help you plan your perfect Philippines adventure! Here are some things I can help you with:

**🗺️ Destinations I know well:**
- Palawan (El Nido, Coron, Puerto Princesa)
- North Luzon (Baguio, Sagada, Vigan)  
- Visayas (Boracay, Bohol, Cebu, Siquijor)
- Siargao and Mindanao adventures
- Manila food and cultural tours

**💡 I can help you with:**
- Day-by-day itineraries with real costs
- Transportation and accommodation tips
- Local food recommendations
- Budget planning for any travel style
- Cultural insights and local customs

**🎯 Try asking me:**
- "5-day Palawan itinerary with budget"
- "Best food tour in Manila"  
- "Weekend trip to Baguio cost breakdown"
- "Island hopping in Siargao"

What would you like to explore in the beautiful Philippines? Just tell me your interests, budget, or time frame and I'll create a personalized itinerary for you! 🌴✨`
}
