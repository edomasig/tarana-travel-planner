// GTM Event Tracking Utilities
// Add this to track affiliate clicks and user interactions

export const trackAffiliateLinkClick = (platform: string, destination: string, linkType: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'affiliate_click', {
      affiliate_platform: platform,
      destination: destination,
      link_type: linkType,
      event_category: 'affiliate',
      event_label: `${platform}_${destination}`
    })
  }
  
  // Also push to dataLayer for GTM
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'affiliate_click',
      affiliate_platform: platform,
      destination: destination,
      link_type: linkType
    })
  }
}

export const trackTravelPlanRequest = (destination: string, duration: string, budget: string) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'travel_plan_request',
      destination: destination,
      duration: duration,
      budget_range: budget,
      event_category: 'travel_planning'
    })
  }
}

export const trackConversationSave = (messageCount: number, conversationId: string) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'conversation_save',
      message_count: messageCount,
      conversation_id: conversationId,
      event_category: 'user_engagement'
    })
  }
}

export const trackSearchBoxUsage = (searchType: string, location: string) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'search_box_usage',
      search_type: searchType, // 'hotel', 'activity', etc.
      location: location,
      event_category: 'search'
    })
  }
}

// Declare global types for TypeScript
declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}
