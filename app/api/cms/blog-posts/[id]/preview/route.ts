import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { prisma } from '@/lib/prisma'

// GET - Fetch blog post for preview (including drafts)
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Check authentication - only authenticated CMS users can preview
    const session = await getServerSession()
    if (!session || !session.user) {
      return NextResponse.json(
        { error: 'Unauthorized - CMS access required' },
        { status: 401 }
      )
    }

    const { id } = await params
    const post = await prisma.blogPost.findUnique({
      where: { id },
      include: {
        tags: true
      }
    })

    if (!post) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      )
    }

    // Return post data regardless of published status for preview
    return NextResponse.json({
      ...post,
      isPreview: true
    })
  } catch (error) {
    console.error('Error fetching blog post preview:', error)
    return NextResponse.json(
      { error: 'Failed to fetch blog post preview' },
      { status: 500 }
    )
  }
}