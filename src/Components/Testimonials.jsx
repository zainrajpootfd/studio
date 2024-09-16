import React, { useEffect, useState } from "react";
import image1 from "./img/image1.jpg";
import image2 from "./img/image 2.jpg";
import image3 from "./img/image 3.jpg";
import image4 from "./img/image4.jpg";
import image5 from "./img/image5.jpg";

const Slides = [
  {
    img: image1,
    heading: "Michael Anderson",
    paragraph:
      "The results speak for themselves. After partnering with this agency, we saw a significant increase in both traffic and conversions. Their attention to detail and ability to craft tailored campaigns made all the difference. Highly professional and reliable.",
  },
  {
    img: image2,
    heading: "Olivia Mitchell",
    paragraph:
      "This agency delivered exactly what we needed — a clear, results-oriented strategy that aligned with our business goals. From social media campaigns to SEO optimization, they covered all bases, and the results have been outstanding",
  },
  {
    img: image3,
    heading: "James Walker",
    paragraph:
      "The team at this agency took our marketing efforts to the next level. Their ability to merge creativity with data-driven insights delivered measurable results. We saw improvements in brand awareness, customer engagement",
  },
  {
    img: image4,
    heading: "Sophia Clark",
    paragraph:
      "I’m blown away by the level of creativity and strategic thinking this agency brings to the table. They truly understood our brand voice and created campaigns that resonated with our target audience. !",
  },
  {
    img: image5,
    heading: "Emily Roberts",
    paragraph:
      "Working with this marketing agency has been a game-changer for our brand. Their innovative strategies and creative approach helped us reach a wider audience than we ever imagined. The team  truly invested in our success.",
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, delay);

    // Cleanup interval when the component unmounts
    return () => clearInterval(interval);
  }, [currentIndex]);
  const delay = 3000;
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Slides.length);
  };
  // const prevSlide = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? Slides.length - 1 : prevIndex - 1
  //   );
  // };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="grid lg:grid-cols-3 gap-16  w-32 md:w-full items-center md:grid-cols-2
   sm:grid-cols-1 "
    >
      <div>
        <img
          src={Slides[currentIndex].img}
          alt=""
          className="  w-36 h-36 md:w-56 md:h-56 rounded-br-full
        md:ml-2 ml-12 rounded-l-full    "
        />
      </div>
      <div className="w-64 h-42">
        <h4 className="py-5 ">{Slides[currentIndex].heading}</h4>
        <p className="font-extralight text-sm py-1 ">
          {Slides[currentIndex].paragraph}
        </p>
        <div className="flex justify-center py-6 gap-2">
          {Slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-blue-600" : "bg-gray-400"
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
      <div className="w-64 md:justify-center md:ml-[14rem] lg:ml-0">
        <img src="/image/testimonials.png" alt="" />
      </div>
    </div>
  );
}

export default Testimonials;
