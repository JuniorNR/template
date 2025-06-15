import type { AppRoutes, AppRoutesNotifications } from '@/shared/types';

export interface SidebarItemProps {
  icon: React.ReactNode;
  title: string;
  url: AppRoutes;
  notificationsUrl: AppRoutesNotifications;
  active: boolean;
  notificationsCount?: number;
  disabled?: boolean;
}
