import { createSelector } from '@reduxjs/toolkit';

import { getUser } from './getUser.selector';

export const getUserLastName = createSelector(getUser, (user) => user.lastName);
