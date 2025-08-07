'use client';

import { useGetTodosQuery } from '../api';

export const useTodo = () => {
  const { data: todos, isLoading, error } = useGetTodosQuery();

  return {
    todos,
    isLoading,
    error,
  };
};
