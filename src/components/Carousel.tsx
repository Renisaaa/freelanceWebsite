"use client"; // This line marks the component as a client component

import React, { useEffect, useRef, useState } from "react";
import image from "../assets/int1.jpg";
import image1 from "../assets/int2.jpg";
import image2 from "../assets/int3.jpg";
import image3 from "../assets/int4.jpg";
import { StaticImageData } from "next/image";

const images: any[] = [image, image1, image2, image3];

const Carousel: React.FC = () => {
  const carouselRef = useRef<NodeJS.Timeout | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const startCarousel = () => {
    if (carouselRef.current) clearInterval(carouselRef.current);
    carouselRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Adjust timing as needed
  };

  const stopCarousel = () => {
    if (carouselRef.current) clearInterval(carouselRef.current);
  };

  const isInViewport = (element: HTMLElement | null): boolean => {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const carouselSection = document.getElementById("carousel-section");
      if (isInViewport(carouselSection)) {
        startCarousel();
      } else {
        stopCarousel();
      }
    };

    document.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      document.removeEventListener("scroll", handleScroll);
      stopCarousel();
    };
  }, []);

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Slide ${index}`}
            className="carousel-image"
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
