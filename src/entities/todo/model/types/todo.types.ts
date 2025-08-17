import type { User, UserDTO } from '@/entities';

export enum TodoStatuses {
  PENDING = 'pending',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
}

export enum TodoPriorities {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}

export interface Todo {
  id: number;
  title: string;
  description: string;
  status: TodoStatuses;
  priority: TodoPriorities;
  deadline?: Date;
  authorId?: number;
  createdAt: Date;
  updatedAt: Date;
  author: User;
}

export interface TodoDTO {
  id: number;
  title: string;
  description: string;
  status: TodoStatuses;
  priority: TodoPriorities;
  deadline: Date;
  author_id: number;
  created_at: Date;
  updated_at: Date;
  author: UserDTO;
}

export type TodoRequest = Omit<Todo, 'id' | 'authorId'>;

export interface TodosResponseServer {
  todos: TodoDTO[];
  author: UserDTO;
}

export interface TodosResponseClient {
  todos: Todo[];
  author: User;
}

export interface TodoResponseServer {
  todo: TodoDTO;
  author: UserDTO;
}

export interface TodoResponseClient {
  todo: Todo;
  author: User;
}
