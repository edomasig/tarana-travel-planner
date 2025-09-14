import { NextRequest, NextResponse } from 'next/server'
import { enhanceResponseWithHotelLinks, testHotelDetection } from '@/lib/hotel-link-enhancer'

export async function GET(request: NextRequest) {
  // Sample AI response matching Baguio format from the screenshot
  const sampleResponse = `🏔️ **Baguio Trip Itinerary for December**

**Overview:** Baguio, known as the "Summer Capital of the Philippines," offers a refreshing climate, stunning mountain views, and vibrant local culture. December is a wonderful time to visit as the weather is cool, perfect for outdoor activities and exploring the city's attractions.

**Visa Requirements:** No visa is required for Filipino citizens traveling within the Philippines.

**Accommodation Suggestions:**

1. **The Manor at Camp John Hay**
   • Price Range: ₱6,000 - ₱9,000/night
   • A beautiful hotel with a rustic charm, located within the Camp John Hay area.

2. **Baguio Country Club**
   • Price Range: ₱5,000 - ₱8,000/night
   • Offers stunning views and a range of amenities.

3. **Hotel Elizabeth Baguio**
   • Price Range: ₱3,500 - ₱5,000/night
   • A family-friendly hotel with comfortable accommodations and great service.

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