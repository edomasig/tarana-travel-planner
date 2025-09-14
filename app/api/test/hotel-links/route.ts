import { NextRequest, NextResponse } from 'next/server'
import { enhanceResponseWithHotelLinks, testHotelDetection } from '@/lib/hotel-link-enhancer'

export async function GET(request: NextRequest) {
  // Sample AI response matching the actual format from the chat
  const sampleResponse = `🏔️ **3-Day Tagaytay Itinerary (September 28-30)**

**Kumusta!** Welcome to Tagaytay, the perfect cool-weather escape from Manila! Here's your detailed 3-day itinerary:

**Day 1: Arrival and Scenic Views**

**Morning:**
- **Travel to Tagaytay**: From Manila, you can take a bus (e.g., Bus Terminal at Cubao or Pasay) to Tagaytay. Travel time is about 1.5 to 2 hours.
- **Cost**: ₱100-₱150 ($2-$3) one way.

**Afternoon:**
- **Check in at**: **Taal Vista Hotel** (₱4,500-₱6,500/night) for stunning views.
- **Lunch at**: **Balay ni Mayang** for local cuisine (average meal: ₱200-₱400).

**Evening:**
- **Visit**: **People's Park in the Sky** for sunset views. Entrance fee: ₱30.
- **Dinner at**: **Josephine Restaurant** (average meal: ₱400-₱600).

**Day 2: Nature and Culture**

**Morning:**
- **Breakfast at the hotel**.
- **Visit**: **Picnic Grove** (₱30 entrance fee) for zip-lining and horseback riding.

**Afternoon:**
- **Stay**: **The Lake Hotel Tagaytay** (₱3,500-₱5,000/night) for a cozy experience with lake views.
- **Dinner at**: **Mushroom Burger** (₱150-₱300 per person; enjoy unique mushroom burgers).`

  const detectedHotels = testHotelDetection(sampleResponse)
  const enhancedResponse = enhanceResponseWithHotelLinks(sampleResponse)

  return NextResponse.json({
    message: "Hotel Link Enhancement Test",
    original: sampleResponse,
    detectedHotels: detectedHotels,
    enhanced: enhancedResponse,
    hotelCount: detectedHotels.length,
    timestamp: new Date().toISOString()
  }, { 
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  })
}