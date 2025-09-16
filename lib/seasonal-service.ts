import { loadSeason } from './seasonal-loader'

export interface SeasonalData {
  season: {
    name: string
    title: string
    description: string
    months: string
    temperature: string
    weather: string
    bestFor: string
    events: string
    featuredImage?: string
  }
  destinations: Array<{
    name: string
    location: string
    description: string
    image: string
    rating: string
    bestTime: string
    budget: string
    highlights: string[]
    prompt?: string
  }>
  featuredItinerary: {
    title: string
    duration: string
    budget: string
    difficulty: string
    season: string
    prompt?: string
    days: Array<{
      day: number
      location: string
      image: string
      activities: Array<{
        time: string
        activity: string
        description: string
        cost: string
        type: 'attraction' | 'food' | 'accommodation' | 'transport'
        tips?: string
      }>
    }>
  }
  tips: {
    packing: string[]
    advice: string[]
  }
}

export function getCurrentSeason(): string {
  const now = new Date()
  const month = now.getMonth() + 1 // JavaScript months are 0-indexed
  const day = now.getDate()

  // Holiday Season (December 15 - January 15)
  if ((month === 12 && day >= 15) || (month === 1 && day <= 15)) {
    return 'holiday'
  }
  
  // Summer Season (March - May)
  if (month >= 3 && month <= 5) {
    return 'summer'
  }
  
  // Rainy Season (June - October)
  if (month >= 6 && month <= 10) {
    return 'rainy'
  }
  
  // Dry Season (November - February)
  return 'dry'
}

export async function getSeasonalRecommendations(season: string): Promise<SeasonalData> {
  // First try to fetch from CMS
  try {
    const response = await fetch(`${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/api/seasonal?season=${season}`, {
      next: { revalidate: 300 } // Revalidate every 5 minutes
    })
    
    if (response.ok) {
      const cmsData = await response.json()
      
      // Transform CMS data to match expected format
      return {
        season: {
          name: cmsData.season.name,
          title: cmsData.season.title,
          description: cmsData.season.description,
          months: cmsData.season.months,
          temperature: cmsData.season.temperature,
          weather: cmsData.season.weather,
          bestFor: cmsData.season.bestFor,
          events: cmsData.season.events,
        },
        destinations: cmsData.destinations || [],
        featuredItinerary: cmsData.featuredItinerary || {
          title: '',
          duration: '',
          budget: '',
          difficulty: '',
          season: '',
          days: []
        },
        tips: cmsData.tips || { packing: [], advice: [] }
      }
    }
  } catch (error) {
    console.warn('Failed to fetch from CMS, falling back to static content:', error)
  }
  
  // Fallback to static content
  const data = await loadSeason(season)
  if (!data) throw new Error(`Season data not found for: ${season}`)
  return data
}
