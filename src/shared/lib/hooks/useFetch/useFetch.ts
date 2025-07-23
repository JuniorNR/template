/* eslint-disable complexity */
'use client';

import { useCallback, useEffect, useState } from 'react';

type UseFetchOptions = RequestInit & {
  skip?: boolean;
};

export const useFetch = <T = object>(
  url: string,
  options?: UseFetchOptions & {
    data: Partial<T>;
  },
) => {
  const [dataFromServer, setDataFromServer] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [retryCount, setRetryCount] = useState(0);

  const fetchData = useCallback(async () => {
    if (options?.skip) return null;
    try {
      setLoading(true);
      setError(null);

      const fullUrl =
        url.startsWith('/') ?
          `${process.env.NEXT_PUBLIC_API_URL}${url}`
        : `${process.env.NEXT_PUBLIC_API_URL}/${url}`;

      const response = await fetch(fullUrl, {
        ...options,
        body: JSON.stringify(options?.data),
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          ...options?.headers,
        },
      });

      if (!response.ok) {
        let errorBody;
        try {
          errorBody = await response.json();
        } catch {
          errorBody = { message: `HTTP error! Status: ${response.status}` };
        }

        throw new Error(
          errorBody.message || `HTTP error! Status: ${response.status}`,
        );
      }

      const contentType = response.headers.get('content-type');
      const result =
        contentType?.includes('application/json') ?
          ((await response.json()) as T)
        : ((await response.text()) as T);

      setDataFromServer(result);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  }, [url, JSON.stringify(options), options?.skip, retryCount]);

  useEffect(() => {
    fetchData();
  }, [fetchData, retryCount]);

  const refetch = () => {
    setRetryCount((prev) => prev + 1);
  };

  return { dataFromServer, loading, error, refetch, retryCount };
};
