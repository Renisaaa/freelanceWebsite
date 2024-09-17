"use client"; // This line marks the component as a client component

import image from "../assets/int1.jpg";
import image1 from "../assets/int2.jpg";
import image2 from "../assets/int3.jpg";
import image3 from "../assets/int4.jpg";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images: any[] = [image, image1, image2, image3];

const PhotoGallery: React.FC = () => {
  let settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="h-56 w-screen p-10 sm:h-64 xl:h-80 2xl:h-96">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="w-40 h-96 px-2">
            <Image src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PhotoGallery;
