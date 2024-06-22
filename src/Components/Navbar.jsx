import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles } from "../Redux/Slices";
import CategoryFilter from "./Filter";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { articles, loading, error } = useSelector((state) => state.news);
  const user = localStorage.getItem("user");
  const favorites = useSelector((state) => state.favorites.articles);

  useEffect(() => {
    dispatch(fetchArticles({ category }));
  }, [category, dispatch]);


  useEffect(() => {
    if (!loading && articles.length > 0) {
      const articlesElement = document.getElementById("articles");
      if (articlesElement) {
        articlesElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [loading, articles]);

  return (
    <header className="w-full flex flex-row items-center z-20 p-4 bg-gray-900 text-white">
      <div className="flex justify-between w-full max-w-screen-xl mx-auto">
        <div className="flex flex-row items-center md:gap-20 sm:gap-5 z-30">
          <h1 className="text-4xl italic tracking-widest font-bold font-serif">
            News.<span className="text-red-400 text-3xl">now()</span>
          </h1>
          <div className="lg:hidden ml-4">
            <CategoryFilter
              selectedCategory={category}
              onSelectCategory={setCategory}
              onIsOpen={setIsOpen}
            />
          </div>
        </div>

        <div className="lg:hidden flex flex-col items-center mt-6 ">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white ml-10">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}
              ></path>
            </svg>
          </button>
        </div>

        <nav className="hidden lg:flex lg:items-center lg:w-auto">
          <ul className="flex space-x-20 flex-row font-palanquin text-lg mt-4 font-semibold z-20 pl-20">
            <li className="text-white hover:text-red-400 transition-all">
              <a href="#home">Home</a>
            </li>
            <li className="text-white hover:text-red-400 transition-all">
              <a href="#articles">Articles</a>
            </li>
            {user ? (
              <>
                <li className="text-white hover:text-red-400 transition-all">
                  <a href="/favorites">Favorites {favorites.length>0?<span className="bg-white text-sm h-[20px] text-black p-1 rounded-full">{favorites.length}</span>:null}  </a>
                </li>
                <li className="text-white hover:text-red-400 transition-all cursor-pointer">
                  <a
                    onClick={() => {
                      Swal.fire({
                        title: 'Logout Successful!',
                        icon: 'success',
                        timer: 1500,
                        toast: true,
                        timerProgressBar: true,
                        position: 'top',
                        showConfirmButton: false
                      }).then(() => {
                        localStorage.clear();
                        window.location.reload();
                      });
                    }}
                  >
                    LogOut
                  </a>
                </li>
              </>
            ) : (
              <li className="text-white hover:text-red-400 transition-all">
                <a href="/login">Login</a>
              </li>
            )}
            <li className="mt-[-10px]">
              <CategoryFilter
                selectedCategory={category}
                onSelectCategory={setCategory}
                onIsOpen={setIsOpen}
              />
            </li>
          </ul>
        </nav>

        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } lg:hidden w-full mt-10 lg:mt-0 font-palanquin text-lg font-semibold z-30`}
        >
          <ul className="flex flex-col gap-2">
            <li className="hover:text-red-400 transition-all z-30">
              <a href="#home" onClick={() => setIsOpen(false)}>
                Home
              </a>
            </li>
            <li className="hover:text-red-400 z-30 transition-all">
              <a href="#articles" onClick={() => setIsOpen(false)}>
                Articles
              </a>
            </li>
            {user ? (
              <>
                <li className="hover:text-red-400 z-30 transition-all">
                  <a href="/favorites" onClick={() => setIsOpen(false)}>
                    Favorites {favorites.length>0?<span className="bg-white text-black text-sm p-1 rounded-full">{favorites.length}</span>:null}  
                  </a>
                </li>
                <li className="hover:text-red-400 z-30 transition-all cursor-pointer">
                  <a
                    onClick={() => {
                      Swal.fire({
                        title: 'Logout Successful!',
                        icon: 'success',
                        timer: 1500,
                        toast: true,
                        timerProgressBar: true,
                        position: 'top',
                        showConfirmButton: false
                      }).then(() => {
                        localStorage.clear();
                        window.location.reload();
                      });
                    }}
                  >
                    Log Out
                  </a>
                </li>
              </>
            ) : (
              <li className="hover:text-red-400 z-30 transition-all">
                <a href="/login" onClick={() => setIsOpen(false)}>
                  Login
                </a>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
