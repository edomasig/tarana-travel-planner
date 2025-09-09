# Facebook Auto-Post Script Documentation

## Overview
The `postToFacebook.js` script automatically posts your blog articles to Facebook with options for bulk posting, single post targeting, and draft creation.

## Features
- ✅ **Bulk posting**: Post all blog articles at once
- ✅ **Single post**: Target specific blog by slug
- ✅ **Draft mode**: Create draft posts that don't appear on timeline
- ✅ **Duplicate prevention**: Tracks posted blogs in `posted.json`
- ✅ **Image handling**: Automatically extracts and uploads blog images
- ✅ **Error handling**: Continues processing even if some posts fail

## Usage Examples

### 1. Post All Blogs (Live)
```bash
node postToFacebook.js
```
Posts all blogs that haven't been posted yet (checks `posted.json`).

### 2. Post Specific Blog (Live)
```bash
node postToFacebook.js filipino-street-food-guide
```
Posts only the specified blog slug to Facebook timeline.

### 3. Create Draft Posts (All Blogs)
```bash
node postToFacebook.js --draft
```
Creates draft versions of all blogs. Drafts won't appear on your timeline until manually published.

### 4. Create Draft Post (Specific Blog)
```bash
node postToFacebook.js ultimate-filipino-food-guide --draft
```
Creates a draft post for the specified blog only.

### 5. Show Help & Available Slugs
```bash
node postToFacebook.js --help
```
Shows usage instructions and lists all available blog slugs.

## Post Format
Each Facebook post includes:
- **Blog title** (extracted from CardTitle in page.tsx)
- **Hero image** (first Image src found in the file)
- **Blog URL** (https://galagpt.ph/blog/{slug})
- **Travel-focused message** with Philippines hashtags

## Draft vs Live Posts

### Live Posts
- Appear immediately on your Facebook Page timeline
- Tracked in `posted.json` to prevent duplicates
- Ideal for scheduled content publication

### Draft Posts
- Saved to Facebook but not published to timeline
- Must be manually published from Facebook Page
- Not tracked in `posted.json` (can be created multiple times)
- Perfect for content review before publishing

## Files
- `postToFacebook.js` - Main script
- `posted.json` - Tracks successfully posted blog slugs (auto-created)
- `app/blog/*/page.tsx` - Source blog files

## Configuration
Edit the script to change:
- `FB_ACCESS_TOKEN` - Your Facebook Page access token
- `FB_PAGE_ID` - Your Facebook Page ID
- `SITE_URL` - Your website URL

## Troubleshooting

### Image Upload Failures
Some images fail to upload due to:
- Relative paths (e.g., `/image.jpg`) - Facebook needs full URLs
- Local file paths - Images must be publicly accessible
- Solution: The script continues and posts without the image

### Rate Limiting
- Script includes 2-second delays between posts
- For large batches, consider running in smaller chunks

### Token Expiration
- Facebook tokens expire periodically
- Update the `FB_ACCESS_TOKEN` when you get authentication errors

## Security Note
Never commit your Facebook access token to source control. Consider using environment variables for production use.
