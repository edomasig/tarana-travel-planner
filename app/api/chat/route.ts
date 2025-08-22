import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'
import { generateAgodaSearchLink, formatCityInfo } from '@/lib/agoda-link-generator'

// OpenAI client - server-side only with fallback handling
const openai = process.env.OPENAI_API_KEY ? new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
}) : null

// Updated system prompt for global travel
const SYSTEM_PROMPT = `You are GalaGPT, a friendly and helpful AI travel assistant. Your role is to create personalized, real-world travel itineraries worldwide based on user questions. 

SPECIALIZATION:
- **Primary expertise**: Philippines (maintain Filipino warmth and detailed local knowledge)
- **Global coverage**: All international destinations with practical travel advice
- **Regional insights**: Local customs, visa requirements, currency, weather patterns

Always suggest real destinations and give practical travel advice like transportation, estimated budget, places to eat, visa requirements, and local tips. Use a warm and informative tone, and format answers in a clear day-by-day breakdown when possible.

CRITICAL RULE: NEVER INCLUDE ANY OF THE FOLLOWING IN YOUR RESPONSES:
- Quick Booking Options
- Find Hotels links
- Discover Activities links
- Booking links or URLs
- Affiliate links
- Any mention of Agoda, Klook, or booking platforms
- Transportation booking links
- Any HTML or markdown links

IMPORTANT FORMATTING GUIDELINES:
- Use markdown formatting with ** for bold text
- Use emojis relevant to the content (🏝️ for islands, 🏔️ for mountains, 🕌 for cultural sites, etc.)
- Always include practical information: costs in local currency (with USD equivalent), transportation options, real restaurant/hotel names
- Format itineraries with clear day-by-day breakdowns
- Include budget estimates with ranges
- Provide local tips, cultural insights, and etiquette
- Include visa/entry requirements for international destinations
- Keep responses engaging but informative
- Always suggest real, specific places and businesses when possible
- FOCUS ONLY ON TRAVEL ADVICE AND ITINERARIES

RESPONSE STRUCTURE for itineraries:
- Start with an emoji and destination title
- Brief destination overview
- Visa/entry requirements (for international destinations)
- Day-by-day breakdown with Morning/Afternoon/Evening activities
- Include specific costs in local currency + USD equivalent
- Transportation details between locations
- Accommodation suggestions with price ranges
- Food recommendations with real restaurant names
- Local tips, cultural insights, and etiquette
- Total budget estimate
- Best time to visit
- Packing recommendations

FOR PHILIPPINES DESTINATIONS: Maintain the original warmth and use "Kumusta!" greetings, costs in Philippine Pesos (₱)

FOR INTERNATIONAL DESTINATIONS: 
- Include visa requirements for Filipino travelers
- Currency exchange information
- Cultural etiquette and local customs
- Language basics if applicable

Remember: Your response should end with travel advice only. No booking links will be included by you - they are added automatically by the system.`

// Helper function to extract city names from user messages
const extractCityNames = (message: string): string[] => {
  const cities = [
    // Philippines
    'manila', 'cebu', 'davao', 'boracay', 'palawan', 'baguio', 'tagaytay', 'iloilo', 'dumaguete', 'sagada',
    'el nido', 'coron', 'puerto princesa', 'vigan', 'bohol', 'siquijor', 'siargao', 'camiguin', 'la union',
    // International popular destinations
    'tokyo', 'osaka', 'kyoto', 'bangkok', 'phuket', 'singapore', 'kuala lumpur', 'hong kong',
    'seoul', 'busan', 'taipei', 'ho chi minh', 'hanoi', 'bali', 'jakarta', 'paris', 'london',
    'new york', 'los angeles', 'barcelona', 'rome', 'amsterdam', 'dubai', 'istanbul'
  ]
  
  const messageLower = message.toLowerCase()
  return cities.filter(city => messageLower.includes(city))
}

