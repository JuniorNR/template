/* eslint-disable fsd-import/layer-imports */
/* eslint-disable complexity */
/* eslint-disable no-console */

import { localStorageAuth } from '@/entities';

type UseFetchOptions = RequestInit & {
  skip?: boolean;
};

export const handleFetch = async <TRequest, TResponse>(
  url: string,
  options?: UseFetchOptions & {
    data?: Partial<TRequest>;
  },
): Promise<TResponse> => {
  try {
    const fullUrl =
      url.startsWith('/') ?
        `${process.env.NEXT_PUBLIC_API_URL}${url}`
      : `${process.env.NEXT_PUBLIC_API_URL}/${url}`;

    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization:
        localStorageAuth.getToken() ?
          `Bearer ${localStorageAuth.getToken()}`
        : '',
      ...options?.headers,
    };

    const response = await fetch(fullUrl, {
      ...options,
      body: JSON.stringify(options?.data),
      credentials: 'include',
      headers,
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
        ((await response.json()) as TResponse)
      : ((await response.text()) as TResponse);

    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
