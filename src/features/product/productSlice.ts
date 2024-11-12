import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/redux/store";

interface ProductState {
  selectedCategory: string;
}

const initialState: ProductState = {
  selectedCategory: "All",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    selectCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { selectCategory } = productSlice.actions;

export default productSlice.reducer;
