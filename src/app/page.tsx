'use client';

import type { FC } from 'react';
import { Typography } from '@mui/material';

import { Button } from '@/ui';

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
