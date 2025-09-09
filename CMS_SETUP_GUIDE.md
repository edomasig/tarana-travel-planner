# TaraNa Travel CMS Setup Guide

## 🎯 **Overview**

Your custom CMS is now ready! This system provides a simple but powerful content management interface for your travel blog and guides, integrated with your existing Facebook auto-posting functionality.

## 🏗️ **What's Included**

### ✅ **Database Schema (Prisma)**
- **BlogPost** model with SEO fields, tags, and status management
- **TravelGuide** model with destination-specific fields
- **Tag** system for categorization
- **User** model for authentication (future)

### ✅ **API Routes**
- `/api/cms/blog-posts` - CRUD operations for blog posts
- `/api/cms/travel-guides` - CRUD operations for travel guides  
- `/api/cms/tags` - Tag management
- `/api/cms/webhook/facebook` - Facebook auto-posting integration

### ✅ **Admin Interface**
- `/cms` - Dashboard overview
- `/cms/blog-posts` - Blog post management
- `/cms/blog-posts/new` - Create new blog posts
- `/cms/travel-guides` - Travel guide management
- `/cms/tags` - Tag management

### ✅ **Facebook Integration**
- **Automatic posting** when blog posts are published
- **Webhook system** to trigger your existing `postToFacebook.js` script
- **Seamless integration** with your current Facebook posting workflow

## 🚀 **Getting Started**

### **Step 1: Set Up Vercel PostgreSQL Database**

1. **Go to your Vercel Dashboard**
2. **Select your project** (tarana-travel-planner)
3. **Go to Storage tab**
4. **Create a new PostgreSQL database**
5. **Copy the environment variables** and add them to your project

### **Step 2: Update Environment Variables**

Add these to your Vercel project environment variables:
```env
POSTGRES_URL="your-postgres-url"
POSTGRES_PRISMA_URL="your-postgres-prisma-url"
POSTGRES_URL_NON_POOLING="your-non-pooling-url"
POSTGRES_USER="your-username"
POSTGRES_HOST="your-host"
POSTGRES_PASSWORD="your-password"
POSTGRES_DATABASE="your-database"
```

### **Step 3: Update Prisma Schema for Production**

Update `prisma/schema.prisma`:
```prisma
datasource db {
  provider = "postgresql"
  url = env("POSTGRES_PRISMA_URL") // uses connection pooling
  directUrl = env("POSTGRES_URL_NON_POOLING") // uses a direct connection
}
```

### **Step 4: Deploy and Run Migrations**

```bash
# Deploy to Vercel
vercel --prod

# Run database migrations (in Vercel dashboard or via CLI)
npx prisma migrate deploy
```

## 📝 **How to Use**

### **Creating Blog Posts**

1. **Go to** `/cms/blog-posts/new`
2. **Fill in** title, content, excerpt, SEO fields
3. **Add tags** and featured image
4. **Save as draft** or **publish immediately**
5. **Published posts** automatically trigger Facebook posting!

### **Managing Content**

- **View all posts**: `/cms/blog-posts`
- **Edit posts**: Click edit button on any post
- **Delete posts**: Click delete button (with confirmation)
- **Filter posts**: By status (draft, published, archived)
- **Search posts**: By title

### **Facebook Auto-Posting**

When you publish a blog post through the CMS:
1. **CMS creates** the blog post in database
2. **Webhook triggers** your `postToFacebook.js` script
3. **Facebook post** is created automatically with image, title, and URL
4. **Same duplicate prevention** and features as your manual script

## 🔧 **Content Structure**

### **Blog Posts Include:**
- Title, slug, content, excerpt
- Featured image URL
- SEO meta title and description
- Publication status and date
- Tags for categorization

### **Travel Guides Include:**
- All blog post fields, plus:
- Destination name
- Multiple images (array)
- Best time to visit
- Budget range
- Duration and difficulty

## 🎨 **Customization**

### **Adding New Fields**
1. **Update Prisma schema** in `prisma/schema.prisma`
2. **Run migration**: `npx prisma migrate dev`
3. **Update API routes** in `app/api/cms/`
4. **Update forms** in CMS pages

### **Styling**
- **Uses Tailwind CSS** and shadcn/ui components
- **Modify components** in `app/cms/` directory
- **Add custom styles** as needed

## 🔒 **Security (Future Enhancement)**

For production, consider adding:
- **Authentication system** (NextAuth.js recommended)
- **Role-based access** control
- **API rate limiting**
- **Input validation** and sanitization

## 📊 **Current Features vs Future**

### ✅ **Working Now:**
- Complete CMS interface
- Database operations
- Facebook integration
- Content management
- Search and filtering

### 🔮 **Possible Future Additions:**
- User authentication
- Image upload to cloud storage
- Rich text editor (WYSIWYG)
- Content scheduling
- Analytics dashboard
- Bulk operations

## 🐛 **Troubleshooting**

### **Database Connection Issues**
- Ensure Vercel PostgreSQL is set up correctly
- Check environment variables are properly set
- Verify Prisma schema matches environment

### **Facebook Posting Not Working**
- Check webhook endpoint is accessible
- Verify `postToFacebook.js` script is in project root
- Ensure Facebook environment variables are set

### **CMS Pages Not Loading**
- Check API routes are deployed
- Verify Prisma client is generated
- Check browser console for errors

## 🎉 **You're Ready!**

Your custom CMS is now set up and ready to use! You can:

1. **Access the CMS** at `/cms`
2. **Create content** through the interface
3. **Automatically post** to Facebook when publishing
4. **Manage everything** from one dashboard

The system is designed to grow with your needs while keeping the simplicity you wanted for blog and travel guide management.

---

**Need help?** Check the browser console for errors or review the API responses for debugging information.
