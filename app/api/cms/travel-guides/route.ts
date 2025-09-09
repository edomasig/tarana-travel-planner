import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET - Fetch all travel guides
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const skip = (page - 1) * limit

    const where = status ? { status: status as any } : {}

    const [guides, total] = await Promise.all([
      prisma.travelGuide.findMany({
        where,
        include: {
          tags: true,
        },
        orderBy: {
          createdAt: 'desc'
        },
        skip,
        take: limit,
      }),
      prisma.travelGuide.count({ where })
    ])

    return NextResponse.json({
      guides,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    })
  } catch (error) {
    console.error('Error fetching travel guides:', error)
    return NextResponse.json(
      { error: 'Failed to fetch travel guides' },
      { status: 500 }
    )
  }
}

// POST - Create new travel guide
export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // Generate slug from title if not provided
    if (!data.slug) {
      data.slug = data.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')
    }

    const guide = await prisma.travelGuide.create({
      data: {
        title: data.title,
        slug: data.slug,
        destination: data.destination,
        content: data.content,
        excerpt: data.excerpt,
        featuredImage: data.featuredImage,
        images: data.images || [],
        bestTimeToVisit: data.bestTimeToVisit,
        budgetRange: data.budgetRange,
        duration: data.duration,
        difficulty: data.difficulty,
        metaTitle: data.metaTitle,
        metaDescription: data.metaDescription,
        status: data.status || 'DRAFT',
        published: data.published || false,
        publishedAt: data.published ? new Date() : null,
        tags: data.tagIds ? {
          connect: data.tagIds.map((id: string) => ({ id }))
        } : undefined
      },
      include: {
        tags: true
      }
    })

    return NextResponse.json(guide, { status: 201 })
  } catch (error) {
    console.error('Error creating travel guide:', error)
    return NextResponse.json(
      { error: 'Failed to create travel guide' },
      { status: 500 }
    )
  }
}
