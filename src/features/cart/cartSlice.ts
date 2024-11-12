'use client';

import type { RootState } from '@/redux/store';
import type { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';
import { CartItem, CartState } from './types';

// Define the initial state
const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ id, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          existingItem.quantity--;
        }
      }
    },
    checkout: (state) => {
      // Simulate a checkout by clearing the cart.
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, checkout } = cartSlice.actions;
export const totalCartItems = (state: RootState): number => state.cart.items.reduce((total, item) => total + item.quantity, 0);
export const selectCartItems = (state: RootState): CartItem[] => state.cart.items;
export default cartSlice.reducer;
