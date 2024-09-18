import React from "react";

function NewsLetter() {
  return (
    <>
      <div className="bg-[#F4F9FF] lg:h-64 md:h-[27rem] h-[18rem]  my-28 rounded-[4rem] ">
        <div className="flex flex-col lg:flex-row items-center justify-between xl:px-24 xl:py-10 lg:px-10 ">
          <div className="space-y-6 mt-14 text-center md:text-left">
            <h2 className="font-extrabold md:text-4xl text-base">
              Subscribe Newsletter
            </h2>
            <p className="font-light md:text-base text-base">
              I will update good news and promotion service not spam
            </p>
          </div>
          <div className="absolute xl:right-20 lg:right-12 md:mt-36 lg:mt-3 xl:mt-0">
            <img
              src="/image/canvas.png"
              alt=""
              className="md:h-64 h-24  md:mt-8 mt-[10.5rem] "
            />
          </div>
          <div className="relative shadow-inherit  md:mt-20 mt-12">
            <input
              type="email"
              placeholder="Enter your email address"
              className="md:px-8 md:py-6 px-2 py-1 rounded-full md:w-[32rem] w-64 drop-shadow-lg outline-none relative"
            />
            <button className="bg-blue-500 text-white font-bold md:text-xl px-5 py-3 rounded-full absolute md:right-3 md:top-3 right-14 top-24 cursor-pointer">
              Contact Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsLetter;
