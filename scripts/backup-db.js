// Backup the Postgres database content (selected tables) to JSON
// Usage: npm run backup-db

/* eslint-disable no-console */
const fs = require('fs')
const path = require('path')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
  const outDir = path.join(process.cwd(), 'backups')
  const outFile = path.join(outDir, `backup-${timestamp}.json`)

  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true })
  }

  console.log('Starting database backup...')

  // Fetch all rows for primary content tables
  const [blogPosts, travelGuides, tags, users] = await Promise.all([
    prisma.blogPost.findMany(),
    prisma.travelGuide.findMany(),
    prisma.tag.findMany(),
    prisma.user.findMany(),
  ])

  const payload = {
    meta: {
      createdAt: new Date().toISOString(),
      note: 'JSON dump for quick restore/reference. Not a binary pg_dump.',
      tables: {
        blogPosts: blogPosts.length,
        travelGuides: travelGuides.length,
        tags: tags.length,
        users: users.length,
      },
    },
    blogPosts,
    travelGuides,
    tags,
    users,
  }

  fs.writeFileSync(outFile, JSON.stringify(payload, null, 2), 'utf-8')
  console.log(`Backup completed: ${path.relative(process.cwd(), outFile)}`)
}

main()
  .catch((err) => {
    console.error('Backup failed:', err)
    process.exitCode = 1
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
