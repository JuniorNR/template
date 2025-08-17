'use client';
import { useState, type FC } from 'react';

import { DropdownContent } from '../DropdownContent';
import { DropdownHeader } from '../DropdownHeader';

import styles from './dropdown.module.scss';

import type { DropdownProps } from '../model/types/dropdown.types';

export const Dropdown: FC<DropdownProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const handleToggleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className={styles.dropdown}>
      <div
        className={styles.dropdownHeader}
        onClick={handleToggleOpen}
      >
        <DropdownHeader
          title={title}
          isOpen={isOpen}
        />
      </div>
      <DropdownContent
        isOpen={isOpen}
        // height={height}
      >
        {children}
      </DropdownContent>
    </div>
  );
};
