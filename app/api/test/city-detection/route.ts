import { NextRequest, NextResponse } from 'next/server'
import { generateAgodaSearchLink } from '@/lib/agoda-link-generator'

export async function GET(request: NextRequest) {
  const testCities = [
    'tagaytay',
    'Tagaytay',
    'manila',
    'Manila',
    'cebu',
    'baguio',
    'palawan',
    'boracay'
  ]

  const results = testCities.map(city => {
    const linkResult = generateAgodaSearchLink(city)
    return {
      inputCity: city,
      success: linkResult.success,
      cityData: linkResult.cityData,
      url: linkResult.url,
      error: linkResult.error
    }
  })

  return NextResponse.json({
    message: "City Detection Test Results",
    results: results,
    timestamp: new Date().toISOString()
  })
}