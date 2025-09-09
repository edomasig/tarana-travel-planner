'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Label } from '@/components/ui/label'
import { ImageUpload } from '@/components/ui/image-upload'
import { SimpleRichTextEditor } from '@/components/ui/simple-rich-text-editor'
import { ArrowLeft, Save, Eye, Facebook } from 'lucide-react'
import Link from 'next/link'

interface BlogPost {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string
  featuredImage: string
  metaTitle: string
  metaDescription: string
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'
  published: boolean
  featured: boolean
  author: string
  createdAt: string
  updatedAt: string
  tags: { id: string; name: string; color?: string }[]
  facebookPostId?: string
  facebookPostUrl?: string
}

interface BlogPostForm {
  title: string
  slug: string
  content: string
  excerpt: string
  featuredImage: string
  metaTitle: string
  metaDescription: string
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'
  published: boolean
  featured: boolean
  author: string
  tagIds: string[]
}

interface Tag {
  id: string
  name: string
  color?: string
}

export default function EditBlogPostPage() {
  const router = useRouter()
  const params = useParams()
  const [form, setForm] = useState<BlogPostForm>({
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    featuredImage: '',
    metaTitle: '',
    metaDescription: '',
    status: 'DRAFT',
    published: false,
    featured: false,
    author: 'GalaGPT Team',
    tagIds: []
  })
  const [tags, setTags] = useState<Tag[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [facebookPosting, setFacebookPosting] = useState(false)
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null)

  useEffect(() => {
    if (params.id) {
      fetchBlogPost()
      fetchTags()
    }
  }, [params.id])

  const fetchBlogPost = async () => {
    try {
      const response = await fetch(`/api/cms/blog-posts/${params.id}`)
      if (response.ok) {
        const data = await response.json()
        setBlogPost(data)
        setForm({
          title: data.title,
          slug: data.slug,
          content: data.content,
          excerpt: data.excerpt || '',
          featuredImage: data.featuredImage || '',
          metaTitle: data.metaTitle || '',
          metaDescription: data.metaDescription || '',
          status: data.status,
          published: data.published,
          featured: data.featured || false,
          author: data.author || 'GalaGPT Team',
          tagIds: data.tags?.map((tag: any) => tag.id) || []
        })
      } else {
        console.error('Error fetching blog post')
        router.push('/cms/blog-posts')
      }
    } catch (error) {
      console.error('Error fetching blog post:', error)
      router.push('/cms/blog-posts')
    } finally {
      setLoading(false)
    }
  }

  const fetchTags = async () => {
    try {
      const response = await fetch('/api/cms/tags')
      const data = await response.json()
      setTags(data || [])
    } catch (error) {
      console.error('Error fetching tags:', error)
    }
  }

  const handleSubmit = async (status: 'DRAFT' | 'PUBLISHED') => {
    setSaving(true)
    try {
      const response = await fetch(`/api/cms/blog-posts/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...form,
          status,
          published: status === 'PUBLISHED'
        })
      })

      if (response.ok) {
        const updatedPost = await response.json()
        setBlogPost(updatedPost)
        setForm(prev => ({
          ...prev,
          status,
          published: status === 'PUBLISHED'
        }))
        alert('Blog post updated successfully!')
      } else {
        console.error('Error updating blog post')
        alert('Error updating blog post')
      }
    } catch (error) {
      console.error('Error updating blog post:', error)
      alert('Error updating blog post')
    } finally {
      setSaving(false)
    }
  }

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
  }

  const handleTitleChange = (title: string) => {
    setForm(prev => ({
      ...prev,
      title,
      metaTitle: prev.metaTitle || title
    }))
  }

  const handleFacebookPost = async () => {
    if (!blogPost) return

    setFacebookPosting(true)
    try {
      const response = await fetch('/api/cms/webhook/facebook-new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          postId: blogPost.id,
          action: 'publish'
        })
      })

      const result = await response.json()
      
      if (result.success) {
        // Update the local blog post state with Facebook post details
        setBlogPost(prev => prev ? {
          ...prev,
          facebookPostId: result.facebookPostId,
          facebookPostUrl: result.facebookPostUrl
        } : null)
        
        alert(`Successfully ${result.action} on Facebook!`)
      } else {
        alert(`Failed to post to Facebook: ${result.error || 'Unknown error'}`)
      }
    } catch (error) {
      console.error('Facebook posting error:', error)
      alert('Failed to post to Facebook. Please try again.')
    } finally {
      setFacebookPosting(false)
    }
  }

  if (loading) {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <div className="flex items-center justify-center h-64">
          <div className="text-lg">Loading...</div>
        </div>
      </div>
    )
  }

  if (!blogPost) {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <div className="flex items-center justify-center h-64">
          <div className="text-lg">Blog post not found</div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Link href="/cms/blog-posts">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Posts
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Edit Blog Post</h1>
            <p className="text-gray-600">Update your travel content</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Facebook Status */}
          {blogPost.facebookPostId && (
            <div className="flex items-center gap-2 text-sm text-green-600">
              <Facebook className="h-4 w-4" />
              <span>Posted to Facebook</span>
              {blogPost.facebookPostUrl && (
                <a
                  href={blogPost.facebookPostUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Post
                </a>
              )}
            </div>
          )}
          
          {/* Facebook Post Button */}
          {blogPost.published && !blogPost.facebookPostId && (
            <Button
              onClick={handleFacebookPost}
              disabled={facebookPosting}
              variant="outline"
              size="sm"
            >
              <Facebook className="h-4 w-4 mr-2" />
              {facebookPosting ? 'Posting...' : 'Publish to Facebook'}
            </Button>
          )}
          
          {/* Draft notice */}
          {!blogPost.published && (
            <div className="text-sm text-gray-500">
              Publish the post first to share on Facebook
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Content</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={form.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="Enter blog post title..."
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="slug">Slug</Label>
                <Input
                  id="slug"
                  value={form.slug}
                  onChange={(e) => setForm(prev => ({ ...prev, slug: e.target.value }))}
                  placeholder="url-friendly-slug"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="excerpt">Excerpt</Label>
                <textarea
                  id="excerpt"
                  value={form.excerpt}
                  onChange={(e) => setForm(prev => ({ ...prev, excerpt: e.target.value }))}
                  placeholder="Brief description of your post..."
                  className="mt-1 w-full p-3 border border-gray-300 rounded-md resize-none"
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="content">Content</Label>
                <div className="mt-1">
                  <SimpleRichTextEditor
                    content={form.content}
                    onChange={(content: string) => setForm(prev => ({ ...prev, content }))}
                    placeholder="Write your blog post content here..."
                    disabled={saving}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>SEO Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="metaTitle">Meta Title</Label>
                <Input
                  id="metaTitle"
                  value={form.metaTitle}
                  onChange={(e) => setForm(prev => ({ ...prev, metaTitle: e.target.value }))}
                  placeholder="SEO title for search engines"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="metaDescription">Meta Description</Label>
                <textarea
                  id="metaDescription"
                  value={form.metaDescription}
                  onChange={(e) => setForm(prev => ({ ...prev, metaDescription: e.target.value }))}
                  placeholder="SEO description for search engines"
                  className="mt-1 w-full p-3 border border-gray-300 rounded-md resize-none"
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="author">Author</Label>
                <Input
                  id="author"
                  value={form.author}
                  onChange={(e) => setForm(prev => ({ ...prev, author: e.target.value }))}
                  placeholder="Author name"
                  className="mt-1"
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="featured"
                  checked={form.featured}
                  onChange={(e) => setForm(prev => ({ ...prev, featured: e.target.checked }))}
                  className="rounded border-gray-300"
                />
                <Label htmlFor="featured" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Featured Blog Post
                </Label>
              </div>
              {form.featured && (
                <div className="text-sm text-amber-600 bg-amber-50 p-2 rounded">
                  ⭐ This post will be displayed as the featured post on the blog homepage. Only one post can be featured at a time.
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Publish</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Button 
                  onClick={() => handleSubmit('DRAFT')}
                  disabled={saving || !form.title}
                  variant="outline"
                  className="flex-1"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Save Draft
                </Button>
                <Button 
                  onClick={() => handleSubmit('PUBLISHED')}
                  disabled={saving || !form.title || !form.content}
                  className="flex-1"
                >
                  {form.published ? 'Update' : 'Publish'}
                </Button>
              </div>
              
              {form.slug && (
                <div>
                  <Label>Preview URL</Label>
                  <div className="text-sm text-gray-600 bg-gray-50 p-2 rounded mt-1">
                    /blog/{form.slug}
                  </div>
                </div>
              )}

              <div className="text-sm text-gray-600">
                <div>Status: <span className="font-medium">{form.status}</span></div>
                <div>Created: {new Date(blogPost.createdAt).toLocaleDateString()}</div>
                <div>Updated: {new Date(blogPost.updatedAt).toLocaleDateString()}</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Featured Image</CardTitle>
            </CardHeader>
            <CardContent>
              <ImageUpload
                value={form.featuredImage}
                onChange={(url) => setForm(prev => ({ ...prev, featuredImage: url }))}
                disabled={saving}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Social Media</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Facebook Status</Label>
                {blogPost.facebookPostId ? (
                  <div className="mt-2">
                    <div className="flex items-center gap-2 text-green-600 mb-2">
                      <Facebook className="h-4 w-4" />
                      <span className="text-sm">Posted to Facebook</span>
                    </div>
                    {blogPost.facebookPostUrl && (
                      <a
                        href={blogPost.facebookPostUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-sm"
                      >
                        View Facebook Post →
                      </a>
                    )}
                  </div>
                ) : (
                  <div className="mt-2">
                    {blogPost.published ? (
                      <Button
                        onClick={handleFacebookPost}
                        disabled={facebookPosting}
                        variant="outline"
                        size="sm"
                        className="w-full"
                      >
                        <Facebook className="h-4 w-4 mr-2" />
                        {facebookPosting ? 'Posting...' : 'Publish to Facebook'}
                      </Button>
                    ) : (
                      <div className="text-sm text-gray-500 bg-gray-50 p-2 rounded">
                        Publish the post first to share on Facebook
                      </div>
                    )}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tags</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {tags.map((tag) => (
                  <label key={tag.id} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={form.tagIds.includes(tag.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setForm(prev => ({
                            ...prev,
                            tagIds: [...prev.tagIds, tag.id]
                          }))
                        } else {
                          setForm(prev => ({
                            ...prev,
                            tagIds: prev.tagIds.filter(id => id !== tag.id)
                          }))
                        }
                      }}
                    />
                    <Badge variant="outline">{tag.name}</Badge>
                  </label>
                ))}
              </div>
              {tags.length === 0 && (
                <p className="text-sm text-gray-600">
                  No tags available. Create tags first.
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
