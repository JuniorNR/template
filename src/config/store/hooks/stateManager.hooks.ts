import { useDispatch, useSelector, useStore } from 'react-redux';

import type { AppDispatch, AppState, AppStore } from '../types/store.types';

export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppStore = useStore.withTypes<AppStore>();
