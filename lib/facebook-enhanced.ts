// Enhanced Facebook posting with better image handling
export async function createFacebookPostWithImage({
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
  
  console.log('Enhanced Facebook posting debug:', {
    pageId,
    imageUrl,
    messageLength: message.length,
    link
  })

  try {
    // Method 1: Try posting with photo as a single request
    const postUrl = `https://graph.facebook.com/${pageId}/photos`
    const params = new URLSearchParams()
    params.append('url', imageUrl)
    params.append('message', message)
    if (link) params.append('link', link)
    params.append('published', 'true')
    params.append('access_token', pageAccessToken)

    console.log('Trying single-request photo post:', { postUrl, imageUrl })

    const response = await fetch(postUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params,
    })
    
    const result = await response.json()
    
    console.log('Single-request photo post response:', {
      status: response.status,
      ok: response.ok,
      response: result
    })

    if (response.ok) {
      return result
    } else {
      console.log('Single-request failed, trying fallback method...')
      throw new Error(`Single request failed: ${JSON.stringify(result)}`)
    }
  } catch (error) {
    console.log('Method 1 failed, trying Method 2 (text-only post):', error)
    
    // Method 2: Fallback to text-only post with link
    try {
      const feedUrl = `https://graph.facebook.com/${pageId}/feed`
      const feedParams = new URLSearchParams()
      feedParams.append('message', message)
      if (link) feedParams.append('link', link)
      feedParams.append('access_token', pageAccessToken)

      console.log('Trying text-only post with link:', { feedUrl, hasLink: !!link })

      const feedResponse = await fetch(feedUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: feedParams,
      })
      
      const feedResult = await feedResponse.json()
      
      console.log('Text-only post response:', {
        status: feedResponse.status,
        ok: feedResponse.ok,
        response: feedResult
      })

      if (feedResponse.ok) {
        return {
          ...feedResult,
          imageUploadFailed: true,
          fallbackUsed: true
        }
      } else {
        throw new Error(`Feed post failed: ${JSON.stringify(feedResult)}`)
      }
    } catch (fallbackError) {
      console.error('Both methods failed:', { originalError: error, fallbackError })
      throw new Error(`All posting methods failed. Image error: ${error instanceof Error ? error.message : 'Unknown'}. Fallback error: ${fallbackError instanceof Error ? fallbackError.message : 'Unknown'}`)
    }
  }
}
