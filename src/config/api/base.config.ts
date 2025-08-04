import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL || '/api',
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    headers.set('Content-Type', 'application/json');
    headers.set('Accept', 'application/json');
    return headers;
  },
  credentials: 'include',
});
