'use client';
import type { Product } from './types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productAPI = createApi({
  reducerPath: 'productAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/products/' }),
  endpoints: (builder) => ({
    getProductById: builder.query<Product, number>({
      query: (id) => `${id}`,
    }),
    getAllProducts: builder.query<Product[], void>({
      query: () => ``,
    }),
    getAllCategories: builder.query<string[], void>({
      query: () => `categories`,
    }),
    getProductsInCategory: builder.query<Product[], string>({
      query: (categoryName) => `category/${categoryName}`,
    }),
  }),
});

export const { useGetProductByIdQuery, useGetAllProductsQuery, useGetAllCategoriesQuery, useGetProductsInCategoryQuery } = productAPI;
