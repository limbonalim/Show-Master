import {createSlice} from '@reduxjs/toolkit';
import {fetchShows} from './showThunks';
import {ApiShow} from '../types';
import {RootState} from '../app/store';

interface ShowState {
  searchList: ApiShow[];
}

const initialState: ShowState = {
  searchList: [],
};

export const showSlice = createSlice({
  name: 'show',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchShows.pending, state => {
      console.log('pending');
    });
    builder.addCase(fetchShows.fulfilled, (state, action) => {
      console.log('fulfilled');
      state.searchList = action.payload;
    });
    builder.addCase(fetchShows.rejected, state => {
      console.log('rejected');
    });
  }
});

export const showReducers = showSlice.reducer;

export const selectSearchList = (state) => state.show.searchList;

export const {} = showSlice.actions;