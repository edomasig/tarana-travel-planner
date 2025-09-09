// Test if our converted image URLs are actually accessible
const https = require('https')

const testUrls = [
  'https://galagpt.ph/filipino-woman-smiling.png',
  'https://galagpt.ph/filipino-man-smiling.png',
  'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
]

console.log('🔍 Testing image accessibility...\n')

async function testImageUrl(url) {
  return new Promise((resolve) => {
    const protocol = url.startsWith('https:') ? https : require('http')
    
    protocol.get(url, (res) => {
      console.log(`📸 ${url}`)
      console.log(`   Status: ${res.statusCode}`)
      console.log(`   Type: ${res.headers['content-type'] || 'unknown'}`)
      console.log(`   Result: ${res.statusCode === 200 ? '✅ ACCESSIBLE' : '❌ NOT ACCESSIBLE'}`)
      console.log('')
      resolve(res.statusCode === 200)
    }).on('error', (err) => {
      console.log(`📸 ${url}`)
      console.log(`   Error: ${err.message}`)
      console.log(`   Result: ❌ NOT ACCESSIBLE`)
      console.log('')
      resolve(false)
    })
  })
}

async function testAll() {
  for (const url of testUrls) {
    await testImageUrl(url)
  }
  
  console.log('💡 Recommendation:')
  console.log('If local images (galagpt.ph) are not accessible, use only external images (Unsplash, etc.)')
}

testAll()
