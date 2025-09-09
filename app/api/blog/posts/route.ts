import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '6')
    const sortBy = searchParams.get('sortBy') || 'newest'
    const category = searchParams.get('category')
    const skip = (page - 1) * limit

    // Determine sort order
    const orderBy = (() => {
      switch (sortBy) {
        case 'oldest':
          return [{ featured: 'desc' as const }, { publishedAt: 'asc' as const }]
        case 'title':
          return [{ featured: 'desc' as const }, { title: 'asc' as const }]
        case 'newest':
        default:
          return [{ featured: 'desc' as const }, { publishedAt: 'desc' as const }]
      }
    })()

    // Build where clause
    const where: any = {
      published: true,
      status: 'PUBLISHED'
    }

    // Add category filter if specified
    if (category && category !== 'all') {
      where.tags = {
        some: {
          name: {
            equals: category,
            mode: 'insensitive'
          }
        }
      }
    }

    // Get posts and total count
    const [posts, total] = await Promise.all([
      prisma.blogPost.findMany({
        where,
        include: {
          tags: true,
        },
        orderBy,
        skip,
        take: limit,
      }),
      prisma.blogPost.count({ where })
    ])

    return NextResponse.json({
      posts,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    })
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    )
  }
}
