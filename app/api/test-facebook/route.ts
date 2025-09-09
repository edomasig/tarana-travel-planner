import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const pageId = process.env.FB_PAGE_ID as string
    const pageToken = process.env.FB_PAGE_ACCESS_TOKEN as string
    
    if (!pageToken || !pageId) {
      return NextResponse.json({ 
        error: 'Facebook credentials not configured',
        hasPageId: !!pageId,
        hasToken: !!pageToken
      }, { status: 500 })
    }

    // Test Facebook API connection by getting page info
    const response = await fetch(
      `https://graph.facebook.com/${pageId}?fields=id,name,access_token&access_token=${pageToken}`
    )
    
    if (!response.ok) {
      const errorData = await response.json()
      return NextResponse.json({
        error: 'Facebook API error',
        details: errorData,
        status: response.status
      }, { status: 500 })
    }

    const pageData = await response.json()
    
    return NextResponse.json({
      success: true,
      message: 'Facebook API connection successful',
      pageInfo: {
        id: pageData.id,
        name: pageData.name
      }
    })

  } catch (error) {
    console.error('Facebook test error:', error)
    return NextResponse.json({
      error: 'Failed to test Facebook connection',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
