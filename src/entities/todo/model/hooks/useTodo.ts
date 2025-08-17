'use client';

import { useCreateTodoMutation, useGetTodosQuery } from '../api';

export const useTodo = () => {
  const { data: todos, isLoading, error } = useGetTodosQuery();
  const [createTodo, { isLoading: isCreatingTodo }] = useCreateTodoMutation();

  return {
    todos,
    isLoading,
    error,
    createTodo,
    isCreatingTodo,
  };
};
