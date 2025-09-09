import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { createFacebookPostWithImage } from '@/lib/facebook-enhanced'

export async function POST(request: NextRequest) {
  try {
    const { testImageUrl } = await request.json()
    
    const pageId = process.env.FB_PAGE_ID as string
    const pageToken = process.env.FB_PAGE_ACCESS_TOKEN as string
    
    if (!pageToken || !pageId) {
      return NextResponse.json({ 
        error: 'Facebook credentials not configured' 
      }, { status: 500 })
    }

    const host = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_HOST || 'http://localhost:3001'
    
    // Test image URLs
    const testImages = [
      testImageUrl || `${host}/filipino-woman-smiling.png`,
      `${host}/galagpt-logo.svg`,
      'https://via.placeholder.com/600x400/0066cc/ffffff?text=Test+Image',
      'https://picsum.photos/600/400'
    ]

    const results = []

    for (const imageUrl of testImages) {
      try {
        console.log(`Testing image: ${imageUrl}`)
        
        const result = await createFacebookPostWithImage({
          pageId,
          pageAccessToken: pageToken,
          imageUrl,
          message: `🧪 Test post with image from: ${imageUrl}\n\nTesting Facebook image integration at ${new Date().toISOString()}`,
          link: `${host}/blog/test`
        })

        results.push({
          imageUrl,
          success: true,
          result,
          facebookPostId: result.id
        })
        
        // Only test one successful image to avoid spam
        break
        
      } catch (error) {
        results.push({
          imageUrl,
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error'
        })
      }
    }

    return NextResponse.json({
      host,
      testResults: results,
      summary: results.map(r => ({
        imageUrl: r.imageUrl,
        success: r.success,
        hasResult: !!r.result
      }))
    })

  } catch (error) {
    console.error('Test Facebook image error:', error)
    return NextResponse.json({
      error: 'Failed to test Facebook images',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
