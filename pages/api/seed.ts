// pages/api/seed.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Simple security check - require a seed key
  const { seedKey } = req.body;
  if (!seedKey || seedKey !== process.env.SEED_KEY) {
    return res.status(403).json({ message: 'Forbidden - Invalid seed key' });
  }

  try {
    // Create default admin user
    const adminPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD || 'admin123', 10);
    const admin = await prisma.user.upsert({
      where: { email: process.env.ADMIN_EMAIL || 'admin@balloond.com' },
      update: {
        password: adminPassword, // Update password if user exists
        name: 'Admin User',
        role: 'ADMIN',
      },
      create: {
        email: process.env.ADMIN_EMAIL || 'admin@balloond.com',
        password: adminPassword,
        name: 'Admin User',
        role: 'ADMIN',
      },
    });

    // Create default site content
    const defaultContent = [
      {
        id: 'hero-headline',
        section: 'Homepage Hero',
        title: 'Main Headline',
        content: 'One pop away from what you\'ve been waiting for',
        published: true,
      },
      {
        id: 'hero-subtitle',
        section: 'Homepage Hero',
        title: 'Subtitle',
        content: 'Break through the noise of modern dating. Pop the balloon of small talk and endless swiping with authentic, fun connections.',
        published: true,
      },
      {
        id: 'about-mission',
        section: 'About Page',
        title: 'Mission Statement',
        content: 'Balloon\'d is built on the belief that anyone looking for love should be able to find it. We\'re changing the game by putting voice and personality first.',
        published: true,
      },
      {
        id: 'careers-intro',
        section: 'Careers Page',
        title: 'Page Introduction',
        content: 'Help us create a world where authentic connections flourish. We\'re building the future of dating, one meaningful match at a time.',
        published: true,
      },
    ];

    for (const content of defaultContent) {
      await prisma.siteContent.upsert({
        where: { id: content.id },
        update: {},
        create: {
          ...content,
          createdById: admin.id,
        },
      });
    }

    res.status(200).json({ 
      message: 'Database seeded successfully',
      admin: {
        email: process.env.ADMIN_EMAIL || 'admin@balloond.com',
        // Don't return password for security
      }
    });

  } catch (error) {
    console.error('Seed error:', error);
    res.status(500).json({ 
      message: 'Error seeding database', 
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  } finally {
    await prisma.$disconnect();
  }
}
