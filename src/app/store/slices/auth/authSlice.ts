import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { login, logout, register } from '../../../services/authServices';
import { NavigateFunction } from 'react-router-dom';
import { RefObject } from 'react';

export interface IAuthPayload {
    email: string,
    password: string;
    formRef?: RefObject<HTMLFormElement>;
    navigate?: NavigateFunction;
}

export const registerThunk = createAsyncThunk(
    'auth/register',
    async (payload: IAuthPayload) => {
        const { email, password, formRef } = payload;

        const response = await register(email, password);

        return { ...response.user, formRef };
    },
)

export const loginThunk = createAsyncThunk(
    'auth/login',
    async (payload: IAuthPayload) => {
        const { email, password, navigate } = payload;

        const response = await login(email, password);

        return {...response.user, navigate};
    },
)

export const logoutThunk = createAsyncThunk(
    'auth/logout',
    (navigate: NavigateFunction) => {
        const response = logout();

        return {response, navigate};
    },
)

interface AuthState {
  email: string | null;
  userId: string | null;
  error?: string | null;
}

const initialState: AuthState = {
  email: null,
  userId: null,
  error: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerThunk.fulfilled, (state, action) => {
        if (action.payload.formRef?.current) {
            action.payload.formRef.current.reset();
        }

        alert("Your account was created successfully!")
    })

    builder.addCase(registerThunk.rejected, (state, action) => {
        state.error = action.error.message;
    })

    builder.addCase(loginThunk.fulfilled, (state, action) => {
        state.email = action.payload.email;
        state.userId = action.payload.uid;

        if (action.payload.navigate) {
            action.payload.navigate('/');
        }
    })

    builder.addCase(loginThunk.rejected, (state, action) => {
        state.error = action.error.message;
    })

    builder.addCase(logoutThunk.fulfilled, (state, action) => {
        state.email = null;
        action.payload.navigate('/login');
    })

    builder.addCase(logoutThunk.rejected, (state, action) => {
        state.error = action.error.message;
    })
  }
})

export default authSlice.reducer;