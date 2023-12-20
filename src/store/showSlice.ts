import {createSlice, Draft} from '@reduxjs/toolkit';
import {fetchOneShow, fetchShows} from './showThunks';
import {ApiShow, Show} from '../types';

interface ShowState {
  searchList: ApiShow[];
  currentShow: Show;
}

const initialState: ShowState = {
  searchList: [],
};

export const showSlice = createSlice({
  name: 'show',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchShows.pending, (state) => {
      console.log('pending [fetchShows]');
    });
    builder.addCase(fetchShows.fulfilled, (state: Draft<ShowState>, action) => {
      console.log('fulfilled [fetchShows]');
      state.searchList = action.payload;
    });
    builder.addCase(fetchShows.rejected, (state) => {
      console.log('rejected [fetchShows]');
    });
    builder.addCase(fetchOneShow.pending, (state) => {
      console.log('pending [fetchOneShow]');
    });
    builder.addCase(fetchOneShow.fulfilled, (state: Draft<ShowState>, action) => {
      console.log('fulfilled [fetchOneShow]');
      state.currentShow = action.payload;
    });
    builder.addCase(fetchOneShow.rejected, (state) => {
      console.log('rejected [fetchOneShow]');
    });
  }
});

export const showReducers = showSlice.reducer;

export const selectSearchList = (state) => state.show.searchList;
export const selectCurrentShow = (state) => state.show.currentShow;

export const {} = showSlice.actions;