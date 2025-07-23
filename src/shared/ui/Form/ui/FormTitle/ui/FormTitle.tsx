import type { FC } from 'react';
import { Typography } from '@mui/material';

import { classNames } from '@/shared/lib';

import styles from './FormTitle.module.scss';

import type { FormTitleProps } from '../model/types/FormTitle.types';

export const FormTitle: FC<FormTitleProps> = ({
  text,
  // loading,
  statusForm,
}) => {
  return (
    <Typography
      className={classNames(styles.formTitle, {
        [styles.success]: statusForm === 'success',
        [styles.error]: statusForm === 'error',
      })}
      variant='h2'
    >
      {text}
    </Typography>
  );
};
