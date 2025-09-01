// pages/api/content/index.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';
import { verifyJWT, hasPermission } from '../../../lib/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      // Public endpoint - get published site content
      const content = await prisma.siteContent.findMany({
        where: { published: true },
        orderBy: { createdAt: 'asc' },
      });

      return res.status(200).json({ content });
    }

    if (req.method === 'POST') {
      // Protected endpoint - create new site content
      const token = req.cookies['auth-token'];
      if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
      }

      const user = await verifyJWT(token);
      if (!hasPermission(user.role, 'ADMIN')) {
        return res.status(403).json({ message: 'Admin permission required' });
      }

      const { section, title, content: contentText, published } = req.body;

      const newContent = await prisma.siteContent.create({
        data: {
          section,
          title,
          content: contentText,
          published: published || false,
          publishedAt: published ? new Date() : null,
          createdById: user.id,
        },
      });

      return res.status(201).json({ content: newContent });
    }

    return res.status(405).json({ message: 'Method not allowed' });
  } catch (error) {
    console.error('Content API error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
