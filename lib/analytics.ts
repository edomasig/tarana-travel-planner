// Google Analytics configuration
export const GA_MEASUREMENT_ID = 'G-MW68X98010'

// Analytics for ad performance tracking
export const trackAdClick = (adType: string, position: string) => {
  // Google Analytics event tracking
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'ad_click', {
      ad_type: adType,
      ad_position: position,
      event_category: 'advertising',
      event_label: `${adType}_${position}`
    })
  }
}

// Enhanced analytics service for revenue tracking

export interface AnalyticsEvent {
  action: string
  category: string
  label?: string
  value?: number
  custom_parameters?: Record<string, any>
}

// Revenue tracking events
export const REVENUE_EVENTS = {
  AFFILIATE_CLICK: 'affiliate_click',
  ADSENSE_CLICK: 'adsense_click', 
  PREMIUM_SUBSCRIPTION_VIEW: 'premium_view',
  PREMIUM_SUBSCRIPTION_INTEREST: 'premium_interest',
  PREMIUM_SUBSCRIPTION_PURCHASE: 'premium_purchase',
  ITINERARY_GENERATED: 'itinerary_generated',
  USER_REGISTRATION: 'user_registration',
  BOOKING_INITIATED: 'booking_initiated',
  BOOKING_COMPLETED: 'booking_completed'
} as const

export function trackEvent(event: AnalyticsEvent): void {
  // Google Analytics 4
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
      ...event.custom_parameters
    })
  }
  
  // Facebook Pixel (for remarketing)
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'CustomEvent', {
      event_name: event.action,
      event_category: event.category,
      event_label: event.label,
      value: event.value
    })
  }
  
  // Console log for development
  if (process.env.NODE_ENV === 'development') {
    console.log('Analytics Event:', event)
  }
}

// Revenue-specific tracking functions
export const analytics = {
  // Track affiliate link clicks with revenue potential
  trackAffiliateClick: (provider: string, destination: string, estimatedCommission?: number) => {
    trackEvent({
      action: REVENUE_EVENTS.AFFILIATE_CLICK,
      category: 'monetization',
      label: `${provider}_${destination}`,
      value: estimatedCommission || 0,
      custom_parameters: {
        provider,
        destination,
        traffic_source: 'ai_chat'
      }
    })
  },

  // Track AdSense ad interactions
  trackAdSenseClick: (adUnit: string, placement: string) => {
    trackEvent({
      action: REVENUE_EVENTS.ADSENSE_CLICK,
      category: 'monetization', 
      label: `${adUnit}_${placement}`,
      custom_parameters: {
        ad_unit: adUnit,
        placement: placement
      }
    })
  },

  // Track premium subscription funnel
  trackPremiumView: (plan: string) => {
    trackEvent({
      action: REVENUE_EVENTS.PREMIUM_SUBSCRIPTION_VIEW,
      category: 'subscription',
      label: plan
    })
  },

  trackPremiumInterest: (plan: string, price: number) => {
    trackEvent({
      action: REVENUE_EVENTS.PREMIUM_SUBSCRIPTION_INTEREST,
      category: 'subscription',
      label: plan,
      value: price
    })
  },

  trackPremiumPurchase: (plan: string, price: number, userId?: string) => {
    trackEvent({
      action: REVENUE_EVENTS.PREMIUM_SUBSCRIPTION_PURCHASE,
      category: 'subscription',
      label: plan,
      value: price,
      custom_parameters: {
        transaction_id: `sub_${Date.now()}`,
        user_id: userId,
        currency: 'PHP'
      }
    })
  },

  // Track user engagement that leads to revenue
  trackItineraryGenerated: (destination: string, hasAffiliate: boolean) => {
    trackEvent({
      action: REVENUE_EVENTS.ITINERARY_GENERATED,
      category: 'engagement',
      label: destination,
      custom_parameters: {
        has_affiliate_links: hasAffiliate,
        conversion_opportunity: true
      }
    })
  },

  // Track booking conversions
  trackBookingInitiated: (type: 'hotel' | 'activity' | 'transport', destination: string, value: number) => {
    trackEvent({
      action: REVENUE_EVENTS.BOOKING_INITIATED,
      category: 'conversion',
      label: `${type}_${destination}`,
      value: value,
      custom_parameters: {
        booking_type: type,
        destination: destination,
        currency: 'PHP'
      }
    })
  },

  trackBookingCompleted: (type: 'hotel' | 'activity' | 'transport', destination: string, value: number, commissionRate: number) => {
    const commission = value * (commissionRate / 100)
    trackEvent({
      action: REVENUE_EVENTS.BOOKING_COMPLETED,
      category: 'conversion',
      label: `${type}_${destination}`,
      value: commission, // Track commission earned, not booking value
      custom_parameters: {
        booking_type: type,
        destination: destination,
        booking_value: value,
        commission_rate: commissionRate,
        commission_earned: commission,
        currency: 'PHP'
      }
    })
  }
}

