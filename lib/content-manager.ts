// lib/content-manager.ts
// Content management functions using Prisma and Neon Postgres

import { prisma } from './prisma';
import type { BlogPost as PrismaBlogPost, Career as PrismaCareer, SiteContent as PrismaSiteContent } from '@prisma/client';

// --------------- Types that match our Prisma schema ---------------

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorBio?: string;
  authorAvatar?: string;
  category: string;
  tags: string[];
  readTime: string;
  image?: string;
  featured: boolean;
  published: boolean;
  publishedAt?: Date | string;
  createdAt: Date | string;
  updatedAt: Date | string;
  createdById: string;
}

export interface Career {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  published: boolean;
  publishedAt?: Date | string;
  datePosted: Date | string;
  createdAt: Date | string;
  updatedAt: Date | string;
  createdById: string;
}

export interface SiteContent {
  id: string;
  section: string;
  title: string;
  content: string;
  published: boolean;
  publishedAt?: Date | string;
  createdAt: Date | string;
  updatedAt: Date | string;
  createdById: string;
}

// --------------- Blog Posts Management ---------------

// Get all published blog posts
export const getPublishedBlogPosts = async (): Promise<BlogPost[]> => {
  const posts = await prisma.blogPost.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' },
  });
  return posts.map((post) => ({
    ...post,
    createdAt: post.createdAt.toISOString(),
    updatedAt: post.updatedAt.toISOString(),
    publishedAt: post.publishedAt?.toISOString(),
  }));
};

// Get all blog posts (admin)
export const getAllBlogPosts = async (): Promise<BlogPost[]> => {
  const posts = await prisma.blogPost.findMany({
    orderBy: { createdAt: 'desc' },
  });
  return posts.map((post) => ({
    ...post,
    createdAt: post.createdAt.toISOString(),
    updatedAt: post.updatedAt.toISOString(),
    publishedAt: post.publishedAt?.toISOString(),
  }));
};

// Get a single blog post by slug
export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  const post = await prisma.blogPost.findUnique({ where: { slug } });
  return post ? {
    ...post,
    createdAt: post.createdAt.toISOString(),
    updatedAt: post.updatedAt.toISOString(),
    publishedAt: post.publishedAt?.toISOString(),
  } : null;
};

// Get blog post by ID
export const getBlogPostById = async (id: number): Promise<BlogPost | null> => {
  const post = await prisma.blogPost.findUnique({ where: { id } });
  return post ? {
    ...post,
    createdAt: post.createdAt.toISOString(),
    updatedAt: post.updatedAt.toISOString(),
    publishedAt: post.publishedAt?.toISOString(),
  } : null;
};

// --------------- Career Positions Management ---------------

// Get all published career positions
export const getPublishedCareers = async (): Promise<Career[]> => {
  const careers = await prisma.career.findMany({
    where: { published: true },
    orderBy: { datePosted: 'desc' },
  });
  return careers.map((career) => ({
    ...career,
    createdAt: career.createdAt.toISOString(),
    updatedAt: career.updatedAt.toISOString(),
    publishedAt: career.publishedAt?.toISOString(),
    datePosted: career.datePosted.toISOString(),
  }));
};

// Get all career positions (admin)
export const getAllCareers = async (): Promise<Career[]> => {
  const careers = await prisma.career.findMany({
    orderBy: { datePosted: 'desc' },
  });
  return careers.map((career) => ({
    ...career,
    createdAt: career.createdAt.toISOString(),
    updatedAt: career.updatedAt.toISOString(),
    publishedAt: career.publishedAt?.toISOString(),
    datePosted: career.datePosted.toISOString(),
  }));
};

// Get career by ID
export const getCareerById = async (id: number): Promise<Career | null> => {
  const career = await prisma.career.findUnique({ where: { id } });
  return career ? {
    ...career,
    createdAt: career.createdAt.toISOString(),
    updatedAt: career.updatedAt.toISOString(),
    publishedAt: career.publishedAt?.toISOString(),
    datePosted: career.datePosted.toISOString(),
  } : null;
};

// --------------- Site Content Management ---------------

// Get all published site content
export const getPublishedSiteContent = async (): Promise<SiteContent[]> => {
  const content = await prisma.siteContent.findMany({
    where: { published: true },
    orderBy: { createdAt: 'asc' },
  });
  return content.map((item) => ({
    ...item,
    createdAt: item.createdAt.toISOString(),
    updatedAt: item.updatedAt.toISOString(),
    publishedAt: item.publishedAt?.toISOString(),
  }));
};

// Get all site content (admin)
export const getAllSiteContent = async (): Promise<SiteContent[]> => {
  const content = await prisma.siteContent.findMany({
    orderBy: { createdAt: 'asc' },
  });
  return content.map((item) => ({
    ...item,
    createdAt: item.createdAt.toISOString(),
    updatedAt: item.updatedAt.toISOString(),
    publishedAt: item.publishedAt?.toISOString(),
  }));
};

// Get site content by ID
export const getSiteContentById = async (id: string): Promise<SiteContent | null> => {
  const content = await prisma.siteContent.findUnique({ where: { id } });
  return content ? {
    ...content,
    createdAt: content.createdAt.toISOString(),
    updatedAt: content.updatedAt.toISOString(),
    publishedAt: content.publishedAt?.toISOString(),
  } : null;
};
