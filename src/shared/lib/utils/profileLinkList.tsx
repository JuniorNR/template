'use client';

import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import InfoIcon from '@mui/icons-material/Info';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';

import type { NavigationMenuHorizontalProps } from '@/shared';

import { AppRoutesProfile } from './appRouter.utils';
import { ApiRoutes } from '../api';
import { handleFetch } from '../helpers';

export const ProfileLinkList: Omit<
  NavigationMenuHorizontalProps['items'],
  'path'
> = [
  {
    icon: <InfoIcon />,
    title: 'Info',
    notifications: 1,
    url: AppRoutesProfile.INFO,
  },
  {
    icon: <SettingsApplicationsIcon />,
    title: 'Settings',
    notifications: 0,
    url: AppRoutesProfile.SETTINGS,
  },
  {
    icon: <NotificationImportantIcon />,
    title: 'Notifications',
    notifications: 0,
    url: AppRoutesProfile.NOTIFICATIONS,
  },
  {
    icon: <ExitToAppIcon />,
    title: 'Log out',
    notifications: 1532,
    url: AppRoutesProfile.LOGOUT,
  },
];
