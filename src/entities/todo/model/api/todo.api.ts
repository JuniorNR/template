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
  TodoRequest,
  TodoResponseServer,
  TodoResponseClient,
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
    createTodo: builder.mutation<TodoResponseClient, Todo>({
      query: (todoData) => ({
        url: '/todos',
        method: 'POST',
        body: dto<Todo, TodoDTO>('toServer', todoData),
      }),
      transformResponse: (response: ApiResponse<TodoResponseServer>) => {
        const todo = dto<TodoDTO, Todo>('toClient', response.data.todo);
        const author = dto<UserDTO, User>('toClient', response.data.author);
        return {
          todo,
          author,
        };
      },
      invalidatesTags: ['Todo'],
    }),
  }),
});

export const { useGetTodosQuery, useCreateTodoMutation } = todoApi;
