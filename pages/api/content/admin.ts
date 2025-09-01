// pages/api/content/admin.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';
import { verifyJWT, hasPermission } from '../../../lib/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      // Admin endpoint - get all site content (including unpublished)
      const token = req.cookies['auth-token'];
      if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
      }

      const user = await verifyJWT(token);
      if (!hasPermission(user.role, 'EDITOR')) {
        return res.status(403).json({ message: 'Insufficient permissions' });
      }

      const content = await prisma.siteContent.findMany({
        orderBy: { createdAt: 'asc' },
      });

      return res.status(200).json({ content });
    }

    return res.status(405).json({ message: 'Method not allowed' });
  } catch (error) {
    console.error('Content admin API error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
