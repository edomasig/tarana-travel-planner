import fs from 'fs'
import path from 'path'
import { trackAffiliateLinkClick } from './gtm-tracking'

interface CityData {
  city: string
  state: string
  country: string
  city_id: string
}

interface AgodaLinkResult {
  success: boolean
  url?: string
  error?: string
  cityData?: CityData
}

/**
 * Parse the city_code.csv file and create a searchable city database
 */
let cityDatabase: CityData[] | null = null

const loadCityDatabase = (): CityData[] => {
  if (cityDatabase) {
    return cityDatabase
  }

  try {
    const csvPath = path.join(process.cwd(), 'agoda_code', 'city_code.csv')
    const csvContent = fs.readFileSync(csvPath, 'utf-8')
    const lines = csvContent.split('\n').slice(1) // Skip header
    
    cityDatabase = lines
      .filter(line => line.trim()) // Remove empty lines
      .map(line => {
        const [city, state, country, city_id] = line.split(',').map(field => field.trim())
        return { city, state, country, city_id }
      })
      .filter(data => data.city && data.city_id) // Ensure valid data
    
    return cityDatabase
  } catch (error) {
    console.error('Error loading city database:', error)
    return []
  }
}

/**
 * Normalize city name for better matching
 */
const normalizeCityName = (cityName: string): string => {
  return cityName
    .toLowerCase()
    .trim()
    .replace(/[^\w\s]/g, '') // Remove special characters
    .replace(/\s+/g, ' ') // Normalize spaces
}

/**
 * Find city data by name with fuzzy matching
 */
const findCityData = (requestedCity: string): CityData | null => {
  const cities = loadCityDatabase()
  const normalizedRequest = normalizeCityName(requestedCity)
  
  // Exact match first
  let match = cities.find(city => 
    normalizeCityName(city.city) === normalizedRequest
  )
  
  if (match) return match
  
  // Partial match (starts with)
  match = cities.find(city => 
    normalizeCityName(city.city).startsWith(normalizedRequest)
  )
  
  if (match) return match
  
  // Contains match
  match = cities.find(city => 
    normalizeCityName(city.city).includes(normalizedRequest)
  )
  
  return match || null
}

/**
 * Generate dynamic Agoda search link with correct city ID
 */
export const generateAgodaSearchLink = (cityName: string): AgodaLinkResult => {
  if (!cityName || !cityName.trim()) {
    return {
      success: false,
      error: "City name is required"
    }
  }

  const cityData = findCityData(cityName.trim())
  
  if (!cityData) {
    return {
      success: false,
      error: `Sorry, I couldn't find "${cityName}" in our hotel database. Please try a different city name or check the spelling.`
    }
  }

  const baseUrl = "https://www.agoda.com/fi-fi/search"
  const params = new URLSearchParams({
    cid: "1947165",
    city: cityData.city_id,
    utm_source: "galagpt",
    utm_medium: "ai_chat",
    utm_campaign: "travel_planning"
  })

  const url = `${baseUrl}?${params.toString()}`

  // Track the affiliate link generation
  if (typeof window !== 'undefined') {
    trackAffiliateLinkClick('agoda', cityData.city, 'dynamic_search')
  }

  return {
    success: true,
    url,
    cityData
  }
}

/**
 * Generate multiple Agoda links for similar cities
 */
export const generateAgodaSearchLinks = (cityName: string, limit: number = 3): AgodaLinkResult[] => {
  const cities = loadCityDatabase()
  const normalizedRequest = normalizeCityName(cityName)
  
  const matches = cities
    .filter(city => 
      normalizeCityName(city.city).includes(normalizedRequest)
    )
    .slice(0, limit)
    .map(cityData => ({
      success: true,
      url: `https://www.agoda.com/fi-fi/search?${new URLSearchParams({
        cid: "1947165",
        city: cityData.city_id,
        utm_source: "galagpt",
        utm_medium: "ai_chat",
        utm_campaign: "travel_planning"
      }).toString()}`,
      cityData
    }))

  return matches.length > 0 ? matches : [{
    success: false,
    error: `No hotels found for cities matching "${cityName}"`
  }]
}

/**
 * Get popular Philippine cities for quick access
 */
export const getPopularPhilippineCities = (): CityData[] => {
  const cities = loadCityDatabase()
  const popularCities = [
    'Manila', 'Cebu', 'Davao', 'Boracay', 'Palawan', 'Baguio', 
    'Tagaytay', 'Iloilo', 'Cagayan de Oro', 'Dumaguete'
  ]
  
  return popularCities
    .map(cityName => findCityData(cityName))
    .filter((city): city is CityData => city !== null)
}

/**
 * Format city information for display
 */
export const formatCityInfo = (cityData: CityData): string => {
  const parts = [cityData.city]
  if (cityData.state) parts.push(cityData.state)
  if (cityData.country) parts.push(cityData.country)
  return parts.join(', ')
}

/**
 * Client-side helper for React components
 */
export const useAgodaLink = () => {
  const generateLink = (cityName: string) => {
    // This will be used in client components
    // For server-side, use generateAgodaSearchLink directly
    return fetch('/api/agoda-link', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cityName })
    }).then(res => res.json())
  }

  return { generateLink }
}
