import React from "react";

function ServiceProvider() {
  return (
    <div
      className="grid md:grid-cols-2 xl:gap-28 xl:px-28 lg:gap-28 md:gap-20 sm:grid-cols-1
gap-[1rem]"
    >
      <div className="mt-20  bg-gray-200 rounded-xl h-60 w-56 text-center space-y-9">
        <img
          src="/image/box-search 1.png"
          alt="box-search-img"
          className="ml-16 mt-4"
        />
        <h3>Business Idea</h3>
        <p className="text-sm font-extralight">
          We present you a proposal and <br></br> discuss niffy-gritty like
        </p>
      </div>
      <div className="  bg-gray-200 rounded-xl h-60 w-56 text-center space-y-7">
        <img
          src="/image/empty-wallet 1.png"
          alt="wallet-img"
          className="ml-16 mt-4"
        />
        <h3>
          Financial <br></br>Planning System
        </h3>
        <p className="text-sm font-extralight">
          Protocols apart from aengage<br></br>models, pricing billing
        </p>
      </div>
      <div className="  bg-gray-200 rounded-xl h-60 w-56 text-center space-y-7">
        <img src="/image/code-1 1.png" alt="code-img" className="ml-16 mt-4" />
        <h3>
          Development <br></br> Website and App
        </h3>
        <p className="text-sm font-extralight">
          Communication protocols apart <br></br> from engagement models
        </p>
      </div>
      <div className=" md:mt-[-4rem]  bg-gray-200 rounded-xl h-60 w-56 text-center space-y-7">
        <img
          src="/image/chart-square 1.png"
          alt="chart-img"
          className="ml-16 mt-4"
        />
        <h3>
          Market Analysis <br></br> Project
        </h3>
        <p className="text-sm font-extralight">
          Protocols apart from aengage<br></br>models, pricing billing
        </p>
      </div>
    </div>
  );
}

export default ServiceProvider;
