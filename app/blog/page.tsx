import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Clock, Calendar, User, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Footer } from '@/components/footer'
import { prisma } from '@/lib/prisma'

async function getBlogPosts() {
  try {
    const posts = await prisma.blogPost.findMany({
      where: {
        published: true
      },
      include: {
        tags: true
      },
      orderBy: [
        { featured: 'desc' },  // Featured posts first
        { publishedAt: 'desc' } // Then by publish date
      ]
    })
    return posts
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

export default async function BlogPage() {
  const blogPosts = await getBlogPosts()
  
  // Find the featured post specifically
  const featuredPostData = blogPosts.find((post: any) => post.featured) || blogPosts[0]
  
  // If we have a featured post from database, use it
  const featuredPost = featuredPostData ? {
    title: featuredPostData.title,
    excerpt: featuredPostData.excerpt || '',
    image: featuredPostData.featuredImage || "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: featuredPostData.author || "GalaGPT Team",
    date: featuredPostData.publishedAt ? new Date(featuredPostData.publishedAt).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }) : new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }),
    readTime: "5 min read",
    category: featuredPostData.tags.length > 0 ? featuredPostData.tags[0].name : "Travel",
    slug: featuredPostData.slug
  } : {
    title: "Hidden Gems of Northern Philippines: Beyond Baguio and Sagada",
    excerpt: "Discover lesser-known destinations in Luzon that offer incredible experiences without the crowds. From pristine beaches to mountain adventures, Northern Philippines has secrets waiting to be explored.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Maria Santos",
    date: "January 15, 2025",
    readTime: "8 min read",
    category: "Travel Guides",
    slug: "hidden-gems-northern-philippines"
  }

  // Convert remaining database posts to the format expected by the UI, excluding the featured post
  const regularPosts = blogPosts.length > 0 ? blogPosts
    .filter((post: any) => !post.featured || !featuredPostData?.featured) // Exclude featured post, or include all if no featured post
    .slice(0, featuredPostData?.featured ? undefined : 1) // If no featured post was found, skip the first regular post
    .map((post: any) => ({
      title: post.title,
      excerpt: post.excerpt || '',
      image: post.featuredImage || "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: post.author || "GalaGPT Team",
      date: post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }) : new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      readTime: "5 min read",
      category: post.tags.length > 0 ? post.tags[0].name : "Travel",
      slug: post.slug
    })) : [
    {
      title: "Best Filipino Street Food: A Culinary Adventure Guide",
      excerpt: "Explore the vibrant world of Filipino street food, from savory BBQ to sweet delicacies. Learn where to find the best treats and how to eat safely.",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Chef Miguel Reyes",
      date: "January 12, 2025",
      readTime: "6 min read",
      category: "Food & Culture",
      slug: "filipino-street-food-guide"
    },
    {
      title: "Cebu–Bohol Ultimate Itinerary (5–7 Days)",
      excerpt: "Day-by-day plan with ferry timings, island hopping to Balicasag, Chocolate Hills loop, food stops, and budgets.",
      image: "/iloilo.jpg",
      author: "GalaGPT Team",
      date: "September 6, 2025",
      readTime: "15 min read",
      category: "Travel Guides",
      slug: "cebu-bohol-ultimate-itinerary"
    },
    {
      title: "Ultimate Filipino Food Guide: Regional Dishes, Where to Eat, and Budgets",
      excerpt: "From Luzon to Mindanao, discover signature dishes, market hotspots, and sample foodie itineraries—plus smart budget tips.",
      image: "/food-ad.png",
      author: "GalaGPT Team",
      date: "September 6, 2025",
      readTime: "16 min read",
      category: "Food & Culture",
      slug: "ultimate-filipino-food-guide"
    },
    {
      title: "Siargao Essentials: Surf, Lagoons, and Island Hopping (4–6 Days)",
      excerpt: "Smart 4–6 day plan with 3-island hopping, Sugba Lagoon, Sohoton Cove day trip, surf seasons, and safety.",
      image: "/sagada.jpg",
      author: "GalaGPT Team",
      date: "September 6, 2025",
      readTime: "14 min read",
      category: "Adventure",
      slug: "siargao-essentials-complete-guide"
    },
    {
      title: "Philippines Travel Seasons: A Regional, Month‑by‑Month Planner",
      excerpt: "Pick the right islands for your dates. Luzon, Visayas, Mindanao timing with monthly weather and activity picks.",
      image: "/manila.jpg",
      author: "GalaGPT Team",
      date: "September 6, 2025",
      readTime: "14 min read",
      category: "Travel Guides",
      slug: "philippines-travel-seasons"
    },
    {
      title: "Island Hopping in Siargao: Surfer's Paradise and More",
      excerpt: "Beyond world-class surfing, Siargao offers incredible island hopping experiences. Discover lagoons, beaches, and marine sanctuaries.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Jake Morrison",
      date: "January 10, 2025",
      readTime: "7 min read",
      category: "Adventure",
      slug: "siargao-island-hopping"
    },
    {
      title: "Philippines Budget Travel Guide: Under ₱2,000/Day",
      excerpt: "Concrete daily budgets, food and transport costs, and free activities—across Manila, El Nido, Cebu, and Baguio.",
      image: "/manila.jpg",
      author: "GalaGPT Team",
      date: "September 4, 2025",
      readTime: "15 min read",
      category: "Budget Travel",
      slug: "philippines-budget-travel-guide"
    },
    {
      title: "Island Hopping Strategies: Routes, Costs, and Safety",
      excerpt: "Choose smarter routes across Palawan, Cebu–Bohol, and Siargao. Boat types, pricing, weather windows, and sample 5–7 day plans.",
      image: "/tour-ad.png",
      author: "GalaGPT Team",
      date: "September 6, 2025",
      readTime: "15 min read",
      category: "Adventure",
      slug: "island-hopping-strategies-philippines"
    },
    {
      title: "Cultural Experiences in the Philippines: Festivals, History, and Local Life",
      excerpt: "Plan around iconic festivals, visit heritage towns, and connect with local life—respectfully and on budget.",
      image: "/Baguio_Session_Road_(Baguio_City;_12-04-2022).jpg",
      author: "GalaGPT Team",
      date: "September 6, 2025",
      readTime: "16 min read",
      category: "Culture",
      slug: "cultural-experiences-philippines"
    },
    {
      title: "Philippine Festivals 2025: When and Where to Experience Culture",
      excerpt: "A comprehensive calendar of the Philippines' most vibrant festivals. Plan your trip around these colorful celebrations.",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Carlos Mendoza",
      date: "January 5, 2025",
      readTime: "12 min read",
      category: "Culture",
      slug: "philippine-festivals-2025"
    },
    {
      title: "Sustainable Tourism in the Philippines: Travel Responsibly",
      excerpt: "Learn how to minimize your environmental impact while exploring Philippine destinations. Support local communities and protect natural wonders.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Dr. Ana Reyes",
      date: "January 3, 2025",
      readTime: "9 min read",
      category: "Sustainable Travel",
      slug: "sustainable-tourism-philippines"
    },
    {
      title: "Photography Guide: Capturing the Beauty of Philippine Landscapes",
      excerpt: "Tips and techniques for photographing the Philippines' stunning landscapes, from golden sunrises to dramatic seascapes.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Mark Thompson",
      date: "December 30, 2024",
      readTime: "11 min read",
      category: "Photography",
      slug: "photography-guide-philippines"
    }
  ]

  const categories = ["All", "Travel Guides", "Food & Culture", "Adventure", "Budget Travel", "Culture", "Sustainable Travel", "Photography"]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto max-w-6xl px-4">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="space-y-8">
          {/* Header */}
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-4xl">Travel Blog</CardTitle>
              <p className="text-xl text-gray-600 mt-4">
                Stories, tips, and insights from fellow travelers exploring the Philippines
              </p>
            </CardHeader>
          </Card>

          {/* Featured Post */}
          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 relative h-64 md:h-auto">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <div className="mb-3">
                  <span className="text-blue-600 text-sm font-medium">{featuredPost.category}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{featuredPost.title}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <Link 
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Read Full Article
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Card>

          {/* Category Filter */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="px-4 py-2 rounded-full border border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-colors text-sm"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Posts */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Recent Articles</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post: any, index: number) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-white text-gray-800 px-2 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold mb-2 line-clamp-2">{post.title}</h4>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
                      >
                        Read More →
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Adventure?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Get inspired by our travel stories and let our AI planner create your perfect Philippine itinerary 
                based on your interests and budget.
              </p>
              <Link 
                href="/chat"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Plan My Trip
                <ArrowRight className="h-5 w-5" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  )
}
