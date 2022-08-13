import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GIFObject } from 'giphy-api';
import { MoreListInsertStatus } from '../../../types';

export interface CurrentGifsSearch {
  data: GIFObject[];
  viewedGif: GIFObject | null;
}

export interface GifListerSliceState {
  currentGifsSearch: CurrentGifsSearch;
  loadingStatus: MoreListInsertStatus;
}

export const gifListerSlice = createSlice<GifListerSliceState, any>({
  name: 'gifLister',
  initialState: {
    currentGifsSearch: {
      data: [],
      viewedGif: null,
    },
    loadingStatus: MoreListInsertStatus.PENDING,
  },
  reducers: {
    onGifSearchRequest: (state: GifListerSliceState) => {
      state.loadingStatus = MoreListInsertStatus.LOADING;
    },
    onGifSearchResponseSuccess: (
      state: GifListerSliceState,
      action: PayloadAction<GIFObject[]>
    ) => {
      state.currentGifsSearch.data = action.payload;
      state.loadingStatus = MoreListInsertStatus.PENDING;
    },
    onGifSearchMoreResponseSuccess: (
      state: GifListerSliceState,
      action: PayloadAction<GIFObject[]>
    ) => {
      state.currentGifsSearch.data.push(...action.payload);
      state.loadingStatus = MoreListInsertStatus.PENDING;
    },
    onChoseViewedGif: (
      state: GifListerSliceState,
      action: PayloadAction<GIFObject>
    ) => {
      state.currentGifsSearch.viewedGif = action.payload;
      state.currentGifsSearch.data = [];
    },
    onClearViewedGif: (state: GifListerSliceState) => {
      state.currentGifsSearch.viewedGif = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  onGifSearchRequest,
  onGifSearchResponseSuccess,
  onGifSearchMoreResponseSuccess,
  onChoseViewedGif,
  onClearViewedGif,
} = gifListerSlice.actions;

export default gifListerSlice.reducer;
