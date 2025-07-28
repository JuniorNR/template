import type { FC } from 'react';

import type { PageProps } from '@/types';

import type { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: 'Notifications',
};

const NotificationsPage: FC<PageProps> = ({ params }) => {
  return (
    <div>
      <p>notifications</p>
    </div>
  );
};

export default NotificationsPage;
