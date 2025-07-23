export enum AppRoutes {
  MAIN = '/',
  NOT_FOUND = '/not-found',
  PROFILE = '/profile',
  MYSELF = '/myself',
  FAMILY = '/family',
  CHILD = '/child',
  WORK = '/work',
  CHILLING = '/chilling',
  TODOS = '/todos',
  ACHIEVEMENTS = '/achievements',
}

export enum AppRoutesNotifications {
  PROFILE_NOTIFICATIONS = '/profile/notifications',
  MYSELF_NOTIFICATIONS = '/myself/notifications',
  FAMILY_NOTIFICATIONS = '/family/notifications',
  CHILD_NOTIFICATIONS = '/child/notifications',
  WORK_NOTIFICATIONS = '/work/notifications',
  CHILLING_NOTIFICATIONS = '/chilling/notifications',
  TODOS_NOTIFICATIONS = '/todos/notifications',
  ACHIEVEMENTS_NOTIFICATIONS = '/achievements/notifications',
}

export enum AppRoutesProfile {
  INFO = AppRoutes.PROFILE,
  NOTIFICATIONS = AppRoutesNotifications.PROFILE_NOTIFICATIONS,
  SETTINGS = AppRoutes.PROFILE + '/settings',
  LOG_OUT = AppRoutes.PROFILE + '/log-out',
}
