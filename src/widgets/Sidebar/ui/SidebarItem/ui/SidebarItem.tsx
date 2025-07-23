import Link from 'next/link';
import { useState, type FC } from 'react';

import { classNames, AppRoutes } from '@/shared/lib';

import styles from './sidebarItem.module.scss';

import type { SidebarItemProps } from '../model/types/SidebarItem.types';

export const SidebarItem: FC<SidebarItemProps> = ({
  icon,
  title,
  url,
  notificationsUrl,
  active,
  disabled = false,
  notificationsCount,
}) => {
  const [onFocusItem, setOnFocusItem] = useState<boolean>(false);
  const [onFocusBadge, setOnFocusBadge] = useState<boolean>(false);

  const renderSidebar = () => {
    if (disabled) {
      return (
        <div
          className={classNames(styles.sidebarItemInner, {}, [styles.disabled])}
        >
          {icon}
          <p>{title}</p>
        </div>
      );
    }

    return (
      <Link
        className={classNames(styles.sidebarItemInner, {
          [styles.active]: active,
          [styles.focused]: onFocusItem,
        })}
        data-testid={'sidebar-item' + url}
        href={active ? AppRoutes.MAIN : url}
        tabIndex={0}
        onFocus={() => setOnFocusItem(true)}
        onBlur={() => setOnFocusItem(false)}
      >
        {icon}
        <p>{title}</p>
      </Link>
    );
  };

  const renderBadgeCount = () => {
    if (!notificationsCount) {
      return null;
    }

    if (disabled) {
      return (
        <div className={classNames(styles.badge, {}, [styles.badgeDisabled])}>
          {notificationsCount}
        </div>
      );
    }

    return (
      <Link
        className={classNames(styles.badge, {
          [styles.focused]: onFocusBadge,
        })}
        href={notificationsUrl}
        tabIndex={0}
        onBlur={() => setOnFocusBadge(false)}
        onFocus={() => setOnFocusBadge(true)}
      >
        {notificationsCount}
      </Link>
    );
  };

  return (
    <li className={classNames(styles.sidebarItem)}>
      {renderBadgeCount()}
      {renderSidebar()}
    </li>
  );
};
