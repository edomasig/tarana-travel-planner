import type { Metadata } from 'next'
import { Montserrat, Poppins, Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import { Navbar } from '@/components/navbar'
import { ADSENSE_CONFIG } from '@/lib/adsense-config'
import { GoogleAnalytics } from '@/components/google-analytics'
import AuthProvider from '@/components/auth-provider'
import { Toaster } from '@/components/ui/toaster'
import { FloatingMonetagButton } from '@/components/floating-monetag'

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
    icon: '/galagpt-favicon.svg',
    shortcut: '/galagpt-favicon.svg',
    apple: '/galagpt-favicon.svg',
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

        {/* monetag site verification meta */}
        
        
        {/* Agoda partner manual verification */}
        <meta name="agd-partner-manual-verification" />
        
        {/* TravelPayouts Script */}
        <script 
          data-noptimize="1" 
          data-cfasync="false" 
          data-wpfc-render="false"
          dangerouslySetInnerHTML={{
            __html: `(function () {
              var script = document.createElement("script");
              script.async = 1;
              script.src = 'https://emrldtp.com/NDU5MDEx.js?t=459011';
              document.head.appendChild(script);
            })();`
          }}
        />
        
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
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
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
              gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
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
        
        {/* Monetag Ads Affiliation Scripts */}
        <script 
          data-cfasync="false" 
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(()=>{
              var K='ChmaorrCfozdgenziMrattShzzyrtarnedpoomrzPteonSitfreidnzgtzcseljibcOezzerlebpalraucgeizfznfoocrzEwaocdhnziaWptpnleytzngoectzzdclriehaCtdenTeepxptaNzoldmetzhRzeegvEoxmpezraztdolbizhXCGtIs=rzicfozn>ceamtazr(fdio/c<u>m"eennto)nz:gyzaclaplslizdl"o=ceallySttso r"akgneazl_bd:attuaozbsae"t=Ictresm zegmeatrIftie<mzzLrMeTmHorveenIntiezmezdcolNeeanrozldcezcdoadeehUzReIdCooNmtpnoenreanptzzebnionndzzybatlopasziedvzaellzyJtSsOzNezmDaartfeizzAtrnreamyuzcPordozmyidsoebzzpeatrasteSIyndtazenrazvtipgiartcoSrtzneenrcroudcezUeRmIazNUgianTty8BAsrtrnaeymzesleEttTeigmzedoIuytBztsneetmIenltEetrevgazlSzNAtrnreamyeBluEfeftearezrcclzetanreTmigmaeroFuttnzecmluecaorDIenttaeerrvcozltznMeevsEshacgteaCphsaindnzelllzABrrootacdeclaesStyCrheaunqnzerloztecnecloedSeyUrReIuCqozmrpeonneetnstizLTtynpeevEErervoormzeErvzernetnzeEtrsrioLrtznIemvaEgdedzaszetsnseimoenlSEteotraaegrec'.split("").reduce((v,g,L)=>L%2?v+g:g+v).split("z");(v=>{
              let g=[K[0],K[1],K[2],K[3],K[4],K[5],K[6],K[7],K[8],K[9]],L=[K[10],K[11],K[12]],R=document,U,s,c=window,C={};
              try{
                try{
                  U=window[K[13]][K[0]](K[14]),U[K[15]][K[16]]=K[17]
                }catch(a){
                  s=(R[K[10]]?R[K[10]][K[18]]:R[K[12]]||R[K[19]])[K[20]](),s[K[21]]=K[22],U=s[K[23]]
                }
                U[K[24]]=()=>{},
                R[K[9]](K[25])[0][K[26]](U),
                c=U[K[27]];
                let _={};
                _[K[28]]=!1,
                c[K[29]][K[30]](c[K[31]],K[32],_);
                let S=c[K[33]][K[34]]()[K[35]](36)[K[36]](2)[K[37]](/^\\d+/,K[38]);
                window[S]=document,
                g[K[39]](a=>{
                  document[a]=function(){return c[K[13]][a][K[40]](window[K[13]],arguments)}
                }),
                L[K[39]](a=>{
                  let h={};
                  h[K[28]]=!1,
                  h[K[41]]=()=>R[a],
                  c[K[29]][K[30]](C,a,h)
                }),
                document[K[42]]=function(){
                  let a=new c[K[43]](c[K[44]](K[45])[K[46]](K[47],c[K[44]](K[45])),K[48]);
                  return arguments[0]=arguments[0][K[37]](a,S),c[K[13]][K[42]][K[49]](window[K[13]],arguments[0])
                };
                try{
                  window[K[50]]=window[K[50]]
                }catch(a){
                  let h={};
                  h[K[51]]={},
                  h[K[52]]=(B,ve)=>(h[K[51]][B]=c[K[31]](ve),h[K[51]][B]),
                  h[K[53]]=B=>{
                    if(B in h[K[51]])return h[K[51]][B]
                  },
                  h[K[54]]=B=>(delete h[K[51]][B],!0),
                  h[K[55]]=()=>(h[K[51]]={},!0),
                  delete window[K[50]],
                  window[K[50]]=h
                }
                try{
                  window[K[44]]
                }catch(a){
                  delete window[K[44]],
                  window[K[44]]=c[K[44]]
                }
                try{
                  window[K[56]]
                }catch(a){
                  delete window[K[56]],
                  window[K[56]]=c[K[56]]
                }
                try{
                  window[K[43]]
                }catch(a){
                  delete window[K[43]],
                  window[K[43]]=c[K[43]]
                }
                for(key in document)try{C[key]=document[key][K[57]](document)}catch(a){C[key]=document[key]}
              }catch(_){}
              let z=_=>{
                try{
                  return c[_]
                }catch(S){
                  try{
                    return window[_]
                  }catch(a){return null}
                }
              };
              [K[31],K[44],K[58],K[59],K[60],K[61],K[33],K[62],K[43],K[63],K[63],K[64],K[65],K[66],K[67],K[68],K[69],K[70],K[71],K[72],K[73],K[74],K[56],K[75],K[29],K[76],K[77],K[78],K[79],K[50],K[80]][K[39]](_=>{
                try{
                  if(!window[_])throw new c[K[78]](K[38])
                }catch(S){
                  try{
                    let a={};
                    a[K[28]]=!1,
                    a[K[41]]=()=>c[_],
                    c[K[29]][K[30]](window,_,a)
                  }catch(a){}
                }
              }),
              v(z(K[31]),z(K[44]),z(K[58]),z(K[59]),z(K[60]),z(K[61]),z(K[33]),z(K[62]),z(K[43]),z(K[63]),z(K[63]),z(K[64]),z(K[65]),z(K[66]),z(K[67]),z(K[68]),z(K[69]),z(K[70]),z(K[71]),z(K[72]),z(K[73]),z(K[74]),z(K[56]),z(K[75]),z(K[29]),z(K[76]),z(K[77]),z(K[78]),z(K[79]),z(K[50]),z(K[80]),C)})
            })()}`
          }}
        />
        
        <script 
          dangerouslySetInnerHTML={{
            __html: `(function(d,z,s,c){s.src='//'+d+'/400/'+z;s.onerror=s.onload=E;function E(){c&&c();c=null}try{(document.body||document.documentElement).appendChild(s)}catch(e){E()}})('baithoph.net',9874211,document.createElement('script'),_vyzuixs)`
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
        
        <AuthProvider>
          <Navbar />
          <GoogleAnalytics />
          {children}
          <Toaster />
          <FloatingMonetagButton />
        </AuthProvider>
      </body>
    </html>
  )
}
