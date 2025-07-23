import Link from 'next/link';
import { useState, type FC } from 'react';

import { Typography } from '@/shared';
import { classNames } from '@/shared/lib';

import styles from './NavigationMenuHorizontalItem.module.scss';

import type { NavigationMenuHorizontalItemProps } from '../model/types/NavigationMenuHorizontalItem.types';

export const NavigationMenuHorizontalItem: FC<
  NavigationMenuHorizontalItemProps
> = ({ icon, title, url, notifications, disabled, path }) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const isActive = url === path;
  const isDisabled = disabled ?? false;
  const lengthByHover = hovered ? 0 : 10;
  // TODO: Дописать компонент badge
  // TODO: Дописать тесты
  const renderLink = () => {
    if (!isActive && !isDisabled) {
      return (
        <Link
          href={url}
          className={classNames(styles.navigationMenuHorizontalItemLink)}
          tabIndex={0}
        >
          {icon}
          <Typography
            component='h3'
            length={lengthByHover}
          >
            {title}
          </Typography>
        </Link>
      );
    }
    return (
      <div className={classNames(styles.navigationMenuHorizontalItemLink)}>
        {icon}
        <Typography
          component='h3'
          length={lengthByHover}
        >
          {title}
        </Typography>
      </div>
    );
  };

  return (
    <li
      className={classNames(styles.navigationMenuHorizontalItem, {
        [styles.active]: isActive,
        [styles.disabled]: isDisabled,
      })}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {renderLink()}
    </li>
  );
};
