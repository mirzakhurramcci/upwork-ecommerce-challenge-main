'use client';
import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '@/features/cart/cartSlice';
import { productAPI } from '@/features/product/productAPI';
import productSlice from '@/features/product/productSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productSlice,
    [productAPI.reducerPath]: productAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productAPI.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
