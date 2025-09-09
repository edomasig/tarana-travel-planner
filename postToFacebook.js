#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

// Configuration
const FB_ACCESS_TOKEN = "EAALIts1SSa8BPePIxfPPShyVIdwqYO7I0cRI63XeeRoYRHBZBiUbV2jBBTMUSqf4p9Jwp2nyDxefZCZBc0sylAdm3Xb0s0e7QdzjJoZAjRv7kgabDVIwixEMLZBvb8bkug9AwEJ4qzza02EweShAESDDYGbckLaKhILLogqANvZA1IDGvcPotrCsIDA8It8quQqwKPqwZDZD"
const FB_PAGE_ID = "805483499309797"
const BLOG_FOLDER = path.join(__dirname, 'app', 'blog')
const POSTED_FILE = path.join(__dirname, 'posted.json')
const SITE_URL = "https://galagpt.ph"

// Parse command line arguments
const args = process.argv.slice(2)
const isDraft = args.includes('--draft') || args.includes('-d')
const isScheduled = args.includes('--schedule') || args.includes('-s')
const forceOverride = args.includes('--force') || args.includes('-f')
const specificSlug = args.find(arg => !arg.startsWith('--') && !arg.startsWith('-'))

// Show usage if help requested
if (args.includes('--help') || args.includes('-h')) {
  console.log(`
Facebook Auto-Post Script Usage:

🚀 Post all blogs:
  node postToFacebook.js

📝 Post specific blog:
  node postToFacebook.js <slug>
  Example: node postToFacebook.js filipino-street-food-guide

📋 Create scheduled posts for tomorrow (visible in Facebook scheduler):
  node postToFacebook.js --schedule
  node postToFacebook.js <slug> --schedule

📝 Attempt draft posts (may not work with all Facebook permissions):
  node postToFacebook.js --draft
  node postToFacebook.js <slug> --draft

💡 Options:
  --schedule, -s Schedule posts for tomorrow (recommended for review)
  --draft, -d    Attempt to create draft posts (less reliable)
  --force, -f    Force repost even if already posted
  --help, -h     Show this help message

📚 Available blog slugs:`)
  
  if (fs.existsSync(BLOG_FOLDER)) {
    const folders = fs.readdirSync(BLOG_FOLDER, { withFileTypes: true })
      .filter(d => d.isDirectory())
      .map(d => d.name)
    folders.forEach(slug => console.log(`  - ${slug}`))
  }
  process.exit(0)
}

// Load or create posted.json
function loadPostedSlugs() {
  if (fs.existsSync(POSTED_FILE)) {
    try {
      const data = fs.readFileSync(POSTED_FILE, 'utf8')
      return JSON.parse(data)
    } catch (err) {
      console.warn('Could not read posted.json, starting fresh:', err.message)
      return []
    }
  }
  return []
}

// Save posted slugs
function savePostedSlugs(slugs) {
  try {
    fs.writeFileSync(POSTED_FILE, JSON.stringify(slugs, null, 2))
  } catch (err) {
    console.error('Failed to save posted.json:', err.message)
  }
}

// Extract title and image from a blog page.tsx file
function extractBlogData(filePath, slug) {
  try {
    const content = fs.readFileSync(filePath, 'utf8')
    
    // Extract title from CardTitle component
    const titleMatch = content.match(/<CardTitle[^>]*className="[^"]*"[^>]*>(.*?)<\/CardTitle>/s)
    let title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : `Travel Guide: ${slug.replace(/-/g, ' ')}`
    
    // Clean up title
    title = title.replace(/\s+/g, ' ').trim()
    
    // Extract first image src from Image component
    const imgMatch = content.match(/src="([^"]+)"/i)
    let imageUrl = imgMatch ? imgMatch[1] : ''
    
    // Convert relative paths to full URLs
    if (imageUrl && imageUrl.startsWith('/')) {
      imageUrl = `${SITE_URL}${imageUrl}`
    }
    
    // If no image found or it's a relative path, try to find any https image URL
    if (!imageUrl || !imageUrl.startsWith('http')) {
      const urlMatch = content.match(/(https:\/\/[^\s"']+\.(jpg|jpeg|png|gif|webp))/i)
      if (urlMatch) {
        imageUrl = urlMatch[0]
      } else {
        // Use a default fallback image if no image found
        imageUrl = `${SITE_URL}/filipino-man-smiling.png`
      }
    }
    
    return {
      title,
      imageUrl,
      blogUrl: `${SITE_URL}/blog/${slug}`
    }
  } catch (err) {
    console.error(`Failed to read ${filePath}:`, err.message)
    return null
  }
}

// Upload photo to Facebook (unpublished)
async function uploadPhoto(imageUrl) {
  const url = `https://graph.facebook.com/${FB_PAGE_ID}/photos`
  const params = new URLSearchParams()
  params.append('url', imageUrl)
  params.append('published', 'false')
  params.append('access_token', FB_ACCESS_TOKEN)

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: params
    })
    
    const result = await response.json()
    
    if (!response.ok) {
      throw new Error(`Photo upload failed: ${JSON.stringify(result)}`)
    }
    
    return result.id
  } catch (err) {
    throw new Error(`Photo upload error: ${err.message}`)
  }
}

