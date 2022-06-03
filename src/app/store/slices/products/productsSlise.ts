import { createSlice } from '@reduxjs/toolkit';
import { Product } from 'src/app/models/Product';

export const PRODUCTS_REDUCER_NAME = 'products';

const INITIAL_STATE = {
  availableProducts: [] as Product[],
};

export const productsSlice = createSlice({
  name: PRODUCTS_REDUCER_NAME,
  initialState: INITIAL_STATE,
  reducers: {
    saveProducts: (state, { payload }: { payload: Product[] }) => {
      state.availableProducts = payload;
    },
  },
});

export const { saveProducts } = productsSlice.actions;
export default productsSlice.reducer;
