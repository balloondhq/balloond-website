// pages/api/upload/image-blob.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { verifyJWT, hasPermission } from '../../../lib/auth';
import { put } from '@vercel/blob';
import formidable from 'formidable';
import fs from 'fs';

// Disable bodyParser to handle multipart data
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Check authentication
    const token = req.cookies['auth-token'];
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const user = await verifyJWT(token);
    if (!hasPermission(user.role, 'EDITOR')) {
      return res.status(403).json({ message: 'Insufficient permissions' });
    }

    // Parse the form data
    const form = formidable({
      maxFileSize: 5 * 1024 * 1024, // 5MB limit
      filter: ({ mimetype }) => {
        // Only allow images
        return Boolean(mimetype && mimetype.startsWith('image/'));
      },
    });

    const [fields, files] = await form.parse(req);
    const file = Array.isArray(files.file) ? files.file[0] : files.file;

    if (!file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // Read the file
    const fileBuffer = fs.readFileSync(file.filepath);
    const originalName = file.originalFilename || 'upload';
    const timestamp = Date.now();
    const fileName = `blog-images/${timestamp}-${originalName.replace(/[^a-zA-Z0-9.-]/g, '_')}`;

    // Upload to Vercel Blob
    const blob = await put(fileName, fileBuffer, {
      access: 'public',
      contentType: file.mimetype || 'image/jpeg',
    });

    // Clean up temp file
    fs.unlinkSync(file.filepath);

    return res.status(200).json({
      message: 'File uploaded successfully',
      url: blob.url,
      filename: fileName,
    });

  } catch (error) {
    console.error('Upload error:', error);
    return res.status(500).json({ 
      message: 'Upload failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
