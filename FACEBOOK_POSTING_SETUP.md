# Facebook Posting Integration Setup

This guide explains how to set up and use the Facebook posting integration for blog posts.

## Features

✅ Manual "Publish to Facebook" button in CMS
✅ Check for existing Facebook posts to prevent duplicates  
✅ Update existing posts instead of creating duplicates
✅ Facebook status indicators in blog post list and edit pages
✅ Direct links to view Facebook posts

## Setup Instructions

### 1. Facebook App & Page Setup

1. **Create a Facebook App** (if you don't have one):
   - Go to [Facebook Developers](https://developers.facebook.com/)
   - Create a new app with "Business" type
   - Add "Pages" permission to your app

2. **Get Facebook Page Access Token**:
   - Go to Graph API Explorer: https://developers.facebook.com/tools/explorer/
   - Select your app and the page you want to post to
   - Generate a Page Access Token with these permissions:
     - `pages_manage_posts`
     - `pages_read_engagement`
     - `publish_to_groups` (if posting to groups)
   - **Important**: Generate a long-lived token (60 days) using the Access Token Debugger

3. **Get Facebook Page ID**:
   - Visit your Facebook page
   - Go to "About" section
   - Scroll down to find "Page ID" or "Facebook Page ID"
   - Or use Graph API: `https://graph.facebook.com/me?access_token=YOUR_TOKEN`

### 2. Environment Variables

Add these to your `.env.local` file:

```bash
# Facebook Configuration
FB_PAGE_ID=your_facebook_page_id_here
FB_PAGE_ACCESS_TOKEN=your_facebook_page_access_token_here
```

Replace the placeholder values with your actual Facebook credentials.

### 3. Database Schema

The Facebook fields have been added to the BlogPost model:

```prisma
model BlogPost {
  // ... existing fields
  facebookPostId String?  // Store Facebook post ID for tracking
  facebookPostUrl String? // Store Facebook post URL for direct access
}
```

Migration has been applied automatically.

## How to Use

### Publishing to Facebook

1. **Edit a Blog Post**: Navigate to `/cms/blog-posts/[id]/edit`
2. **Ensure Post is Published**: The post must be in "PUBLISHED" status
3. **Click "Publish to Facebook"**: Button appears in the header and sidebar
4. **Monitor Status**: The system will:
   - Check if the post already exists on Facebook
   - Create a new post or update existing one
   - Save Facebook post ID and URL to database
   - Show success/error message

### Facebook Post Content

The system automatically creates Facebook posts with:

```
✈️ [Blog Post Title]

[Blog Post Excerpt]

🔗 Read the full guide: [Blog Post URL]

#TravelPhilippines #GalaGPT #TravelGuide #TagsFromPost
```

### Status Indicators

- **Blog List Page**: Shows "Facebook" badge for posts shared to Facebook
- **Blog Edit Page**: Shows Facebook status in header and sidebar
- **Direct Links**: Click to view the Facebook post directly

## API Endpoints

### POST `/api/cms/webhook/facebook-new`

Publishes a blog post to Facebook.

**Request Body:**
```json
{
  "postId": "blog_post_id",
  "action": "publish"  // or "unpublish"
}
```

**Response:**
```json
{
  "success": true,
  "action": "created", // or "updated"
  "facebookPostId": "fb_post_id",
  "facebookPostUrl": "https://facebook.com/...",
  "message": "Blog post successfully created on Facebook!"
}
```

## Troubleshooting

### Common Issues

1. **"Facebook credentials not configured"**
   - Check `.env.local` has correct `FB_PAGE_ID` and `FB_PAGE_ACCESS_TOKEN`
   - Restart the development server after adding env variables

2. **"Failed to post to Facebook"**
   - Verify Facebook Page Access Token is valid and not expired
   - Check token has required permissions: `pages_manage_posts`
   - Ensure you have admin access to the Facebook page

3. **"Blog post must be published first"**
   - Change blog post status to "PUBLISHED" before posting to Facebook
   - Only published posts can be shared to social media

4. **Duplicate Posts**
   - The system prevents duplicates by checking `facebookPostId`
   - If a post already exists, it will be updated instead of creating new

### Testing

1. **Local Development**: 
   - Server runs on `http://localhost:3001`
   - Use a test Facebook page for development
   - Consider using Facebook's test environment

2. **Verify Integration**:
   - Create a test blog post
   - Publish it (status = PUBLISHED)
   - Click "Publish to Facebook"
   - Check Facebook page for the post
   - Verify database has `facebookPostId` and `facebookPostUrl`

## Security Considerations

- Store Facebook tokens securely in environment variables
- Use long-lived tokens (60 days) for production
- Consider implementing token refresh logic for production use
- Restrict Facebook app permissions to minimum required
- Monitor API usage limits

## Production Deployment

1. **Environment Variables**: Set up Facebook credentials in production environment
2. **Domain Verification**: Verify your production domain with Facebook
3. **App Review**: Submit Facebook app for review if needed for public use
4. **Token Management**: Implement token refresh logic for long-term operation

## File Structure

```
app/
├── api/cms/webhook/facebook-new/route.ts  # Facebook posting API
├── cms/blog-posts/[id]/edit/page.tsx      # Edit page with Facebook button
└── cms/blog-posts/page.tsx                # List page with Facebook status

lib/
├── facebook.ts                            # Facebook API helper functions
└── prisma.ts                             # Database client

prisma/
└── schema.prisma                          # Database schema with Facebook fields
```

## Next Steps

- Consider adding Facebook post scheduling
- Add Instagram posting integration
- Implement post analytics tracking
- Add bulk Facebook posting for multiple posts
- Create Facebook posting automation rules
