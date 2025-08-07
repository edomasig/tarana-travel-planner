// SEO Configuration for GalaGPT.ph
export const SEO_CONFIG = {
  // Basic Site Information
  siteName: 'GalaGPT.ph',
  siteUrl: 'https://galagpt.ph', // Replace with your actual domain
  defaultTitle: 'GalaGPT.ph - AI Travel Assistant for the Philippines',
  defaultDescription: 'Plan your perfect Philippine adventure with GalaGPT.ph - an AI-powered travel assistant. Get personalized itineraries, budget estimates, transportation tips, and local insights for destinations across the Philippines.',
  
  // Social Media
  twitterHandle: '@galagptph', // Replace with your Twitter handle
  facebookPage: 'https://facebook.com/galagptph', // Replace with your Facebook page
  instagramHandle: '@galagptph', // Replace with your Instagram handle
  
  // Business Information
  author: 'GalaGPT.ph Team',
  publisher: 'GalaGPT.ph',
  creator: 'GalaGPT.ph',
  
  // Keywords for different pages
  keywords: {
    home: [
      'Philippines travel',
      'AI travel assistant',
      'Philippine destinations',
      'travel planning Philippines',
      'AI travel planner',
      'Philippine tourism',
      'travel chatbot Philippines',
      'travel recommendations Philippines'
    ],
    destinations: [
      'Palawan travel guide',
      'Boracay itinerary',
      'Baguio travel tips',
      'Manila travel guide',
      'Cebu travel planning',
      'Siargao travel assistant',
      'Philippine islands',
      'travel destinations Philippines'
    ],
    planning: [
      'Philippine travel budget',
      'travel itinerary Philippines',
      'travel planning assistant',
      'AI trip planner',
      'travel budget calculator',
      'Philippine vacation planning'
    ]
  },
  
  // Page-specific configurations
  pages: {
    home: {
      title: 'GalaGPT.ph - AI Travel Assistant for the Philippines',
      description: 'Plan your perfect Philippine adventure with AI-powered travel recommendations. Get personalized itineraries, budget estimates, and local insights for destinations across the Philippines.',
      path: '/'
    },
    plan: {
      title: 'Plan Your Trip - AI Travel Planner for Philippines',
      description: 'Create personalized travel itineraries for the Philippines with our AI assistant. Get detailed day-by-day plans, budget estimates, and local recommendations.',
      path: '/plan'
    },
    destinations: {
      title: 'Philippine Travel Destinations - Comprehensive Guide',
      description: 'Explore the best travel destinations in the Philippines. Get AI-powered recommendations for Palawan, Boracay, Baguio, Cebu, Siargao, and more.',
      path: '/destinations'
    }
  },
  
  // Structured Data Templates
  structuredData: {
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GalaGPT.ph",
      "url": "https://galagpt.ph",
      "logo": "https://galagpt.ph/logo.png",
      "sameAs": [
        "https://facebook.com/galagptph",
        "https://twitter.com/galagptph",
        "https://instagram.com/galagptph"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "availableLanguage": ["English", "Filipino"]
      }
    },
    
    website: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "GalaGPT.ph",
      "url": "https://galagpt.ph",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://galagpt.ph/plan?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    
    travelApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "GalaGPT.ph",
      "url": "https://galagpt.ph",
      "description": "AI-powered travel assistant for planning perfect Philippine adventures",
      "applicationCategory": "TravelApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "PHP"
      }
    }
  }
}

// Generate page-specific metadata
export function generatePageMetadata(pageKey: keyof typeof SEO_CONFIG.pages) {
  const page = SEO_CONFIG.pages[pageKey]
  return {
    title: page.title,
    description: page.description,
    keywords: SEO_CONFIG.keywords.home, // You can make this page-specific
    openGraph: {
      title: page.title,
      description: page.description,
      url: `${SEO_CONFIG.siteUrl}${page.path}`,
    },
    twitter: {
      title: page.title,
      description: page.description,
    },
    canonical: `${SEO_CONFIG.siteUrl}${page.path}`,
  }
}
