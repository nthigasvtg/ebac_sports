import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const produtosApi = createApi({
  reducerPath: 'produtosApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    getProdutos: builder.query({
      query: () => 'produtos.json',
    }),
  }),
});

export const { useGetProdutosQuery } = produtosApi;