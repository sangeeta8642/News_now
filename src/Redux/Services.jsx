// // //API component for fetching the news articles

// // import axios from 'axios';

// // const API_KEY = 'c5603b8e0c4f4f55ba8e010bc81148b3';
// // const BASE_URL = 'https://newsapi.org/v2';

// // export const fetchNewsByCategory = async (category = '', page = 1) => {
// //   const url = `${BASE_URL}/top-headlines?country=us&category=${category}&page=${page}&pageSize=20&apiKey=${API_KEY}`;
// //   try {
// //     const response = await axios.get(url);
// //     return response.data;
// //   } catch (error) {
// //     throw new Error(error.response?.data?.message || 'Error fetching news');
// //   }
// // };

// import axios from 'axios';

// const API_KEY = 'pub_5514431aea944ba638c418f3efdc1100a0ee7';
// const BASE_URL = 'https://newsdata.io/api/1/news';

// export const fetchNewsByCategory = async (page = 1) => {
//   const url = `https://newsdata.io/api/1/latest?apikey=pub_5514431aea944ba638c418f3efdc1100a0ee7&q=pizza`;

//   try {
//     const response = await axios.get(url);
//     return response.data;
//   } catch (error) {
//     throw new Error(error.response?.data?.message || 'Error fetching news');
//   }
// };

import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

// Fetch news articles by category
export const fetchNewsByCategory = async (category = "") => {
  const queryParam = category ? `&q=${category}` : "";

  const url = `${BASE_URL}?apikey=${API_KEY}${queryParam}&language=en`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error fetching news");
  }
};