Facebook auto-post integration (minimal)

Environment variables (set these in your deployment or .env):
- FB_PAGE_ID: Facebook Page ID to post to
- FB_PAGE_ACCESS_TOKEN: Long-lived Page access token with pages_manage_posts permission
- SITE_HOST or NEXT_PUBLIC_SITE_URL: public URL of your site (used to build blog URL)

Files added:
- `lib/facebook.ts` - helper that uploads a photo and creates a feed post
- `app/api/fb-post/route.ts` - Next.js API route. POST { slug } to post the blog at /blog/{slug}
- `scripts/post-to-fb.js` - simple CLI helper to call the API route (useful for local testing)

Quick local test (run dev server first):
1. Set env vars (PowerShell):
   $env:FB_PAGE_ID = "<your-page-id>"; $env:FB_PAGE_ACCESS_TOKEN = "<your-token>"; $env:SITE_HOST = "http://localhost:3000"
2. Start Next dev server: `npm run dev`
3. Run the script: `node scripts/post-to-fb.js filipino-street-food-guide`

Notes:
- The code extracts the title and the header Image src from the blog's `page.tsx` file by simple regex. It assumes the first `Image` src in the header is the hero image.
- The API uses the Page token directly. Never commit tokens to source control.
- For production use, add error handling, retries, and validate images are publicly accessible.
