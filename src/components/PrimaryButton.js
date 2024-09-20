"use client";
import React from "react";
import image from "../assets/arrow-up.svg";
// import { useRouter } from "next/router";
// import { openInNewTab } from "../../helpers/openInNewTab";
function PrimaryButton({
  buttonText,
  linkTo,
  clickHandle,
  customWidth,
  customWidthValue,
  bgColor,
}) {
  const clickHandler = () => {
    if (clickHandle) {
      clickHandle();
    }
    router.push("/contact");
  };

  return (
    <button
      className="primary-button"
      onClick={clickHandler}
      style={{
        width: customWidth,
        backgroundColor: bgColor,
      }}
    >
      <p className="primary-button-text">{buttonText}</p>

      <img src={image.src} className="primary-button-arrow" alt="arrow" />
    </button>
  );
}

export default PrimaryButton;
