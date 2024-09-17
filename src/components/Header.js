import React from "react";
import image from "../assets/header.jpg";

const Header = () => {
  return (
    <div>
      <img src={image.src} alt="logo" className="header-img" />
      <div className="header-overlay">
        <p className="header-title">Elevating Spaces {"\n"}Crafting Dreams</p>
        <div className="header-btn">
          <p className="header-subtitle">
            We specialize in transforming visions into reality. Explore our work
            of innovative architectural.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
