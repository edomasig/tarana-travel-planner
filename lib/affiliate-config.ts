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
      partnerId: 'YOUR_KLOOK_PARTNER_ID',
      baseUrl: 'https://www.klook.com/activity',
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

// Generate affiliate links for AI responses
export function generateAffiliateLink(type: string, destination: string, params: any) {
  // Example: Generate hotel booking link
  if (type === 'hotels') {
    const hotelConfig = AFFILIATE_CONFIG.hotels.booking
    return `${hotelConfig.baseUrl}?ss=${destination}&aid=${hotelConfig.partnerId}&utm_source=galagpt&utm_medium=ai_chat&utm_campaign=travel_planning`
  }

  if (type === 'agoda') {
    const agodaConfig = AFFILIATE_CONFIG.hotels.agoda
    const cityParam = params?.cityCode || ''
    return `https://www.agoda.com/search?cid=${agodaConfig.cid}&city=${cityParam}&utm_source=galagpt&utm_medium=ai_chat&utm_campaign=travel_planning`
  }

  if (type === 'activities') {
    const activityConfig = AFFILIATE_CONFIG.activities.klook
    return `${activityConfig.baseUrl}/${destination}?partner_id=${activityConfig.partnerId}&utm_source=galagpt`
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
  const baseUrl = 'https://www.agoda.com/search'
  
  const params = new URLSearchParams({
    cid: agodaConfig.cid,
    destination: destination,
    ...(checkIn && { checkIn }),
    ...(checkOut && { checkOut }),
    ...(guests && { adults: guests.toString() }),
    utm_source: 'galagpt',
    utm_medium: 'ai_chat',
    utm_campaign: 'travel_planning'
  })

  return `${baseUrl}?${params.toString()}`
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
