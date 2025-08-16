// Affiliate Marketing Configuration
// Add affiliate links to AI responses for monetization

export const AFFILIATE_CONFIG = {
  // Hotel Booking Affiliates
  hotels: {
    booking: {
      partnerId: 'YOUR_BOOKING_PARTNER_ID',
      baseUrl: 'https://www.booking.com/searchresults.html',
      commission: '25-40%'
    },
    agoda: {
      cid: '1947165',
      apiKey: 'ed9ce8b0-3f76-40b3-a3e5-8da361fb865b',
      baseUrl: 'https://www.agoda.com/search',
      commission: '25-35%',
      currency: 'PHP',
      language: 'en-us',
      searchBox: {
        crt: '10041263910060',
        referenceKey: 'Xg0+iUgRKN9NAexFRjF9ig==',
        defaultCity: '18218',
        defaultDestination: 'Tagaytay, Philippines'
      }
    }
  },

  // Activity & Tour Affiliates  
  activities: {
    klook: {
      aid: '96417',
      affAdid: '1106707',
      baseUrl: 'https://affiliate.klook.com/redirect',
      directUrl: 'https://www.klook.com',
      commission: '8-12%'
    },
    getyourguide: {
      partnerId: 'YOUR_GETYOURGUIDE_PARTNER_ID',
      baseUrl: 'https://www.getyourguide.com',
      commission: '8-12%'
    }
  },

  // Transportation Affiliates
  transport: {
    grab: {
      partnerId: 'YOUR_GRAB_PARTNER_ID',
      baseUrl: 'https://www.grab.com',
      commission: '5-10%'
    },
    cebuPacific: {
      partnerId: 'YOUR_CEBU_PACIFIC_ID',
      baseUrl: 'https://www.cebupacificair.com',
      commission: '1-3%'
    }
  }
}

// City code mapping for Agoda destinations
const AGODA_CITY_CODES = {
  'palawan': '17196',
  'el nido': '17196', 
  'coron': '17196',
  'puerto princesa': '17196',
  'manila': '17196',
  'makati': '17196',
  'bgc': '17196',
  'quezon city': '17196',
  'baguio': '16411',
  'cebu': '16185',
  'boracay': '16315',
  'bohol': '18004',
  'siargao': '17733',
  'tagaytay': '18218',
  'iloilo': '16199',
  'davao': '16424',
  'cagayan de oro': '16191',
  'philippines': '17196' // Default to Manila area
}

// Generate affiliate links for AI responses
export function generateAffiliateLink(type: string, destination: string, params: any) {
  // Generate Agoda hotel booking link (primary hotel affiliate)
  if (type === 'hotels' || type === 'agoda') {
    const agodaConfig = AFFILIATE_CONFIG.hotels.agoda
    const cityCode = params?.cityCode || AGODA_CITY_CODES[destination.toLowerCase() as keyof typeof AGODA_CITY_CODES] || AGODA_CITY_CODES['philippines']
    const checkIn = params?.checkIn || ''
    const checkOut = params?.checkOut || ''
    
    let url = `https://www.agoda.com/search?cid=${agodaConfig.cid}`
    if (cityCode) url += `&city=${cityCode}`
    if (checkIn) url += `&checkIn=${checkIn}`
    if (checkOut) url += `&checkOut=${checkOut}`
    url += `&utm_source=galagpt&utm_medium=ai_chat&utm_campaign=travel_planning`
    
    return url
  }

  if (type === 'activities') {
    const klookConfig = AFFILIATE_CONFIG.activities.klook
    // Use your specific Klook affiliate redirect URL
    return `${klookConfig.baseUrl}?aid=${klookConfig.aid}&aff_adid=${klookConfig.affAdid}&k_site=${encodeURIComponent(klookConfig.directUrl)}`
  }

  if (type === 'transport') {
    const transportConfig = AFFILIATE_CONFIG.transport.grab
    return `${transportConfig.baseUrl}/book?destination=${destination}&partner=${transportConfig.partnerId}`
  }

  return null
}

// Generate Agoda search link for specific destinations
export function generateAgodaLink(destination: string, checkIn?: string, checkOut?: string, guests?: number) {
  const agodaConfig = AFFILIATE_CONFIG.hotels.agoda
  const cityCode = AGODA_CITY_CODES[destination.toLowerCase() as keyof typeof AGODA_CITY_CODES] || AGODA_CITY_CODES['philippines']
  const baseUrl = 'https://www.agoda.com/search'
  
  const params = new URLSearchParams({
    cid: agodaConfig.cid,
    city: cityCode,
    ...(checkIn && { checkIn }),
    ...(checkOut && { checkOut }),
    ...(guests && { adults: guests.toString() }),
    utm_source: 'galagpt',
    utm_medium: 'ai_chat',
    utm_campaign: 'travel_planning'
  })

  return `${baseUrl}?${params.toString()}`
}

// Generate Klook activity link
export function generateKlookLink(destination?: string) {
  const klookConfig = AFFILIATE_CONFIG.activities.klook
  return `${klookConfig.baseUrl}?aid=${klookConfig.aid}&aff_adid=${klookConfig.affAdid}&k_site=${encodeURIComponent(klookConfig.directUrl)}`
}

// Track affiliate clicks and conversions
export function trackAffiliateClick(type: string, destination: string) {
  // Google Analytics event tracking
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'affiliate_click', {
      event_category: 'monetization',
      event_label: `${type}_${destination}`,
      value: 1
    })
  }
}
