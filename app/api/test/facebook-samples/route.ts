import { NextRequest, NextResponse } from 'next/server'
import { getCategorySpecificMessage } from '@/lib/facebook-promotional-messages'

export async function GET(request: NextRequest) {
  const samples = [
    {
      category: "Food & Culture Blog Post",
      blogPost: {
        title: "Ultimate Filipino Street Food Guide: 15 Must-Try Dishes",
        excerpt: "From balut to halo-halo, discover the most authentic Filipino street foods that locals love. Our comprehensive guide includes where to find them and what to expect.",
        slug: "filipino-street-food-guide",
        tags: ["Food & Culture", "Street Food", "Manila"]
      }
    },
    {
      category: "Beach & Island Blog Post", 
      blogPost: {
        title: "Siargao Island Hopping: Complete 7-Day Itinerary",
        excerpt: "Experience the surfing capital of the Philippines with our detailed island hopping guide. Includes hidden lagoons, pristine beaches, and local surf spots.",
        slug: "siargao-island-hopping-itinerary",
        tags: ["Beach", "Island Hopping", "Siargao", "Surfing"]
      }
    },
    {
      category: "Adventure & Hiking Blog Post",
      blogPost: {
        title: "Mount Pulag Hiking Guide: Conquering the Philippines' Third Highest Peak",
        excerpt: "Challenge yourself with this comprehensive guide to hiking Mount Pulag. Includes trail maps, camping tips, and the best time to see the sea of clouds.",
        slug: "mount-pulag-hiking-guide", 
        tags: ["Adventure", "Hiking", "Mountains", "Benguet"]
      }
    },
    {
      category: "Budget Travel Blog Post",
      blogPost: {
        title: "Backpacking Philippines on $30/Day: Complete Budget Guide",
        excerpt: "Explore the Philippines without breaking the bank! Our detailed budget breakdown shows you how to travel comfortably on just $30 per day.",
        slug: "budget-backpacking-philippines",
        tags: ["Budget Travel", "Backpacking", "Money Saving Tips"]
      }
    },
    {
      category: "General Travel Blog Post",
      blogPost: {
        title: "Baguio City Complete Travel Guide: Cool Weather Escape",
        excerpt: "Escape the tropical heat in the Philippines' summer capital. Discover strawberry farms, night markets, and colonial architecture in this mountain city.",
        slug: "baguio-city-travel-guide",
        tags: ["Travel Guide", "Baguio", "Mountain Destinations"]
      }
    }
  ]

  const facebookPosts = samples.map(sample => {
    const blogUrl = `https://galagpt.ph/blog/${sample.blogPost.slug}`
    const tagNames = sample.blogPost.tags
    const promotionalMessage = getCategorySpecificMessage(tagNames)
    
    const facebookPost = `✈️ ${sample.blogPost.title}

${sample.blogPost.excerpt}

🔗 Read the full guide: ${blogUrl}

${promotionalMessage}

#TravelPhilippines #GalaGPT #TravelGuide #PhilippinesItinerary #TravelPlanning #AITravelAssistant #VisitPhilippines #TravelTips #Wanderlust ${sample.blogPost.tags.map(tag => `#${tag.replace(/\s+/g, '')}`).join(' ')}`

    return {
      category: sample.category,
      facebookPost: facebookPost,
      characterCount: facebookPost.length,
      estimatedReach: "High engagement expected with travel hashtags"
    }
  })

  return NextResponse.json({
    message: "Sample Facebook Posts for Different Blog Categories",
    timestamp: new Date().toISOString(),
    samples: facebookPosts
  }, { 
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  })
}