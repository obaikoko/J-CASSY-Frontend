import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://j-cassybackend-1.onrender.com/',
  // baseUrl: 'http://localhost:5000/',
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['Products', 'User', 'Oders'],
  endpoints: (builder) => ({}),
});
