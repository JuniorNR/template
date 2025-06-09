import type { FC } from 'react';
import { Button as MuiButton } from '@mui/material';

import { classNames } from '@/helpers';

import styles from './Button.module.scss';

import type { ButtonProps } from '../model/types/Button.types';

export const Button: FC<ButtonProps> = ({
  children,
  // additionalClasses,
  ...props
}) => {
  // const hashedAdditionalClasses = additionalClasses?.map((additionalClass) => {
  //   return styles[additionalClass];
  // });
  return (
    <MuiButton
      className={classNames(styles.button)}
      data-testid='button'
      {...props}
    >
      {children}
    </MuiButton>
  );
};
