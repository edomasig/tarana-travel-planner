# Scripts Directory

This directory contains utility scripts for managing the TaraNa Travel Planner application.

## Available Scripts

### import-blog-posts.js

Imports static blog post content into the database with proper formatting and metadata.

**Usage:**
```bash
npm run import-blogs
```

**Features:**
- Imports pre-defined blog posts with rich HTML content
- Creates associated tags automatically
- Handles featured post management (only one featured post at a time)
- Preserves formatting and styling from original static pages
- Includes comprehensive travel guides and tips

**Imported Content:**
- Ultimate Filipino Food Guide
- Cebu–Bohol Ultimate Itinerary  
- Hidden Gems of Northern Philippines (Featured)
- Best Filipino Street Food Guide
- Philippines Budget Travel Guide

**Note:** The script preserves the original styling and content structure. You can manually update images through the CMS interface after import.

## Running Scripts

All scripts can be run from the project root:

```bash
# Import blog posts
npm run import-blogs

# Or run directly with Node.js
node scripts/import-blog-posts.js
```

## Database Requirements

Scripts require a configured Prisma database connection. Ensure your `.env.local` file contains:

```
DATABASE_URL="your-neon-db-connection-string"
```
