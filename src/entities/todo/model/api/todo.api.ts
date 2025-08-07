import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQuery } from '@/api';
import type { User, UserDTO } from '@/entities';
import { dto } from '@/shared/lib';
import type { ApiResponse } from '@/types';

import type {
  Todo,
  TodoDTO,
  TodosResponseServer,
  TodosResponseClient,
} from '../types';

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery,
  tagTypes: ['Todo'],
  endpoints: (builder) => ({
    getTodos: builder.query<TodosResponseClient, void>({
      query: () => '/todos',
      transformResponse: (response: ApiResponse<TodosResponseServer>) => {
        const todos = dto<TodoDTO[], Todo[]>('toClient', response.data.todos);
        const author = dto<UserDTO, User>('toClient', response.data.author);
        return {
          todos,
          author,
        };
      },
      providesTags: ['Todo'],
    }),
  }),
});

export const { useGetTodosQuery } = todoApi;
