import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../Redux/FvrtSlice";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const ArticleCard = ({ article }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.articles);
  const isFavorite = favorites.some(
    (favArticle) => favArticle.title === article.title
  );
  const user = localStorage.getItem("user");

  const handleFavorite = () => {
    if (user) {
      if (isFavorite) {
        dispatch(removeFavorite(article));
        Swal.fire({
          title: "Article removed from favorites",
          icon: "success",
          timer: 1000,
          toast: true,
          timerProgressBar: true,
          position: "top",
          showConfirmButton: false,
        });
      } else {
        dispatch(addFavorite(article));
        Swal.fire({
          title: "Article added to favorites",
          icon: "success",
          timer: 1000,
          toast: true,
          timerProgressBar: true,
          position: "top",
          showConfirmButton: false,
        });
      }
    } else {
      Swal.fire({
        title: "Please login before accessing this feature",
        timerProgressBar: true,
        toast: true,
        position: "top",
        showConfirmButton: true,
      });
    }
  };

  const formattedDate = new Date(article.publishedAt).toLocaleDateString(
    undefined,
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="relative border rounded-lg shadow-md overflow-hidden transition-all hover:scale-[1.03] cursor-default">
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="w-full h-[360px] object-cover"
        />
      )}

      {/* Details section for large screens */}
      <div className="hidden lg:flex absolute inset-0 bg-black bg-opacity-50 flex-col justify-center items-center p-4 opacity-0 transition-opacity duration-300 hover:opacity-100">
        <h2 className="font-bold text-xl mb-2 text-white text-center">
          {article.title}
        </h2>
        <p className="text-gray-300 text-center mb-2 font-semibold">
          {article.description}
        </p>
        <p className="text-gray-200 text-sm text-center mb-4">
          Source: {article.source.name}
        </p>
        <p className="text-white text-md font-semibold mb-4">
          Published on: {formattedDate}
        </p>
        <div className="flex gap-20 w-full justify-evenly">
          <a
            className="font-bold text-[1.15rem] hover:underline  text-white"
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
          </a>
          <button className="font-bold underline" onClick={handleFavorite}>
            {isFavorite ? (
              <svg
                stroke="currentColor"
                fill="coral"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
              </svg>
            ) : (
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            )}
          </button>
        </div>
      </div>
      {/* Details section for medium and small screens */}
      <div className="p-4 lg:hidden bg-white h-full text-black text-center">
        <h2 className="font-bold text-xl mb-2 text-black text-center">
          {article.title}
        </h2>
        <p className="text-gray-700 text-center mb-2 font-semibold">
          {article.description}
        </p>
        <p className="text-gray-700 text-sm text-center mb-4">
          Source: {article.source.name}
        </p>
        <p className="text-black text-md font-semibold mb-4">
          Published on: {formattedDate}
        </p>
        <div className="flex gap-20 w-full justify-evenly">
          <a
            className="font-bold text-[1.15rem] hover:underline text-red-600"
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
          </a>
          <button className="font-bold underline" onClick={handleFavorite}>
            {isFavorite ? (
              <svg
                stroke="currentColor"
                fill="coral"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
              </svg>
            ) : (
              <svg
                stroke="coral"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
