import type { SidebarItemProps } from '../../ui/SidebarItem/model/types/SidebarItem.types';

export type SidebarList = Omit<SidebarItemProps, 'active'>[];

export interface SidebarProps {
  sidebarList: SidebarList;
}
