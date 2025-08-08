// Google AdSense Configuration for galagpt.ph
// Replace these values with your actual AdSense settings

export const ADSENSE_CONFIG = {
  // Replace with your actual AdSense Publisher ID
  // Get this from your AdSense account dashboard
  publisherId: 'ca-pub-5880649563057228',
  
  // Replace with your actual Google Analytics ID (optional)
  googleAnalyticsId: 'GA_MEASUREMENT_ID',
  
  // Ad slot IDs - create these in your AdSense dashboard
  adSlots: {
    topBanner: '1234567890',      // Top banner ad (728x90 or responsive)
    sidebarAd: '1234567891',      // Left sidebar ad (300x600 or responsive)  
    bottomBanner: '1234567892',   // Bottom banner ad (728x90 or responsive)
    betweenMessages: '1234567893', // Between chat messages (300x250)
    nativeAd: '1234567894',       // Native ads for content
    planPageTop: '1234567895',    // Plan page top banner
    planPageSidebar: '1234567896', // Plan page sidebar
    savedPageTop: '1234567897',   // Saved page top banner
    pricingPageTop: '1234567898', // Pricing page top banner
  },
  
  // Ad settings
  settings: {
    enableAutoAds: true,          // Enable Google Auto Ads
    enablePageLevelAds: true,     // Enable page-level ads
    fullWidthResponsive: true,    // Make ads responsive
  }
}

// AdSense ad formats
export const AD_FORMATS = {
  banner: 'horizontal',
  sidebar: 'vertical', 
  rectangle: 'rectangle',
  auto: 'auto'
} as const

// AdSense ad sizes
export const AD_SIZES = {
  leaderboard: { width: '728px', height: '90px' },    // Top/bottom banners
  mediumRectangle: { width: '300px', height: '250px' }, // Content ads
  skyscraper: { width: '300px', height: '600px' },    // Sidebar ads
  responsive: { width: '100%', height: 'auto' }       // Responsive ads
}
