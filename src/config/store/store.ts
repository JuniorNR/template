import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { userApi } from '@/entities/user';

import type { AppStore } from './types/store.types';

export const makeStore = () => {
  const rootReducer = {
    [userApi.reducerPath]: userApi.reducer,
  };
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(userApi.middleware),
    devTools: process.env.NODE_ENV !== 'production',
  });
};

export const wrapperStore = createWrapper<AppStore>(makeStore);
