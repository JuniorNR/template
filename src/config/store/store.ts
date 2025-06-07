import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import userReducer from '../../entities/user/model/slice/user.slice';

import type { AppStore } from './types/store.types';

export const makeStore = () => {
  const rootReducer = {
    user: userReducer,
  };
  return configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
  });
};

export const wrapperStore = createWrapper<AppStore>(makeStore);
