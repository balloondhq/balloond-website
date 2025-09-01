// pages/api/blog/index.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';
import { verifyJWT, hasPermission } from '../../../lib/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      // Public endpoint - get published blog posts
      const posts = await prisma.blogPost.findMany({
        where: { published: true },
        orderBy: { createdAt: 'desc' },
        include: {
          createdBy: {
            select: { name: true, email: true }
          }
        }
      });

      return res.status(200).json({ posts });
    }

    if (req.method === 'POST') {
      // Protected endpoint - create new blog post
      const token = req.cookies['auth-token'];
      if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
      }

      const user = await verifyJWT(token);
      if (!hasPermission(user.role, 'EDITOR')) {
        return res.status(403).json({ message: 'Insufficient permissions' });
      }

      const {
        slug,
        title,
        excerpt,
        content,
        author,
        authorBio,
        category,
        tags,
        readTime,
        featured,
        published,
      } = req.body;

      const post = await prisma.blogPost.create({
        data: {
          slug,
          title,
          excerpt,
          content,
          author,
          authorBio: authorBio || '',
          category,
          tags: tags || [],
          readTime: readTime || '5 min read',
          featured: featured || false,
          published: published || false,
          publishedAt: published ? new Date() : null,
          createdById: user.id,
        },
      });

      return res.status(201).json({ post });
    }

    return res.status(405).json({ message: 'Method not allowed' });
  } catch (error) {
    console.error('Blog API error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
