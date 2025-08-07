// Mock AI service - in production, this would integrate with OpenAI API
export async function generateTravelResponse(userMessage: string): Promise<string> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  const message = userMessage.toLowerCase()
  
  // Palawan queries
  if (message.includes('palawan') || message.includes('el nido') || message.includes('coron')) {
    return `🏝️ **Palawan is absolutely stunning!** Here's what I recommend:

**🌟 Must-Visit Destinations:**
• **El Nido** - Famous lagoons and limestone cliffs
• **Coron** - Crystal clear lakes and WWII wrecks
• **Puerto Princesa** - Underground River (UNESCO site)

**📅 Suggested 5-Day Itinerary:**
**Day 1:** Arrive Puerto Princesa → Underground River tour
**Day 2:** Travel to El Nido → Beach relaxation
**Day 3:** Island Hopping Tour A (Big Lagoon, Small Lagoon)
**Day 4:** Travel to Coron → Kayangan Lake
**Day 5:** Coron island hopping → Departure

**💰 Budget Estimate:**
• Budget: ₱20,000-25,000 per person
• Mid-range: ₱30,000-40,000 per person
• Luxury: ₱50,000+ per person

**🍽️ Must-Try Food:**
• Fresh seafood and grilled fish
• Crocodile sisig (Palawan specialty)
• Tamilok (woodworm) - if you're adventurous!

**📝 Pro Tips:**
• Book island tours in advance during peak season
• Bring reef-safe sunscreen
• Pack waterproof bags for boat trips

Would you like me to elaborate on any specific part of your Palawan trip?`
  }
  
  // Default response for other queries
  return `I'd be happy to help you plan your Philippine adventure! 🇵🇭

I can assist you with:
• **Destination recommendations** - Where to go based on your interests
• **Itinerary planning** - Day-by-day travel plans
• **Budget advice** - How to travel within your budget
• **Food recommendations** - Must-try Filipino dishes and restaurants  
• **Transportation** - How to get around the Philippines
• **Cultural tips** - Local customs and etiquette
• **Weather advice** - Best times to visit different regions
• **Island hopping** - Beach and island recommendations
• **Safety tips** - How to stay safe while traveling

Could you tell me more about what you're looking for? For example:
- Which part of the Philippines interests you?
- How many days are you planning to travel?
- What's your approximate budget?
- What activities do you enjoy (beaches, mountains, culture, food)?

The more details you share, the better I can help you plan your perfect Philippine adventure! ✈️`
}

export async function generateItinerary(prompt: string): Promise<any> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500))

  // Mock itinerary data
  return {
    title: "5-Day Palawan Adventure",
    duration: "5 Days",
    totalBudget: "₱25,000 - ₱35,000",
    days: [
      {
        day: 1,
        location: "Puerto Princesa",
        activities: [
          {
            time: "9:00 AM",
            activity: "Underground River Tour",
            description: "Explore the famous Underground River, a UNESCO World Heritage Site.",
            cost: "₱1,500",
            type: "attraction"
          },
          {
            time: "6:00 PM",
            activity: "Dinner at Kinabuch's",
            description: "Enjoy local cuisine at a popular restaurant.",
            cost: "₱800",
            type: "food"
          }
        ]
      },
      {
        day: 2,
        location: "El Nido",
        activities: [
          {
            time: "9:00 AM",
            activity: "Travel to El Nido",
            description: "Take a van or bus to El Nido.",
            cost: "₱500",
            type: "transport"
          },
          {
            time: "4:00 PM",
            activity: "Relax on the Beach",
            description: "Enjoy the beautiful beaches of El Nido.",
            cost: "Free",
            type: "attraction"
          }
        ]
      },
      {
        day: 3,
        location: "El Nido",
        activities: [
          {
            time: "9:00 AM",
            activity: "Island Hopping Tour A",
            description: "Visit the Big Lagoon, Small Lagoon, and Secret Lagoon.",
            cost: "₱1,200",
            type: "attraction"
          },
          {
            time: "6:00 PM",
            activity: "Dinner at Artcafe",
            description: "Enjoy a delicious meal with a view.",
            cost: "₱1,000",
            type: "food"
          }
        ]
      },
      {
        day: 4,
        location: "Coron",
        activities: [
          {
            time: "9:00 AM",
            activity: "Travel to Coron",
            description: "Take a ferry to Coron.",
            cost: "₱1,000",
            type: "transport"
          },
          {
            time: "2:00 PM",
            activity: "Kayangan Lake",
            description: "Swim in the crystal-clear waters of Kayangan Lake.",
            cost: "₱300",
            type: "attraction"
          }
        ]
      },
      {
        day: 5,
        location: "Coron",
        activities: [
          {
            time: "9:00 AM",
            activity: "Island Hopping Tour",
            description: "Explore the islands around Coron.",
            cost: "₱1,500",
            type: "attraction"
          },
          {
            time: "6:00 PM",
            activity: "Departure",
            description: "Head to the airport for your flight home.",
            cost: "₱200",
            type: "transport"
          }
        ]
      }
    ],
    tips: [
      "Book island tours in advance.",
      "Bring reef-safe sunscreen.",
      "Pack waterproof bags for boat trips."
    ],
    transportation: "Flights, vans, buses, and ferries",
    bestTime: "November to April"
  }
}
