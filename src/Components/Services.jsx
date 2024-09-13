import React from "react";
import ServiceProvider from "./ServiceProvider";

function Services() {
  return (
    <div className=" md:h-[80vh] sm:h[100vh]  flex flex-col md:flex-col lg:flex-row justify-between items-center my-6">
      <div>
        <img
          src="/image/Rectangle 25.png"
          alt="rectangle-img"
          className="w-32 "
        />
        <h2
          className="xl:text-3xl xl:font-bold xl:w-[18rem] xl:px-6 mt-[-5rem]
        md:text-lg md:pl-8 md:font-medium  lg:text-2xl lg:font-semibold lg:w-[16rem] lg:pl-6
        font-sm ml-7"
        >
          How can we help your Business?
        </h2>
        <p
          className="px-6 xl:mt-6 xl:w-[24rem] xl:text-sm xl:font-light 
        lg:mt-16 lg:w-[22rem] lg:text-sm lg:font-light
        md:mt-16 md:font-light md:mb-3 text-xs mt-12 font-extralight"
        >
          We build readymade websites, mobile applications, and elaborate online
          business services.
        </p>
      </div>
      <ServiceProvider />
    </div>
  );
}

export default Services;
