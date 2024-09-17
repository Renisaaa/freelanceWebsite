import React from "react";
import PrimaryButton from "./PrimaryButton";
import image1 from "../assets/services1.jpg";
import image2 from "../assets/services2.jpg";
import image3 from "../assets/services3.jpg";

const HomepageServices = () => {
  const array = [
    {
      title: "Home Decoraction",
      subTitle:
        "Efficient use of space is crucial in home interior design. Consider the layout of furniture.",
      image: image2,
    },
    {
      title: "Home Decoraction",
      subTitle:
        "Efficient use of space is crucial in home interior design. Consider the layout of furniture.",
      image: image1,
    },
    {
      title: "Home Decoraction",
      subTitle:
        "Efficient use of space is crucial in home interior design. Consider the layout of furniture.",
      image: image3,
    },
  ];

  return (
    <div className="homepage-services">
      <div className="homepage-services-top">
        <div>
          <p className="homepage-services-title">SERVICES</p>
          <p className="homepage-services-description">
            Get your dream home with {"\n"}expert help.
          </p>
        </div>
        <PrimaryButton
          buttonText="Get in touch"
          linkTo="/contact"
          bgColor="rgb(2, 49, 47)"
        />
      </div>
      <div className="homepage-services-bottom">
        {array.map((item, index) => (
          <div className="homepage-services-card" key={index}>
            <img
              src={item.image.src}
              alt="image"
              className="homepage-services-image"
            />
            <p className="homepage-services-card-title">{item.title}</p>
            <p className="homepage-services-card-subtitle">{item.subTitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomepageServices;
