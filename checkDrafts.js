// Test script to check draft posts
const FB_ACCESS_TOKEN = "EAALIts1SSa8BPePIxfPPShyVIdwqYO7I0cRI63XeeRoYRHBZBiUbV2jBBTMUSqf4p9Jwp2nyDxefZCZBc0sylAdm3Xb0s0e7QdzjJoZAjRv7kgabDVIwixEMLZBvb8bkug9AwEJ4qzza02EweShAESDDYGbckLaKhILLogqANvZA1IDGvcPotrCsIDA8It8quQqwKPqwZDZD"
const FB_PAGE_ID = "805483499309797"

async function checkDrafts() {
  try {
    console.log('🔍 Checking recent posts and drafts...')
    
    // Check recent posts with published status - increase limit to catch more posts
    const url = `https://graph.facebook.com/${FB_PAGE_ID}/posts?fields=id,message,created_time,is_published&limit=50&access_token=${FB_ACCESS_TOKEN}`
    const response = await fetch(url)
    const data = await response.json()
    
    if (data.error) {
      console.error('❌ API Error:', data.error)
      return
    }
    
    console.log(`📊 Found ${data.data.length} total posts`)
    
    // Filter and show drafts vs published
    const drafts = data.data.filter(post => !post.is_published)
    const published = data.data.filter(post => post.is_published)
    
    console.log(`📋 Drafts: ${drafts.length}`)
    console.log(`✅ Published: ${published.length}`)
    
    if (drafts.length > 0) {
      console.log('\n📝 Draft Posts:')
      drafts.forEach((post, index) => {
        console.log(`  ${index + 1}. ID: ${post.id}`)
        console.log(`     Message: ${post.message ? post.message.substring(0, 60) + '...' : 'No message'}`)
        console.log(`     Created: ${new Date(post.created_time).toLocaleString()}`)
        console.log('')
      })
      
      console.log('💡 Note: Draft posts might not be visible in Facebook Business Manager interface')
      console.log('🔧 You can publish drafts programmatically or via Graph API Explorer')
    } else {
      console.log('\n⚠️  No draft posts found')
    }
    
    console.log('\n🔍 Last 5 posts (any status):')
    data.data.slice(0, 5).forEach((post, index) => {
      const status = post.is_published ? '✅ LIVE' : '📋 DRAFT'
      const shortId = post.id.split('_')[1].slice(-8) // Last 8 chars for readability
      console.log(`  ${index + 1}. ${status}: ...${shortId}`)
    })
    
  } catch (err) {
    console.error('❌ Error:', err.message)
  }
}

checkDrafts()
