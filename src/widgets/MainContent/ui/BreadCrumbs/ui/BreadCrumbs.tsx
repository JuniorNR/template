'use client';
import { Typography } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, type FC } from 'react';

import { classNames } from '@/shared/lib';

import { TESTS_PATH } from '../model/utils/BreadCrumbs.utils';

import styles from './BreadCrumbs.module.scss';

export const BreadCrumbs: FC = () => {
  const [pathToRedirect, setPathToRedirect] = useState<string>(''); // TODO: Разобраться с ссылками
  const path = usePathname() || TESTS_PATH;

  const renderBreadCrumbs = () => {
    const splittedPaths = path.split('/').filter(Boolean);
    return splittedPaths.map((splittedPath, index) => {
      if (pathToRedirect !== path) {
        return (
          <Link
            key={splittedPath}
            className={classNames(styles.breadCrumbsItem)}
            href={pathToRedirect}
            tabIndex={0}
            data-testid={`breadcrumbs-item-${index}`}
            onMouseEnter={() => {
              setPathToRedirect(splittedPaths.slice(0, index + 1).join('/'));
            }}
            onFocus={() => {
              setPathToRedirect(splittedPaths.slice(0, index + 1).join('/'));
            }}
          >
            <Typography>{splittedPath}</Typography>
          </Link>
        );
      }

      return (
        <div
          key={splittedPath}
          className={classNames(styles.breadCrumbsItem)}
          tabIndex={-1}
          data-testid={`breadcrumbs-item-${index}`}
          onMouseEnter={() => {
            setPathToRedirect(splittedPaths.slice(0, index + 1).join('/'));
          }}
          onFocus={() => {
            setPathToRedirect(splittedPaths.slice(0, index + 1).join('/'));
          }}
        >
          <Typography>{splittedPath}</Typography>
        </div>
      );
    });
  };

  return (
    <div
      data-testid='breadcrumbs'
      className={classNames(styles.breadCrumbs)}
    >
      {renderBreadCrumbs()}
    </div>
  );
};
