import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth/authSlice';
import noteListReducer from './slices/noteList/noteListSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    noteList: noteListReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;