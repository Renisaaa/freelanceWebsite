import React from "react";
import image from "../assets/unlock-dream.jpg";
import PrimaryButton from "./PrimaryButton";

const UnlockYourDream = () => {
  return (
    <div className="unlock-your-dream-container">
      <img
        src={image.src}
        alt="unlock your dream"
        className="unlock-your-dream"
      />
      <div className="unlock-your-dream-overlay">
        <p className="unlock-your-dream-title">Unlock Your Dream Home Today!</p>
        <div className="header-btn">
          <p className="unlock-your-dream-subtitle">
            We encourage clients to actively participate in discussions, share
            their ideas, preferences, and feedback
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "row",
            }}
          >
            <PrimaryButton
              buttonText="Get in touch"
              linkTo="/contact"
              bgColor="rgb(2, 49, 47)"
            />
            <PrimaryButton
              buttonText="Call us: 9999999999"
              linkTo="/contact"
              bgColor="#999"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnlockYourDream;
