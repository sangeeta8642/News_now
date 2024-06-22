//API component for fetching the news articles 

import axios from 'axios';

const API_KEY = 'c5603b8e0c4f4f55ba8e010bc81148b3';
const BASE_URL = 'https://newsapi.org/v2';

export const fetchNewsByCategory = async (category = '', page = 1) => {
  const url = `${BASE_URL}/top-headlines?country=us&category=${category}&page=${page}&pageSize=20&apiKey=${API_KEY}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error fetching news');
  }
};
