import { configureStore } from '@reduxjs/toolkit';
import authorizationReducer, {
  AUTH_REDUCER_NAME,
} from 'src/app/store/slices/authorization/authorizationSlice';
import cartReducer, { CART_REDUCER_NAME } from 'src/app/store/slices/cart/cartSlice';

export const store = configureStore({
  reducer: {
    [AUTH_REDUCER_NAME]: authorizationReducer,
    [CART_REDUCER_NAME]: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
