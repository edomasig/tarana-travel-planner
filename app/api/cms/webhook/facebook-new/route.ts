import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { uploadPhotoAndCreatePost } from '@/lib/facebook'
import { createFacebookPostWithImage } from '@/lib/facebook-enhanced'
import { postToFacebookSimple } from '@/lib/facebook-simple'

interface FacebookPostData {
  id: string
  message: string
  created_time: string
  permalink_url: string
}

export async function POST(request: NextRequest) {
  try {
    const { postId, action = 'publish' } = await request.json()
    
    if (!postId) {
      return NextResponse.json({ error: 'Post ID is required' }, { status: 400 })
    }

    // Validate action
    if (!['publish', 'repost', 'delete'].includes(action)) {
      return NextResponse.json({ error: 'Invalid action. Use "publish", "repost", or "delete"' }, { status: 400 })
    }

    // Get the blog post from database
    const blogPost = await prisma.blogPost.findUnique({
      where: { id: postId },
      include: { tags: true }
    })

    if (!blogPost) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 })
    }

    if (!blogPost.published) {
      return NextResponse.json({ error: 'Blog post must be published first' }, { status: 400 })
    }

    const pageId = process.env.FB_PAGE_ID as string
    const pageToken = process.env.FB_PAGE_ACCESS_TOKEN as string
    
    if (!pageToken || !pageId) {
      return NextResponse.json({ 
        error: 'Facebook credentials not configured. Please set FB_PAGE_ID and FB_PAGE_ACCESS_TOKEN in environment variables.' 
      }, { status: 500 })
    }

    // Check if post already exists on Facebook
    let existingFbPost = null
    if (blogPost.facebookPostId) {
      try {
        const checkResponse = await fetch(
          `https://graph.facebook.com/${blogPost.facebookPostId}?fields=id,message,created_time,permalink_url&access_token=${pageToken}`
        )
        if (checkResponse.ok) {
          existingFbPost = await checkResponse.json()
        }
      } catch (error) {
        console.log('Facebook post not found or deleted, will create new one')
      }
    }

    // Handle different actions
    if (action === 'delete') {
      // Delete existing Facebook post
      if (!blogPost.facebookPostId) {
        return NextResponse.json({ 
          error: 'No Facebook post found to delete' 
        }, { status: 400 })
      }

      try {
        const deleteResponse = await fetch(
          `https://graph.facebook.com/${blogPost.facebookPostId}?access_token=${pageToken}`,
          { method: 'DELETE' }
        )

        if (deleteResponse.ok) {
          // Remove Facebook post reference from database
          await prisma.blogPost.update({
            where: { id: postId },
            data: { 
              facebookPostId: null,
              facebookPostUrl: null
            }
          })

          return NextResponse.json({
            success: true,
            message: 'Facebook post deleted successfully'
          })
        } else {
          const errorData = await deleteResponse.json()
          throw new Error(`Failed to delete Facebook post: ${JSON.stringify(errorData)}`)
        }
      } catch (error) {
        console.error('Facebook delete error:', error)
        return NextResponse.json({
          error: 'Failed to delete Facebook post',
          details: error instanceof Error ? error.message : 'Unknown error'
        }, { status: 500 })
      }
    }

    // Handle publish and repost actions
    const host = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_HOST || 'http://localhost:3001'
    const blogUrl = `${host}/blog/${blogPost.slug}`
    
    // Create Facebook post message
    const message = `✈️ ${blogPost.title}

${blogPost.excerpt || ''}

🔗 Read the full guide: ${blogUrl}

#TravelPhilippines #GalaGPT #TravelGuide ${blogPost.tags.map((tag: any) => `#${tag.name.replace(/\s+/g, '')}`).join(' ')}`

    let result
    let operationType = 'created'

    // For repost action, always create a new post (delete old one first if it exists)
    if (action === 'repost' && blogPost.facebookPostId) {
      try {
        // Try to delete the old post first
        const deleteResponse = await fetch(
          `https://graph.facebook.com/${blogPost.facebookPostId}?access_token=${pageToken}`,
          { method: 'DELETE' }
        )
        console.log('Old post deletion result:', deleteResponse.ok)
      } catch (error) {
        console.log('Could not delete old post (might already be deleted):', error)
      }
      
      // Clear the existing post reference so we create a new one
      existingFbPost = null
      operationType = 'reposted'
    }

    // Check if we should try to update existing post (only for 'publish' action)
    if (action === 'publish' && existingFbPost) {
      // Update existing post
      try {
        const updateResponse = await fetch(
          `https://graph.facebook.com/${blogPost.facebookPostId}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
              message: message,
              access_token: pageToken
            })
          }
        )
        
        if (updateResponse.ok) {
          result = await updateResponse.json()
          operationType = 'updated'
        } else {
          throw new Error('Failed to update Facebook post')
        }
      } catch (updateError) {
        console.error('Failed to update Facebook post, creating new one:', updateError)
        // If update fails, create a new post
        existingFbPost = null
      }
    }

    if (!existingFbPost) {
      // Create new post
      let imageUrl = ''
      
      if (blogPost.featuredImage) {
        if (blogPost.featuredImage.startsWith('http')) {
          // Already absolute URL
          imageUrl = blogPost.featuredImage
        } else {
          // For local images, use a placeholder from the public folder
          // Since Facebook can't access localhost, we'll use a public image service
          if (blogPost.featuredImage.includes('.jpg') || blogPost.featuredImage.includes('.png')) {
            // Use a travel-themed placeholder
            imageUrl = 'https://picsum.photos/800/600?random=' + Date.now()
          } else {
            imageUrl = `${host}${blogPost.featuredImage}`
          }
        }
      } else {
        // Use a nice travel placeholder
        imageUrl = 'https://picsum.photos/800/600?random=' + Date.now()
      }

      console.log('Facebook posting with image URL:', imageUrl)

      // Use the simple posting method
      try {
        result = await postToFacebookSimple({
          pageId,
          pageAccessToken: pageToken,
          imageUrl,
          message,
          link: blogUrl,
        })
        
        console.log('Simple posting result:', result)
      } catch (simpleError) {
        console.log('Simple method failed, trying enhanced method:', simpleError)
        
        try {
          result = await createFacebookPostWithImage({
            pageId,
            pageAccessToken: pageToken,
            imageUrl,
            message,
            link: blogUrl,
          })
        } catch (enhancedError) {
          console.log('Enhanced method failed, trying original method:', enhancedError)
          
          // Final fallback to original method
          result = await uploadPhotoAndCreatePost({
            pageId,
            pageAccessToken: pageToken,
            imageUrl,
            message,
            link: blogUrl,
          })
        }
      }

      // Update blog post with Facebook post ID
      await prisma.blogPost.update({
        where: { id: postId },
        data: { 
          facebookPostId: result.id,
          facebookPostUrl: result.permalink_url || `https://facebook.com/${pageId}/posts/${result.id}`
        }
      })
    }

    return NextResponse.json({ 
      success: true, 
      action: operationType,
      facebookPostId: result.id,
      facebookPostUrl: result.permalink_url || `https://facebook.com/${pageId}/posts/${result.id}`,
      message: `Blog post successfully ${operationType} on Facebook!`,
      actionPerformed: action
    })

  } catch (error) {
    console.error('Facebook posting error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to post to Facebook' },
      { status: 500 }
    )
  }
}
