import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../axios-api';
import {ApiShow} from '../types';

export const fetchShows = createAsyncThunk<void, string>(
  'show/fetchShows',
  async (arg, thunkAPI) => {
    const response = await axiosApi.get<ApiShow>(`/search/shows?q=${arg}`);
    return response.data;
  }
);