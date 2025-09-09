import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    // Get a published blog post to test Facebook posting with
    const publishedPost = await prisma.blogPost.findFirst({
      where: { 
        published: true,
        status: 'PUBLISHED'
      },
      include: { tags: true }
    })

    if (!publishedPost) {
      return NextResponse.json({
        error: 'No published posts found for testing',
        suggestion: 'Create and publish a blog post first'
      }, { status: 404 })
    }

    // Test the Facebook posting endpoint
    const testPostingUrl = `${request.nextUrl.origin}/api/cms/webhook/facebook-new`
    
    const facebookResponse = await fetch(testPostingUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        postId: publishedPost.id,
        action: 'publish'
      })
    })

    const facebookResult = await facebookResponse.json()

    return NextResponse.json({
      testPost: {
        id: publishedPost.id,
        title: publishedPost.title,
        published: publishedPost.published,
        status: publishedPost.status,
        hasImage: !!publishedPost.featuredImage,
        tagCount: publishedPost.tags.length
      },
      facebookResult,
      facebookResponseStatus: facebookResponse.status
    })

  } catch (error) {
    console.error('Facebook posting test error:', error)
    return NextResponse.json({
      error: 'Failed to test Facebook posting',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
