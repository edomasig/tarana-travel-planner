// Test image URL conversion
const fs = require('fs')
const path = require('path')

const SITE_URL = 'https://galagpt.ph'

// Test with a specific blog
const pageFile = path.join(__dirname, 'app', 'blog', 'ultimate-filipino-food-guide', 'page.tsx')
const content = fs.readFileSync(pageFile, 'utf8')

// Extract first image src
const imgMatch = content.match(/src="([^"]+)"/i)
const originalImage = imgMatch ? imgMatch[1] : 'not found'

console.log('📋 Testing Image URL Conversion:')
console.log('Original image path:', originalImage)

// Test the conversion logic
let imageUrl = originalImage

if (imageUrl && imageUrl.startsWith('/')) {
  imageUrl = `${SITE_URL}${imageUrl}`
  console.log('✅ Converted to full URL:', imageUrl)
} else if (imageUrl && imageUrl.startsWith('http')) {
  console.log('✅ Already a full URL:', imageUrl)
} else {
  console.log('⚠️  No valid image found')
}

console.log('Will Facebook accept this?', imageUrl.startsWith('http'))

// Test with another blog that has an external image
const pageFile2 = path.join(__dirname, 'app', 'blog', 'filipino-street-food-guide', 'page.tsx')
const content2 = fs.readFileSync(pageFile2, 'utf8')
const imgMatch2 = content2.match(/src="([^"]+)"/i)
const originalImage2 = imgMatch2 ? imgMatch2[1] : 'not found'

console.log('\n📋 Testing another blog:')
console.log('Original image path:', originalImage2)
console.log('Is external URL?', originalImage2.startsWith('http'))
