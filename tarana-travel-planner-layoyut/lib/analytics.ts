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

export const trackUserEngagement = (action: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: 'user_engagement',
      value: value
    })
  }
}

export const trackConversion = (conversionType: 'premium_signup' | 'ad_click_through') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      event_category: 'monetization',
      event_label: conversionType
    })
  }
}

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}
