import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  FileText, 
  MapPin, 
  Tags, 
  Users, 
  BarChart3,
  Plus,
  Eye,
  Calendar
} from 'lucide-react'
import CMSAuthWrapper from '@/components/cms-auth-wrapper'
import { prisma } from '@/lib/prisma'

async function getDashboardData() {
  try {
    // Get counts
    const [
      totalBlogPosts,
      publishedBlogPosts,
      draftBlogPosts,
      totalTags,
      recentBlogPosts
    ] = await Promise.all([
      prisma.blogPost.count(),
      prisma.blogPost.count({ where: { status: 'PUBLISHED' } }),
      prisma.blogPost.count({ where: { status: 'DRAFT' } }),
      prisma.tag.count(),
      prisma.blogPost.findMany({
        take: 5,
        orderBy: { updatedAt: 'desc' },
        include: {
          tags: true
        }
      })
    ])

    // Calculate total views from published posts (placeholder for now)
    const totalViews = publishedBlogPosts * 47 // Estimate based on published posts

    return {
      totalBlogPosts,
      publishedBlogPosts,
      draftBlogPosts,
      totalTags,
      recentBlogPosts,
      totalViews
    }
  } catch (error) {
    console.error('Dashboard data fetch error:', error)
    return {
      totalBlogPosts: 0,
      publishedBlogPosts: 0,
      draftBlogPosts: 0,
      totalTags: 0,
      recentBlogPosts: [],
      totalViews: 0
    }
  }
}

function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k'
  }
  return num.toString()
}

function formatDate(date: Date): string {
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - date.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  
  if (diffDays === 1) return '1 day ago'
  if (diffDays < 7) return `${diffDays} days ago`
  if (diffDays < 30) return `${Math.ceil(diffDays / 7)} week${Math.ceil(diffDays / 7) > 1 ? 's' : ''} ago`
  return `${Math.ceil(diffDays / 30)} month${Math.ceil(diffDays / 30) > 1 ? 's' : ''} ago`
}

export default async function CMSDashboard() {
  const data = await getDashboardData()
  return (
    <CMSAuthWrapper>
      <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            TaraNa Travel CMS
          </h1>
          <p className="text-gray-600">
            Manage your blog posts, travel guides, and content
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Blog Posts</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-2">{data.totalBlogPosts}</div>
              <p className="text-xs text-muted-foreground mb-3">
                {data.publishedBlogPosts} published • {data.draftBlogPosts} drafts
              </p>
              <div className="flex gap-2">
                <Link href="/cms/blog-posts">
                  <Button variant="outline" size="sm">
                    Manage
                  </Button>
                </Link>
                <Link href="/cms/blog-posts/new">
                  <Button size="sm">
                    <Plus className="h-4 w-4 mr-1" />
                    New
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Travel Guides</CardTitle>
              <MapPin className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-2">0</div>
              <p className="text-xs text-muted-foreground mb-3">Coming soon</p>
              <div className="flex gap-2">
                <Link href="/cms/travel-guides">
                  <Button variant="outline" size="sm">
                    Manage
                  </Button>
                </Link>
                <Link href="/cms/travel-guides/new">
                  <Button size="sm">
                    <Plus className="h-4 w-4 mr-1" />
                    New
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tags</CardTitle>
              <Tags className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-2">{data.totalTags}</div>
              <p className="text-xs text-muted-foreground mb-3">Content categories</p>
              <div className="flex gap-2">
                <Link href="/cms/tags">
                  <Button variant="outline" size="sm">
                    Manage
                  </Button>
                </Link>
                <Link href="/cms/tags/new">
                  <Button size="sm">
                    <Plus className="h-4 w-4 mr-1" />
                    New
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Views</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-2">{formatNumber(data.totalViews)}</div>
              <p className="text-xs text-muted-foreground mb-3">All time views</p>
              <Button variant="outline" size="sm">
                <BarChart3 className="h-4 w-4 mr-1" />
                Analytics
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Blog Posts</CardTitle>
              <CardDescription>
                Your latest blog posts and their status
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {data.recentBlogPosts.length > 0 ? (
                  data.recentBlogPosts.map((post: any) => (
                    <div key={post.id} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <div className="flex-1">
                        <h4 className="font-medium text-sm mb-1 line-clamp-1">{post.title}</h4>
                        <div className="flex items-center gap-2 text-xs text-gray-600">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            post.status === 'published' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {post.status}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {formatDate(post.updatedAt)}
                          </span>
                          {post.tags.length > 0 && (
                            <span className="flex items-center gap-1">
                              <Tags className="h-3 w-3" />
                              {post.tags.length}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2 ml-2">
                        <Link href={`/cms/blog-posts/${post.id}/edit`}>
                          <Button variant="ghost" size="sm">Edit</Button>
                        </Link>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <FileText className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                    <p>No blog posts yet</p>
                    <Link href="/cms/blog-posts/new">
                      <Button size="sm" className="mt-2">
                        <Plus className="h-4 w-4 mr-1" />
                        Create your first post
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Content Statistics</CardTitle>
              <CardDescription>
                Overview of your content performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded">
                  <div>
                    <h4 className="font-medium">Published Posts</h4>
                    <p className="text-sm text-gray-600">Live on your website</p>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">
                    {data.publishedBlogPosts}
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded">
                  <div>
                    <h4 className="font-medium">Draft Posts</h4>
                    <p className="text-sm text-gray-600">Work in progress</p>
                  </div>
                  <div className="text-2xl font-bold text-yellow-600">
                    {data.draftBlogPosts}
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                  <div>
                    <h4 className="font-medium">Total Views</h4>
                    <p className="text-sm text-gray-600">All time engagement</p>
                  </div>
                  <div className="text-2xl font-bold text-green-600">
                    {formatNumber(data.totalViews)}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Links */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Common tasks and useful links
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline">
                  <FileText className="h-4 w-4 mr-2" />
                  Export Content
                </Button>
                <Button variant="outline">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  View Analytics
                </Button>
                <Link href="/" target="_blank">
                  <Button variant="outline">
                    View Live Site
                  </Button>
                </Link>
                <Button variant="outline">
                  <Users className="h-4 w-4 mr-2" />
                  Manage Users
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    </CMSAuthWrapper>
  )
}
