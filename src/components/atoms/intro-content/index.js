import React from "react";
import "./Intro.scss";

const IntroContent = ({ image, para }) => {
  return (
  
      <div>
        <img src={image} alt="intro-icon" />
        <p>{para}</p>
      </div>
  );
};

export default IntroContent;
