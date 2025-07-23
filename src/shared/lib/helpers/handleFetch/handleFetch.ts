/* eslint-disable no-console */
type UseFetchOptions = RequestInit & {
  skip?: boolean;
};

export const handleFetch = async <T>(
  url: string,
  options?: UseFetchOptions & {
    data: Partial<T>;
  },
) => {
  try {
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

    return result;
  } catch (error) {
    console.error(error);
  }
};
