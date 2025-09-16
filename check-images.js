const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function checkSeasonalImages() {
  try {
    console.log('Checking seasonal content images in database...')
    
    const seasonalContents = await prisma.seasonalContent.findMany({
      select: {
        id: true,
        season: true,
        title: true,
        featuredImage: true
      }
    })
    
    console.log('Found seasonal contents:')
    seasonalContents.forEach(content => {
      console.log(`- ${content.season}: ${content.title}`)
      console.log(`  Featured Image: ${content.featuredImage || 'NOT SET'}`)
      console.log('')
    })
    
    if (seasonalContents.length === 0) {
      console.log('No seasonal content found in database.')
    }
    
  } catch (error) {
    console.error('Error checking database:', error)
  } finally {
    await prisma.$disconnect()
  }
}

checkSeasonalImages()