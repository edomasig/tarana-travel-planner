import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { exec } from 'child_process'
import { promisify } from 'util'

const execAsync = promisify(exec)

// Webhook to trigger Facebook auto-posting when blog is published
export async function POST(request: NextRequest) {
  try {
    const { postId, action } = await request.json()

    if (action === 'published') {
      // Get the blog post
      const post = await prisma.blogPost.findUnique({
        where: { id: postId }
      })

      if (!post || !post.published) {
        return NextResponse.json(
          { error: 'Post not found or not published' },
          { status: 404 }
        )
      }

      // Trigger Facebook auto-posting script
      try {
        const command = `node postToFacebook.js "${post.slug}"`
        const { stdout, stderr } = await execAsync(command, {
          cwd: process.cwd()
        })

        console.log('Facebook posting output:', stdout)
        if (stderr) console.error('Facebook posting errors:', stderr)

        return NextResponse.json({
          message: 'Facebook posting triggered successfully',
          output: stdout
        })
      } catch (execError) {
        console.error('Error executing Facebook posting script:', execError)
        return NextResponse.json(
          { error: 'Failed to trigger Facebook posting', details: execError },
          { status: 500 }
        )
      }
    }

    return NextResponse.json({ message: 'Webhook received' })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    )
  }
}
