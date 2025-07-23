import { createSlice, type PayloadAction } from '@reduxjs/toolkit/react';

import type { User } from '../types';

const initialState: User = {
  id: 0,
  firstName: '',
  middleName: '',
  lastName: '',
  email: '',
  login: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    setMiddleName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
  },
});

export const { actions: userActions } = userSlice;
export default userSlice.reducer;
