/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useCallback, useEffect, useState } from 'react';

import { handleFetch } from '../../helpers';

type UseFetchOptions = RequestInit & {
  skip?: boolean;
};

export const useFetch = <TRequest = object, TResponse = object>(
  url: string,
  options?: UseFetchOptions & {
    data?: Partial<TRequest>;
  },
): { data: TResponse | null; loading: boolean; error: Error | null } => {
  const [dataFromServer, setDataFromServer] = useState<TResponse | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    if (options?.skip) return null;
    try {
      setLoading(true);
      setError(null);

      const response = await handleFetch<TRequest, { data: TResponse }>(
        url,
        options,
      );
      setDataFromServer(response.data as TResponse);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  }, [options, url]);

  useEffect(() => {
    fetchData();
  }, [url, options?.method, options?.skip, options?.data]);

  return { data: dataFromServer || null, loading, error };
};
