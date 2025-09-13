'use client';

import { createContext, useContext, ReactNode } from 'react';
import { useSession } from '@/lib/auth-client';
import type { Session, User } from 'better-auth';

interface AuthContextType {
  session: Session | null;
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const { data, isPending: isLoading } = useSession();

  const contextValue: AuthContextType = {
    session: data?.session || null,
    user: data?.user || null,
    isLoading,
    isAuthenticated: !!data?.user,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
