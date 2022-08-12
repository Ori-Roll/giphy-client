import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GIFObject } from 'giphy-api';

export interface CurrentGifsSearch {
  data: GIFObject[];
}

export interface GifAutocompleteSliceState {
  currentGifsSearch: CurrentGifsSearch;
}

export const gifAutocompleteSlice = createSlice<GifAutocompleteSliceState, any>(
  {
    name: 'gifAutocomplete',
    initialState: {
      currentGifsSearch: {
        data: [],
      },
    },
    reducers: {
      onGifSearchResponseSuccess: (
        state: GifAutocompleteSliceState,
        action: PayloadAction<GIFObject[]>
      ) => {
        state.currentGifsSearch.data = action.payload;
      },
      onGifSearchMoreResponseSuccess: (
        state: GifAutocompleteSliceState,
        action: PayloadAction<GIFObject[]>
      ) => {
        state.currentGifsSearch.data.push(...action.payload);
      },
    },
  }
);

// Action creators are generated for each case reducer function
export const { onGifSearchResponseSuccess, onGifSearchMoreResponseSuccess } =
  gifAutocompleteSlice.actions;

export default gifAutocompleteSlice.reducer;
