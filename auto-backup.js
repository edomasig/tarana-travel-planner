// Automatic Backup System
// Runs scheduled backups and monitors for data changes

const { createBackup, validateDatabase } = require('./database-safety')
const cron = require('node-cron')
const fs = require('fs')
const path = require('path')

class AutoBackupSystem {
  constructor(options = {}) {
    this.backupDir = options.backupDir || path.join(process.cwd(), 'backups')
    this.maxBackups = options.maxBackups || 10
    this.schedule = options.schedule || '0 */6 * * *' // Every 6 hours
    this.runOnStart = options.runOnStart !== false
    
    this.ensureBackupDir()
    
    if (this.runOnStart) {
      this.createInitialBackup()
    }
    
    this.startScheduledBackups()
  }
  
  ensureBackupDir() {
    if (!fs.existsSync(this.backupDir)) {
      fs.mkdirSync(this.backupDir, { recursive: true })
      console.log(`📁 Created backup directory: ${this.backupDir}`)
    }
  }
  
  async createInitialBackup() {
    try {
      console.log('🔄 Creating initial backup...')
      await createBackup()
      console.log('✅ Initial backup completed')
    } catch (error) {
      console.error('❌ Initial backup failed:', error)
    }
  }
  
  startScheduledBackups() {
    console.log(`⏰ Scheduled backups enabled: ${this.schedule}`)
    
    cron.schedule(this.schedule, async () => {
      try {
        console.log('🔄 Running scheduled backup...')
        await createBackup()
        await this.cleanupOldBackups()
        console.log('✅ Scheduled backup completed')
      } catch (error) {
        console.error('❌ Scheduled backup failed:', error)
      }
    })
  }
  
  async cleanupOldBackups() {
    try {
      const files = fs.readdirSync(this.backupDir)
        .filter(file => file.startsWith('backup-') && file.endsWith('.json'))
        .map(file => ({
          name: file,
          path: path.join(this.backupDir, file),
          time: fs.statSync(path.join(this.backupDir, file)).mtime
        }))
        .sort((a, b) => b.time - a.time)
      
      if (files.length > this.maxBackups) {
        const filesToDelete = files.slice(this.maxBackups)
        
        for (const file of filesToDelete) {
          fs.unlinkSync(file.path)
          console.log(`🗑️  Deleted old backup: ${file.name}`)
        }
        
        console.log(`📊 Kept ${this.maxBackups} most recent backups`)
      }
    } catch (error) {
      console.error('❌ Cleanup failed:', error)
    }
  }
  
  async createManualBackup(reason = 'manual') {
    try {
      console.log(`🔄 Creating manual backup (reason: ${reason})...`)
      const backupFile = await createBackup()
      
      // Add reason to backup metadata
      const backup = JSON.parse(fs.readFileSync(backupFile, 'utf8'))
      backup.reason = reason
      backup.manual = true
      fs.writeFileSync(backupFile, JSON.stringify(backup, null, 2))
      
      console.log('✅ Manual backup completed')
      return backupFile
    } catch (error) {
      console.error('❌ Manual backup failed:', error)
      throw error
    }
  }
  
  listBackups() {
    try {
      const files = fs.readdirSync(this.backupDir)
        .filter(file => file.startsWith('backup-') && file.endsWith('.json'))
        .map(file => {
          const filePath = path.join(this.backupDir, file)
          const backup = JSON.parse(fs.readFileSync(filePath, 'utf8'))
          return {
            file: file,
            timestamp: backup.timestamp,
            reason: backup.reason || 'scheduled',
            manual: backup.manual || false,
            stats: backup.stats,
            size: fs.statSync(filePath).size
          }
        })
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
      
      console.log('📋 Available backups:')
      files.forEach((backup, index) => {
        const sizeKB = Math.round(backup.size / 1024)
        const type = backup.manual ? '👤 Manual' : '⏰ Auto'
        console.log(`${index + 1}. ${backup.file}`)
        console.log(`   ${type} | ${backup.timestamp} | ${sizeKB}KB`)
        console.log(`   📊 ${backup.stats.blogPosts} posts, ${backup.stats.seasonalContent} seasonal`)
        console.log('')
      })
      
      return files
    } catch (error) {
      console.error('❌ Failed to list backups:', error)
      return []
    }
  }
}

// Pre-operation hooks for dangerous operations
const preOperationHooks = {
  async beforeMigration() {
    console.log('🛡️  PRE-MIGRATION SAFETY CHECK')
    const autoBackup = new AutoBackupSystem({ runOnStart: false })
    return await autoBackup.createManualBackup('pre-migration')
  },
  
  async beforeReset() {
    console.log('🛡️  PRE-RESET SAFETY CHECK')
    const autoBackup = new AutoBackupSystem({ runOnStart: false })
    return await autoBackup.createManualBackup('pre-reset')
  },
  
  async beforeDeploy() {
    console.log('🛡️  PRE-DEPLOY SAFETY CHECK')
    const autoBackup = new AutoBackupSystem({ runOnStart: false })
    return await autoBackup.createManualBackup('pre-deploy')
  }
}

// Command line interface
if (require.main === module) {
  const command = process.argv[2]
  
  switch (command) {
    case 'start':
      console.log('🚀 Starting automatic backup system...')
      new AutoBackupSystem()
      break
      
    case 'backup':
      const reason = process.argv[3] || 'manual'
      const autoBackup = new AutoBackupSystem({ runOnStart: false })
      autoBackup.createManualBackup(reason)
      break
      
    case 'list':
      const backupList = new AutoBackupSystem({ runOnStart: false })
      backupList.listBackups()
      break
      
    case 'cleanup':
      const cleanup = new AutoBackupSystem({ runOnStart: false })
      cleanup.cleanupOldBackups()
      break
      
    default:
      console.log('Auto Backup System')
      console.log('Usage:')
      console.log('  node auto-backup.js start            - Start scheduled backups')
      console.log('  node auto-backup.js backup [reason]  - Create manual backup')
      console.log('  node auto-backup.js list             - List all backups')
      console.log('  node auto-backup.js cleanup          - Clean old backups')
  }
}

module.exports = {
  AutoBackupSystem,
  preOperationHooks
}