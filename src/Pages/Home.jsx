
//Home page

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  { fetchArticles } from '../Redux/Slices';
import ArticleList from '../Components/ArticleList';
import Pagination from '../Components/Pagination';
import Navbar from '../Components/Navbar';
import Slide from '../Components/Slide';

const HomePage = () => {
  const dispatch = useDispatch();
  const { articles, loading, error, totalPages } = useSelector((state) => state.news);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState('');


  useEffect(() => {
    dispatch(fetchArticles({ category, page }));
  }, [category, page, dispatch]);

  return (
    <div className="w-full min-h-screen">
      <Navbar/>
      <Slide/>
     
      <ArticleList articles={articles} />
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
};

export default HomePage;
