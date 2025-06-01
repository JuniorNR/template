'use client';

import type { FC } from 'react';
import { Typography } from '@mui/material';

import { classNames } from '@/helpers';
import { Button } from '@/ui';

import styles from './page.module.scss';

const Home: FC = () => {
  return (
    <div>
      <Typography component='div'>123</Typography>
      <Button
        variant='contained'
        title='Узнать подробнее'
      >
        Узнать подробнее
      </Button>
    </div>
  );
};

export default Home;
