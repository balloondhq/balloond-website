// pages/api/blog/admin.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';
import { verifyJWT, hasPermission } from '../../../lib/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      // Admin endpoint - get all blog posts (including drafts)
      const token = req.cookies['auth-token'];
      if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
      }

      const user = await verifyJWT(token);
      if (!hasPermission(user.role, 'EDITOR')) {
        return res.status(403).json({ message: 'Insufficient permissions' });
      }

      const posts = await prisma.blogPost.findMany({
        orderBy: { createdAt: 'desc' },
        include: {
          createdBy: {
            select: { name: true, email: true }
          }
        }
      });

      return res.status(200).json({ posts });
    }

    return res.status(405).json({ message: 'Method not allowed' });
  } catch (error) {
    console.error('Blog admin API error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
