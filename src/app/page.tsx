'use client';

import type { FC } from 'react';

import { RatingStar } from '@/features';

const Home: FC = () => {
  return (
    <div>
      <RatingStar rating={1} />
    </div>
  );
};

export default Home;
