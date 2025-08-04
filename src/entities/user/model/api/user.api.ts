import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQuery } from '@/api';
import { dto } from '@/shared/lib';
import type { ApiResponse } from '@/types';

import type {
  User,
  UserDTO,
  UserPrivateFields,
  UserPublicFields,
} from '../types';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery,
  tagTypes: ['User'],
  endpoints: (builder) => ({
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
  useUpdatePublicFieldsMutation,
  useUpdatePrivateFieldsMutation,
  useUpdatePasswordMutation,
} = userApi;
