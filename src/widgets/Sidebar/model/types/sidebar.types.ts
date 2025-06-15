import type { SidebarItemProps } from '../../ui/SidebarItem/model/types/SidebarItem.types';

export type SidebarList = Omit<SidebarItemProps, 'disabled' | 'active'>[];

export interface SidebarProps {
  sidebarList: SidebarList;
}
