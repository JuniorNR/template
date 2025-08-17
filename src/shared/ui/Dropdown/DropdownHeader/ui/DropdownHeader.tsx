import type { FC } from 'react';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

import { classNames } from '@/shared/lib';

import { Typography } from '../../../Typography';

import styles from './dropdownHeader.module.scss';

import type { DropdownHeaderProps } from '../model/types/dropdownHeader.types';

export const DropdownHeader: FC<DropdownHeaderProps> = ({ title, isOpen }) => {
  return (
    <div className={styles.dropdownHeader}>
      <Typography
        className={styles.dropdownHeaderTitle}
        variant='h3'
      >
        {title}
      </Typography>
      <ArrowBackIosNewOutlinedIcon
        className={classNames(styles.dropdownHeaderArrow, {
          [styles.dropdownHeaderArrowOpen]: isOpen,
        })}
      />
    </div>
  );
};
