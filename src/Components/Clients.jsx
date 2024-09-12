import React from "react";
import { Link } from "react-router-dom";

function Clients() {
  return (
    <div className="px-1 mt-8 md:pl-6">
      <h2 className="text-xl font-bold mb-4 md:mb-0 xl:text-4xl ">
        Our Client
      </h2>
      <div className="md:flex justify-center items-center xl:justify-between lg:justify-between ">
        <p className="md:text-xs font-extralight xl:text-base lg:w-64 xl:w-72 ">
          Several selected clients, who already believe in our service.
        </p>
        <div className=" my-8 ml-8 md:my-1 justify-center items-center xl:gap-40 lg:w-[60%] lg:gap-10  md:flex md:gap-4 cursor-pointer">
          <Link to="https://www.google.com">
            <img
              src="/image/Google.png"
              alt="googlelogo"
              className="my-6 w-40 xl:w-64"
            />
          </Link>
          <Link to="https://www.airbnb.com">
            <img
              src="/image/Airbnb.png"
              alt="Airbnblogo"
              className="my-6 w-40 xl:w-72"
            />
          </Link>
          <Link to="https://www.ubereats.com">
            <img
              src="/image/UberEats.png"
              alt="ubereatslogo"
              className="my-6 w-40 xl:w-72"
            />
          </Link>
          <Link to="https://www.amazon.com" className="md:mt-4">
            <img
              src="/image/Amazon.png"
              alt="amazonlogo"
              className="my-10 w-40 xl:w-72"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Clients;
