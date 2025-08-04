export type ApiResponseStatus = 'success' | 'error';

export type StateApi<T> = {
  data: T;
  status: string;
  error: string | null;
  isLoading: boolean;
};

export type ApiResponse<T> = {
  data: T;
  status: number;
  code: string;
};
