import { createAuthClient } from 'better-auth/react';
import type { Session, User } from '@/lib/auth';

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL || 'http://localhost:3000',
});

export const { signIn, signUp, signOut, useSession, getSession } = authClient;

export type { Session, User };
