import { configureStore } from '@reduxjs/toolkit';
import authorizationReducer, {
    AUTH_REDUCER_NAME,
} from 'src/app/modules/Authentication/slices/authorizationSlice';
import cartReducer, { CART_REDUCER_NAME } from 'src/app/modules/Cart/slices/cartSlice';

export const store = configureStore({
    reducer: {
        [AUTH_REDUCER_NAME]: authorizationReducer,
        [CART_REDUCER_NAME]: cartReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
