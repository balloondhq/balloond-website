// pages/api/content/[id].ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';
import { verifyJWT, hasPermission } from '../../../lib/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const contentId = id as string;

  try {
    if (req.method === 'GET') {
      // Get single content item (public if published)
      const content = await prisma.siteContent.findUnique({
        where: { id: contentId },
      });

      if (!content) {
        return res.status(404).json({ message: 'Content not found' });
      }

      return res.status(200).json({ content });
    }

    if (req.method === 'PUT') {
      // Update content item
      const token = req.cookies['auth-token'];
      if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
      }

      const user = await verifyJWT(token);
      if (!hasPermission(user.role, 'EDITOR')) {
        return res.status(403).json({ message: 'Insufficient permissions' });
      }

      const { section, title, content: contentText, published } = req.body;

      const existingContent = await prisma.siteContent.findUnique({
        where: { id: contentId }
      });

      if (!existingContent) {
        return res.status(404).json({ message: 'Content not found' });
      }

      const updatedContent = await prisma.siteContent.update({
        where: { id: contentId },
        data: {
          section,
          title,
          content: contentText,
          published,
          publishedAt: published && !existingContent.published ? new Date() : existingContent.publishedAt,
        },
      });

      return res.status(200).json({ content: updatedContent });
    }

    if (req.method === 'DELETE') {
      // Delete content item
      const token = req.cookies['auth-token'];
      if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
      }

      const user = await verifyJWT(token);
      if (!hasPermission(user.role, 'ADMIN')) {
        return res.status(403).json({ message: 'Admin permission required' });
      }

      await prisma.siteContent.delete({
        where: { id: contentId },
      });

      return res.status(200).json({ message: 'Content item deleted successfully' });
    }

    return res.status(405).json({ message: 'Method not allowed' });
  } catch (error) {
    console.error('Content API error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
