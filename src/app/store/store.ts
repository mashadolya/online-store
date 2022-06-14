import { configureStore } from '@reduxjs/toolkit';
import authorizationReducer, {
  AUTH_REDUCER,
} from 'src/app/store/slices/authorization/authorizationSlice';
import cartReducer, { CART_REDUCER } from 'src/app/store/slices/cart/cartSlice';
import productsReducer, { PRODUCTS_REDUCER } from 'src/app/store/slices/products/productsSlise';

export const store = configureStore({
  reducer: {
    [AUTH_REDUCER]: authorizationReducer,
    [CART_REDUCER]: cartReducer,
    [PRODUCTS_REDUCER]: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
