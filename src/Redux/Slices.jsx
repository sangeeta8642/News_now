
// slice for news articles 

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchNewsByCategory } from './Services';

export const fetchArticles = createAsyncThunk(
  'news/fetchArticles',
  async ({ category, page }) => {
    const data = await fetchNewsByCategory(category, page);
    return data;
  }
);


const newsSlice = createSlice({
  name: 'news',
  initialState: {
    articles: [],
    loading: false,
    error: null,
    totalPages: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload.articles;
        state.totalPages = Math.ceil(action.payload.totalResults / 20);
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
