import { NextRequest, NextResponse } from 'next/server'

// Test endpoint to demonstrate Facebook actions
export async function POST(request: NextRequest) {
  try {
    const { postId, action } = await request.json()

    if (!postId) {
      return NextResponse.json({ error: 'Post ID is required' }, { status: 400 })
    }

    if (!action || !['publish', 'repost', 'delete'].includes(action)) {
      return NextResponse.json({ 
        error: 'Valid action is required (publish, repost, or delete)' 
      }, { status: 400 })
    }

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3001'
    
    console.log(`Testing Facebook ${action} action for post ${postId}`)
    
    // Call the actual Facebook webhook
    const response = await fetch(`${baseUrl}/api/cms/webhook/facebook-new`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        postId,
        action
      })
    })

    const result = await response.json()
    
    return NextResponse.json({
      success: true,
      testAction: action,
      postId,
      facebookResponse: result,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Facebook action test error:', error)
    return NextResponse.json({
      error: 'Test failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

// GET endpoint to show usage examples
export async function GET() {
  return NextResponse.json({
    message: 'Facebook Actions Test Endpoint',
    usage: {
      endpoint: '/api/test/facebook-actions',
      method: 'POST',
      examples: [
        {
          description: 'Publish a new post to Facebook',
          body: {
            postId: 'your-blog-post-id',
            action: 'publish'
          }
        },
        {
          description: 'Repost (create new post with updated content)',
          body: {
            postId: 'your-blog-post-id',
            action: 'repost'
          }
        },
        {
          description: 'Delete existing Facebook post',
          body: {
            postId: 'your-blog-post-id',
            action: 'delete'
          }
        }
      ]
    },
    notes: [
      'Make sure your blog post exists in the database',
      'Facebook credentials must be properly configured',
      'Repost creates a new post and deletes the old one',
      'Delete removes the Facebook post and clears database references'
    ]
  })
}
