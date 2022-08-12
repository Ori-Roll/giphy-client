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
    },
  }
);

// Action creators are generated for each case reducer function
export const { onGifSearchResponseSuccess } = gifAutocompleteSlice.actions;

export default gifAutocompleteSlice.reducer;
