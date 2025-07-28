'use client';

import type { FC } from 'react';

import { LogoutForm } from '@/features';
import type { PageProps } from '@/types';

import styles from './page.module.scss';

const LogoutPage: FC<PageProps> = () => {
  return (
    <div className={styles.logout}>
      <LogoutForm />
    </div>
  );
};

export default LogoutPage;
