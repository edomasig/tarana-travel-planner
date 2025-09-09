import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    // Get blog posts with their featured images
    const posts = await prisma.blogPost.findMany({
      where: { 
        published: true,
        status: 'PUBLISHED'
      },
      select: {
        id: true,
        title: true,
        featuredImage: true,
        slug: true
      },
      take: 5
    })

    const host = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_HOST || 'http://localhost:3001'

    const postsWithImageInfo = posts.map((post: {
      id: string;
      title: string;
      featuredImage: string | null;
      slug: string;
    }) => {
      const originalImage = post.featuredImage
      const isAbsoluteUrl = originalImage?.startsWith('http')
      const constructedUrl = isAbsoluteUrl 
        ? originalImage 
        : originalImage 
          ? `${host}${originalImage}`
          : `${host}/filipino-woman-smiling.png`

      return {
        id: post.id,
        title: post.title,
        slug: post.slug,
        originalFeaturedImage: originalImage,
        isAbsoluteUrl,
        constructedImageUrl: constructedUrl,
        imageExists: originalImage ? true : false
      }
    })

    return NextResponse.json({
      host,
      posts: postsWithImageInfo,
      env: {
        NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
        SITE_HOST: process.env.SITE_HOST
      }
    })

  } catch (error) {
    console.error('Debug images error:', error)
    return NextResponse.json({
      error: 'Failed to debug images',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
