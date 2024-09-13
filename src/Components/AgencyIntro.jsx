import React from "react";

function AgencyIntro() {
  return (
    <div className="lg:flex justify-between items-center mt-12 md:mt-28">
      <div className=" relative">
        <img src="/image/aagency.png" alt="" className="z-10 relative" />
        <div className="bg-yellow-100 w-12 h-12 md:w-36 md:h-36 xl:w-36 xl:h-36 rounded-full absolute bottom-2 right-0 z-0  "></div>
      </div>

      <div className="md:px-6">
        <h2 className="xl:font-extrabold xl:text-4xl xl:py-7 md:font-extrabold md:text-2xl md:py-9 font-bold py-5">
          Great Digital Product
          <br />
          Agency since 2016
        </h2>
        <p className="xl:font-extralight xl:w-[32rem] md:font-extralight md:w-[32rem] font-extralight text-xs">
          Our Business Plan is a written document describing a company's core
          business activites, Objectives, and how it plans to achieve its goals.
          Our goal is to provide our client high quality Product with modern
          idea accordingly their budgets and according thir reuirements.
        </p>
      </div>
    </div>
  );
}

export default AgencyIntro;
