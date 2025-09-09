// Minimal Facebook Graph API helper for server-side posting.
// Uses the pattern: upload photo (published=false) -> create feed post attaching the photo.
export async function uploadPhotoAndCreatePost({
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
  // 1) Upload photo (unpublished)
  const uploadUrl = `https://graph.facebook.com/${pageId}/photos`
  const uploadParams = new URLSearchParams()
  uploadParams.append('url', imageUrl)
  uploadParams.append('published', 'false')
  uploadParams.append('access_token', pageAccessToken)

  const uploadRes = await fetch(uploadUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: uploadParams,
  })
  const uploadJson = await uploadRes.json()
  if (!uploadRes.ok) {
    throw new Error(`Photo upload failed: ${JSON.stringify(uploadJson)}`)
  }
  const photoId = uploadJson.id

  // 2) Create feed post attaching the uploaded photo
  const feedUrl = `https://graph.facebook.com/${pageId}/feed`
  const feedParams = new URLSearchParams()
  feedParams.append('message', message)
  if (link) feedParams.append('link', link)
  feedParams.append('attached_media', JSON.stringify([{ media_fbid: photoId }]))
  feedParams.append('access_token', pageAccessToken)

  const feedRes = await fetch(feedUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: feedParams,
  })
  const feedJson = await feedRes.json()
  if (!feedRes.ok) {
    throw new Error(`Post creation failed: ${JSON.stringify(feedJson)}`)
  }
  return feedJson
}
