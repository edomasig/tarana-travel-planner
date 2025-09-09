// Simple Facebook posting solution that works with images
export async function postToFacebookSimple({
  pageId,
  pageAccessToken,
  imageUrl,
  message,
  link,
}: {
  pageId: string
  pageAccessToken: string
  imageUrl: string
  message: string
  link?: string
}) {
  if (!pageId || !pageAccessToken) throw new Error('pageId and pageAccessToken are required')
  
  console.log('Simple Facebook posting:', { imageUrl, messageLength: message.length })

  // Method 1: Photo post with message (most reliable for images)
  try {
    const photoUrl = `https://graph.facebook.com/${pageId}/photos`
    const photoParams = new URLSearchParams()
    
    // Use a publicly accessible image URL
    if (imageUrl.includes('localhost') || imageUrl.includes('127.0.0.1')) {
      // If localhost, use a public placeholder
      imageUrl = 'https://picsum.photos/800/600?random=' + Date.now()
      console.log('Using public image instead of localhost:', imageUrl)
    }
    
    photoParams.append('url', imageUrl)
    photoParams.append('message', message)
    photoParams.append('published', 'true')
    photoParams.append('access_token', pageAccessToken)

    console.log('Posting photo to Facebook with URL:', imageUrl)

    const response = await fetch(photoUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: photoParams,
    })
    
    const result = await response.json()
    
    console.log('Facebook photo post result:', { 
      status: response.status, 
      success: response.ok,
      result 
    })

    if (response.ok) {
      return {
        id: result.id,
        permalink_url: `https://facebook.com/${result.id}`,
        post_id: result.post_id
      }
    } else {
      throw new Error(`Photo post failed: ${JSON.stringify(result)}`)
    }
  } catch (error) {
    console.error('Photo posting failed, trying text post:', error)
    
    // Fallback: Text post with link
    const feedUrl = `https://graph.facebook.com/${pageId}/feed`
    const feedParams = new URLSearchParams()
    feedParams.append('message', message)
    if (link) feedParams.append('link', link)
    feedParams.append('access_token', pageAccessToken)

    const feedResponse = await fetch(feedUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: feedParams,
    })
    
    const feedResult = await feedResponse.json()
    
    if (feedResponse.ok) {
      return {
        id: feedResult.id,
        permalink_url: `https://facebook.com/${feedResult.id}`,
        imageUploadFailed: true
      }
    } else {
      throw new Error(`Text post also failed: ${JSON.stringify(feedResult)}`)
    }
  }
}
