# Vercel Blob Image Upload Setup

## 🔧 **Getting Your Vercel Blob Token**

### **Step 1: Create Vercel Blob Store**

1. **Go to your Vercel Dashboard**: https://vercel.com/dashboard
2. **Select your project**: `tarana-travel-planner`
3. **Go to Storage tab**
4. **Click "Create Database"**
5. **Select "Blob"**
6. **Choose a name**: `tarana-images` (or any name you prefer)
7. **Click "Create"**

### **Step 2: Get Your Token**

1. **After creating the blob store**, you'll see environment variables
2. **Copy the `BLOB_READ_WRITE_TOKEN`**
3. **Add it to your project**:

**Option A: Local Development**
```env
# Add to your .env file
BLOB_READ_WRITE_TOKEN="vercel_blob_rw_XXXXXXXXX_XXXXXXXXX"
```

**Option B: Vercel Production**
1. Go to **Settings > Environment Variables**
2. Add **`BLOB_READ_WRITE_TOKEN`** with your token value
3. **Redeploy** your project

## 🎯 **How Image Upload Works**

### **Features Added:**
✅ **Drag & Drop Upload** - Drag images directly into the CMS  
✅ **Click to Upload** - Traditional file picker  
✅ **Manual URL Entry** - Paste existing image URLs  
✅ **Image Preview** - See images before publishing  
✅ **Auto-generated Filenames** - Organized with timestamps  
✅ **Error Handling** - Graceful failure handling  

### **Upload Process:**
1. **User selects/drops image** in CMS
2. **Image uploads to Vercel Blob** (your storage)
3. **Public URL returned** and saved to blog post
4. **Image accessible** from anywhere on the internet
5. **Facebook auto-posting** uses the Vercel Blob URL

### **File Organization:**
- **Path**: `blog-images/timestamp-filename.ext`
- **Example**: `blog-images/1694234567890-baguio-sunset.jpg`
- **Public Access**: All uploaded images are publicly accessible

## 💡 **Benefits:**

✅ **Free Tier**: Generous free usage (1GB storage, 5GB bandwidth)  
✅ **Global CDN**: Fast image delivery worldwide  
✅ **Auto-optimization**: Vercel optimizes images automatically  
✅ **Secure**: No need to manage storage infrastructure  
✅ **Integrated**: Works seamlessly with your Vercel deployment  

## 🎨 **Usage in CMS:**

### **Creating Blog Posts:**
1. **Go to** `/cms/blog-posts/new`
2. **Featured Image section** now has:
   - Drag & drop area
   - File picker button
   - Manual URL input (for external images)
3. **Upload image** and it automatically saves the URL
4. **Publish post** and image appears in Facebook auto-posts

### **Image Management:**
- **Remove images** by clicking the X button
- **Replace images** by uploading new ones
- **Mixed usage** - some uploaded, some external URLs

## 🔍 **Testing:**

After adding your token:
1. **Restart your development server**
2. **Go to** `/cms/blog-posts/new`
3. **Try uploading an image** in the Featured Image section
4. **Verify the image appears** and saves correctly
5. **Create a test blog post** with uploaded image
6. **Check Facebook auto-posting** works with new image

## 📁 **File Structure:**

```
Vercel Blob Store: tarana-images/
├── blog-images/
│   ├── 1694234567890-baguio-sunset.jpg
│   ├── 1694234568123-siargao-beach.png
│   └── 1694234569456-manila-food.webp
└── (future folders for other content types)
```

## 🚨 **Important Notes:**

- **Token Security**: Never commit your blob token to Git
- **File Limits**: Default 10MB per file (configurable)
- **Formats**: Supports all common image formats
- **Bandwidth**: Monitor usage in Vercel dashboard
- **Backup**: Consider backing up important images

---

**Ready to use!** Once you add your `BLOB_READ_WRITE_TOKEN`, your CMS will have professional image upload capabilities! 📸
