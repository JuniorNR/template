'use client';

import { useEffect, useState } from 'react';

type UseFetchOptions = RequestInit;

export const useFetch = <T = object>(
  url: string,
  options?: UseFetchOptions,
) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/${url}`,
          options,
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = (await response.json()) as T;

        setData(result);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { data, loading, error };
};
