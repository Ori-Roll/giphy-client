import { configureStore } from '@reduxjs/toolkit';
import { somethingReducer } from '../components/GifAutocomplete/slice/gifAutocompleteSlice';

export const store = configureStore({
  reducer: somethingReducer,
});

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
