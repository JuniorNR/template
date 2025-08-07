/* eslint-disable no-console */
import {
  useGetUserQuery,
  useUpdatePublicFieldsMutation,
  useUpdatePrivateFieldsMutation,
  useUpdatePasswordMutation,
} from '../api';

import type { User, UserPasswordFields } from '../types';

export const useUser = () => {
  const { data: user, isLoading, error } = useGetUserQuery();
  const [updateUserPublicFields, { isLoading: isUpdatingPublicFields }] =
    useUpdatePublicFieldsMutation();
  const [updateUserPrivateFields, { isLoading: isUpdatingPrivateFields }] =
    useUpdatePrivateFieldsMutation();
  const [updateUserPassword, { isLoading: isUpdatingPassword }] =
    useUpdatePasswordMutation();

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
    updateUserPublicFieldsData,
    updateUserPrivateFieldsData,
    updateUserPasswordData,
    isUpdatingPublicFields,
    isUpdatingPrivateFields,
    isUpdatingPassword,
  };
};
