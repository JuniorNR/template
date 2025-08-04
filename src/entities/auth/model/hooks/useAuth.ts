/* eslint-disable no-console */
import type { LoginRequest, RegisterRequest } from '@/entities/types';
import { localStorageAuth } from '@/entities/user';

import {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
} from '../api/auth.api';

export const useAuth = () => {
  const [register, { isLoading: isRegistering }] = useRegisterMutation();
  const [login, { isLoading: isAuthorizing }] = useLoginMutation();
  const [logout, { isLoading: isLoggingOut }] = useLogoutMutation();

  const registerData = async (registerData: RegisterRequest) => {
    try {
      const { user, token } = await register(registerData).unwrap();
      if (token) {
        localStorageAuth.saveToken(token);
      }
      return user;
    } catch (error) {
      console.error('Failed to register user:', error);
      throw error;
    }
  };

  const loginUserData = async (userData: LoginRequest) => {
    try {
      const { user, token } = await login(userData).unwrap();
      if (token) {
        localStorageAuth.saveToken(token);
      }
      return user;
    } catch (error) {
      console.error('Failed to authorize user:', error);
      throw error;
    }
  };

  const logoutData = async () => {
    try {
      const response = await logout().unwrap();
      localStorageAuth.removeToken();
      return response;
    } catch (error) {
      console.error('Failed to logout user:', error);
      throw error;
    }
  };

  return {
    registerData,
    loginUserData,
    logoutData,
    isRegistering,
    isAuthorizing,
    isLoggingOut,
  };
};
