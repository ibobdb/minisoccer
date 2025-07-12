'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/better-auth.context';

/**
 * Hook to redirect authenticated users away from auth pages
 */
export function useRedirectAuthenticated() {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Wait until auth state is loaded and user is authenticated
    if (!isLoading && isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, isLoading, router]);

  return { isAuthenticated, isLoading };
}

/**
 * Hook to get auth state, simplified version without real authentication
 */
export function useAuthState() {
  const { isAuthenticated, user, isLoading } = useAuth();

  return {
    isAuthenticated,
    user,
    loading: isLoading,
  };
}

export { useAuth };
