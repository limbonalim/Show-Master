import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../axios-api';
import {ApiShow, Show} from '../types';

export const fetchShows = createAsyncThunk<ApiShow[], string>(
  'show/fetchShows',
  async (arg) => {
    const response = await axiosApi.get<ApiShow[]>(`/search/shows?q=${arg}`);
    return response.data;
  }
);

export const fetchOneShow = createAsyncThunk<Show, string>(
  'show/fetchOneShow',
  async (id) => {
    const response = await axiosApi.get<Show>(`/shows/${id}`);
    console.log(response.data);
    return response.data;
  }
);