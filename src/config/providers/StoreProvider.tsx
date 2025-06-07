'use client';

import type { ReactNode } from 'react';
import { useRef } from 'react';
import { Provider } from 'react-redux';

import { makeStore } from '../store/store';

import type { AppStore } from '../store/types/store.types';

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};
