'use client';

import { useTodo } from '@/entities';

import { TodoList } from '../TodoList';

export const Todo = () => {
  const { todos, isLoading, error } = useTodo();
  return <TodoList />;
};
