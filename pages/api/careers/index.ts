// pages/api/careers/index.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';
import { verifyJWT, hasPermission } from '../../../lib/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      // Public endpoint - get published career positions
      const careers = await prisma.career.findMany({
        where: { published: true },
        orderBy: { datePosted: 'desc' },
        include: {
          createdBy: {
            select: { name: true, email: true }
          }
        }
      });

      return res.status(200).json({ careers });
    }

    if (req.method === 'POST') {
      // Protected endpoint - create new career position
      const token = req.cookies['auth-token'];
      if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
      }

      const user = await verifyJWT(token);
      if (!hasPermission(user.role, 'EDITOR')) {
        return res.status(403).json({ message: 'Insufficient permissions' });
      }

      const {
        title,
        department,
        location,
        type,
        description,
        requirements,
        responsibilities,
        published,
      } = req.body;

      const career = await prisma.career.create({
        data: {
          title,
          department,
          location,
          type: type || 'Full-time',
          description,
          requirements: requirements || [],
          responsibilities: responsibilities || [],
          published: published || false,
          publishedAt: published ? new Date() : null,
          createdById: user.id,
        },
      });

      return res.status(201).json({ career });
    }

    return res.status(405).json({ message: 'Method not allowed' });
  } catch (error) {
    console.error('Career API error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
