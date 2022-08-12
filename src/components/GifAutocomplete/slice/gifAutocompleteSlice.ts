import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CurrentGifsSearch {
  totalCount: number | null;
  count: null;
  offset: null;
  data: [];
}

export interface GifAutocompleteSliceState {
  currentGifsSearch: CurrentGifsSearch;
}

export const gifAutocompleteSlice = createSlice<GifAutocompleteSliceState, any>(
  {
    name: 'gifAutocomplete',
    initialState: {
      currentGifsSearch: {
        totalCount: null,
        count: null,
        offset: null,
        data: [],
      },
    },
    reducers: {
      onGifSearchResponseSuccess: (
        state: GifAutocompleteSliceState,
        action: PayloadAction<CurrentGifsSearch>
      ) => {
        state.currentGifsSearch = action.payload;
      },
      onGifSearchMoreResponseSuccess: (
        state: GifAutocompleteSliceState,
        action: PayloadAction<CurrentGifsSearch>
      ) => {
        state.currentGifsSearch.data = action.payload.data;
        state.currentGifsSearch.offset = action.payload.offset;
      },
    },
  }
);

// Action creators are generated for each case reducer function
export const { onGifSearchResponseSuccess, onGifSearchMoreResponseSuccess } =
  gifAutocompleteSlice.actions;

export default gifAutocompleteSlice.reducer;
