'use client';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BedroomBabyIcon from '@mui/icons-material/BedroomBaby';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import WeekendIcon from '@mui/icons-material/Weekend';
import WorkIcon from '@mui/icons-material/Work';
import { render } from '@testing-library/react';

import { AppRoutes, AppRoutesNotifications } from '@/shared/types';
import type { SidebarList } from '@/widgets';
import { Sidebar } from '@/widgets';

jest.mock('next/navigation');

describe('Sidebar', () => {
  it('Should render', () => {
    const sidebarList: SidebarList = [
      {
        icon: <AccountBoxIcon />,
        title: 'Profile',
        url: AppRoutes.PROFILE,
        notificationsUrl: AppRoutesNotifications.PROFILE_NOTIFICATIONS,
        notificationsCount: 1,
      },
      {
        icon: <SelfImprovementIcon />,
        title: 'Myself',
        url: AppRoutes.MYSELF,
        notificationsUrl: AppRoutesNotifications.MYSELF_NOTIFICATIONS,
        notificationsCount: 0,
      },
      {
        icon: <FamilyRestroomIcon />,
        title: 'Family',
        url: AppRoutes.FAMILY,
        notificationsUrl: AppRoutesNotifications.FAMILY_NOTIFICATIONS,
        notificationsCount: 99,
      },
      {
        icon: <BedroomBabyIcon />,
        title: 'Child',
        url: AppRoutes.CHILD,
        notificationsUrl: AppRoutesNotifications.CHILD_NOTIFICATIONS,
        notificationsCount: 2415,
      },
      {
        icon: <WorkIcon />,
        title: 'Work',
        notificationsUrl: AppRoutesNotifications.WORK_NOTIFICATIONS,
        url: AppRoutes.WORK,
      },
      {
        icon: <WeekendIcon />,
        title: 'Chilling',
        notificationsUrl: AppRoutesNotifications.CHILLING_NOTIFICATIONS,
        url: AppRoutes.CHILLING,
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
      },
    ];
    const { getByTestId } = render(<Sidebar sidebarList={sidebarList} />);
    const sidebar = getByTestId('sidebar');
    expect(sidebar).toHaveClass('sidebar');
    expect(sidebar).toBeInTheDocument();
  });

  it('Should render all  items and redirect by click on item if not disabled', async () => {
    // TODO: Дописать
    const sidebarList: SidebarList = [
      {
        icon: <AccountBoxIcon />,
        title: 'Profile',
        url: AppRoutes.PROFILE,
        notificationsUrl: AppRoutesNotifications.PROFILE_NOTIFICATIONS,
        notificationsCount: 1,
      },
      {
        icon: <SelfImprovementIcon />,
        title: 'Myself',
        url: AppRoutes.MYSELF,
        notificationsUrl: AppRoutesNotifications.MYSELF_NOTIFICATIONS,
        notificationsCount: 0,
      },
      {
        icon: <FamilyRestroomIcon />,
        title: 'Family',
        url: AppRoutes.FAMILY,
        notificationsUrl: AppRoutesNotifications.FAMILY_NOTIFICATIONS,
        notificationsCount: 99,
      },
      {
        icon: <BedroomBabyIcon />,
        title: 'Child',
        url: AppRoutes.CHILD,
        notificationsUrl: AppRoutesNotifications.CHILD_NOTIFICATIONS,
        notificationsCount: 2415,
      },
      {
        icon: <WorkIcon />,
        title: 'Work',
        notificationsUrl: AppRoutesNotifications.WORK_NOTIFICATIONS,
        url: AppRoutes.WORK,
      },
      {
        icon: <WeekendIcon />,
        title: 'Chilling',
        notificationsUrl: AppRoutesNotifications.CHILLING_NOTIFICATIONS,
        url: AppRoutes.CHILLING,
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
      },
    ];

    const { getByTestId } = render(<Sidebar sidebarList={sidebarList} />);
    const listElements = [];

    for (let i = 0; i < sidebarList.length; i++) {
      listElements.push(getByTestId('sidebar-item' + sidebarList[i].url));
    }

    for (const listElement of listElements) {
      expect(listElement).toBeInTheDocument();
      expect(listElement).toHaveClass('sidebarItemInner');
      expect(listElement).not.toHaveClass('disabled');
    }

    expect(8).toBe(listElements.length);

    for (let i = 0; i < listElements.length; i++) {
      expect(listElements[i]).toHaveAttribute('href', sidebarList[i].url);
    }
  });
});
