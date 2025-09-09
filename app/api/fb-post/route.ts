import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import { uploadPhotoAndCreatePost } from '@/lib/facebook'

type Body = {
  slug: string
}

export async function POST(req: Request) {
  try {
    const body: Body = await req.json()
    const { slug } = body
    if (!slug) return NextResponse.json({ error: 'missing slug' }, { status: 400 })

    // Read the blog page file under app/blog/{slug}/page.tsx to extract title and image
    const pageFile = path.join(process.cwd(), 'app', 'blog', slug, 'page.tsx')
    if (!fs.existsSync(pageFile)) return NextResponse.json({ error: 'slug not found' }, { status: 404 })
    const content = fs.readFileSync(pageFile, 'utf8')

    // crude extraction: find Image src in Header and CardTitle
    const titleMatch = content.match(/CardTitle[^>]*>([\s\S]*?)<\/CardTitle>/)
    const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : `New post: ${slug}`

    const imgMatch = content.match(/Image\s+src=\"([^\"]+)\"/)
    const imageUrl = imgMatch ? imgMatch[1] : ''

    const host = process.env.SITE_HOST || process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'
    const blogUrl = `${host}/blog/${slug}`

    const pageId = process.env.FB_PAGE_ID as string
    const pageToken = process.env.FB_PAGE_ACCESS_TOKEN as string
    if (!pageToken || !pageId) return NextResponse.json({ error: 'FB_PAGE_ACCESS_TOKEN and FB_PAGE_ID required in env' }, { status: 500 })

    const message = `${title}\n\nRead more: ${blogUrl}`

    const result = await uploadPhotoAndCreatePost({
      pageId,
      pageAccessToken: pageToken,
      imageUrl,
      message,
      link: blogUrl,
    })

    return NextResponse.json({ ok: true, result })
  } catch (err: any) {
    return NextResponse.json({ error: err.message || String(err) }, { status: 500 })
  }
}
