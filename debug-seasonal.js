// Debug script to test seasonal data fetching
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function testSeasonalFetch() {
  try {
    console.log('Testing seasonal content fetch for rainy season...')
    
    const cmsData = await prisma.seasonalContent.findUnique({
      where: { season: 'rainy' },
      include: {
        destinations: true,
        itinerary: {
          include: {
            days: {
              include: {
                activities: true
              },
              orderBy: { day: 'asc' }
            }
          }
        },
        tips: true
      }
    })
    
    if (cmsData) {
      console.log('✅ CMS Data found!')
      console.log('Season:', cmsData.season)
      console.log('Title:', cmsData.title)
      console.log('Featured Image:', cmsData.featuredImage)
      console.log('Description:', cmsData.description.substring(0, 100) + '...')
      
      // Test the conversion function
      const convertedData = {
        season: {
          name: cmsData.season,
          title: cmsData.title,
          description: cmsData.description,
          temperature: cmsData.temperature || "Variable",
          months: cmsData.months || "Year-round", 
          weather: cmsData.weather || "Variable conditions",
          bestFor: cmsData.bestFor || "Various activities",
          events: cmsData.events || "Local festivities",
          featuredImage: cmsData.featuredImage
        }
      }
      
      console.log('\n✅ Converted season data:')
      console.log('Featured Image in converted data:', convertedData.season.featuredImage)
      
    } else {
      console.log('❌ No CMS data found for rainy season')
    }
    
  } catch (error) {
    console.error('❌ Error:', error)
  } finally {
    await prisma.$disconnect()
  }
}

testSeasonalFetch()