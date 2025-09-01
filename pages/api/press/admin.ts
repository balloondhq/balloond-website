import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from '../../../lib/auth';
import { prisma } from '../../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession(req);
  
  if (!session || (session.role !== 'ADMIN' && session.role !== 'EDITOR')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    switch (req.method) {
      case 'GET':
        const pressItems = await prisma.press.findMany({
          orderBy: { createdAt: 'desc' },
          include: {
            createdBy: {
              select: {
                id: true,
                name: true,
                email: true,
              }
            }
          }
        });
        return res.status(200).json(pressItems);

      case 'POST':
        const { title, excerpt, content, link, type, category, date, published } = req.body;

        if (!title || !excerpt || !content) {
          return res.status(400).json({ error: 'Title, excerpt, and content are required' });
        }

        const newPress = await prisma.press.create({
          data: {
            title,
            excerpt,
            content,
            link,
            type: type || 'release',
            category,
            date: date ? new Date(date) : new Date(),
            published: published || false,
            publishedAt: published ? new Date() : null,
            createdById: session.userId,
          }
        });

        return res.status(201).json(newPress);

      default:
        res.setHeader('Allow', ['GET', 'POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('Press admin API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
