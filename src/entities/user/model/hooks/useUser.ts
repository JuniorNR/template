/* eslint-disable no-console */
import {
  useGetUserQuery,
  useUpdatePublicFieldsMutation,
  useUpdatePrivateFieldsMutation,
  useUpdatePasswordMutation,
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
} from '../api/user.api';
import { localStorageAuth } from '../lib/localStorageAuth';

import type {
  User,
  UserPasswordFields,
  RegisterUserData,
  LoginRequest,
} from '../types';

export const useUser = () => {
  const { data: user, isLoading, error } = useGetUserQuery();
  const [updateUserPublicFields, { isLoading: isUpdatingPublicFields }] =
    useUpdatePublicFieldsMutation();
  const [updateUserPrivateFields, { isLoading: isUpdatingPrivateFields }] =
    useUpdatePrivateFieldsMutation();
  const [updateUserPassword, { isLoading: isUpdatingPassword }] =
    useUpdatePasswordMutation();
  const [registerUser, { isLoading: isRegisteringUser }] =
    useRegisterUserMutation();
  const [loginUser, { isLoading: isLoggingInUser }] = useLoginUserMutation();
  const [logoutUser, { isLoading: isLoggingOutUser }] = useLogoutUserMutation();

  const registerUserData = async (userData: RegisterUserData) => {
    try {
      const { user, token } = await registerUser(userData).unwrap();
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
      const data = await loginUser(userData).unwrap();
      if (data.token) {
        localStorageAuth.saveToken(data.token);
      }
      return data.user;
    } catch (error) {
      console.error('Failed to login user:', error);
      throw error;
    }
  };

  const logoutUserData = async () => {
    try {
      const data = await logoutUser().unwrap();
      if (data.code === 'LOGOUT_SUCCESS') {
        localStorageAuth.removeToken();
      }
      return data;
    } catch (error) {
      console.error('Failed to logout user:', error);
      throw error;
    }
  };

  const updateUserPublicFieldsData = async (userData: Partial<User>) => {
    try {
      const updatedUser = await updateUserPublicFields(userData).unwrap();
      return updatedUser;
    } catch (error) {
      console.error('Failed to update user:', error);
      throw error;
    }
  };

  const updateUserPrivateFieldsData = async (userData: Partial<User>) => {
    try {
      const updatedUser = await updateUserPrivateFields(userData).unwrap();
      return updatedUser;
    } catch (error) {
      console.error('Failed to update user:', error);
      throw error;
    }
  };

  const updateUserPasswordData = async (userData: UserPasswordFields) => {
    try {
      const updatedUser = await updateUserPassword(userData).unwrap();
      return {
        user: updatedUser,
        isSuccess: true,
        message: 'Password updated successfully',
      };
    } catch (error) {
      console.error('Failed to update user:', error);
      throw error;
    }
  };

  return {
    user,
    isLoading,
    error,
    registerUserData,
    loginUserData,
    updateUserPublicFieldsData,
    updateUserPrivateFieldsData,
    updateUserPasswordData,
    logoutUserData,
    isUpdatingPublicFields,
    isUpdatingPrivateFields,
    isUpdatingPassword,
    isRegisteringUser,
    isLoggingInUser,
    isLoggingOutUser,
  };
};
