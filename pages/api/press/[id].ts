import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from '../../../lib/auth';
import { prisma } from '../../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'Invalid press ID' });
  }

  const pressId = parseInt(id);

  try {
    switch (req.method) {
      case 'GET':
        const pressItem = await prisma.press.findUnique({
          where: { id: pressId },
        });

        if (!pressItem) {
          return res.status(404).json({ error: 'Press item not found' });
        }

        // Only return published items to non-authenticated users
        const session = await getSession(req);
        if (!session && !pressItem.published) {
          return res.status(404).json({ error: 'Press item not found' });
        }

        return res.status(200).json(pressItem);

      case 'PUT':
        const authSession = await getSession(req);
        
        if (!authSession || (authSession.role !== 'ADMIN' && authSession.role !== 'EDITOR')) {
          return res.status(401).json({ error: 'Unauthorized' });
        }

        const { title, excerpt, content, link, type, category, date, published } = req.body;

        const updatedPress = await prisma.press.update({
          where: { id: pressId },
          data: {
            title,
            excerpt,
            content,
            link,
            type,
            category,
            date: date ? new Date(date) : undefined,
            published,
            publishedAt: published && req.body.published !== published ? new Date() : undefined,
          }
        });

        return res.status(200).json(updatedPress);

      case 'DELETE':
        const deleteSession = await getSession(req);
        
        if (!deleteSession || deleteSession.role !== 'ADMIN') {
          return res.status(401).json({ error: 'Unauthorized' });
        }

        await prisma.press.delete({
          where: { id: pressId }
        });

        return res.status(204).end();

      default:
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('Press API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
