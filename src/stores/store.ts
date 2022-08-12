import { configureStore } from '@reduxjs/toolkit';
import gifAutocompleteSlice from '../components/GifAutocomplete/slice/gifAutocompleteSlice';

export const store = configureStore({
  reducer: gifAutocompleteSlice,
});

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
