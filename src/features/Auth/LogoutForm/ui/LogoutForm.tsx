import type { FC } from 'react';
import { useRouter } from 'next/navigation';

import { localStorageAuth } from '@/entities';
import { handleFetch } from '@/shared/lib';
import { Question } from '@/shared/ui';

import styles from './LogoutForm.module.scss';

export const LogoutForm: FC = () => {
  const router = useRouter();
  const onConfirm = async () => {
    const response = await handleFetch<object, { code: string }>(
      '/user/logout',
      {
        method: 'POST',
      },
    );

    if (response.code === 'LOGOUT_SUCCESS') {
      localStorageAuth.removeToken();
      router.push('/login');
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
