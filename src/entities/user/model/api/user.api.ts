import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQuery } from '@/api';
import { dto } from '@/shared/lib';
import type { ApiResponse } from '@/types';

import { localStorageAuth } from '../lib/localStorageAuth';

import type {
  User,
  UserDTO,
  UserPrivateFields,
  UserPublicFields,
  RegisterUserData,
  LoginRequest,
} from '../types';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery,
  tagTypes: ['User'],
  endpoints: (builder) => ({
    registerUser: builder.mutation<
      { user: User; token: string },
      RegisterUserData
    >({
      query: (userData) => ({
        url: '/register',
        method: 'POST',
        body: dto<RegisterUserData, UserDTO>('toServer', userData),
      }),
      transformResponse: (
        response: ApiResponse<{ user: UserDTO; token: string }>,
      ) => {
        const user = dto<UserDTO, User>('toClient', response.data.user);
        const token = response.data.token;
        return {
          user,
          token,
        };
      },
    }),
    loginUser: builder.mutation<{ user: User; token: string }, LoginRequest>({
      query: (loginData) => ({
        url: '/login',
        method: 'POST',
        body: dto<LoginRequest, UserDTO>('toServer', loginData),
      }),
      transformResponse: (
        response: ApiResponse<{ user: UserDTO; token: string }>,
      ) => {
        const user = dto<UserDTO, User>('toClient', response.data.user);
        const token = response.data.token;
        return {
          user,
          token,
        };
      },
      invalidatesTags: ['User'],
    }),
    logoutUser: builder.mutation<ApiResponse<UserDTO>, void>({
      query: () => ({
        url: '/user/logout',
        method: 'POST',
      }),
      transformResponse: (response: ApiResponse<UserDTO>) => {
        return response;
      },
      invalidatesTags: ['User'],
    }),
    getUser: builder.query<User, void>({
      query: () => '/user',
      transformResponse: (response: ApiResponse<UserDTO>) => {
        const user = dto<UserDTO, User>('toClient', response.data);
        return user;
      },
      providesTags: ['User'],
    }),
    updatePublicFields: builder.mutation<User, Partial<UserPublicFields>>({
      query: (userData) => ({
        url: 'user/update-public-fields',
        method: 'PATCH',
        body: dto<Partial<UserPublicFields>, UserDTO>('toServer', userData),
      }),
      transformResponse: (response: ApiResponse<UserDTO>) => {
        const user = dto<UserDTO, User>('toClient', response.data);
        return user;
      },
      invalidatesTags: ['User'],
    }),
    updatePrivateFields: builder.mutation<User, Partial<UserPrivateFields>>({
      query: (userData) => ({
        url: 'user/update-private-fields',
        method: 'PATCH',
        body: dto<Partial<UserPrivateFields>, UserDTO>('toServer', userData),
      }),
      transformResponse: (response: ApiResponse<UserDTO>) => {
        const user = dto<UserDTO, User>('toClient', response.data);
        return user;
      },
      invalidatesTags: ['User'],
    }),
    updatePassword: builder.mutation<
      void,
      { password: string; password_confirmation: string }
    >({
      query: (passwordData) => ({
        url: 'user/update-password',
        method: 'PATCH',
        body: passwordData,
      }),
    }),
  }),
});

export const {
  useGetUserQuery,
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useUpdatePublicFieldsMutation,
  useUpdatePrivateFieldsMutation,
  useUpdatePasswordMutation,
} = userApi;
