'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ArrowLeft, Clock, Calendar, User, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Footer } from '@/components/footer'

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt?: string
  featuredImage?: string
  author?: string
  publishedAt?: string
  featured: boolean
  tags: Array<{ id: string; name: string }>
}

interface FormattedPost {
  title: string
  excerpt: string
  image: string
  author: string
  date: string
  readTime: string
  category: string
  slug: string
}

export default function BlogPage() {
  const [blogData, setBlogData] = useState<{
    posts: BlogPost[]
    pagination: { page: number; pages: number; total: number; limit: number }
  }>({
    posts: [],
    pagination: { page: 1, pages: 1, total: 0, limit: 6 }
  })
  const [currentPage, setCurrentPage] = useState(1)
  const [sortBy, setSortBy] = useState('newest')
  const [loading, setLoading] = useState(true)

  const fetchPosts = async () => {
    setLoading(true)
    try {
      const response = await fetch(`/api/blog/posts?page=${currentPage}&limit=6&sortBy=${sortBy}`, {
        cache: 'no-store'
      })
      
      if (response.ok) {
        const data = await response.json()
        setBlogData(data)
      }
    } catch (error) {
      console.error('Error fetching blog posts:', error)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchPosts()
  }, [currentPage, sortBy])

  const formatPost = (post: BlogPost): FormattedPost => ({
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
  })

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSortChange = (newSort: string) => {
    setSortBy(newSort)
    setCurrentPage(1)
  }

  const featuredPost = blogData.posts.find(post => post.featured)
  const regularPosts = blogData.posts.filter(post => !post.featured)
  const formattedFeaturedPost = featuredPost ? formatPost(featuredPost) : null
  const formattedRegularPosts = regularPosts.map(formatPost)

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-gray-200 rounded w-32"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-80 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

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

          {/* Featured Post - Only show if we have one */}
          {formattedFeaturedPost && (
            <Card className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 relative h-64 md:h-auto">
                  <Image
                    src={formattedFeaturedPost.image}
                    alt={formattedFeaturedPost.title}
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
                    <span className="text-blue-600 text-sm font-medium">{formattedFeaturedPost.category}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{formattedFeaturedPost.title}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{formattedFeaturedPost.excerpt}</p>
                  <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {formattedFeaturedPost.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {formattedFeaturedPost.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {formattedFeaturedPost.readTime}
                    </div>
                  </div>
                  <Link href={`/blog/${formattedFeaturedPost.slug}`}>
                    <Button className="group">
                      Read Full Story
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          )}

          {/* Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-4">
              <span className="text-gray-700 font-medium">Sort by:</span>
              <Select value={sortBy} onValueChange={handleSortChange}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="title">Title (A-Z)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="text-sm text-gray-600">
              Showing {((currentPage - 1) * blogData.pagination.limit) + 1}-{Math.min(currentPage * blogData.pagination.limit, blogData.pagination.total)} of {blogData.pagination.total} posts
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {formattedRegularPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="ghost" size="sm" className="group/btn">
                        Read More
                        <ArrowRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No posts message */}
          {formattedRegularPosts.length === 0 && !formattedFeaturedPost && (
            <Card className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-2">No posts found</h3>
              <p className="text-gray-600">Check back later for new travel stories and guides!</p>
            </Card>
          )}

          {/* Pagination */}
          {blogData.pagination.pages > 1 && (
            <div className="flex items-center justify-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous
              </Button>
              
              <div className="flex items-center gap-1">
                {Array.from({ length: blogData.pagination.pages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={page === currentPage ? "default" : "outline"}
                    size="sm"
                    onClick={() => handlePageChange(page)}
                    className="w-10"
                  >
                    {page}
                  </Button>
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === blogData.pagination.pages}
              >
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}
