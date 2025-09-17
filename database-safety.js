// Database Backup and Safety Utilities
// Run this before any major migrations or updates

const { PrismaClient } = require('@prisma/client')
const fs = require('fs')
const path = require('path')

const prisma = new PrismaClient()

async function createBackup() {
  try {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
    const backupDir = path.join(process.cwd(), 'backups')
    
    // Ensure backup directory exists
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true })
    }
    
    console.log('🔄 Creating database backup...')
    
    // Backup all critical content
    const [blogPosts, travelGuides, seasonalContent, users, tags] = await Promise.all([
      prisma.blogPost.findMany({ include: { tags: true } }),
      prisma.travelGuide.findMany({ include: { tags: true } }),
      prisma.seasonalContent.findMany({
        include: {
          destinations: true,
          itinerary: {
            include: {
              days: {
                include: {
                  activities: true
                }
              }
            }
          },
          tips: true
        }
      }),
      prisma.user.findMany(),
      prisma.tag.findMany()
    ])
    
    const backup = {
      timestamp,
      version: '1.0',
      data: {
        blogPosts,
        travelGuides,
        seasonalContent,
        users: users.map(u => ({ ...u, password: '[REDACTED]' })), // Remove passwords
        tags
      },
      stats: {
        blogPosts: blogPosts.length,
        travelGuides: travelGuides.length,
        seasonalContent: seasonalContent.length,
        users: users.length,
        tags: tags.length
      }
    }
    
    const backupFile = path.join(backupDir, `backup-${timestamp}.json`)
    fs.writeFileSync(backupFile, JSON.stringify(backup, null, 2))
    
    console.log('✅ Backup created successfully!')
    console.log(`📁 File: ${backupFile}`)
    console.log('📊 Backup contains:')
    console.log(`   - ${backup.stats.blogPosts} blog posts`)
    console.log(`   - ${backup.stats.travelGuides} travel guides`)
    console.log(`   - ${backup.stats.seasonalContent} seasonal content`)
    console.log(`   - ${backup.stats.users} users`)
    console.log(`   - ${backup.stats.tags} tags`)
    
    return backupFile
    
  } catch (error) {
    console.error('❌ Backup failed:', error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

async function restoreFromBackup(backupFile) {
  try {
    console.log('🔄 Restoring from backup...')
    
    if (!fs.existsSync(backupFile)) {
      throw new Error(`Backup file not found: ${backupFile}`)
    }
    
    const backup = JSON.parse(fs.readFileSync(backupFile, 'utf8'))
    
    console.log(`📅 Restoring backup from: ${backup.timestamp}`)
    console.log('⚠️  WARNING: This will replace existing data!')
    
    // Clear existing data (with confirmation)
    await prisma.seasonalActivity.deleteMany()
    await prisma.seasonalItineraryDay.deleteMany()
    await prisma.seasonalItinerary.deleteMany()
    await prisma.seasonalDestination.deleteMany()
    await prisma.seasonalTips.deleteMany()
    await prisma.seasonalContent.deleteMany()
    
    // Disconnect tags from posts before deleting
    await prisma.blogPost.updateMany({
      data: { tags: { set: [] } }
    })
    await prisma.travelGuide.updateMany({
      data: { tags: { set: [] } }
    })
    
    await prisma.blogPost.deleteMany()
    await prisma.travelGuide.deleteMany()
    await prisma.tag.deleteMany()
    
    console.log('🗑️  Existing data cleared')
    
    // Restore data
    console.log('📝 Restoring content...')
    
    // Restore tags first
    for (const tag of backup.data.tags) {
      await prisma.tag.create({ data: tag })
    }
    
    // Restore blog posts
    for (const post of backup.data.blogPosts) {
      const { tags, ...postData } = post
      await prisma.blogPost.create({
        data: {
          ...postData,
          tags: {
            connect: tags.map(tag => ({ id: tag.id }))
          }
        }
      })
    }
    
    // Restore travel guides
    for (const guide of backup.data.travelGuides) {
      const { tags, ...guideData } = guide
      await prisma.travelGuide.create({
        data: {
          ...guideData,
          tags: {
            connect: tags.map(tag => ({ id: tag.id }))
          }
        }
      })
    }
    
    // Restore seasonal content
    for (const content of backup.data.seasonalContent) {
      const { destinations, itinerary, tips, ...contentData } = content
      
      const createdContent = await prisma.seasonalContent.create({
        data: contentData
      })
      
      // Restore destinations
      for (const dest of destinations) {
        await prisma.seasonalDestination.create({
          data: {
            ...dest,
            seasonId: createdContent.id
          }
        })
      }
      
      // Restore itinerary
      if (itinerary) {
        const { days, ...itineraryData } = itinerary
        const createdItinerary = await prisma.seasonalItinerary.create({
          data: {
            ...itineraryData,
            seasonId: createdContent.id
          }
        })
        
        // Restore days and activities
        for (const day of days) {
          const { activities, ...dayData } = day
          const createdDay = await prisma.seasonalItineraryDay.create({
            data: {
              ...dayData,
              itineraryId: createdItinerary.id
            }
          })
          
          for (const activity of activities) {
            await prisma.seasonalActivity.create({
              data: {
                ...activity,
                dayId: createdDay.id
              }
            })
          }
        }
      }
      
      // Restore tips
      if (tips) {
        await prisma.seasonalTips.create({
          data: {
            ...tips,
            seasonId: createdContent.id
          }
        })
      }
    }
    
    console.log('✅ Restore completed successfully!')
    
  } catch (error) {
    console.error('❌ Restore failed:', error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

async function validateDatabase() {
  try {
    console.log('🔍 Validating database integrity...')
    
    const [blogCount, guideCount, seasonalCount] = await Promise.all([
      prisma.blogPost.count(),
      prisma.travelGuide.count(),
      prisma.seasonalContent.count()
    ])
    
    console.log('📊 Database status:')
    console.log(`   - Blog posts: ${blogCount}`)
    console.log(`   - Travel guides: ${guideCount}`)
    console.log(`   - Seasonal content: ${seasonalCount}`)
    
    if (blogCount === 0 && guideCount === 0 && seasonalCount === 0) {
      console.log('⚠️  WARNING: Database appears to be empty!')
      return false
    }
    
    console.log('✅ Database validation passed')
    return true
    
  } catch (error) {
    console.error('❌ Database validation failed:', error)
    return false
  } finally {
    await prisma.$disconnect()
  }
}

// Command line interface
const command = process.argv[2]
const arg = process.argv[3]

switch (command) {
  case 'backup':
    createBackup()
    break
  case 'restore':
    if (!arg) {
      console.error('Usage: node database-safety.js restore <backup-file>')
      process.exit(1)
    }
    restoreFromBackup(arg)
    break
  case 'validate':
    validateDatabase()
    break
  default:
    console.log('Database Safety Utilities')
    console.log('Usage:')
    console.log('  node database-safety.js backup          - Create backup')
    console.log('  node database-safety.js restore <file>  - Restore from backup')
    console.log('  node database-safety.js validate        - Validate database')
}

module.exports = {
  createBackup,
  restoreFromBackup,
  validateDatabase
}