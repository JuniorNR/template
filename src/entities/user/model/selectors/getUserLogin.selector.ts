import { createSelector } from '@reduxjs/toolkit';

import { getUser } from './getUser.selector';

export const getUserLogin = createSelector(getUser, (user) => user.login);
