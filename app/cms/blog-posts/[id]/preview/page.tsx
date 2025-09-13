'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  Edit, 
  Eye,
  AlertTriangle,
  ExternalLink
} from 'lucide-react'

interface BlogPost {
  id: string
  title: string
  slug: string
  content: string
  excerpt?: string
  featuredImage?: string
  author?: string
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'
  published: boolean
  featured: boolean
  publishedAt?: string
  createdAt: string
  updatedAt: string
  tags: Array<{ id: string; name: string }>
  isPreview?: boolean
}

export default function BlogPreviewPage() {
  const params = useParams()
  const { data: session, status } = useSession()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const postId = params?.id as string

  useEffect(() => {
    if (status === 'loading') return
    
    if (!session) {
      setError('Authentication required')
      setLoading(false)
      return
    }

    if (!postId) {
      setError('Post ID is required')
      setLoading(false)
      return
    }

    fetchPost()
  }, [postId, session, status])

  const fetchPost = async () => {
    try {
      const response = await fetch(`/api/cms/blog-posts/${postId}/preview`)
      
      if (!response.ok) {
        if (response.status === 401) {
          setError('Unauthorized access')
        } else if (response.status === 404) {
          setError('Blog post not found')
        } else {
          setError('Failed to load blog post')
        }
        return
      }

      const data = await response.json()
      setPost(data)
    } catch (err) {
      console.error('Error fetching post:', err)
      setError('Network error while loading post')
    } finally {
      setLoading(false)
    }
  }

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading preview...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md mx-4">
          <CardContent className="p-6 text-center">
            <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Preview Error</h2>
            <p className="text-gray-600 mb-4">{error}</p>
            <Link href="/cms/blog-posts">
              <Button>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog Posts
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md mx-4">
          <CardContent className="p-6 text-center">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Post Not Found</h2>
            <p className="text-gray-600 mb-4">The requested blog post could not be found.</p>
            <Link href="/cms/blog-posts">
              <Button>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog Posts
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  const getStatusColor = (status: string, published: boolean) => {
    if (status === 'PUBLISHED' && published) return 'bg-green-100 text-green-800'
    if (status === 'DRAFT') return 'bg-yellow-100 text-yellow-800'
    if (status === 'ARCHIVED') return 'bg-gray-100 text-gray-800'
    return 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Preview Header - Fixed */}
      <div className="sticky top-0 z-50 bg-blue-600 text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/cms/blog-posts">
                <Button variant="ghost" size="sm" className="text-white hover:bg-blue-700">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Posts
                </Button>
              </Link>
              <div className="flex items-center gap-2">
                <Eye className="h-5 w-5" />
                <span className="font-semibold">Preview Mode</span>
                <Badge className={`${getStatusColor(post.status, post.published)} border-0`}>
                  {post.status === 'PUBLISHED' && post.published ? 'Published' : post.status}
                </Badge>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Link href={`/cms/blog-posts/${post.id}/edit`}>
                <Button variant="ghost" size="sm" className="text-white hover:bg-blue-700">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Post
                </Button>
              </Link>
              {post.published && (
                <Link href={`/blog/${post.slug}`} target="_blank">
                  <Button variant="ghost" size="sm" className="text-white hover:bg-blue-700">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Live
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Featured Image */}
        {post.featuredImage && (
          <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={post.featuredImage}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-96 object-cover"
              priority
            />
          </div>
        )}

        {/* Header */}
        <header className="mb-8">
          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <Badge key={tag.id} variant="secondary" className="text-sm">
                  {tag.name}
                </Badge>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            {post.title}
          </h1>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              {post.excerpt}
            </p>
          )}

          {/* Meta Info */}
          <div className="flex items-center gap-6 text-sm text-gray-500 border-b border-gray-200 pb-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>
                {post.publishedAt 
                  ? new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })
                  : new Date(post.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })
                }
              </span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{post.author || 'GalaGPT Travel Team'}</span>
            </div>
            {post.featured && (
              <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                ⭐ Featured
              </Badge>
            )}
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div 
            className="text-gray-800 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex gap-3">
              <Link href="/cms/blog-posts">
                <Button variant="outline">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Posts
                </Button>
              </Link>
              <Link href={`/cms/blog-posts/${post.id}/edit`}>
                <Button>
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Post
                </Button>
              </Link>
            </div>
            <div className="text-sm text-gray-500">
              Last updated: {new Date(post.updatedAt).toLocaleDateString()}
            </div>
          </div>
        </footer>
      </article>
    </div>
  )
}