import { createSelector } from '@reduxjs/toolkit';

import { getUser } from './getUser.selector';

export const getUserEmail = createSelector(getUser, (user) => user.email);
