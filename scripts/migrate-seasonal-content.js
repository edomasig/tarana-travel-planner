const { PrismaClient } = require('@prisma/client')
const fs = require('fs')
const path = require('path')

const prisma = new PrismaClient()

// Helper function to parse markdown content
function parseSeasonalContent(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8')
  const lines = content.split('\n')
  
  const data = {
    destinations: [],
    itinerary: null,
    tips: { packing: [], advice: [] }
  }
  
  let currentSection = 'metadata'
  let currentDestination = null
  let currentDay = null
  let inItinerary = false
  let inTips = false
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()
    
    // Parse metadata (first section)
    if (currentSection === 'metadata' && line.includes(':') && !line.startsWith('#')) {
      const [key, value] = line.split(':').map(s => s.trim())
      data[key] = value
    }
    
    // Section headers
    if (line.startsWith('## Destinations')) {
      currentSection = 'destinations'
      continue
    }
    
    if (line.startsWith('## Featured Itinerary')) {
      currentSection = 'itinerary'
      inItinerary = true
      data.itinerary = { days: [] }
      continue
    }
    
    if (line.startsWith('## Tips')) {
      currentSection = 'tips'
      inTips = true
      continue
    }
    
    // Parse destinations
    if (currentSection === 'destinations' && line.startsWith('### ')) {
      if (currentDestination) {
        data.destinations.push(currentDestination)
      }
      currentDestination = {
        name: line.replace('### ', ''),
        highlights: []
      }
      continue
    }
    
    if (currentDestination && line.includes(':') && !line.startsWith('#')) {
      const [key, value] = line.split(':').map(s => s.trim())
      if (key === 'highlights') {
        currentDestination.highlights = value.split(';').map(h => h.trim())
      } else {
        currentDestination[key] = value
      }
    }
    
    if (currentDestination && line.startsWith('description:')) {
      // Read multiline description
      let desc = ''
      i++
      while (i < lines.length && !lines[i].startsWith('###') && !lines[i].startsWith('##')) {
        if (lines[i].trim()) desc += lines[i].trim() + ' '
        i++
      }
      i-- // Back up one line
      currentDestination.description = desc.trim()
    }
    
    // Parse itinerary
    if (inItinerary && line.includes(':') && !line.startsWith('#') && !line.startsWith('###')) {
      const [key, value] = line.split(':').map(s => s.trim())
      data.itinerary[key] = value
    }
    
    if (inItinerary && line.startsWith('### Day ')) {
      const dayMatch = line.match(/### Day (\d+) \| (.+) \| (.+)/)
      if (dayMatch) {
        if (currentDay) {
          data.itinerary.days.push(currentDay)
        }
        currentDay = {
          day: parseInt(dayMatch[1]),
          location: dayMatch[2],
          image: dayMatch[3],
          activities: []
        }
      }
      continue
    }
    
    if (currentDay && line.startsWith('- ') && line.includes('|')) {
      const parts = line.substring(2).split('|').map(p => p.trim())
      if (parts.length >= 4) {
        const activity = {
          time: parts[0],
          activity: parts[1],
          type: parts[2],
          cost: parts[3],
          description: parts[4] || '',
          tips: parts[5] || ''
        }
        currentDay.activities.push(activity)
      }
    }
    
    // Parse tips
    if (inTips && line.startsWith('### Packing')) {
      currentSection = 'packing'
      continue
    }
    
    if (inTips && line.startsWith('### Advice')) {
      currentSection = 'advice'
      continue
    }
    
    if (inTips && line.startsWith('- ')) {
      const tip = line.replace('- ', '')
      if (currentSection === 'packing') {
        data.tips.packing.push(tip)
      } else if (currentSection === 'advice') {
        data.tips.advice.push(tip)
      }
    }
  }
  
  // Don't forget the last destination and day
  if (currentDestination) {
    data.destinations.push(currentDestination)
  }
  
  if (currentDay) {
    data.itinerary.days.push(currentDay)
  }
  
  return data
}

async function migrateSeasonalContent() {
  try {
    console.log('Starting seasonal content migration...')
    
    const contentDir = path.join(process.cwd(), 'content', 'seasonal')
    const seasonFiles = ['holiday.md', 'summer.md', 'rainy.md', 'dry.md']
    
    for (const file of seasonFiles) {
      const filePath = path.join(contentDir, file)
      if (!fs.existsSync(filePath)) {
        console.log(`Skipping ${file} - file not found`)
        continue
      }
      
      console.log(`Processing ${file}...`)
      const data = parseSeasonalContent(filePath)
      
      // Extract season name from filename
      const seasonName = file.replace('.md', '')
      
      // Check if season already exists
      const existingSeason = await prisma.seasonalContent.findUnique({
        where: { season: seasonName }
      })
      
      if (existingSeason) {
        console.log(`Season ${seasonName} already exists, skipping...`)
        continue
      }
      
      // Create seasonal content
      const seasonalContent = await prisma.seasonalContent.create({
        data: {
          season: seasonName,
          title: data.title || `${data.name} Travel Guide`,
          description: data.description || `Explore the best of ${data.name}`,
          months: data.months || 'Year-round',
          temperature: data.temperature || 'Variable',
          weather: data.weather || 'Variable conditions',
          bestFor: data.bestFor || 'Various activities',
          events: data.events || 'Local festivities',
          status: 'PUBLISHED',
          published: true,
          destinations: {
            create: data.destinations.map((dest, index) => ({
              name: dest.name,
              location: dest.location || 'Philippines',
              description: dest.description || `Experience the beauty of ${dest.name}`,
              image: dest.image || '/placeholder.svg',
              rating: dest.rating || '4.5',
              bestTime: dest.bestTime || 'Anytime',
              budget: dest.budget || 'Moderate',
              highlights: dest.highlights || [],
              prompt: dest.prompt || '',
              order: index
            }))
          },
          itinerary: data.itinerary ? {
            create: {
              title: data.itinerary.title || `${data.name} Adventure`,
              duration: data.itinerary.duration || '7 days',
              budget: data.itinerary.budget || 'Moderate',
              difficulty: data.itinerary.difficulty || 'Easy',
              prompt: data.itinerary.prompt || '',
              days: {
                create: data.itinerary.days.map(day => ({
                  day: day.day,
                  location: day.location,
                  image: day.image,
                  activities: {
                    create: day.activities.map((activity, index) => ({
                      time: activity.time,
                      activity: activity.activity,
                      description: activity.description,
                      cost: activity.cost,
                      type: activity.type,
                      tips: activity.tips,
                      order: index
                    }))
                  }
                }))
              }
            }
          } : undefined,
          tips: {
            create: {
              packing: data.tips.packing,
              advice: data.tips.advice
            }
          }
        }
      })
      
      console.log(`✅ Successfully migrated ${seasonName} (ID: ${seasonalContent.id})`)
    }
    
    console.log('🎉 Migration completed successfully!')
    
  } catch (error) {
    console.error('❌ Migration failed:', error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

// Run the migration
if (require.main === module) {
  migrateSeasonalContent().catch(console.error)
}

module.exports = { migrateSeasonalContent, parseSeasonalContent }