import { createSelector } from '@reduxjs/toolkit';

import { getUser } from './getUser.selector';

export const getUserMiddleName = createSelector(
  getUser,
  (user) => user.middleName,
);
