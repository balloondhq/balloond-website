# Vercel Blob Storage Setup

## ✅ What's Been Done

1. **Installed @vercel/blob package** - Added to dependencies
2. **Created new upload endpoint** - `/api/upload/image-blob.ts` for persistent storage
3. **Updated admin panel** - Now uses Vercel Blob instead of local storage
4. **Fixed API endpoints** - Blog posts now save image URLs to database

## 🔧 Next Steps (Required)

### 1. Set Environment Variable in Vercel

Since you've already created the Blob store in Vercel, you need to add the token:

1. Go to your Vercel Dashboard
2. Navigate to your project settings
3. Go to "Environment Variables"
4. Add: `BLOB_READ_WRITE_TOKEN` = `your-blob-token-from-vercel`

### 2. For Local Development (Optional)

Add the same token to your `.env.local`:
```env
BLOB_READ_WRITE_TOKEN="your-blob-token-from-vercel"
```

## 🎉 What This Fixes

- **✅ Images persist through deployments** - No more lost files!
- **✅ Database saves image URLs** - References are stored permanently
- **✅ Blog posts display images** - Both listing and detail pages
- **✅ Related posts show images** - Enhanced visual experience

## 🔍 Testing

1. Go to `/admin` and login
2. Create or edit a blog post
3. Upload an image - it will now be stored in Vercel Blob
4. Publish the post
5. View it on `/blog` - image should display
6. After any redeployment, images will still be there!

## 📁 File Structure

```
pages/api/upload/
├── image.ts          <- Old (local storage, will be deleted on deploy)
└── image-blob.ts     <- New (Vercel Blob, persistent) ✅
```

The admin panel now automatically uses the new persistent blob storage endpoint.
