// pages/api/careers/[id].ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';
import { verifyJWT, hasPermission } from '../../../lib/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const careerId = parseInt(id as string);

  if (isNaN(careerId)) {
    return res.status(400).json({ message: 'Invalid career ID' });
  }

  try {
    if (req.method === 'GET') {
      // Get single career position (public if published)
      const career = await prisma.career.findUnique({
        where: { id: careerId },
        include: {
          createdBy: {
            select: { name: true, email: true }
          }
        }
      });

      if (!career) {
        return res.status(404).json({ message: 'Career position not found' });
      }

      return res.status(200).json({ career });
    }

    if (req.method === 'PUT') {
      // Update career position
      const token = req.cookies['auth-token'];
      if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
      }

      const user = await verifyJWT(token);
      if (!hasPermission(user.role, 'EDITOR')) {
        return res.status(403).json({ message: 'Insufficient permissions' });
      }

      const existingCareer = await prisma.career.findUnique({
        where: { id: careerId }
      });

      if (!existingCareer) {
        return res.status(404).json({ message: 'Career position not found' });
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

      const career = await prisma.career.update({
        where: { id: careerId },
        data: {
          title,
          department,
          location,
          type,
          description,
          requirements,
          responsibilities,
          published,
          publishedAt: published && !existingCareer.published ? new Date() : existingCareer.publishedAt,
        },
      });

      return res.status(200).json({ career });
    }

    if (req.method === 'DELETE') {
      // Delete career position
      const token = req.cookies['auth-token'];
      if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
      }

      const user = await verifyJWT(token);
      if (!hasPermission(user.role, 'ADMIN')) {
        return res.status(403).json({ message: 'Admin permission required' });
      }

      await prisma.career.delete({
        where: { id: careerId }
      });

      return res.status(200).json({ message: 'Career position deleted successfully' });
    }

    return res.status(405).json({ message: 'Method not allowed' });
  } catch (error) {
    console.error('Career API error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
