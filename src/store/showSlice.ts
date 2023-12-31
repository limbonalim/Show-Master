import {createSlice, Draft} from '@reduxjs/toolkit';
import {fetchOneShow, fetchShows} from './showThunks';
import {Option, Show} from '../types';
import {RootState} from "../app/store";

interface ShowState {
    listOfOptions: Option[];
    isSearchLoading: boolean;
    isShowLoading: boolean;
    currentShow: Show | null;
    isError: boolean;
    errorMessage: string;
}

const initialState: ShowState = {
    listOfOptions: [],
    isSearchLoading: false,
    isShowLoading: false,
    currentShow: null,
    isError: false,
    errorMessage: '',
};

export const showSlice = createSlice({
    name: 'show',
    initialState,
    reducers: {
        changeIsError: (state) => {
            state.isError = !state.isError;
            state.errorMessage = '';
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchShows.pending, (state: Draft<ShowState>) => {
            state.isSearchLoading = true;
            state.listOfOptions = [];
        });
        builder.addCase(fetchShows.fulfilled, (state: Draft<ShowState>, action) => {
            state.listOfOptions = action.payload.map((item): Option => {
                return {
                    label: item.show.name,
                    to: `/shows/${item.show.id}`,
                };
            });
            state.isSearchLoading = false;
        });
        builder.addCase(fetchShows.rejected, (state: Draft<ShowState>, {error}) => {
            state.isSearchLoading = false;
            state.isError = true;
            error.message ? state.errorMessage = error.message : null;
        });
        builder.addCase(fetchOneShow.pending, (state: Draft<ShowState>) => {
            state.isShowLoading = true;
            state.currentShow = null;
        });
        builder.addCase(fetchOneShow.fulfilled, (state: Draft<ShowState>, action) => {
            state.currentShow = action.payload;
            state.isShowLoading = false;
        });
        builder.addCase(fetchOneShow.rejected, (state: Draft<ShowState>, {error}) => {
            state.isShowLoading = false;
            state.isError = true;
            error.message ? state.errorMessage = error.message : null;
        });
    }
});

export const showReducers = showSlice.reducer;

export const selectListOfOptions = (state: RootState) => state.show.listOfOptions;
export const selectCurrentShow = (state: RootState) => state.show.currentShow;
export const selectIsSearchLoading = (state: RootState) => state.show.isSearchLoading;
export const selectIsShowLoading = (state: RootState) => state.show.isShowLoading;
export const selectIsError = (state: RootState) => state.show.isError;
export const selectErrorMessage = (state: RootState) => state.show.errorMessage;

export const {changeIsError} = showSlice.actions;