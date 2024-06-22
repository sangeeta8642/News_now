
// Introduction Screen

import React from "react";
import bg1 from "../images/background1.jpg";

const Slide = () => {
  return (
    <section className="w-full h-[100vh] grid place-items-center p-2">
      <div className="relative w-full h-full grid grid-cols-1 grid-rows-1">
        <div className=" z-10 flex flex-col lg:gap-10 md:gap-5 sm:gap-5 p-12 pl-16 h-full">
          <h1 className="lg:mt-10 lg:w-[60%] md:w-full font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
            Welcome <br />
            To{" "}
            <span className="text-red-500">
              The
            </span>{" "}
            World's <br />
            Best <span className="text-red-500">News portal</span>{" "}
          </h1>
          <p className="capitalize text-lg font-palanquin">
            Here you will find the most accurate news ever
          </p>
          <button className="bg-red-500 w-52 h-12 rounded-lg text-lg font-semibold">
          <a href="#articles">Explore{" "}</a>
            
          </button>
        </div>
        <div className="absolute inset-0 z-0 lg:w-[50%] md:w-full lg:h-full md:h-[] lg:mt-[-6.5rem] lg:ml-[49.5rem] md:mt-[-10px]">
          <img
            src={bg1}
            alt="bg1"
            className="w-ful h-full object-cover brightness-[30%]"
          />
        </div>
      </div>
    </section>
  );
};

export default Slide;
