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

    return res.status(405).json({ message: 'Method not allowed' });
  } catch (error) {
    console.error('Content API error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
