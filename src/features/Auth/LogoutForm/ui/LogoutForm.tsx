'use client';
import type { FC } from 'react';
import { useRouter } from 'next/navigation';

import { useAuth } from '@/entities';
import { Question } from '@/shared/ui';

export const LogoutForm: FC = () => {
  const { logoutData } = useAuth();
  const router = useRouter();
  const onConfirm = async () => {
    const response = await logoutData();
    if (response.code === 'LOGOUT_SUCCESS') {
      router.push('/login');
    }
  };
  return (
    <div>
      <Question
        title='Logout'
        description='Are you sure you want to logout?'
        onConfirm={onConfirm}
      />
    </div>
  );
};
