import React from "react";

function Testimonials() {
  return (
    <div className="grid grid-cols-3 gap-4 bg-yellow-200 h-96 items-center ">
      <div>1</div>
      <div>
        <h4>harry</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, quod.
        </p>
        <div className="bg-white w-6 h-6 rounded-full "></div>
      </div>
      <div>
        <img src="/image/testimonials.png" alt="" />
      </div>
    </div>
  );
}

export default Testimonials;
