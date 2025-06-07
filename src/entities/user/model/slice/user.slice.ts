import { createSlice, type PayloadAction } from '@reduxjs/toolkit/react';

interface User {
  name: string;
}

const initialState: User = {
  name: 'Oleg',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { actions: userActions } = userSlice;
export default userSlice.reducer;
