import type { FC } from 'react';

import type { PageProps } from '@/types';

import type { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: 'Settings',
};

const SettingsPage: FC<PageProps> = async ({ params }) => {
  const { alias } = await params;
  return (
    <div>
      <p>settings {alias}</p>
    </div>
  );
};

export default SettingsPage;