// Helper function to add affiliate booking links to responses
const addBookingLinks = (response: string, detectedCities: string[]): string => {
  console.log('=== BOOKING LINKS DEBUG ===')
  console.log('Response preview (first 200 chars):', response.substring(0, 200))
  console.log('Response preview (last 200 chars):', response.substring(response.length - 200))
  console.log('Detected cities:', detectedCities)
  
  // More comprehensive duplication check
  const bookingKeywords = [
    'Quick Booking Options',
    'Find Hotels',
    'Discover Activities', 
    'agoda.com',
    'klook.com',
    'Transportation booking',
    'Compare prices & book',
    'book instantly via Agoda',
    'via Klook',
    'Affiliate partnerships',
    'booking available'
  ]
  
  const hasBookingContent = bookingKeywords.some(keyword => {
    const found = response.toLowerCase().includes(keyword.toLowerCase())
    if (found) {
      console.log('Found booking keyword:', keyword)
    }
    return found
  })
  
  console.log('Has booking content:', hasBookingContent)
  console.log('========================')
  
  if (hasBookingContent) {
    console.log('SKIPPING: Booking content detected - not adding links')
    return response
  }

  console.log('ADDING: No booking content found, adding links...')

  if (detectedCities.length === 0) {
    console.log('No cities detected, using default Palawan')
    // Use a safe default for Klook aff_sub to avoid spaces in URL
    const defaultAffSub = 'general'
    return response + `\n\n💡 **Quick Booking Options:**\n\n• 🏨 [Find Hotels in Palawan](https://www.agoda.com/fi-fi/search?cid=1947165&city=17193&utm_source=galagpt&utm_medium=ai_chat&utm_campaign=travel_planning) - Compare prices & book instantly via Agoda\n\n• 🎯 [Discover Activities](https://www.klook.com/en-PH/?aid=96417&aff_ext=travel_planning&aff_sub=${defaultAffSub}) - Tours, experiences & attractions via Klook\n\n• 🚛 Transportation booking available through our partners\n\n*Affiliate partnerships help keep GalaGPT.ph free for all travelers!*`
  }

  const primaryCity = detectedCities[0]
  console.log('Primary city for links:', primaryCity)
  
  const linkResult = generateAgodaSearchLink(primaryCity)
  const klookAffSub = encodeURIComponent(primaryCity)
  console.log('Agoda link result:', linkResult)
  
  let bookingSection = `\n\n💡 **Quick Booking Options:**\n\n`
  
  if (linkResult.success && linkResult.url && linkResult.cityData) {
    const cityDisplay = formatCityInfo(linkResult.cityData)
    console.log('Using city display:', cityDisplay)
    bookingSection += `• 🏨 [Find Hotels in ${cityDisplay}](${linkResult.url}) - Compare prices & book instantly via Agoda\n\n`
  } else {
    // Fallback to general search with proper city name formatting
    const cityDisplayName = primaryCity.charAt(0).toUpperCase() + primaryCity.slice(1)
    console.log('Using fallback city display:', cityDisplayName)
    bookingSection += `• 🏨 [Find Hotels in ${cityDisplayName}](https://www.agoda.com/fi-fi/search?cid=1947165&utm_source=galagpt&utm_medium=ai_chat&utm_campaign=travel_planning) - Compare prices & book instantly via Agoda\n\n`
  }
  
  bookingSection += `• 🎯 [Discover Activities](https://www.klook.com/en-PH/?aid=96417&aff_ext=travel_planning&aff_sub=${klookAffSub}) - Tours, experiences & attractions via Klook\n\n`
  bookingSection += `• 🚛 Transportation booking available through our partners\n\n`
  bookingSection += `*Affiliate partnerships help keep GalaGPT.ph free for all travelers!*`
  
  console.log('Final booking section preview:', bookingSection.substring(0, 100))
  
  return response + bookingSection
}

