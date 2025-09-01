// lib/content-manager.ts
// All content/data management now uses Prisma and Neon Postgres.
// All localStorage and default-data logic is removed.
// CRUD for BlogPost, JobPosition, and SiteContent is now database-backed.

import { prisma } from './prisma';

// --------------- Types ---------------

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorBio: string;
  authorAvatar: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
  status: 'published' | 'draft';
}

export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  status: 'active' | 'closed';
  datePosted: string;
}

export interface SiteContent {
  id: string;
  section: string;
  title: string;
  content: string;
  lastModified: string;
  status: 'published' | 'draft';
}

// --------------- Blog Posts Management ---------------

// Get all published blog posts
export const getPublishedBlogPosts = async (): Promise<BlogPost[]> => {
  const posts = await prisma.blogPost.findMany({
    where: { status: 'published' },
    orderBy: { date: 'desc' },
  });
  // Prisma will return tags as a string (JSON) if field is Json, so handle that if needed
  return posts.map((post) => ({
    ...post,
    tags: Array.isArray(post.tags) ? post.tags : JSON.parse(post.tags ?? '[]'),
  }));
};

// Get all blog posts (admin)
export const getAllBlogPosts = async (): Promise<BlogPost[]> => {
  const posts = await prisma.blogPost.findMany({
    orderBy: { date: 'desc' },
  });
  return posts.map((post) => ({
    ...post,
    tags: Array.isArray(post.tags) ? post.tags : JSON.parse(post.tags ?? '[]'),
  }));
};

// Get a single blog post by slug
export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  const post = await prisma.blogPost.findUnique({ where: { slug } });
  return post
    ? { ...post, tags: Array.isArray(post.tags) ? post.tags : JSON.parse(post.tags ?? '[]') }
    : null;
};

// Create blog post
export const createBlogPost = async (data: Omit<BlogPost, 'id'>): Promise<BlogPost> => {
  const created = await prisma.blogPost.create({
    data: {
      ...data,
      tags: JSON.stringify(data.tags),
    },
  });
  return { ...created, tags: Array.isArray(created.tags) ? created.tags : JSON.parse(created.tags ?? '[]') };
};

// Update blog post
export const updateBlogPost = async (id: string, updates: Partial<BlogPost>): Promise<BlogPost | null> => {
  const updated = await prisma.blogPost.update({
    where: { id },
    data: {
      ...updates,
      tags: updates.tags ? JSON.stringify(updates.tags) : undefined,
    },
  });
  return updated
    ? { ...updated, tags: Array.isArray(updated.tags) ? updated.tags : JSON.parse(updated.tags ?? '[]') }
    : null;
};

// Delete blog post
export const deleteBlogPost = async (id: string): Promise<boolean> => {
  await prisma.blogPost.delete({ where: { id } });
  return true;
};

// --------------- Job Positions Management ---------------

// Get all active job positions
export const getActiveJobPositions = async (): Promise<JobPosition[]> => {
  const jobs = await prisma.jobPosition.findMany({
    where: { status: 'active' },
    orderBy: { datePosted: 'desc' },
  });
  return jobs.map((job) => ({
    ...job,
    requirements: Array.isArray(job.requirements) ? job.requirements : JSON.parse(job.requirements ?? '[]'),
    responsibilities: Array.isArray(job.responsibilities) ? job.responsibilities : JSON.parse(job.responsibilities ?? '[]'),
  }));
};

// Get all job positions (admin)
export const getAllJobPositions = async (): Promise<JobPosition[]> => {
  const jobs = await prisma.jobPosition.findMany({
    orderBy: { datePosted: 'desc' },
  });
  return jobs.map((job) => ({
    ...job,
    requirements: Array.isArray(job.requirements) ? job.requirements : JSON.parse(job.requirements ?? '[]'),
    responsibilities: Array.isArray(job.responsibilities) ? job.responsibilities : JSON.parse(job.responsibilities ?? '[]'),
  }));
};

// Get a single job position by id
export const getJobPositionById = async (id: string): Promise<JobPosition | null> => {
  const job = await prisma.jobPosition.findUnique({ where: { id } });
  return job
    ? {
        ...job,
        requirements: Array.isArray(job.requirements) ? job.requirements : JSON.parse(job.requirements ?? '[]'),
        responsibilities: Array.isArray(job.responsibilities) ? job.responsibilities : JSON.parse(job.responsibilities ?? '[]'),
      }
    : null;
};

// Create job position
export const createJobPosition = async (data: Omit<JobPosition, 'id'>): Promise<JobPosition> => {
  const created = await prisma.jobPosition.create({
    data: {
      ...data,
      requirements: JSON.stringify(data.requirements),
      responsibilities: JSON.stringify(data.responsibilities),
    },
  });
  return {
    ...created,
    requirements: Array.isArray(created.requirements) ? created.requirements : JSON.parse(created.requirements ?? '[]'),
    responsibilities: Array.isArray(created.responsibilities) ? created.responsibilities : JSON.parse(created.responsibilities ?? '[]'),
  };
};

// Update job position
export const updateJobPosition = async (
  id: string,
  updates: Partial<JobPosition>
): Promise<JobPosition | null> => {
  const updated = await prisma.jobPosition.update({
    where: { id },
    data: {
      ...updates,
      requirements: updates.requirements ? JSON.stringify(updates.requirements) : undefined,
      responsibilities: updates.responsibilities ? JSON.stringify(updates.responsibilities) : undefined,
    },
  });
  return updated
    ? {
        ...updated,
        requirements: Array.isArray(updated.requirements) ? updated.requirements : JSON.parse(updated.requirements ?? '[]'),
        responsibilities: Array.isArray(updated.responsibilities) ? updated.responsibilities : JSON.parse(updated.responsibilities ?? '[]'),
      }
    : null;
};

// Delete job position
export const deleteJobPosition = async (id: string): Promise<boolean> => {
  await prisma.jobPosition.delete({ where: { id } });
  return true;
};

// --------------- Site Content Management ---------------

// Get all published site content
export const getPublishedSiteContent = async (): Promise<SiteContent[]> => {
  const content = await prisma.siteContent.findMany({
    where: { status: 'published' },
    orderBy: { lastModified: 'desc' },
  });
  return content;
};

// Get all site content (admin)
export const getAllSiteContent = async (): Promise<SiteContent[]> => {
  const content = await prisma.siteContent.findMany({
    orderBy: { lastModified: 'desc' },
  });
  return content;
};

// Get site content by id
export const getSiteContentById = async (id: string): Promise<SiteContent | null> => {
  return await prisma.siteContent.findUnique({ where: { id } });
};

// Update site content
export const updateSiteContent = async (
  id: string,
  updates: Partial<SiteContent>
): Promise<SiteContent | null> => {
  const updated = await prisma.siteContent.update({
    where: { id },
    data: {
      ...updates,
      lastModified: new Date().toISOString().split('T')[0],
    },
  });
  return updated;
};

// Create site content
export const addSiteContent = async (content: Omit<SiteContent, 'lastModified'>): Promise<SiteContent> => {
  const created = await prisma.siteContent.create({
    data: {
      ...content,
      lastModified: new Date().toISOString().split('T')[0],
    },
  });
  return created;
};

// Delete site content
export const deleteSiteContent = async (id: string): Promise<boolean> => {
  await prisma.siteContent.delete({ where: { id } });
  return true;
};