import {configureStore} from '@reduxjs/toolkit';
import {showReducers} from '../store/showSlice';

export const store = configureStore({
  reducer: {
    show: showReducers
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;