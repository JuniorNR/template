import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQuery } from '@/api';
import type { ApiResponse } from '@/config/types';
import type { LoginRequest, RegisterRequest, User, UserDTO } from '@/entities';
import { dto } from '@/shared/lib';

import type { ApiAuthRequest, ApiAuthResponse } from '../types';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery,
  tagTypes: ['User'],
  endpoints: (builder) => ({
    register: builder.mutation<ApiAuthRequest, RegisterRequest>({
      query: (registerData) => ({
        url: '/register',
        method: 'POST',
        body: dto<RegisterRequest, UserDTO>('toServer', registerData),
      }),
      transformResponse: (response: ApiResponse<ApiAuthResponse>) => {
        const token = response.data.token;
        const user = dto<UserDTO, User>('toClient', response.data.user);

        return {
          user,
          token,
        };
      },
      invalidatesTags: ['User'],
    }),
    login: builder.mutation<ApiAuthRequest, LoginRequest>({
      query: (loginData) => ({
        url: '/login',
        method: 'POST',
        body: dto<LoginRequest, UserDTO>('toServer', loginData),
      }),
      transformResponse: (response: ApiResponse<ApiAuthResponse>) => {
        const token = response.data.token;
        const user = dto<UserDTO, User>('toClient', response.data.user);
        return {
          user,
          token,
        };
      },
      invalidatesTags: ['User'],
    }),
    logout: builder.mutation<ApiResponse<void>, void>({
      query: () => ({
        url: '/user/logout',
        method: 'POST',
      }),
      transformResponse: (response: ApiResponse<void>) => {
        return response;
      },
      invalidatesTags: ['User'],
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useRegisterMutation } =
  authApi;
