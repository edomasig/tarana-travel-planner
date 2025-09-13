import { NextRequest, NextResponse } from 'next/server'
import { 
  getRandomPromotionalMessage, 
  getSeasonalPromotionalMessage, 
  getCategorySpecificMessage 
} from '@/lib/facebook-promotional-messages'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const testType = searchParams.get('type') || 'all'

    const results: any = {
      timestamp: new Date().toISOString(),
      testType
    }

    if (testType === 'random' || testType === 'all') {
      results.randomMessage = getRandomPromotionalMessage()
    }

    if (testType === 'seasonal' || testType === 'all') {
      results.seasonalMessage = getSeasonalPromotionalMessage()
    }

    if (testType === 'category' || testType === 'all') {
      results.categoryMessages = {
        food: getCategorySpecificMessage(['Food & Culture', 'Filipino Cuisine']),
        beach: getCategorySpecificMessage(['Beach', 'Island Hopping']),
        adventure: getCategorySpecificMessage(['Adventure', 'Hiking']),
        budget: getCategorySpecificMessage(['Budget Travel', 'Backpacking']),
        general: getCategorySpecificMessage(['Travel Guide'])
      }
    }

    if (testType === 'sample-post') {
      const sampleBlogPost = {
        title: "Ultimate Guide to Palawan Island Hopping",
        excerpt: "Discover the pristine beaches and crystal-clear waters of Palawan with our comprehensive island hopping guide.",
        slug: "palawan-island-hopping-guide",
        tags: [
          { name: "Beach" },
          { name: "Island Hopping" },
          { name: "Palawan" }
        ]
      }

      const blogUrl = `https://galagpt.ph/blog/${sampleBlogPost.slug}`
      const tagNames = sampleBlogPost.tags.map(tag => tag.name)
      const promotionalMessage = getCategorySpecificMessage(tagNames)
      
      results.sampleFacebookPost = `✈️ ${sampleBlogPost.title}

${sampleBlogPost.excerpt}

🔗 Read the full guide: ${blogUrl}

${promotionalMessage}

#TravelPhilippines #GalaGPT #TravelGuide #PhilippinesItinerary #TravelPlanning #AITravelAssistant #VisitPhilippines #TravelTips #Wanderlust ${sampleBlogPost.tags.map(tag => `#${tag.name.replace(/\s+/g, '')}`).join(' ')}`
    }

    return NextResponse.json(results, { status: 200 })
  } catch (error) {
    console.error('Error testing promotional messages:', error)
    return NextResponse.json(
      { error: 'Failed to test promotional messages' },
      { status: 500 }
    )
  }
}