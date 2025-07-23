'use client';
import type { FC } from 'react';
import { usePathname } from 'next/navigation';

import { classNames } from '@/shared/lib';

import { SidebarItem } from './SidebarItem';

import styled from './sidebar.module.scss';

import type { SidebarProps } from '../model/types/sidebar.types';

export const Sidebar: FC<SidebarProps> = ({ sidebarList }) => {
  const router = usePathname();
  let currentPage = '/';
  if (router?.length > 1) {
    currentPage += router?.split('/')[1];
  }

  return (
    <nav
      data-testid='sidebar'
      className={classNames(styled.sidebar)}
    >
      <ul data-testid='sidebar-ul'>
        {sidebarList.map((item) => (
          <SidebarItem
            key={item.title}
            data-testid='sidebar-li'
            icon={item.icon}
            title={item.title}
            url={item.url}
            notificationsUrl={item.notificationsUrl}
            active={currentPage === item.url}
            notificationsCount={item.notificationsCount}
            disabled={item.disabled}
          />
        ))}
      </ul>
    </nav>
  );
};
