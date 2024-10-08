import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="  flex flex-col-reverse md:flex md:flex-row justify-between items-center ">
      <div className="pl-1 md:pl-6 lg:pl-8 xl:px-10">
        <h1 className="font-semibold text-xl md:text-[1.2rem] md:font-extrabold mb-4 xl:text-4xl xl:pb-10">
          A Digital Product Agency
        </h1>
        <p className="text-justify leading-6 font-extralight tracking-normal mb-4 w-full md:w-72 xl:w-96 xl:mb-10 xl:text-lg xl:font-thin md:tracking-normal md:leading-7 md:text-sm">
          Leading digital agency with solid design and development expertise. We
          build readymade websites, mobile applications, and elaborate online
          business services.
        </p>
        <NavLink to="/Contact">
          <button className="bg-blue-600 w-44 xl:text-xl xl:py-3 xl:px-4 hover:w-60 animate-bounce transition-all duration-500  ease-in-out font-semibold text-white py-2 px-4  rounded-full cursor-pointer">
            Contact Now
          </button>
        </NavLink>
      </div>
      <div>
        <img
          src="/image/Hero.png"
          alt="hero-image"
          className="mb-4 h-56  md:h-[16rem] lg:h-[28rem] xl:h-[35rem]  object-cover"
        />
      </div>
    </div>
  );
}

export default Home;
