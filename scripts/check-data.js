const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function checkData() {
  try {
    const data = await prisma.seasonalContent.findFirst({
      where: { season: 'rainy' },
      include: {
        itinerary: {
          include: {
            days: {
              include: {
                activities: true
              },
              orderBy: { day: 'asc' }
            }
          }
        }
      }
    })
    
    console.log('Season found:', data?.season)
    console.log('Itinerary title:', data?.itinerary?.title)
    console.log('Number of days:', data?.itinerary?.days.length)
    
    if (data?.itinerary?.days.length > 0) {
      const firstDay = data.itinerary.days[0]
      console.log('First day number:', firstDay.day)
      console.log('First day location:', firstDay.location)
      console.log('Activities in first day:', firstDay.activities.length)
      
      if (firstDay.activities.length > 0) {
        console.log('Sample activity:', JSON.stringify(firstDay.activities[0], null, 2))
      } else {
        console.log('❌ No activities found in first day!')
      }
    } else {
      console.log('❌ No days found!')
    }
    
  } catch (error) {
    console.error('Error:', error)
  } finally {
    await prisma.$disconnect()
  }
}

checkData()