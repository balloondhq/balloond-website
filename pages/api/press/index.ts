import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      case 'GET':
        const pressItems = await prisma.press.findMany({
          where: { published: true },
          orderBy: { date: 'desc' },
          select: {
            id: true,
            title: true,
            excerpt: true,
            content: true,
            link: true,
            type: true,
            category: true,
            date: true,
          }
        });
        return res.status(200).json(pressItems);

      case 'POST':
        // This requires authentication - we'll check that here
        const authHeader = req.headers.authorization;
        
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
          return res.status(401).json({ error: 'Unauthorized' });
        }

        const { title, excerpt, content, link, type, category, date } = req.body;

        const newPress = await prisma.press.create({
          data: {
            title,
            excerpt,
            content,
            link,
            type,
            category,
            date: date ? new Date(date) : new Date(),
            published: false,
            createdById: req.headers['x-user-id'] as string, // Should come from auth middleware
          }
        });

        return res.status(201).json(newPress);

      default:
        res.setHeader('Allow', ['GET', 'POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('Press API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
