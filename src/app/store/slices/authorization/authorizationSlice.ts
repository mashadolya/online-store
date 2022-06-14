import { createSlice } from '@reduxjs/toolkit';
import { AuthState } from 'src/app/store/slices/authorization/authorizationSlice.types';
import { User } from 'src/app/models/User';
import { clearRefreshToken, getRefreshToken } from 'src/app/services/authService';

export const AUTH_REDUCER_NAME = 'auth';

const INITIAL_STATE: AuthState = {
  isAuthorized: !!getRefreshToken(),
  user: {} as User,
};

export const authorizationSlice = createSlice({
  name: AUTH_REDUCER_NAME,
  initialState: INITIAL_STATE,
  reducers: {
    createSession: (state, { payload: user }) => {
      state.isAuthorized = true;
      state.user = user;
    },
    clearSession: state => {
      state.isAuthorized = false;
      state.user = {} as User;
      clearRefreshToken();
    },
  },
});

export const { createSession, clearSession } = authorizationSlice.actions;
export default authorizationSlice.reducer;
