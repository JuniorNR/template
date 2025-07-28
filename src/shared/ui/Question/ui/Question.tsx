import type { FC } from 'react';
import { Typography } from '@mui/material';

import { Button } from '../../Button';

import styles from './Question.module.scss';

import type { QuestionProps } from '../model/types/Question.types';

export const Question: FC<QuestionProps> = ({
  title,
  description,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className={styles.question}>
      <Typography
        className={styles.title}
        variant='h3'
      >
        {title}
      </Typography>
      <Typography className={styles.description}>{description}</Typography>
      <div className={styles.buttons}>
        <Button onClick={onConfirm}>Confirm</Button>
        {onCancel ?
          <Button onClick={onCancel}>Cancel</Button>
        : null}
      </div>
    </div>
  );
};