// Create Facebook post with attached photo
async function createPost(photoId, message, blogUrl, imageUrl, isDraft = false, isScheduled = false) {
  const url = `https://graph.facebook.com/${FB_PAGE_ID}/feed`
  const params = new URLSearchParams()
  params.append('message', message)
  params.append('link', blogUrl)
  
  // If we have an image URL but no photoId, let Facebook fetch it from the link's Open Graph tags
  // This is more reliable than uploading photos separately
  if (imageUrl && !photoId) {
    // Facebook will automatically pull the image from the blog page's Open Graph tags
    console.log('📸 Using Open Graph image from blog page')
  } else if (photoId) {
    // Only attach media if we successfully uploaded a photo
    params.append('attached_media', JSON.stringify([{ media_fbid: photoId }]))
  }
  
  if (isScheduled) {
    // For scheduled posts, set a future time (without published=false)
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    tomorrow.setHours(10, 0, 0, 0)
    const scheduleTime = Math.floor(tomorrow.getTime() / 1000)
    params.append('scheduled_publish_time', scheduleTime.toString())
    console.log(`⏰ Scheduling for: ${tomorrow.toLocaleString()}`)
  } else if (isDraft) {
    // For drafts, simply set published=false (this works!)
    params.append('published', 'false')
  }
  
  params.append('access_token', FB_ACCESS_TOKEN)

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: params
    })
    
    const result = await response.json()
    
    if (!response.ok) {
      throw new Error(`Post creation failed: ${JSON.stringify(result)}`)
    }
    
    return result
  } catch (err) {
    throw new Error(`Post creation error: ${err.message}`)
  }
}

// Post a single blog to Facebook
async function postBlogToFacebook(slug, blogData, isDraft = false, isScheduled = false) {
  try {
    let mode = 'LIVE'
    if (isScheduled) mode = 'SCHEDULED'
    else if (isDraft) mode = 'DRAFT'
    
    console.log(`\n📝 Posting: ${slug} (${mode})`)
    console.log(`📰 Title: ${blogData.title}`)
    console.log(`🖼️  Image: ${blogData.imageUrl}`)
    console.log(`🔗 URL: ${blogData.blogUrl}`)
    
    // Check if image URL is accessible
    if (blogData.imageUrl) {
      console.log(`🔍 Image type: ${blogData.imageUrl.startsWith('http') ? 'Full URL' : 'Relative path'}`)
      if (!blogData.imageUrl.startsWith('http')) {
        console.log(`⚠️  Warning: Relative image path detected, Facebook needs full URLs`)
      }
    }
    
    let photoId = null
    
    // Upload photo if available
    if (blogData.imageUrl && blogData.imageUrl.startsWith('http')) {
      try {
        console.log('⬆️  Uploading photo...')
        photoId = await uploadPhoto(blogData.imageUrl)
        console.log(`✅ Photo uploaded successfully: ${photoId}`)
      } catch (err) {
        console.warn(`⚠️  Photo upload failed, posting without image: ${err.message}`)
      }
    } else if (blogData.imageUrl) {
      console.log('⚠️  Skipping image upload (not a full URL)')
    } else {
      console.log('⚠️  No image found, posting text only')
    }
    
    // Create the post message
    const message = `${blogData.title}\n\nDiscover amazing travel experiences in the Philippines! 🇵🇭\n\nRead the full guide: ${blogData.blogUrl}\n\n#Philippines #Travel #TravelGuide #Tourism #Adventure`
    
    // Create Facebook post
    const postType = isScheduled ? 'scheduled post' : isDraft ? 'draft post' : 'post'
    console.log(`📤 Creating Facebook ${postType}...`)
    const result = await createPost(photoId, message, blogData.blogUrl, blogData.imageUrl, isDraft, isScheduled)
    
    if (isScheduled) {
      console.log(`⏰ SUCCESS! Scheduled post created - ID: ${result.id}`)
      console.log(`📅 Post will be published automatically tomorrow at 10:00 AM`)
      console.log(`🔧 You can edit the schedule in Facebook's Publishing Tools`)
    } else if (isDraft) {
      console.log(`📋 SUCCESS! Draft post created - ID: ${result.id}`)
      console.log(`💡 Draft posts may not appear in Facebook interface (API limitation)`)
    } else {
      console.log(`🎉 SUCCESS! Post ID: ${result.id}`)
      if (photoId) {
        console.log(`🖼️  Post includes uploaded image`)
      } else {
        console.log(`📝 Post is text-only (no image attached)`)
      }
    }
    return true
    
  } catch (err) {
    console.error(`❌ FAILED to post ${slug}: ${err.message}`)
    return false
  }
}

