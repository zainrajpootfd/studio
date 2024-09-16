import React from "react";

function NewsLetter() {
  return (
    <>
      <div className="flex flex-col gap-12 lg:flex-row justify-around items-center  my-10 bg-white w-[95%] ml-6 rounded-full  relative z-40">
        <div className="bg-white">
          <h2 className="font-extrabold text-3xl py-8">
            Subscribe to our Newsletter
          </h2>
          <p className="font-extralight text-base">
            I will update good news and promotion service not spam
          </p>
        </div>
        <div className="bg-[url('./image/canvas.png')] h-32 w-32 md:h-60 md:w-[30%] bg-no-repeat rounded-r-3xl rounded-bl-3xl">
          <form className="flex relative top-24 right-14">
            <input
              type="email"
              placeholder="Enter your email address"
              className="border-2 border-solid border-w rounded-full shadow-xl w-96 px-4 py-3"
            />
            <button
              type="contact"
              className="bg-blue-500 rounded-full px-4 py-1 absolute top-0 right-4 mt-[0.5rem] text-white 
            text-lg font-bold"
            >
              Contact Now
            </button>
          </form>
        </div>
      </div>
      <div className=" bg-[url('./image/border.png')] bg-no-repeat rounded-sm w-64 h-52 mt-[-12.5rem] absolute z-20 "></div>
    </>
  );
}

export default NewsLetter;
