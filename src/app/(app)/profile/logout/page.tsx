'use client';

import type { FC } from 'react';

import { LogoutForm } from '@/features';
import { handleFetch } from '@/shared/lib';
import type { PageProps } from '@/types';

import styles from './page.module.scss';

const LogoutPage: FC<PageProps> = () => {
  const test = async () => {
    const response = await handleFetch<object, { code: string }>('/user', {
      method: 'GET',
    });
    console.debug(response);
  };
  return (
    <div className={styles.logout}>
      <button
        type='button'
        onClick={() => test()}
      >
        Logout
      </button>
      <LogoutForm />
    </div>
  );
};

export default LogoutPage;
