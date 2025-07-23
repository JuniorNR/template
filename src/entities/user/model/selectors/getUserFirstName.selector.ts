import { createSelector } from '@reduxjs/toolkit';

import { getUser } from './getUser.selector';

export const getUserFirstName = createSelector(
  getUser,
  (user) => user.firstName,
);
