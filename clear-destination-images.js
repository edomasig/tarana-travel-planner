const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function clearOldDestinationImages() {
  try {
    console.log('Clearing old destination image paths...')
    
    // Find all destinations with local image paths (not URLs)
    const destinations = await prisma.seasonalDestination.findMany({
      where: {
        image: {
          not: {
            startsWith: 'https://'
          }
        }
      }
    })
    
    console.log(`Found ${destinations.length} destinations with local image paths`)
    
    // Clear the old image paths
    const result = await prisma.seasonalDestination.updateMany({
      where: {
        image: {
          not: {
            startsWith: 'https://'
          }
        }
      },
      data: {
        image: ''  // Clear the image field
      }
    })
    
    console.log(`Cleared ${result.count} destination image paths`)
    console.log('✅ Ready for new uploads! Go to CMS to upload new destination images.')
    
  } catch (error) {
    console.error('Error:', error)
  } finally {
    await prisma.$disconnect()
  }
}

clearOldDestinationImages()