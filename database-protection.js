// Database Operation Validation Middleware
// Prevents accidental bulk deletions and validates critical operations

const { PrismaClient } = require('@prisma/client')
const { preOperationHooks } = require('./auto-backup')

const prisma = new PrismaClient()

class DatabaseValidator {
  constructor(options = {}) {
    this.enableBackupOnDelete = options.enableBackupOnDelete !== false
    this.maxBulkDelete = options.maxBulkDelete || 5
    this.requireConfirmation = options.requireConfirmation !== false
  }
  
  // Validate bulk delete operations
  async validateBulkDelete(tableName, where, count) {
    console.log(`🔍 Validating bulk delete: ${tableName}`)
    
    if (count > this.maxBulkDelete) {
      throw new Error(
        `Bulk delete rejected: Attempting to delete ${count} records from ${tableName}. ` +
        `Maximum allowed: ${this.maxBulkDelete}. Use individual deletes or increase limit.`
      )
    }
    
    if (this.enableBackupOnDelete && count > 0) {
      console.log('🛡️  Creating backup before bulk delete...')
      await preOperationHooks.beforeReset()
    }
    
    return true
  }
  
  // Validate content deletion
  async validateContentDeletion(type, ids) {
    const criticalContent = ['blogPost', 'travelGuide', 'seasonalContent']
    
    if (criticalContent.includes(type)) {
      console.log(`⚠️  Critical content deletion detected: ${type}`)
      
      if (Array.isArray(ids) && ids.length > 1) {
        throw new Error(
          `Multiple ${type} deletion rejected. ` +
          `Use individual deletion for safety.`
        )
      }
      
      // Check if this would leave empty database
      const counts = await Promise.all([
        prisma.blogPost.count(),
        prisma.travelGuide.count(),
        prisma.seasonalContent.count()
      ])
      
      const totalContent = counts.reduce((sum, count) => sum + count, 0)
      
      if (totalContent <= 1) {
        throw new Error(
          'Deletion rejected: This would leave the database empty. ' +
          'Ensure you have other content before deleting.'
        )
      }
    }
    
    return true
  }
  
  // Validate schema changes
  async validateSchemaChange(operation, details) {
    console.log(`🔍 Validating schema change: ${operation}`)
    
    const dangerousOperations = [
      'DROP_TABLE',
      'DROP_COLUMN',
      'ALTER_COLUMN_TYPE',
      'DROP_INDEX'
    ]
    
    if (dangerousOperations.includes(operation)) {
      console.log('⚠️  Dangerous schema operation detected')
      
      if (this.enableBackupOnDelete) {
        console.log('🛡️  Creating backup before schema change...')
        await preOperationHooks.beforeMigration()
      }
      
      return {
        proceed: true,
        warning: `Schema operation ${operation} can cause data loss. Backup created.`
      }
    }
    
    return { proceed: true }
  }
}

// Express middleware for API protection
function createDatabaseProtectionMiddleware(options = {}) {
  const validator = new DatabaseValidator(options)
  
  return async (req, res, next) => {
    try {
      const { method, path } = req
      
      // Protect DELETE requests
      if (method === 'DELETE') {
        const pathSegments = path.split('/')
        const resourceType = pathSegments[pathSegments.length - 2] // e.g., 'blog-posts'
        
        console.log(`🛡️  Protected DELETE request: ${path}`)
        
        // For individual deletions, still validate
        if (resourceType) {
          await validator.validateContentDeletion(
            resourceType.replace('-', ''), 
            [req.params.id || req.query.id]
          )
        }
      }
      
      // Protect bulk operations in POST/PUT
      if ((method === 'POST' || method === 'PUT') && req.body) {
        if (req.body.bulkDelete && req.body.bulkDelete.length > 0) {
          await validator.validateBulkDelete(
            req.body.table || 'unknown',
            req.body.where || {},
            req.body.bulkDelete.length
          )
        }
      }
      
      next()
    } catch (error) {
      console.error('🚨 Database protection middleware error:', error.message)
      return res.status(400).json({
        error: 'Operation blocked by database protection',
        message: error.message,
        suggestion: 'Use individual operations or create a backup first'
      })
    }
  }
}

// Prisma middleware for operation interception
function createPrismaProtectionMiddleware() {
  return async (params, next) => {
    const { model, action, args } = params
    
    // Intercept dangerous operations
    if (action === 'deleteMany') {
      const validator = new DatabaseValidator()
      
      try {
        // Count what would be deleted
        const count = await prisma[model].count({ where: args.where })
        
        await validator.validateBulkDelete(model, args.where, count)
        
        console.log(`✅ Bulk delete approved: ${count} ${model} records`)
      } catch (error) {
        console.error('🚨 Prisma protection error:', error.message)
        throw error
      }
    }
    
    // Intercept content deletion
    if (action === 'delete' || action === 'deleteMany') {
      const criticalModels = ['blogPost', 'travelGuide', 'seasonalContent']
      
      if (criticalModels.includes(model)) {
        console.log(`⚠️  Critical content operation: ${action} on ${model}`)
        
        // Create backup for critical operations
        try {
          await preOperationHooks.beforeReset()
        } catch (backupError) {
          console.error('Backup failed:', backupError)
          // Continue anyway - backup failure shouldn't block legitimate operations
        }
      }
    }
    
    return next(params)
  }
}

// Install protection middleware on Prisma instance
function installPrismaProtection() {
  prisma.$use(createPrismaProtectionMiddleware())
  console.log('🛡️  Prisma protection middleware installed')
}

module.exports = {
  DatabaseValidator,
  createDatabaseProtectionMiddleware,
  createPrismaProtectionMiddleware,
  installPrismaProtection
}