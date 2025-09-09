import { NextRequest, NextResponse } from 'next/server'
import { postToFacebookSimple } from '@/lib/facebook-simple'

export async function POST(request: NextRequest) {
  try {
    const pageId = process.env.FB_PAGE_ID as string
    const pageToken = process.env.FB_PAGE_ACCESS_TOKEN as string
    
    if (!pageToken || !pageId) {
      return NextResponse.json({ 
        error: 'Facebook credentials not configured' 
      }, { status: 500 })
    }

    // Test with a public image
    const testImageUrl = 'https://picsum.photos/800/600?random=' + Date.now()
    const testMessage = `🧪 Testing image posting fix!\n\nThis is a test post to verify that images are now showing up correctly on Facebook.\n\nTimestamp: ${new Date().toISOString()}\n\n#TestPost #GalaGPT #ImageFix`

    const result = await postToFacebookSimple({
      pageId,
      pageAccessToken: pageToken,
      imageUrl: testImageUrl,
      message: testMessage,
      link: 'https://galagpt.ph'
    })

    return NextResponse.json({
      success: true,
      message: 'Test post created successfully with image!',
      facebookResult: result,
      testImageUrl
    })

  } catch (error) {
    console.error('Test simple posting error:', error)
    return NextResponse.json({
      error: 'Failed to create test post',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
