
// store component for storing the news articles and user's favorite article

import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './Slices';
import favoritesReducer from './FvrtSlice'

export const store = configureStore({
  reducer: {
    news: newsReducer,
    favorites: favoritesReducer,
  },
});
