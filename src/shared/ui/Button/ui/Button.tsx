import type { FC } from 'react';
import { Button as MuiButton } from '@mui/material';

import { classNames } from '@/helpers';

import styles from './Button.module.scss';

import type { ButtonProps } from '../model/types/Button.types';

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <MuiButton
      className={classNames(styles.button)}
      {...props}
    >
      {children}
    </MuiButton>
  );
};
