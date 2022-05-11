import { configureStore } from '@reduxjs/toolkit';
import authorizationReducer, {
  AUTH_REDUCER_NAME,
} from 'src/app/store/slices/authorization/authorizationSlice';

export const store = configureStore({
  reducer: {
    [AUTH_REDUCER_NAME]: authorizationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
