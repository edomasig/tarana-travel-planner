// Client-side AI service - uses server-side API route for security.
// Booking links are appended server-side only to avoid duplication.

// Extract destination from user message for affiliate recommendations
export function extractDestination(message: string): string {
  const destinations = [
    'palawan', 'el nido', 'coron', 'puerto princesa',
    'baguio', 'sagada', 'vigan', 'boracay', 'bohol', 
    'cebu', 'siquijor', 'siargao', 'manila', 'makati',
    'bgc', 'quezon city', 'ilocos', 'bataan', 'laguna'
  ]
  
  const lowerMessage = message.toLowerCase()
  return destinations.find(dest => lowerMessage.includes(dest)) || 'philippines'
}

// Deprecated: booking links are injected by the server.
export function addAffiliateRecommendations(response: string): string { return response }

// Optionally include recent conversation history so the AI can keep context
export async function generateTravelResponse(
  userMessage: string,
  history?: Array<{ role: 'user' | 'assistant'; content: string }>,
  meta?: { initialPrompt?: string; primaryCity?: string }
): Promise<string> {
  try {
    // Call our server-side API route instead of OpenAI directly
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
  body: JSON.stringify({ message: userMessage, history, meta }),
    })

    if (!response.ok) {
      throw new Error(`API call failed: ${response.status}`)
    }

    const data = await response.json()
    
    if (data.error) {
      throw new Error(data.error)
    }

  // Server already appends booking links. Return as-is.
  return data.response

  } catch (error) {
    console.error('AI Service Error:', error)
    
    // Fallback responses if the API call fails
    const message = userMessage.toLowerCase()
    
    if (message.includes('palawan') || message.includes('el nido') || message.includes('coron')) {
      const fallbackResponse = `🏝️ **5-Day Palawan Island Paradise**

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
      return defaultResponse
**Day 3 – El Nido Island Hopping Tour A**
- Morning: Big Lagoon and Small Lagoon visit
- Lunch: Beach picnic included in tour (₱1,800/person)
- Afternoon: Shimizu Island and Secret Lagoon
- Evening: Night market food crawl (₱400/person)

**💰 Total Budget Estimate: ₱25,000-35,000 per person**
**🚗 Transportation:** Mix of flights, vans, and island ferries
**📅 Best Time:** November to April for perfect weather

*Note: Currently experiencing technical difficulties but can still help you plan!*`
      
  return fallbackResponse
    }
    
    if (message.includes('baguio') && (message.includes('weekend') || message.includes('budget'))) {
      const fallbackResponse = `🏔️ **Weekend Baguio Budget Guide**

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
**🧥 What to Bring:** Jacket (temp drops to 15°C), comfortable walking shoes

*Note: Currently experiencing technical difficulties but can still help you plan!*`
      
  return fallbackResponse
    }
    
    // Default fallback
    const defaultResponse = `👋 **Kumusta! I'm GalaGPT.ph, your Filipino travel assistant!**

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

What would you like to explore in the beautiful Philippines? 🌴✨

*Note: I'm currently experiencing some technical difficulties, but I can still help you plan your Philippines adventure!*`
  return defaultResponse
  }
}

// Legacy function for backward compatibility
export async function generateItinerary(userMessage: string): Promise<any> {
  const response = await generateTravelResponse(userMessage)
  
  // Parse the response into structured data
  // This is a simplified version - in production you might want more sophisticated parsing
  return {
    title: "AI-Generated Philippines Itinerary",
    content: response,
    generated_by: "GalaGPT.ph AI Assistant",
    timestamp: new Date().toISOString()
  }
}
