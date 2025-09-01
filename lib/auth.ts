// lib/auth.ts
import { SignJWT, jwtVerify, type JWTPayload } from 'jose';
import { NextRequest } from 'next/server';
import bcrypt from 'bcryptjs';
import { prisma } from './prisma';

const secret = new TextEncoder().encode(
  process.env.JWT_SECRET || 'your-secret-key-change-this-in-production'
);

export interface UserPayload {
  id: string;
  email: string;
  name: string;
  role: 'ADMIN' | 'EDITOR';
  [key: string]: unknown; // <-- Add this for jose JWTPayload compatibility
}

export async function signJWT(payload: UserPayload): Promise<string> {
  // SignJWT expects a JWTPayload (index signature), so this is now type-safe
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(secret);
}

export async function verifyJWT(token: string): Promise<UserPayload> {
  const { payload } = await jwtVerify(token, secret);
  return payload as UserPayload;
}

export async function authenticateUser(email: string, password: string): Promise<UserPayload | null> {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return null;
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return null;
    }

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role as 'ADMIN' | 'EDITOR',
    };
  } catch (error) {
    console.error('Authentication error:', error);
    return null;
  }
}

export async function getUserFromRequest(request: NextRequest): Promise<UserPayload | null> {
  try {
    const token = request.cookies.get('auth-token')?.value;
    if (!token) {
      return null;
    }

    return await verifyJWT(token);
  } catch (error) {
    return null;
  }
}

export function hasPermission(userRole: 'ADMIN' | 'EDITOR', requiredRole: 'ADMIN' | 'EDITOR'): boolean {
  if (requiredRole === 'EDITOR') {
    return userRole === 'ADMIN' || userRole === 'EDITOR';
  }
  return userRole === 'ADMIN';
}