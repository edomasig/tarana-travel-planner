#!/usr/bin/env node

// Safe Migration Wrapper
// Prevents accidental data loss during migrations and schema changes

const { exec } = require('child_process')
const readline = require('readline')
const fs = require('fs')
const path = require('path')
const { createBackup, validateDatabase } = require('./database-safety')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve)
  })
}

async function safeMigrate(command) {
  try {
    console.log('🛡️  SAFE MIGRATION WRAPPER')
    console.log('=' .repeat(50))
    
    // Validate current database
    console.log('\n1️⃣  Validating current database...')
    const isValid = await validateDatabase()
    
    if (!isValid) {
      const proceed = await askQuestion('\n⚠️  Database validation failed. Continue anyway? (y/N): ')
      if (proceed.toLowerCase() !== 'y') {
        console.log('❌ Migration cancelled by user')
        process.exit(0)
      }
    }
    
    // Create backup before migration
    console.log('\n2️⃣  Creating backup before migration...')
    const backupFile = await createBackup()
    
    // Confirm migration
    console.log('\n3️⃣  Migration Safety Check')
    console.log(`Command to run: ${command}`)
    console.log(`Backup created: ${backupFile}`)
    
    const confirmMigration = await askQuestion('\n⚠️  Are you sure you want to proceed with this migration? (y/N): ')
    
    if (confirmMigration.toLowerCase() !== 'y') {
      console.log('❌ Migration cancelled by user')
      process.exit(0)
    }
    
    // Run the migration
    console.log('\n4️⃣  Running migration...')
    console.log('🔄 Executing:', command)
    
    const result = await new Promise((resolve, reject) => {
      exec(command, (error, stdout, stderr) => {
        if (error) {
          reject({ error, stdout, stderr })
        } else {
          resolve({ stdout, stderr })
        }
      })
    })
    
    console.log('📤 Migration output:')
    console.log(result.stdout)
    if (result.stderr) {
      console.log('⚠️  Warnings:')
      console.log(result.stderr)
    }
    
    // Validate after migration
    console.log('\n5️⃣  Validating database after migration...')
    const isValidAfter = await validateDatabase()
    
    if (!isValidAfter) {
      console.log('❌ Database validation failed after migration!')
      console.log('🔄 Consider restoring from backup:', backupFile)
      
      const shouldRestore = await askQuestion('Do you want to restore from backup? (y/N): ')
      if (shouldRestore.toLowerCase() === 'y') {
        const { restoreFromBackup } = require('./database-safety')
        await restoreFromBackup(backupFile)
      }
    } else {
      console.log('✅ Migration completed successfully!')
      console.log('📁 Backup available at:', backupFile)
    }
    
  } catch (error) {
    console.error('❌ Migration failed:', error)
    console.log('🔄 You can restore from the backup if needed')
  } finally {
    rl.close()
  }
}

// Dangerous commands that should always be wrapped
const dangerousCommands = [
  'prisma migrate reset',
  'prisma db push --force-reset',
  'prisma migrate deploy --force-reset',
  'prisma db seed --force',
  'npm run db:reset',
  'yarn db:reset'
]

const command = process.argv.slice(2).join(' ')

if (!command) {
  console.log('Safe Migration Wrapper')
  console.log('Usage: node safe-migrate.js <prisma-command>')
  console.log('')
  console.log('Examples:')
  console.log('  node safe-migrate.js "prisma migrate dev"')
  console.log('  node safe-migrate.js "prisma db push"')
  console.log('')
  console.log('⚠️  This tool will automatically backup your database before running migrations')
  process.exit(0)
}

// Check if this is a dangerous command
const isDangerous = dangerousCommands.some(dangerous => command.includes(dangerous))

if (isDangerous) {
  console.log('🚨 DANGEROUS COMMAND DETECTED!')
  console.log('This command may delete or reset your data:')
  console.log(`   ${command}`)
  console.log('')
  console.log('Please use the database-safety.js backup feature first.')
  process.exit(1)
}

// Run the safe migration
safeMigrate(command)