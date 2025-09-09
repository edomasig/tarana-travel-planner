import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const allPosts = await prisma.blogPost.findMany({
      include: {
        tags: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    const publishedPosts = await prisma.blogPost.findMany({
      where: {
        published: true
      },
      include: {
        tags: true
      },
      orderBy: {
        publishedAt: 'desc'
      }
    })

    return NextResponse.json({
      allPosts: allPosts.length,
      publishedPosts: publishedPosts.length,
      posts: allPosts.map((post: any) => ({
        id: post.id,
        title: post.title,
        slug: post.slug,
        published: post.published,
        publishedAt: post.publishedAt,
        createdAt: post.createdAt
      }))
    })
  } catch (error) {
    console.error('Database error:', error)
    return NextResponse.json({ error: 'Database connection failed' }, { status: 500 })
  }
}
