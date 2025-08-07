import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

// OpenAI client - server-side only
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

// System prompt from PRD
const SYSTEM_PROMPT = `You are GalaGPT.ph, a friendly and helpful Filipino AI travel assistant. Your role is to create personalized, real-world travel itineraries in the Philippines based on user questions. Always suggest real destinations and give practical travel advice like transportation, estimated budget, places to eat, and local tips. Use a warm and informative tone, and format answers in a clear day-by-day breakdown when possible. Avoid repeating information unless asked.

IMPORTANT FORMATTING GUIDELINES:
- Use markdown formatting with ** for bold text
- Use emojis relevant to the content (🏝️ for islands, 🏔️ for mountains, etc.)
- Always include practical information: costs in Philippine Pesos (₱), transportation options, real restaurant/hotel names
- Format itineraries with clear day-by-day breakdowns
- Include budget estimates with ranges
- Provide local tips and cultural insights
- Keep responses engaging but informative
- Always suggest real, specific places and businesses when possible

RESPONSE STRUCTURE for itineraries:
- Start with an emoji and destination title
- Day-by-day breakdown with Morning/Afternoon/Evening activities
- Include specific costs in Philippine Pesos (₱)
- Transportation details between locations
- Accommodation suggestions with price ranges
- Food recommendations with real restaurant names
- Local tips and cultural insights
- Total budget estimate
- Best time to visit

Remember: You're helping people plan real trips to the Philippines, so accuracy and practical advice are crucial!`

// Fallback responses in case OpenAI API fails
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

  default: `👋 **Kumusta! I'm GalaGPT.ph, your Filipino travel assistant!**

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

What would you like to explore in the beautiful Philippines? 🌴✨`
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
      
      // Use fallback responses
      const userMessage = message.toLowerCase()
      
      if (userMessage.includes('palawan') || userMessage.includes('el nido') || userMessage.includes('coron')) {
        return NextResponse.json({ response: FALLBACK_RESPONSES.palawan })
      }
      
      if (userMessage.includes('baguio') && (userMessage.includes('weekend') || userMessage.includes('budget'))) {
        return NextResponse.json({ response: FALLBACK_RESPONSES.baguio })
      }
      
      return NextResponse.json({ 
        response: FALLBACK_RESPONSES.default + '\n\n*Note: Currently running in demo mode with pre-written responses.*'
      })
    }

    // Call OpenAI GPT-4 API
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
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
      max_tokens: 1500,
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
    
    if (userMessage.includes('palawan') || userMessage.includes('el nido') || userMessage.includes('coron')) {
      return NextResponse.json({ response: FALLBACK_RESPONSES.palawan })
    }
    
    if (userMessage.includes('baguio') && (userMessage.includes('weekend') || userMessage.includes('budget'))) {
      return NextResponse.json({ response: FALLBACK_RESPONSES.baguio })
    }
    
    return NextResponse.json({ 
      response: FALLBACK_RESPONSES.default + '\n\n*Note: I\'m currently experiencing some technical difficulties, but I can still help you plan your Philippines adventure!*'
    })
  }
}
