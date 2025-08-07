import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { authApi, todoApi, userApi } from '@/entities';

import type { AppStore } from './types/store.types';

export const makeStore = () => {
  const rootReducer = {
    [userApi.reducerPath]: userApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [todoApi.reducerPath]: todoApi.reducer,
  };
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        userApi.middleware,
        authApi.middleware,
        todoApi.middleware,
      ),
    devTools: process.env.NODE_ENV !== 'production',
  });
};

export const wrapperStore = createWrapper<AppStore>(makeStore);
