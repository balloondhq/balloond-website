// pages/api/blog/[id].ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';
import { verifyJWT, hasPermission } from '../../../lib/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const postId = parseInt(id as string);

  if (isNaN(postId)) {
    return res.status(400).json({ message: 'Invalid post ID' });
  }

  try {
    if (req.method === 'GET') {
      // Get single blog post (public if published)
      const post = await prisma.blogPost.findUnique({
        where: { id: postId },
        include: {
          createdBy: {
            select: { name: true, email: true }
          }
        }
      });

      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }

      return res.status(200).json({ post });
    }

    if (req.method === 'PUT') {
      // Update blog post
      const token = req.cookies['auth-token'];
      if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
      }

      const user = await verifyJWT(token);
      if (!hasPermission(user.role, 'EDITOR')) {
        return res.status(403).json({ message: 'Insufficient permissions' });
      }

      const existingPost = await prisma.blogPost.findUnique({
        where: { id: postId }
      });

      if (!existingPost) {
        return res.status(404).json({ message: 'Post not found' });
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
        image,
        featured,
        published,
      } = req.body;

      const post = await prisma.blogPost.update({
        where: { id: postId },
        data: {
          slug,
          title,
          excerpt,
          content,
          author,
          authorBio,
          category,
          tags,
          readTime,
          image,
          featured,
          published,
          publishedAt: published && !existingPost.published ? new Date() : existingPost.publishedAt,
        },
      });

      return res.status(200).json({ post });
    }

    if (req.method === 'DELETE') {
      // Delete blog post
      const token = req.cookies['auth-token'];
      if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
      }

      const user = await verifyJWT(token);
      if (!hasPermission(user.role, 'ADMIN')) {
        return res.status(403).json({ message: 'Admin permission required' });
      }

      await prisma.blogPost.delete({
        where: { id: postId }
      });

      return res.status(200).json({ message: 'Post deleted successfully' });
    }

    return res.status(405).json({ message: 'Method not allowed' });
  } catch (error) {
    console.error('Blog API error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
