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
      partnerId: 'YOUR_AGODA_PARTNER_ID', 
      baseUrl: 'https://www.agoda.com/search',
      commission: '25-35%'
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
