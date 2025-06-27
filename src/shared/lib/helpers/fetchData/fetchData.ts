export const fetchData = async <T = object>(
  url: string,
  options?: RequestInit,
): Promise<T> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/${url}`,
      options,
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json() as Promise<T>;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Fetch error:', error);
    throw error;
  }
};
