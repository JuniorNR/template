'use client';
import type { FC } from 'react';
import { useRouter } from 'next/navigation';

import { useAuth } from '@/entities';
import { Question } from '@/shared/ui';

import styles from './LogoutForm.module.scss';

export const LogoutForm: FC = () => {
  const { logoutData } = useAuth();
  const router = useRouter();
  const onConfirm = async () => {
    const response = await logoutData();
    if (response.code === 'LOGOUT_SUCCESS') {
      // router.push('/login');
      // router.replace('/login', { scroll: false });
      window.location.href = '/login';
    }
  };
  return (
    <div className={styles.logoutForm}>
      <Question
        title='Logout'
        description='Are you sure you want to logout?'
        onConfirm={onConfirm}
      />
    </div>
  );
};
