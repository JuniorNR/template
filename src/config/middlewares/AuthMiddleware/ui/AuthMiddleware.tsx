'use client';
/* eslint-disable no-console */

import type { FC } from 'react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Loader } from '@/shared/ui';

import { checkAuthStatus } from '../lib/authUtils';

export const AuthMiddleware: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const { isAuthenticated, error } = checkAuthStatus();

      if (!isAuthenticated) {
        console.debug('Authentication failed:', error);
        router.push('/login');
        return;
      }

      setIsAuthenticated(true);
      setIsLoading(false);
    };

    checkAuth();
  }, [router]);

  // Показываем загрузку пока проверяем аутентификацию
  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  // Если не аутентифицирован, не render children
  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
};
