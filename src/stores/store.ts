import { configureStore } from '@reduxjs/toolkit';
import gifListerSlice from '../components/GifLister/slice/gifListerSlice';

export const store = configureStore({
  reducer: gifListerSlice,
});

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
