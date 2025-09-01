// pages/api/auth/me.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { verifyJWT } from '../../../lib/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const token = req.cookies['auth-token'];
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const user = await verifyJWT(token);
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}
