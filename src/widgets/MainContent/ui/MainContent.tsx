import type { FC } from 'react';

import { classNames } from '@/shared/lib';

import { BreadCrumbs } from './BreadCrumbs/ui';

import styles from './mainContent.module.scss';

import type { MainContentProps } from '../model/types/MainContent.types';

export const MainContent: FC<MainContentProps> = ({ children }) => {
  return (
    <main className={classNames(styles.mainContent)}>
      <BreadCrumbs />
      {children}
    </main>
  );
};
