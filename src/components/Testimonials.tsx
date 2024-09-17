"use client";
import Image from "next/image";
import React from "react";
import image from "../assets/testimonial.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const testData = [
    {
      message:
        "“We specialize in transforming visions into reality. Explore our portfolio of innovative architectural and interior design projects crafted with precision.”",
      author: "John Doe",
      profession: "Founder, BramBram",
    },
    {
      message:
        "As a commercial developer, we have worked with numerous design firms over the years. NextSpace stands out for their innovative designs, and ability to meet deadlines.",
      author: "Renisa",
      profession: "Founder, BramBram",
    },
  ];
  return (
    <div className="flex w-screen">
      <div className="testimonials-container w-[55%] p-5 flex-2 bg-teal-900 flex flex-col justify-center gap-24 items-center">
        <div className="mr-48">
          <h5 className="text-white mb-1 mt-5">TESTIMONIALS</h5>
          <h2 className="text-white font-semibold text-3xl mb-4">
            Client Stories
          </h2>
        </div>
        <div className="w-[400px]">
          <Slider {...settings}>
            {testData?.map((ele, index) => {
              return (
                <div key={index} className="w-20 h-20 text-white">
                  <h2 className="text-3xl mb-3">{ele.message}</h2>
                  <p>{ele.author}</p>
                  <p>{ele.profession}</p>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <div className="img-container flex-1 w-[45%]">
        <Image src={image} alt="testimonials" />
      </div>
    </div>
  );
};

export default Testimonials;
