import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET - Fetch featured blog posts for public display
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '3')

    const posts = await prisma.blogPost.findMany({
      where: {
        published: true,
        status: 'PUBLISHED',
        featured: true
      },
      include: {
        tags: true,
      },
      orderBy: {
        publishedAt: 'desc'
      },
      take: limit,
    })

    // If no featured posts, get the latest published posts
    if (posts.length === 0) {
      const latestPosts = await prisma.blogPost.findMany({
        where: {
          published: true,
          status: 'PUBLISHED'
        },
        include: {
          tags: true,
        },
        orderBy: {
          publishedAt: 'desc'
        },
        take: limit,
      })
      
      return NextResponse.json(latestPosts)
    }

    // If we have some featured posts but less than the limit, fill with recent posts
    if (posts.length < limit) {
      const additionalPosts = await prisma.blogPost.findMany({
        where: {
          published: true,
          status: 'PUBLISHED',
          featured: false,
          id: {
            notIn: posts.map(p => p.id)
          }
        },
        include: {
          tags: true,
        },
        orderBy: {
          publishedAt: 'desc'
        },
        take: limit - posts.length,
      })
      
      return NextResponse.json([...posts, ...additionalPosts])
    }

    return NextResponse.json(posts)
  } catch (error) {
    console.error('Error fetching featured blog posts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch featured blog posts' },
      { status: 500 }
    )
  }
}