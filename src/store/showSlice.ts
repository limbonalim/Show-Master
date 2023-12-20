import {createSlice, Draft} from '@reduxjs/toolkit';
import {fetchOneShow, fetchShows} from './showThunks';
import {ApiShow, Option, Show} from '../types';

interface ShowState {
  listOfOptions: Option[];
  isSearchLoading: boolean;
  isShowLoading: boolean;
  currentShow: Show | null;
}

const initialState: ShowState = {
  listOfOptions: [],
  isSearchLoading: false,
  isShowLoading: false,
  currentShow: null,
};

export const showSlice = createSlice({
  name: 'show',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchShows.pending, (state: Draft<ShowState>) => {
      console.log('pending [fetchShows]');
      state.isSearchLoading = true;
    });
    builder.addCase(fetchShows.fulfilled, (state: Draft<ShowState>, action) => {
      console.log('fulfilled [fetchShows]');
      state.listOfOptions = action.payload.map((item): Option => {
        return {
          label: item.show.name,
          to: `/shows/${item.show.id}`,
        };
      });
      state.isSearchLoading = false;
    });
    builder.addCase(fetchShows.rejected, (state: Draft<ShowState>) => {
      console.log('rejected [fetchShows]');
      state.isSearchLoading = false;
    });
    builder.addCase(fetchOneShow.pending, (state: Draft<ShowState>) => {
      console.log('pending [fetchOneShow]');
      state.isShowLoading = true;
    });
    builder.addCase(fetchOneShow.fulfilled, (state: Draft<ShowState>, action) => {
      console.log('fulfilled [fetchOneShow]');
      state.currentShow = action.payload;
      state.isShowLoading = false;
    });
    builder.addCase(fetchOneShow.rejected, (state: Draft<ShowState>) => {
      console.log('rejected [fetchOneShow]');
      state.isShowLoading = false;
    });
  }
});

export const showReducers = showSlice.reducer;

export const selectListOfOptions = (state) => state.show.listOfOptions;
export const selectCurrentShow = (state) => state.show.currentShow;
export const selectIsSearchLoading = (state) => state.show.isSearchLoading;
export const selectIsShowLoading = (state) => state.show.isShowLoading;

export const {} = showSlice.actions;