
// slice for the user's favorite's component

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  articles: JSON.parse(localStorage.getItem('user'))?.myfavorites || [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.articles.push(action.payload);
      localStorage.setItem(
        'user',
        JSON.stringify({
          ...JSON.parse(localStorage.getItem('user')),
          myfavorites: state.articles,
        })
      );
    },
    removeFavorite: (state, action) => {
      state.articles = state.articles.filter(
        (article) => article.title !== action.payload.title
      );
      localStorage.setItem(
        'user',
        JSON.stringify({
          ...JSON.parse(localStorage.getItem('user')),
          myfavorites: state.articles,
        })
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
