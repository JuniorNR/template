'use client';
import { usePathname } from 'next/navigation';
import { type FC } from 'react';

import { classNames } from '@/helpers';

import { NavigationMenuHorizontalItem } from './NavigationMenuHorizontalItem';

import styles from './NavigationMenuHorizontal.module.scss';

import type { NavigationMenuHorizontalProps } from '../model/types/NavigationMenuHorizontal.types';

export const NavigationMenuHorizontal: FC<NavigationMenuHorizontalProps> = ({
  items,
}) => {
  const path = usePathname();

  const renderItems = () => {
    return items.map((item) => {
      return (
        <NavigationMenuHorizontalItem
          key={item.url}
          {...item}
          path={path}
        />
      );
    });
  };

  return (
    <ul className={classNames(styles.navigationMenuHorizontal)}>
      {renderItems()}
    </ul>
  );
};
