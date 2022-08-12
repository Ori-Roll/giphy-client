import { createSlice } from '@reduxjs/toolkit';

export const gifAutocompleteSlice = createSlice({
  name: 'gifAutocomplete',
  initialState: {
    value: 0,
  },
  reducers: {
    somethingReducer: (state) => {
      state.value += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { somethingReducer } = gifAutocompleteSlice.actions;

export default gifAutocompleteSlice.reducer;
