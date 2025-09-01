// pages/api/upload/image.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { verifyJWT, hasPermission } from '../../../lib/auth';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

// Disable bodyParser to handle multipart data
export const config = {
  api: {
    bodyParser: false,
  },
};

// Ensure uploads directory exists
const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

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
      uploadDir: uploadsDir,
      keepExtensions: true,
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

    // Generate a unique filename
    const timestamp = Date.now();
    const originalName = file.originalFilename || 'upload';
    const extension = path.extname(originalName);
    const fileName = `${timestamp}-${originalName.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
    const finalPath = path.join(uploadsDir, fileName);

    // Move the file to the final location
    fs.renameSync(file.filepath, finalPath);

    // Return the public URL
    const publicUrl = `/uploads/${fileName}`;

    return res.status(200).json({
      message: 'File uploaded successfully',
      url: publicUrl,
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
