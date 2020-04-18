import React from "react";
import IconOne from "../../../assets/icon1.png";
import IconTwo from "../../../assets/icon2.png";
import IconThree from "../../../assets/icon3.png";
import BackgroundImage from "../../../assets/banner.png";
import IntroContent from "../../atoms/intro-content";
import "./banner.scss";

const backgrounStyle = {
  width: "100%",
  height: "100%",
  backgroundImage: `url(${BackgroundImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Banner = () => {
  return (
    <div className="banner-div" style={backgrounStyle}>
      <h2>
        Integer bibendum sit amet <br /> arcu vel egestas
      </h2>
      <div className="intro-content-div">
        <IntroContent image={IconOne} para={"Service Name"} />
        <IntroContent image={IconTwo} para={"Service Name"} />
        <IntroContent image={IconThree} para={"Service Name"} />
      </div>
    </div>
  );
};

export default Banner;