// Fallback responses for when API is unavailable
const FALLBACK_RESPONSES = {
  palawan: `🏝️ **5-Day Palawan Island Paradise**

**Kumusta!** Welcome to the Philippines' Last Frontier! Here's your perfect Palawan adventure:

**Day 1-2 – Puerto Princesa**
- Morning: Puerto Princesa Airport arrival
- Underground River tour (₱2,500 per person)
- Stay: Canvas Boutique Hotel (₱3,500/night)
- Food: Ka Inato (₱400-600 per meal)

**Day 3-5 – El Nido**
- Van transfer Puerto Princesa to El Nido (₱800, 5 hours)
- Island hopping Tour A & C (₱1,800 each)
- Big Lagoon, Small Lagoon, Secret Lagoon
- Stay: Mad Monkey Hostel El Nido (₱2,200/night)

**💰 Total Budget: ₱25,000-35,000 per person**
**📅 Best Time:** November to April (dry season)
**💡 Local Tip:** Book island tours early and bring reef-safe sunscreen!`,

  baguio: `🏔️ **3-Day Baguio Summer Capital Escape**

**Kumusta!** Ready for cool mountain air and pine trees? Here's your Baguio itinerary:

**Day 1 – Arrival & City Tour**
- Morning: Arrive via bus from Manila (₱600, 6 hours)
- Burnham Park boat ride (₱30 per person)
- Stay: Hotel Supreme (₱2,800/night)
- Food: Good Taste Cafe & Restaurant (₱300-500)

**Day 2 – Tourist Spots**
- Mines View Park & Baguio Cathedral
- Wright Park horseback riding (₱100)
- Session Road shopping
- Strawberry Farm La Trinidad (₱200 entrance)

**Day 3 – Local Culture**
- BenCab Museum (₱120 entrance)
- Tam-Awan Village (₱30 entrance)
- Buy pasalubong at Baguio Market

**💰 Total Budget: ₱8,000-12,000 per person**
**🧥 What to Bring:** Jacket, it gets cold!`,

  japan: `🇯🇵 **7-Day Japan Golden Route Adventure**

**Visa Requirements:** Tourist visa required for Filipino citizens (₱3,000 + documents)

**Day 1-3 – Tokyo**
- Morning: Arrive Narita Airport, get JR Pass (¥29,650/~$200)
- Shibuya Crossing, Senso-ji Temple
- Stay: Sakura Hotel Ikebukuro (¥4,500/night ~$30)
- Food: Ichiran Ramen (¥800 ~$5), conveyor sushi (¥1,200 ~$8)

**Day 4-5 – Kyoto**
- Bullet train from Tokyo (3.5 hours, covered by JR Pass)
- Fushimi Inari Shrine, Kinkaku-ji Temple
- Traditional ryokan stay (¥12,000/night ~$80)

**Day 6-7 – Osaka**
- Osaka Castle, Dotonbori food street
- Universal Studios Japan (¥8,600 ~$58)

**💰 Total Budget: $1,200-1,800 per person**
**💱 Currency:** Japanese Yen (¥150 = $1 USD approx)
**📅 Best Time:** Spring (March-May) or Fall (September-November)`,

  thailand: `🇹🇭 **5-Day Bangkok & Phuket Explorer**

**Visa:** Visa-free for Filipino citizens (30 days)

**Day 1-2 – Bangkok**
- BTS Skytrain day pass (THB 140 ~$4)
- Grand Palace, Wat Pho (THB 500 entrance ~$14)
- Chatuchak Weekend Market shopping
- Stay: The Yard Hostel (THB 800/night ~$22)
- Food: Street pad thai (THB 60 ~$1.70), mango sticky rice (THB 80)

**Day 3-5 – Phuket**
- AirAsia flight Bangkok-Phuket (THB 2,500 ~$70)
- Phi Phi Islands day tour (THB 1,500 ~$42)
- Patong Beach, Big Buddha
- Stay: Lub d Phuket (THB 1,200/night ~$34)

**💰 Total Budget: $600-900 per person**
**💱 Currency:** Thai Baht (THB 35 = $1 USD approx)
**⚠️ Local Tip:** Remove shoes when entering temples, dress modestly`,

  default: `🌍 **Welcome to GalaGPT - Your Global Travel Assistant!**

I'd love to help you plan your perfect adventure anywhere in the world! Here are some things I can help you with:

**🇵🇭 Philippines Expertise:**
- Detailed local knowledge with insider tips
- Budget-friendly itineraries in Philippine Pesos
- Transportation guides (jeepney, tricycle, bus routes)
- Local food recommendations & hidden gems

**🌏 International Travel:**
- Visa requirements for Filipino travelers
- Currency exchange & budget planning
- Cultural etiquette & language basics
- Popular destinations across Asia, Europe, Americas

**✨ Just tell me:**
- Where you want to go
- How many days you have
- Your budget range
- What type of experience you're looking for

Where would you like to explore? ✨`
}

// Helper function to detect destination type
function detectDestination(message: string): string {
  const userMessage = message.toLowerCase()
  
  // Philippines destinations
  if (userMessage.includes('palawan') || userMessage.includes('el nido') || userMessage.includes('coron')) {
    return 'palawan'
  }
  if (userMessage.includes('baguio')) {
    return 'baguio'
  }
  
  // International destinations
  if (userMessage.includes('japan') || userMessage.includes('tokyo') || userMessage.includes('kyoto')) {
    return 'japan'
  }
  if (userMessage.includes('thailand') || userMessage.includes('bangkok') || userMessage.includes('phuket')) {
    return 'thailand'
  }
  
  return 'default'
}

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    // Extract cities from user message
    const detectedCities = extractCityNames(message)

    // Check if OpenAI API key is available
    if (!process.env.OPENAI_API_KEY) {
      console.log('OpenAI API key not found, using fallback responses')
      
      const destination = detectDestination(message)
      const fallbackResponse = FALLBACK_RESPONSES[destination as keyof typeof FALLBACK_RESPONSES]
      const responseWithLinks = addBookingLinks(fallbackResponse, detectedCities)
      
      return NextResponse.json({ response: responseWithLinks })
    }

    // Call OpenAI GPT-4 Turbo API (only if API key is available)
    if (!openai) {
      throw new Error('OpenAI client not initialized')
    }
    
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPT
        },
        {
          role: "user",
          content: message
        }
      ],
      max_tokens: 2000,
      temperature: 0.7,
    })

    const response = completion.choices[0]?.message?.content

    if (!response) {
      throw new Error('No response from OpenAI')
    }

    // Add booking links to the AI response
    const responseWithLinks = addBookingLinks(response, detectedCities)

    return NextResponse.json({ response: responseWithLinks })

  } catch (error) {
    console.error('API Error:', error)
    
    // Fallback to mock responses if API fails
    const { message } = await request.json()
    const userMessage = message?.toLowerCase() || ''
    const destination = detectDestination(userMessage)
    const detectedCities = extractCityNames(userMessage)
    
    const fallbackResponse = FALLBACK_RESPONSES[destination as keyof typeof FALLBACK_RESPONSES] + '\n\n*Note: I\'m currently experiencing some technical difficulties, but I can still help you plan your adventure!*'
    
    // Don't add booking links in error case to prevent duplication
    return NextResponse.json({ 
      response: fallbackResponse
    })
  }
}
