import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BedroomBabyIcon from '@mui/icons-material/BedroomBaby';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import WeekendIcon from '@mui/icons-material/Weekend';
import WorkIcon from '@mui/icons-material/Work';

import { AppRoutes, AppRoutesNotifications } from '@/shared/lib';

import type { SidebarList } from '../../model/types/sidebar.types';

export const sidebarList: SidebarList = [
  {
    icon: <AccountBoxIcon />,
    title: 'Profile',
    url: AppRoutes.PROFILE,
    notificationsUrl: AppRoutesNotifications.PROFILE_NOTIFICATIONS,
    notificationsCount: 2,
  },
  {
    icon: <SelfImprovementIcon />,
    title: 'Myself',
    url: AppRoutes.MYSELF,
    notificationsUrl: AppRoutesNotifications.MYSELF_NOTIFICATIONS,
    notificationsCount: 0,
    disabled: true,
  },
  {
    icon: <FamilyRestroomIcon />,
    title: 'Family',
    url: AppRoutes.FAMILY,
    notificationsUrl: AppRoutesNotifications.FAMILY_NOTIFICATIONS,
    notificationsCount: 99,
    disabled: true,
  },
  {
    icon: <BedroomBabyIcon />,
    title: 'Child',
    url: AppRoutes.CHILD,
    notificationsUrl: AppRoutesNotifications.CHILD_NOTIFICATIONS,
    notificationsCount: 2415,
    disabled: true,
  },
  {
    icon: <WorkIcon />,
    title: 'Work',
    notificationsUrl: AppRoutesNotifications.WORK_NOTIFICATIONS,
    url: AppRoutes.WORK,
    disabled: true,
  },
  {
    icon: <WeekendIcon />,
    title: 'Chilling',
    notificationsUrl: AppRoutesNotifications.CHILLING_NOTIFICATIONS,
    url: AppRoutes.CHILLING,
    disabled: true,
  },
  {
    icon: <ListAltIcon />,
    title: 'Todos',
    notificationsUrl: AppRoutesNotifications.TODOS_NOTIFICATIONS,
    url: AppRoutes.TODOS,
  },
  {
    icon: <EmojiEventsIcon />,
    title: 'Achievements',
    notificationsUrl: AppRoutesNotifications.ACHIEVEMENTS_NOTIFICATIONS,
    url: AppRoutes.ACHIEVEMENTS,
    disabled: true,
  },
];
