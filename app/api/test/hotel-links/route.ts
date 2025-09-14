import { NextRequest, NextResponse } from 'next/server'
import { enhanceResponseWithHotelLinks, testHotelDetection } from '@/lib/hotel-link-enhancer'

export async function GET(request: NextRequest) {
  // Sample AI response matching Baguio format from the screenshot
  const sampleResponse = `🏔️ **Baguio Trip Itinerary for December**

**Overview:** Baguio, known as the "Summer Capital of the Philippines," offers a refreshing climate, stunning mountain views, and vibrant local culture. December is a wonderful time to visit as the weather is cool, perfect for outdoor activities and exploring the city's attractions.

**Visa Requirements:** No visa is required for Filipino citizens traveling within the Philippines.

**Suggested Hotels for Accommodation:**

1. **The Manor at Camp John Hay**
   • Price: ₱6,000 - ₱9,000/night
   • A beautiful hotel set in a pine forest, offering luxurious rooms and excellent amenities.

2. **Baguio Holiday Villas**
   • Price: ₱3,500 - ₱5,000/night
   • A family-friendly hotel with spacious accommodations, located near the city center.

3. **Microtel by Wyndham Baguio**
   • Price: ₱3,000 - ₱4,500/night
   • A modern hotel offering comfortable rooms and a great location.

**Day 1: Arrival and City Exploration**`

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