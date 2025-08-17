import { type FC } from 'react';

import { classNames } from '@/shared/lib';

import styles from './dropdownContent.module.scss';

import type { DropdownContentProps } from '../model/types/dropdownContent.types';

export const DropdownContent: FC<DropdownContentProps> = ({
  isOpen,
  children,
}) => {
  return (
    <div
      className={classNames(styles.dropdownContent, {
        [styles.dropdownContentOpen]: isOpen,
      })}
    >
      {children}
    </div>
  );
};
