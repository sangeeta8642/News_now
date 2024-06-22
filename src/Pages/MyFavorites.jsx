

// User's favorite component

import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ArticleCard from "../Components/ArticleCard";

const MyFavorites = () => {
  const favorites = useSelector((state) => state.favorites.articles);
  const navigate = useNavigate();

  return (
    <section className="w-full min-h-screen flex flex-col items-center lg:p-16 p-10 gap-6">
      <div className="flex  justify-start w-full lg:gap-[30rem] gap-36  mr-[50px]"> 
        <button onClick={() => navigate("/")}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="2em"
            width="2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.854 4.646a.5.5 0 010 .708L3.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z"
              clipRule="evenodd"
            ></path>
            <path
              fillRule="evenodd"
              d="M2.5 8a.5.5 0 01.5-.5h10.5a.5.5 0 010 1H3a.5.5 0 01-.5-.5z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <h1 className="lg:text-4xl md:text-4xl sm:text-3xl font-bold">
          My <span className="text-red-500">Favorite</span> Articles
        </h1>
      </div>
      {favorites.length > 0 ? (
        <div className="w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
          {favorites.map((article) => (
            <ArticleCard key={article.url} article={article} />
          ))}
        </div>
      ) : (
        <h2 className="lg:text-2xl md:text-2xl tracking-wider mt-6 lg:w-full w-[60%] text-center">
          No Articles found,{" "}
          <a href="/" className="underline text-red-400">
            Let's go back
          </a>{" "}
          and add some articles.
        </h2>
      )}
    </section>
  );
};

export default MyFavorites;


