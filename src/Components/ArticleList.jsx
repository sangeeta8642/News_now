
// Section of news cards

import React from 'react';
import ArticleCard from './ArticleCard';

const ArticleList = ({ articles }) => {
  return (
    <section  className="w-full min-h-screen flex flex-col gap-20 flex-wrap justify-center items-center p-4 md:mt-10 lg:mt-0 sm:mt-10" id='articles'>
      <h1 className='font-palanquin text-[4rem] font-bold'><span className='text-red-500'>News</span> Today</h1>
      <div className="w-full max-w-screen-xl grid grid-cols-1 sm:grid-co/ls-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles
          .filter(article => !article.title.includes("[Removed]"))
          .map((article) => (
            <ArticleCard key={article.url} article={article} />
          ))}
      </div>
    </section>
  );
};

export default ArticleList;
