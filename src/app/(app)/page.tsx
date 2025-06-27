'use server';
import { type FC } from 'react';

import type { Metadata } from 'next/types';

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: 'Main page',
  };
};

const Home: FC = () => {
  return <div>page</div>;
};

export default Home;
