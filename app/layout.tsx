import type { Metadata } from 'next'
import { Montserrat, Poppins, Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import { Navbar } from '@/components/navbar'
import { ADSENSE_CONFIG } from '@/lib/adsense-config'

// Modern font stack: Montserrat (primary), Poppins (secondary), Inter (fallback)
const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'GalaGPT.ph - AI Travel Assistant for the Philippines',
    template: '%s | GalaGPT.ph - Philippine Travel AI Assistant'
  },
  description: 'Plan your perfect Philippine adventure with GalaGPT.ph - an AI-powered travel assistant. Get personalized itineraries, budget estimates, transportation tips, and local insights for destinations across the Philippines.',
  keywords: [
    'Philippines travel',
    'AI travel assistant', 
    'Philippine destinations',
    'travel planning Philippines',
    'Palawan travel guide',
    'Boracay itinerary',
    'Baguio travel tips',
    'Manila travel guide',
    'Cebu travel planning',
    'Siargao travel assistant',
    'Philippine travel budget',
    'travel chatbot Philippines',
    'AI travel planner',
    'Philippine tourism',
    'travel recommendations Philippines'
  ],
  authors: [{ name: 'GalaGPT.ph Team' }],
  creator: 'GalaGPT.ph',
  publisher: 'GalaGPT.ph',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://galagpt.ph'), // Replace with your actual domain
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'en-PH': '/en-PH',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_PH',
    url: 'https://galagpt.ph', // Replace with your actual domain
    title: 'GalaGPT.ph - AI Travel Assistant for the Philippines',
    description: 'Plan your perfect Philippine adventure with AI-powered travel recommendations and personalized itineraries.',
    siteName: 'GalaGPT.ph',
    images: [
      {
        url: '/og-image.jpg', // You'll need to create this
        width: 1200,
        height: 630,
        alt: 'GalaGPT.ph - Philippine Travel AI Assistant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@galagptph', // Replace with your Twitter handle
    creator: '@galagptph',
    title: 'GalaGPT.ph - AI Travel Assistant for the Philippines',
    description: 'Plan your perfect Philippine adventure with AI-powered travel recommendations.',
    images: ['/twitter-image.jpg'], // You'll need to create this
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/site.webmanifest',
  other: {
    'theme-color': '#2563eb',
  },
  verification: {
    // google: 'your-google-verification-code', // Add your Google Search Console verification when ready
  },
  category: 'travel',
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    viewportFit: 'cover',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-PH">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />

        {/* AdSense site verification meta */}
        <meta name="google-adsense-account" content={ADSENSE_CONFIG.publisherId} />
        
        {/* Agoda partner manual verification */}
        <meta name="agd-partner-manual-verification" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        
        {/* DNS Prefetch for faster loading */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//pagead2.googlesyndication.com" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://galagpt.ph" />
        
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WXPCLW46');`
          }}
        />
        
        {/* Google Analytics 4 (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZMCYRYBMN6"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZMCYRYBMN6');
            `
          }}
        />
        
        {/* Google AdSense script from user */}
        {process.env.NODE_ENV === 'production' && (
          <Script
            id="adsense-script"
            async
            strategy="afterInteractive"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CONFIG.publisherId}`}
            crossOrigin="anonymous"
          />
        )}
        
        {/* Structured Data for SEO */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "GalaGPT.ph",
              "url": "https://galagpt.ph",
              "description": "AI-powered travel assistant for planning perfect Philippine adventures with personalized itineraries and local insights.",
              "applicationCategory": "TravelApplication",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "PHP"
              },
              "author": {
                "@type": "Organization",
                "name": "GalaGPT.ph"
              },
              "publisher": {
                "@type": "Organization",
                "name": "GalaGPT.ph",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://galagpt.ph/logo.png"
                }
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://galagpt.ph/plan?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className={`${montserrat.variable} ${poppins.variable} ${inter.variable} font-montserrat antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-WXPCLW46"
            height="0" 
            width="0" 
            style={{display:'none',visibility:'hidden'}}
          />
        </noscript>
        
        {/* Google Analytics scripts can be added here when needed */}
        
        <Navbar />
        {children}
      </body>
    </html>
  )
}