// Revenue analytics dashboard data
export interface RevenueMetrics {
  totalRevenue: number
  adsenseRevenue: number
  affiliateRevenue: number
  subscriptionRevenue: number
  conversionRate: number
  averageOrderValue: number
  monthlyGrowth: number
}

// Calculate revenue metrics (to be connected to actual data source)
export function calculateRevenueMetrics(): RevenueMetrics {
  // This would connect to your analytics database in production
  return {
    totalRevenue: 0,
    adsenseRevenue: 0, 
    affiliateRevenue: 0,
    subscriptionRevenue: 0,
    conversionRate: 0,
    averageOrderValue: 0,
    monthlyGrowth: 0
  }
}

// Initialize analytics on page load
export function initializeAnalytics(): void {
  if (typeof window === 'undefined') return

  // Track page view
  trackEvent({
    action: 'page_view',
    category: 'engagement',
    label: window.location.pathname
  })

  // Track session start
  trackEvent({
    action: 'session_start', 
    category: 'engagement',
    custom_parameters: {
      page_location: window.location.href,
      page_title: document.title
    }
  })
}

export const trackConversion = (conversionType: 'premium_signup' | 'ad_click_through') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      event_category: 'monetization',
      event_label: conversionType
    })
  }
}

// Travel-specific tracking functions for TaraNa
export const TravelAnalytics = {
  // Track destination searches
  trackDestinationSearch: (destination: string, category?: string) => {
    trackEvent({
      action: 'destination_search',
      category: 'travel_planning',
      label: destination,
      custom_parameters: {
        destination: destination,
        category: category || 'general'
      }
    })
  },

  // Track itinerary generation
  trackItineraryGenerated: (destination: string, duration: string, budget?: string) => {
    trackEvent({
      action: REVENUE_EVENTS.ITINERARY_GENERATED,
      category: 'travel_planning',
      label: destination,
      custom_parameters: {
        destination: destination,
        duration: duration,
        budget: budget
      }
    })
  },

  // Track guide page views
  trackGuideView: (guideName: string, category: string) => {
    trackEvent({
      action: 'guide_view',
      category: 'content_engagement',
      label: guideName,
      custom_parameters: {
        guide_name: guideName,
        guide_category: category
      }
    })
  },

  // Track affiliate link clicks (for Agoda, etc.)
  trackAffiliateClick: (provider: string, linkType: string, destination?: string) => {
    trackEvent({
      action: REVENUE_EVENTS.AFFILIATE_CLICK,
      category: 'monetization',
      label: `${provider}_${linkType}`,
      custom_parameters: {
        affiliate_provider: provider,
        link_type: linkType,
        destination: destination
      }
    })
  },

  // Track booking funnel
  trackBookingInitiated: (provider: string, bookingType: string, destination: string) => {
    trackEvent({
      action: REVENUE_EVENTS.BOOKING_INITIATED,
      category: 'conversion',
      label: `${provider}_${bookingType}`,
      value: 1,
      custom_parameters: {
        booking_provider: provider,
        booking_type: bookingType,
        destination: destination
      }
    })
  },

  // Track chat interactions
  trackChatMessage: (messageType: string, topic?: string) => {
    trackEvent({
      action: 'chat_message',
      category: 'user_engagement',
      label: messageType,
      custom_parameters: {
        message_type: messageType,
        topic: topic
      }
    })
  }
}

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}
