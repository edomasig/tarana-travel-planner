const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function clearData() {
  try {
    await prisma.seasonalContent.deleteMany()
    console.log('✅ Cleared existing seasonal content')
  } catch (error) {
    console.error('❌ Error clearing data:', error)
  } finally {
    await prisma.$disconnect()
  }
}

clearData()