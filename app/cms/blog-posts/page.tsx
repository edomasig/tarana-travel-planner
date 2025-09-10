'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useToast } from '@/hooks/use-toast'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { 
  Plus, 
  Edit, 
  Trash2, 
  Eye,
  Calendar,
  Search,
  FileText,
  Facebook
} from 'lucide-react'
import { Input } from '@/components/ui/input'

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt?: string
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'
  published: boolean
  featured: boolean
  publishedAt?: string
  createdAt: string
  updatedAt: string
  tags: Array<{ id: string; name: string; color?: string }>
  facebookPostId?: string
  facebookPostUrl?: string
}

export default function BlogPostsPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [postToDelete, setPostToDelete] = useState<string | null>(null)
  const { toast } = useToast()

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/cms/blog-posts')
      const data = await response.json()
      setPosts(data.posts || [])
    } catch (error) {
      console.error('Error fetching posts:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    setPostToDelete(id)
    setDeleteDialogOpen(true)
  }

  const confirmDelete = async () => {
    if (!postToDelete) return

    try {
      const response = await fetch(`/api/cms/blog-posts/${postToDelete}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Blog post deleted successfully",
        })
        fetchPosts() // Refresh list
      } else {
        toast({
          title: "Error",
          description: "Failed to delete blog post",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error('Error deleting post:', error)
      toast({
        title: "Error",
        description: "Network error while deleting post",
        variant: "destructive",
      })
    } finally {
      setDeleteDialogOpen(false)
      setPostToDelete(null)
    }
  }

  const handleFacebookAction = async (postId: string, action: 'publish' | 'repost' | 'delete') => {
    try {
      const response = await fetch('/api/cms/webhook/facebook-new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          postId,
          action
        })
      })

      const result = await response.json()
      
      if (result.success) {
        toast({
          title: "Success!",
          description: `${action.toUpperCase()} completed successfully! ${result.message}`,
        })
        fetchPosts() // Refresh the list to show updated status
      } else {
        toast({
          title: "Error",
          description: `${action.toUpperCase()} failed: ${result.error || 'Unknown error'}`,
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Network Error",
        description: `Network error: ${error}`,
        variant: "destructive",
      })
    }
  }

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || post.status.toLowerCase() === statusFilter.toLowerCase()
    return matchesSearch && matchesStatus
  })

  const getStatusBadge = (status: string, published: boolean) => {
    if (status === 'PUBLISHED' && published) {
      return <Badge className="bg-green-100 text-green-800">Published</Badge>
    } else if (status === 'DRAFT') {
      return <Badge variant="secondary">Draft</Badge>
    } else if (status === 'ARCHIVED') {
      return <Badge variant="outline">Archived</Badge>
    }
    return <Badge variant="secondary">Draft</Badge>
  }

  if (loading) {
    return (
      <div className="p-6">
        <div className="animate-pulse space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-24 bg-gray-200 rounded" />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Blog Posts</h1>
          <p className="text-gray-600">Manage your blog content</p>
        </div>
        <Link href="/cms/blog-posts/new">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Blog Post
          </Button>
        </Link>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md bg-white"
        >
          <option value="all">All Status</option>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
          <option value="archived">Archived</option>
        </select>
      </div>

      {/* Posts List */}
      <div className="space-y-4">
        {filteredPosts.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No blog posts found
              </h3>
              <p className="text-gray-600 mb-4">
                {searchTerm || statusFilter !== 'all' 
                  ? 'Try adjusting your search or filters'
                  : 'Get started by creating your first blog post'
                }
              </p>
              {!searchTerm && statusFilter === 'all' && (
                <Link href="/cms/blog-posts/new">
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Create Blog Post
                  </Button>
                </Link>
              )}
            </CardContent>
          </Card>
        ) : (
          filteredPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {post.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        {post.featured && (
                          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                            ⭐ Featured
                          </Badge>
                        )}
                        {getStatusBadge(post.status, post.published)}
                        {post.facebookPostId && (
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                            <Facebook className="h-3 w-3 mr-1" />
                            Facebook
                          </Badge>
                        )}
                        {/* Debug info - remove in production */}
                        <span className="text-xs text-gray-400 ml-2">
                          FB ID: {post.facebookPostId ? `✓ ${post.facebookPostId.slice(0, 10)}...` : '✗ None'}
                        </span>
                      </div>
                    </div>
                    
                    {post.excerpt && (
                      <p className="text-gray-600 mb-3 line-clamp-2">
                        {post.excerpt}
                      </p>
                    )}
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.createdAt).toLocaleDateString()}
                      </div>
                      {post.publishedAt && (
                        <div>
                          Published: {new Date(post.publishedAt).toLocaleDateString()}
                        </div>
                      )}
                    </div>
                    
                    {post.tags.length > 0 && (
                      <div className="flex gap-2 mt-3">
                        {post.tags.map((tag) => (
                          <Badge key={tag.id} variant="outline" className="text-xs">
                            {tag.name}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex gap-2 ml-4">
                    {/* Facebook Actions */}
                    <div className="flex gap-1 mr-2 border-l pl-2">
                      {!post.facebookPostId ? (
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => {
                            console.log('Publishing post to Facebook:', post.id, post.title)
                            handleFacebookAction(post.id, 'publish')
                          }}
                          className="text-blue-600 hover:text-blue-800 border-blue-200 bg-blue-50"
                        >
                          <Facebook className="h-4 w-4 mr-1" />
                          Post to FB
                        </Button>
                      ) : (
                        <div className="flex gap-1">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => {
                              console.log('Reposting to Facebook:', post.id, post.facebookPostId)
                              handleFacebookAction(post.id, 'repost')
                            }}
                            className="text-orange-600 hover:text-orange-800 border-orange-200 bg-orange-50"
                            title="Create new Facebook post with updated content"
                          >
                            <Facebook className="h-4 w-4 mr-1" />
                            Repost
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => {
                              console.log('Deleting Facebook post:', post.id, post.facebookPostId)
                              handleFacebookAction(post.id, 'delete')
                            }}
                            className="text-red-600 hover:text-red-800 border-red-200 bg-red-50"
                            title="Delete Facebook post"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
                    </div>
                    
                    {/* Regular Actions */}
                    <Link href={`/blog/${post.slug}`} target="_blank">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href={`/cms/blog-posts/${post.id}/edit`}>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleDelete(post.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the blog post
              and remove all associated data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => {
              setDeleteDialogOpen(false)
              setPostToDelete(null)
            }}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction 
              onClick={confirmDelete}
              className="bg-red-600 hover:bg-red-700"
            >
              Delete Post
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
