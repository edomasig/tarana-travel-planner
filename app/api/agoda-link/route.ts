import { NextRequest, NextResponse } from 'next/server'
import { generateAgodaSearchLink, generateAgodaSearchLinks, formatCityInfo } from '@/lib/agoda-link-generator'

export async function POST(request: NextRequest) {
  try {
    const { cityName, multiple = false, limit = 3 } = await request.json()
    
    if (!cityName) {
      return NextResponse.json({
        success: false,
        error: "City name is required"
      }, { status: 400 })
    }

    if (multiple) {
      // Generate multiple links for similar cities
      const results = generateAgodaSearchLinks(cityName, limit)
      return NextResponse.json({
        success: true,
        results: results.map(result => ({
          ...result,
          cityDisplay: result.cityData ? formatCityInfo(result.cityData) : undefined
        }))
      })
    } else {
      // Generate single link
      const result = generateAgodaSearchLink(cityName)
      return NextResponse.json({
        ...result,
        cityDisplay: result.cityData ? formatCityInfo(result.cityData) : undefined
      })
    }
  } catch (error) {
    console.error('Agoda link generation error:', error)
    return NextResponse.json({
      success: false,
      error: "Internal server error"
    }, { status: 500 })
  }
}

export async function GET() {
  // Return popular Philippine cities for quick access
  try {
    const { getPopularPhilippineCities } = await import('@/lib/agoda-link-generator')
    const popularCities = getPopularPhilippineCities()
    
    return NextResponse.json({
      success: true,
      popularCities: popularCities.map(city => ({
        name: city.city,
        display: formatCityInfo(city),
        cityId: city.city_id
      }))
    })
  } catch (error) {
    console.error('Error getting popular cities:', error)
    return NextResponse.json({
      success: false,
      error: "Error loading popular cities"
    }, { status: 500 })
  }
}
