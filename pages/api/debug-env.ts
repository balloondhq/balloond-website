// pages/api/debug-env.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Simple security check - require a seed key
  const { seedKey } = req.query;
  if (!seedKey || seedKey !== process.env.SEED_KEY) {
    return res.status(403).json({ message: 'Forbidden - Invalid seed key' });
  }

  try {
    const envStatus = {
      DATABASE_URL: process.env.DATABASE_URL ? '✅ Set' : '❌ Missing',
      SEED_KEY: process.env.SEED_KEY ? '✅ Set' : '❌ Missing',
      ADMIN_EMAIL: process.env.ADMIN_EMAIL ? '✅ Set' : '🔶 Using default (admin@balloond.com)',
      ADMIN_PASSWORD: process.env.ADMIN_PASSWORD ? '✅ Set' : '🔶 Using default (admin123)',
      JWT_SECRET: process.env.JWT_SECRET ? '✅ Set' : '❌ Missing',
      NODE_ENV: process.env.NODE_ENV || 'unknown',
      VERCEL: process.env.VERCEL ? '✅ Running on Vercel' : '❌ Not on Vercel'
    };

    res.status(200).json({ 
      message: 'Environment variables status',
      environment: envStatus
    });

  } catch (error) {
    console.error('Debug error:', error);
    res.status(500).json({ 
      message: 'Error checking environment', 
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
