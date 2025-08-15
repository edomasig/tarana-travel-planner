import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

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
- Time zone differences
- Emergency contact information

Remember: You're helping people plan real trips worldwide, so accuracy and practical advice are crucial!`

// Enhanced fallback responses for global destinations
const FALLBACK_RESPONSES = {
  palawan: `🏝️ **5-Day Palawan Island Paradise**

**Day 1 – Puerto Princesa**
- Morning: Arrive Puerto Princesa Airport
- Afternoon: Underground River tour (₱1,500/person)
- Evening: Dinner at Kalui Restaurant (₱800/person)
- Stay: Flamenco Hotel (~₱2,200/night)

**Day 2 – Travel to El Nido**
- Morning: Van transfer to El Nido (5-6 hours, ₱800)
- Afternoon: Nacpan Beach relaxation
- Evening: Sunset dinner at The Alternative (₱600/person)
- Stay: Mad Monkey Hostel El Nido (~₱1,800/night)

**Day 3 – El Nido Island Hopping Tour A**
- Morning: Big Lagoon and Small Lagoon visit
- Lunch: Beach picnic included in tour (₱1,800/person)
- Afternoon: Shimizu Island and Secret Lagoon
- Evening: Night market food crawl (₱400/person)

**💰 Total Budget Estimate: ₱25,000-35,000 per person**
**🚗 Transportation:** Mix of flights, vans, and island ferries
**📅 Best Time:** November to April for perfect weather`,

  baguio: `🏔️ **Weekend Baguio Budget Guide**

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
**🧥 What to Bring:** Jacket (temp drops to 15°C), comfortable walking shoes`,

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
- Real costs in Philippine Pesos
- Cultural insights and hidden gems

**🌏 Global Destinations:**
- Visa requirements for Filipino travelers
- Currency and budget planning
- Cultural etiquette and local customs
- Real accommodation and restaurant recommendations

**💡 Popular Global Destinations I Cover:**
- 🇯🇵 Japan (Tokyo, Kyoto, Osaka)
- 🇹🇭 Thailand (Bangkok, Phuket, Chiang Mai)  
- 🇰🇷 South Korea (Seoul, Busan)
- 🇸🇬 Singapore city breaks
- 🇮🇩 Indonesia (Bali, Jakarta)
- 🇻🇳 Vietnam (Ho Chi Minh, Hanoi)
- 🇲🇾 Malaysia (Kuala Lumpur, Penang)

**🎯 Try asking me:**
- "7-day Japan itinerary with visa requirements"
- "Budget backpacking Thailand from Philippines"  
- "Singapore weekend trip costs"
- "Best time to visit South Korea"

Where would you like to explore? �✨`
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

    // Check if OpenAI API key is available
    if (!process.env.OPENAI_API_KEY) {
      console.log('OpenAI API key not found, using fallback responses')
      
      const destination = detectDestination(message)
      return NextResponse.json({ response: FALLBACK_RESPONSES[destination as keyof typeof FALLBACK_RESPONSES] })
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

    return NextResponse.json({ response })

  } catch (error) {
    console.error('API Error:', error)
    
    // Fallback to mock responses if API fails
    const userMessage = (await request.json()).message?.toLowerCase() || ''
    const destination = detectDestination(userMessage)
    
    return NextResponse.json({ 
      response: FALLBACK_RESPONSES[destination as keyof typeof FALLBACK_RESPONSES] + '\n\n*Note: I\'m currently experiencing some technical difficulties, but I can still help you plan your adventure!*'
    })
  }
}
