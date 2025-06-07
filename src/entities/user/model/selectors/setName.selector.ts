import { createSelector } from '@reduxjs/toolkit';

import { getUser } from './getUser.selector';

export const setName = createSelector(getUser, (user) => user.name);
