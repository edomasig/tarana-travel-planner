import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://galagpt.ph' // Philippines domain for better local SEO
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/plan`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/saved`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // You can add dynamic pages here
  // For example, destination pages, blog posts, etc.
  const destinationPages = [
    'palawan',
    'boracay', 
    'baguio',
    'cebu',
    'siargao',
    'manila',
    'ilocos',
    'batanes',
    'siquijor',
    'camiguin'
  ].map(destination => ({
    url: `${baseUrl}/destinations/${destination}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...destinationPages]
}