// Main function
async function main() {
  console.log('🚀 Starting Facebook auto-post script...')
  console.log(`📁 Blog folder: ${BLOG_FOLDER}`)
  console.log(`📄 Posted slugs file: ${POSTED_FILE}`)
  console.log(`🌐 Site URL: ${SITE_URL}`)
  
  if (isDraft) {
    console.log('📋 DRAFT MODE: Attempting to create draft posts (may not be visible in interface)')
  }
  
  if (isScheduled) {
    console.log('⏰ SCHEDULED MODE: Posts will be scheduled for tomorrow at 10:00 AM')
  }
  
  if (specificSlug) {
    console.log(`🎯 SINGLE POST MODE: Only posting "${specificSlug}"`)
  }
  
  // Check if blog folder exists
  if (!fs.existsSync(BLOG_FOLDER)) {
    console.error(`❌ Blog folder not found: ${BLOG_FOLDER}`)
    process.exit(1)
  }
  
  // Load already posted slugs (only relevant for non-draft mode)
  const postedSlugs = isDraft || isScheduled ? [] : loadPostedSlugs()
  if (!isDraft && !isScheduled) {
    console.log(`📋 Already posted: ${postedSlugs.length} blogs`)
  }
  
  // Get all blog folders or filter to specific slug
  let blogFolders = fs.readdirSync(BLOG_FOLDER, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
  
  if (specificSlug) {
    if (!blogFolders.includes(specificSlug)) {
      console.error(`❌ Blog slug "${specificSlug}" not found!`)
      console.log('\n📚 Available slugs:')
      blogFolders.forEach(slug => console.log(`  - ${slug}`))
      process.exit(1)
    }
    blogFolders = [specificSlug]
  }
  
  console.log(`📚 ${specificSlug ? 'Selected' : 'Found'} ${blogFolders.length} blog${blogFolders.length === 1 ? '' : 's'}`)
  
  let successCount = 0
  let skippedCount = 0
  let failedCount = 0
  
  // Process each blog folder
  for (const slug of blogFolders) {
    const pageFile = path.join(BLOG_FOLDER, slug, 'page.tsx')
    
    // Check if already posted (skip in draft/scheduled mode, but check for specific slug too)
    if (!isDraft && !isScheduled && postedSlugs.includes(slug)) {
      if (specificSlug && !forceOverride) {
        console.log(`⚠️  ${slug} was already posted before. Use --force flag to override.`)
        skippedCount++
        continue
      } else if (!specificSlug) {
        console.log(`⏭️  Skipping ${slug} (already posted)`)
        skippedCount++
        continue
      }
    }
    
    // Show warning if forcing repost
    if (specificSlug && forceOverride && postedSlugs.includes(slug)) {
      console.log(`🔄 Force reposting: ${slug} (was already posted)`)
    }
    
    // Check if page.tsx exists
    if (!fs.existsSync(pageFile)) {
      console.log(`⚠️  Skipping ${slug} (no page.tsx found)`)
      skippedCount++
      continue
    }
    
    // Extract blog data
    const blogData = extractBlogData(pageFile, slug)
    if (!blogData) {
      console.log(`❌ Failed to extract data from ${slug}`)
      failedCount++
      continue
    }
    
    // Post to Facebook
    const success = await postBlogToFacebook(slug, blogData, isDraft, isScheduled)
    
    if (success) {
      // Add to posted list only if not a draft/scheduled and not already posted
      if (!isDraft && !isScheduled && !postedSlugs.includes(slug)) {
        postedSlugs.push(slug)
        savePostedSlugs(postedSlugs)
      }
      successCount++
      
      // Add delay between posts to avoid rate limiting (only if posting multiple)
      if (blogFolders.length > 1) {
        console.log('⏳ Waiting 3 seconds before next post...')
        await new Promise(resolve => setTimeout(resolve, 3000))
      }
    } else {
      failedCount++
    }
  }
  
  // Final summary
  console.log('\n📊 SUMMARY:')
  console.log(`✅ Successfully posted: ${successCount}`)
  if (!specificSlug) {
    console.log(`⏭️  Skipped: ${skippedCount}`)
  }
  console.log(`❌ Failed: ${failedCount}`)
  console.log(`📁 Total processed: ${successCount + skippedCount + failedCount}`)
  
  if (successCount > 0) {
    if (isDraft) {
      console.log(`\n📋 Great! ${successCount} draft post${successCount === 1 ? '' : 's'} created on Facebook!`)
      console.log(`💡 Draft posts are saved but not published to your timeline`)
      console.log(`🔧 You can publish them manually from your Facebook Page`)
    } else {
      console.log(`\n🎉 Great! ${successCount} new blog post${successCount === 1 ? '' : 's'} ${successCount === 1 ? 'has' : 'have'} been shared on Facebook!`)
      if (!specificSlug) {
        console.log(`📄 Updated posted.json with ${postedSlugs.length} total posted blogs`)
      }
    }
  }
  
  console.log('\n✨ Script completed!')
}

// Check if fetch is available (Node 18+ has built-in fetch)
if (!global.fetch) {
  console.error('❌ This script requires Node.js 18+ with built-in fetch, or install node-fetch manually')
  process.exit(1)
}

// Run the script
main().catch(err => {
  console.error('❌ Script failed:', err)
  process.exit(1)
})
