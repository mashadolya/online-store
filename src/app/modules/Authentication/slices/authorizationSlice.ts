import { createSlice } from '@reduxjs/toolkit';
import { AuthState } from 'src/app/modules/Authentication/slices/authorizationSlice.types';
import { User } from 'src/app/models/User';

export const AUTH_REDUCER_NAME = 'auth';

const INITIAL_STATE: AuthState = {
    isAuthorized: false,
    user: {} as User,
};

export const authorizationSlice = createSlice({
    name: AUTH_REDUCER_NAME,
    initialState: INITIAL_STATE,
    reducers: {
        createUser: (state, { payload: user }) => {
            state.isAuthorized = true;
            state.user = user;
        },
        removeUser: state => {
            state.isAuthorized = false;
            state.user = {} as User;
        },
    },
});

export const { createUser, removeUser } = authorizationSlice.actions;
export default authorizationSlice.reducer;
