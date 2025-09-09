import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET - Fetch single travel guide
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const guide = await prisma.travelGuide.findUnique({
      where: { id: params.id },
      include: {
        tags: true
      }
    })

    if (!guide) {
      return NextResponse.json(
        { error: 'Travel guide not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(guide)
  } catch (error) {
    console.error('Error fetching travel guide:', error)
    return NextResponse.json(
      { error: 'Failed to fetch travel guide' },
      { status: 500 }
    )
  }
}

// PUT - Update travel guide
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const data = await request.json()

    const guide = await prisma.travelGuide.update({
      where: { id: params.id },
      data: {
        title: data.title,
        slug: data.slug,
        destination: data.destination,
        content: data.content,
        excerpt: data.excerpt,
        featuredImage: data.featuredImage,
        images: data.images,
        bestTimeToVisit: data.bestTimeToVisit,
        budgetRange: data.budgetRange,
        duration: data.duration,
        difficulty: data.difficulty,
        metaTitle: data.metaTitle,
        metaDescription: data.metaDescription,
        status: data.status,
        published: data.published,
        publishedAt: data.published && !data.publishedAt ? new Date() : data.publishedAt,
        tags: data.tagIds ? {
          set: data.tagIds.map((id: string) => ({ id }))
        } : undefined
      },
      include: {
        tags: true
      }
    })

    return NextResponse.json(guide)
  } catch (error) {
    console.error('Error updating travel guide:', error)
    return NextResponse.json(
      { error: 'Failed to update travel guide' },
      { status: 500 }
    )
  }
}

// DELETE - Delete travel guide
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.travelGuide.delete({
      where: { id: params.id }
    })

    return NextResponse.json({ message: 'Travel guide deleted successfully' })
  } catch (error) {
    console.error('Error deleting travel guide:', error)
    return NextResponse.json(
      { error: 'Failed to delete travel guide' },
      { status: 500 }
    )
  }
}
