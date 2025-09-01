# Balloond Website Setup Instructions

## Database & Environment Setup

### 1. Update .env.local with your Neon database connection

Replace the DATABASE_URL in `.env.local` with your actual Neon Postgres connection string:

```bash
# Example Neon connection string:
DATABASE_URL="postgresql://username:password@ep-xyz-123456.us-east-2.aws.neon.tech/balloond?sslmode=require"

# Update JWT secret (generate a strong random string):
JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"

# Update admin credentials as desired:
ADMIN_EMAIL="admin@balloond.com"
ADMIN_PASSWORD="your-secure-password"
ADMIN_NAME="Admin User"
```

### 2. Push database schema to Neon

```bash
npm run db:push
```

This will create all the necessary tables in your Neon database.

### 3. Seed the database with initial data

```bash
npm run db:seed
```

This will create:
- Admin user account
- Sample blog posts
- Sample career listings
- Default site content

### 4. Start the development server

```bash
npm run dev
```

### 5. Access the admin panel

1. Navigate to `http://localhost:3000/admin`
2. Login with your admin credentials from `.env.local`
3. You can now:
   - Manage blog posts (create, edit, publish)
   - Manage career listings
   - Edit site content (admin only)
   - View all content with role-based permissions

## User Roles

- **ADMIN**: Full access to all content management features
- **EDITOR**: Can manage blog posts and careers, but not site content

## For Vercel Deployment

Add these environment variables to your Vercel project:
- `DATABASE_URL` (your Neon connection string)
- `JWT_SECRET` (same as local)
- `ADMIN_EMAIL` (for admin access)
- `ADMIN_PASSWORD` (for admin access)
- `ADMIN_NAME` (display name for admin)

## Key Features Implemented

✅ **Database-powered content management**
- All content stored in Neon Postgres
- No localStorage dependencies
- Persistent across deployments

✅ **Secure authentication**
- JWT-based authentication
- Role-based permissions (Admin/Editor)
- Secure password hashing

✅ **Full CRUD operations**
- Blog posts (create, read, update, delete)
- Career listings
- Site content management

✅ **Admin panel**
- Modern, responsive interface
- Role-based navigation
- Real-time content management

✅ **Public pages**
- Homepage with Hero, Features, Community sections
- Blog page with published posts
- Careers page with active listings
- All content sourced from database

## API Endpoints

### Public APIs
- `GET /api/blog` - Published blog posts
- `GET /api/careers` - Published career listings
- `GET /api/content` - Published site content

### Admin APIs (require authentication)
- `GET /api/blog/admin` - All blog posts (including drafts)
- `GET /api/careers/admin` - All career listings
- `GET /api/content/admin` - All site content
- `POST /api/blog` - Create blog post
- `PUT /api/blog/[id]` - Update blog post
- `DELETE /api/blog/[id]` - Delete blog post (admin only)
- Similar endpoints for careers and content

### Authentication APIs
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user info
