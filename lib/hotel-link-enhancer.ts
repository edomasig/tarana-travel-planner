// Hotel link enhancer - makes hotel suggestions in AI responses clickable with Agoda affiliate links
import { generateAgodaSearchLink } from './agoda-link-generator'

interface HotelMatch {
  hotelName: string
  city: string
  originalText: string
  startIndex: number
  endIndex: number
}

// Enhanced hotel patterns to detect in AI responses (handles markdown formatting)
const HOTEL_PATTERNS = [
  // Format: "**Stay**: **Hotel Name** (price)" - with markdown formatting
  /\*\*Stay\*\*:\s*\*\*([A-Z][a-zA-Z\s&'-]+(?:Hotel|Resort|Inn|Lodge|Hostel|Suites|Plaza|Grand|Boutique|Palace|Manor|Villa|Pension|Guesthouse|Spa|Club|Retreat))\*\*/gi,
  // Format: "Stay: **Hotel Name** (price)" - mixed formatting
  /Stay:\s*\*\*([A-Z][a-zA-Z\s&'-]+(?:Hotel|Resort|Inn|Lodge|Hostel|Suites|Plaza|Grand|Boutique|Palace|Manor|Villa|Pension|Guesthouse|Spa|Club|Retreat))\*\*/gi,
  // Format: "Check-in: Stay at Hotel Name (price)" - extract just hotel name
  /Check-in:\s*Stay\s+at\s+([A-Z][a-zA-Z\s&'-]+(?:Hotel|Resort|Inn|Lodge|Hostel|Suites|Plaza|Grand|Boutique|Palace|Manor|Villa|Pension|Guesthouse|Spa|Club|Retreat))\b/gi,
  // Format: "Stay at Hotel Name (price)" - extract just hotel name
  /Stay\s+at\s+([A-Z][a-zA-Z\s&'-]+(?:Hotel|Resort|Inn|Lodge|Hostel|Suites|Plaza|Grand|Boutique|Palace|Manor|Villa|Pension|Guesthouse|Spa|Club|Retreat))\b/gi,
  // Format: "Stay: Hotel Name (price)" - plain text
  /Stay:\s*([A-Z][a-zA-Z\s&'-]+(?:Hotel|Resort|Inn|Lodge|Hostel|Suites|Plaza|Grand|Boutique|Palace|Manor|Villa|Pension|Guesthouse|Spa|Club|Retreat))\b/gi,
  // Format: "Suggested Stay: Hotel Name"
  /Suggested\s+Stay:\s*([A-Z][a-zA-Z\s&'-]+(?:Hotel|Resort|Inn|Lodge|Hostel|Suites|Plaza|Grand|Boutique|Palace|Manor|Villa|Pension|Guesthouse|Spa|Club|Retreat))\b/gi,
  // Direct hotel suggestions with various prefixes
  /(?:check-in at|book at|recommended hotel|accommodation):\s*([A-Z][a-zA-Z\s&'-]+(?:Hotel|Resort|Inn|Lodge|Hostel|Suites|Plaza|Grand|Boutique|Palace|Manor|Villa|Pension|Guesthouse|Spa|Club|Retreat))\b/gi,
  // Hotel names with common suffixes (standalone) - handles markdown
  /\*\*([A-Z][a-zA-Z\s&'-]+(?:Hotel|Resort|Inn|Lodge|Hostel|Suites|Plaza|Grand|Boutique|Palace|Manor|Villa|Pension|Guesthouse|Spa|Club|Retreat))\*\*\s*\([₱$€£¥]/g,
  // Hotel names with common suffixes (standalone) - plain text
  /\b([A-Z][a-zA-Z\s&'-]+(?:Hotel|Resort|Inn|Lodge|Hostel|Suites|Plaza|Grand|Boutique|Palace|Manor|Villa|Pension|Guesthouse|Spa|Club|Retreat|Lodge))\b(?=\s*\([₱$€£¥]|\s*\(\d)/g,
  // Specific format: "Hotel Name (₱price/night)" or "Hotel Name (price/night)"
  /\b([A-Z][a-zA-Z\s&'-]+(?:Hotel|Resort|Inn|Lodge|Hostel|Suites|Plaza|Grand|Boutique|Palace|Manor|Villa|Pension|Guesthouse|Spa|Club|Retreat))\s*\([₱$€£¥]\d+[,\d]*[-–]\s*[₱$€£¥]?\d+[,\d]*\/night\)/g,
  // Format: "Hotel Name (₱price/night)" single price
  /\b([A-Z][a-zA-Z\s&'-]+(?:Hotel|Resort|Inn|Lodge|Hostel|Suites|Plaza|Grand|Boutique|Palace|Manor|Villa|Pension|Guesthouse|Spa|Club|Retreat))\s*\([₱$€£¥]\d+[,\d]*\/night\)/g,
  // Format: "**The Lake Hotel Tagaytay**" - specific pattern for this format
  /\*\*(The\s+Lake\s+Hotel\s+Tagaytay)\*\*\s*\([₱$€£¥]\d+[,\d]*[-–][₱$€£¥]?\d+[,\d]*\/night\)/g,
  // Format: "The Hotel Name" - handles "The" prefix with price ranges
  /\*\*(The\s+[A-Z][a-zA-Z\s&'-]*(?:Hotel|Resort|Inn|Lodge|Hostel|Suites|Plaza|Grand|Boutique|Palace|Manor|Villa|Pension|Guesthouse|Spa|Club|Retreat))\*\*\s*\([₱$€£¥]\d+[,\d]*[-–][₱$€£¥]?\d+[,\d]*\/night\)/g,
  // Format: "The Hotel Name" - handles "The" prefix (plain text)
  /\b(The\s+[A-Z][a-zA-Z\s&'-]*(?:Hotel|Resort|Inn|Lodge|Hostel|Suites|Plaza|Grand|Boutique|Palace|Manor|Villa|Pension|Guesthouse|Spa|Club|Retreat))\b(?=\s*\([₱$€£¥]|\s*\(\d)/g
]

// Extract city context from surrounding text with improved detection
function extractCityContext(text: string, hotelIndex: number): string | null {
  // Look for city names within 300 characters before and after the hotel mention
  const contextStart = Math.max(0, hotelIndex - 300)
  const contextEnd = Math.min(text.length, hotelIndex + 300)
  const context = text.substring(contextStart, contextEnd).toLowerCase()
  
  // Enhanced city detection with common variations and landmarks
  const cityPatterns = [
    // Philippines - exact matches first
    { pattern: /\btagaytay\b/, city: 'tagaytay' },
    { pattern: /\btaal\s+(lake|volcano)\b/, city: 'tagaytay' }, // Taal Lake/Volcano -> Tagaytay
    { pattern: /\bmanila\b/, city: 'manila' },
    { pattern: /\bcebu\b/, city: 'cebu' },
    { pattern: /\bdavao\b/, city: 'davao' },
    { pattern: /\bboracay\b/, city: 'boracay' },
    { pattern: /\bpalawan\b/, city: 'palawan' },
    { pattern: /\bbaguio\b/, city: 'baguio' },
    { pattern: /\biloilo\b/, city: 'iloilo' },
    { pattern: /\bdumaguete\b/, city: 'dumaguete' },
    { pattern: /\bel\s+nido\b/, city: 'el nido' },
    { pattern: /\bcoron\b/, city: 'coron' },
    { pattern: /\bpuerto\s+princesa\b/, city: 'puerto princesa' },
    { pattern: /\bvigan\b/, city: 'vigan' },
    { pattern: /\bbohol\b/, city: 'bohol' },
    { pattern: /\bsiquijor\b/, city: 'siquijor' },
    { pattern: /\bsiargao\b/, city: 'siargao' },
    { pattern: /\bbatangas\b/, city: 'batangas' },
    // International
    { pattern: /\btokyo\b/, city: 'tokyo' },
    { pattern: /\bosaka\b/, city: 'osaka' },
    { pattern: /\bkyoto\b/, city: 'kyoto' },
    { pattern: /\bbangkok\b/, city: 'bangkok' },
    { pattern: /\bphuket\b/, city: 'phuket' },
    { pattern: /\bsingapore\b/, city: 'singapore' },
    { pattern: /\bkuala\s+lumpur\b/, city: 'kuala lumpur' },
    { pattern: /\bhong\s+kong\b/, city: 'hong kong' },
    { pattern: /\bseoul\b/, city: 'seoul' },
    { pattern: /\bbusan\b/, city: 'busan' },
    { pattern: /\btaipei\b/, city: 'taipei' },
    { pattern: /\bho\s+chi\s+minh\b/, city: 'ho chi minh' },
    { pattern: /\bhanoi\b/, city: 'hanoi' },
    { pattern: /\bbali\b/, city: 'bali' },
    { pattern: /\bjakarta\b/, city: 'jakarta' }
  ]
  
  // Check patterns in order of specificity
  for (const { pattern, city } of cityPatterns) {
    if (pattern.test(context)) {
      return city
    }
  }
  
  return null
}

// Find all hotel mentions in the response text
function findHotelMentions(text: string): HotelMatch[] {
  const matches: HotelMatch[] = []
  
  for (const pattern of HOTEL_PATTERNS) {
    let match
    const regex = new RegExp(pattern.source, pattern.flags)
    
    while ((match = regex.exec(text)) !== null) {
      const hotelName = match[1]?.trim()
      if (!hotelName || hotelName.length < 3) continue
      
      // Skip if it's just a generic word
      const genericWords = ['hotel', 'resort', 'accommodation', 'stay', 'check-in', 'book']
      if (genericWords.includes(hotelName.toLowerCase())) continue
      
      const city = extractCityContext(text, match.index)
      if (!city) continue
      
      matches.push({
        hotelName: hotelName,
        city: city,
        originalText: match[0],
        startIndex: match.index,
        endIndex: match.index + match[0].length
      })
    }
  }
  
  // Remove duplicates and sort by position
  const uniqueMatches = matches.filter((match, index, arr) => 
    arr.findIndex(m => m.hotelName === match.hotelName && m.city === match.city) === index
  )
  
  return uniqueMatches.sort((a, b) => a.startIndex - b.startIndex)
}

// Generate Agoda search link for a specific hotel and city
function generateHotelSearchLink(hotelName: string, city: string): string {
  console.log(`Generating hotel link for: ${hotelName} in ${city}`)
  
  // Check for specific hotel IDs for popular hotels
  const specificHotelIds: { [key: string]: string } = {
    'taal vista hotel': '4120',
    'days hotel by wyndham tagaytay': '4121'
  }
  
  const hotelKey = hotelName.toLowerCase()
  const specificHotelId = specificHotelIds[hotelKey]
  
  // Use search-based links for all hotels (more reliable than direct hotel URLs)
  // Direct hotel URLs are not reliable on Agoda
  
  const linkResult = generateAgodaSearchLink(city)
  
  if (linkResult.success && linkResult.url && linkResult.cityData) {
    // Add hotel name as search query parameter
    const url = new URL(linkResult.url)
    url.searchParams.set('searchText', hotelName)
    url.searchParams.set('utm_content', 'hotel_suggestion')
    
    console.log(`Generated search link with city ID ${linkResult.cityData.city_id}: ${url.toString()}`)
    return url.toString()
  }
  
  console.log(`Fallback link generation for ${city}`)
  
  // Enhanced fallback - try to use city ID if we can find it
  const fallbackUrl = `https://www.agoda.com/search?cid=1947165&searchText=${encodeURIComponent(hotelName + ' ' + city)}&utm_source=galagpt&utm_medium=ai_chat&utm_campaign=hotel_suggestion&utm_content=fallback`
  
  return fallbackUrl
}

// Main function to enhance AI response with clickable hotel links
export function enhanceResponseWithHotelLinks(response: string): string {
  const hotelMentions = findHotelMentions(response)
  
  if (hotelMentions.length === 0) {
    return response
  }
  
  // Process matches in reverse order to maintain string indices
  let enhancedResponse = response
  
  for (let i = hotelMentions.length - 1; i >= 0; i--) {
    const match = hotelMentions[i]
    const hotelLink = generateHotelSearchLink(match.hotelName, match.city)
    
    // Create markdown link for the hotel - preserve any existing markdown formatting
    const linkedHotel = `[${match.hotelName}](${hotelLink})`
    
    // Replace the hotel name in the original text
    const beforeMatch = enhancedResponse.substring(0, match.startIndex)
    const afterMatch = enhancedResponse.substring(match.endIndex)
    
    // Handle different formatting scenarios
    let newMatchText = match.originalText
    
    // If the hotel name is wrapped in markdown (**Hotel Name**)
    if (match.originalText.includes(`**${match.hotelName}**`)) {
      newMatchText = match.originalText.replace(`**${match.hotelName}**`, `**${linkedHotel}**`)
    } else {
      // Find just the hotel name part within the matched text
      const hotelNameIndex = match.originalText.indexOf(match.hotelName)
      if (hotelNameIndex !== -1) {
        const beforeHotel = match.originalText.substring(0, hotelNameIndex)
        const afterHotel = match.originalText.substring(hotelNameIndex + match.hotelName.length)
        newMatchText = beforeHotel + linkedHotel + afterHotel
      }
    }
    
    enhancedResponse = beforeMatch + newMatchText + afterMatch
  }
  
  return enhancedResponse
}

// Helper function to test the hotel detection
export function testHotelDetection(text: string): HotelMatch[] {
  return findHotelMentions(text)
}