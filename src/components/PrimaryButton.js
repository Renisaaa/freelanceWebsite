import React from "react";
// import { useRouter } from "next/router";
// import { openInNewTab } from "../../helpers/openInNewTab";
function PrimaryButton({
  buttonText,
  linkTo,
  clickHandle,
  customWidth,
  customWidthValue,
  image,
  bgColor,
}) {
  const clickHandler = () => {
    if (clickHandle) {
      clickHandle();
    }
    if (linkTo) {
      if (linkOnBlank) return openInNewTab(linkTo);
      //   router.push(linkTo);
    }
  };

  return (
    <div
      className="primary-button"
      //   onClick={clickHandler}
      style={{
        width: customWidth,
        backgroundColor: bgColor,
      }}
    >
      <p className="primary-button-text">{buttonText}</p>
      {image && (
        <img src={image.src} className="primary-button-arrow" alt="arrow" />
      )}
    </div>
  );
}

export default PrimaryButton;
