import { useDispatch, useSelector } from 'react-redux';

import type { AppDispatch, AppState } from '../types/store.types';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = <T>(selector: (state: AppState) => T) =>
  useSelector<AppState, T>(selector);
