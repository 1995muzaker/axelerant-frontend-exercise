import React from "react";
import AboutView from "../../../assets/map-img.png";
import './about.scss'

const AboutSection = () => {
  return (
    <div className="about-sec">
      <div className="sub-div">
        <h3>
          Mauris id bibendum est. Proin dapibus
          <br /> sollicitudin iaculis, Maecenas
          <br /> condimentum maximus laoreet
        </h3>
        <p>
          In maximus euismod egestas, Fusce tincidunt posuere est non elementum.
          Vivamus tincidunt eleifiend nisl et gravida. Aenean in lorem ultices,
          pellentesque augue eu, Praesent sed volutpat nibh. Morbi faucibus
          tortor sed neque henderit. Sed aliquam mattis purus eleifiend
          consecteur. Nulla mollis non enim non tempus.
        </p>
      </div>
      <div>
        <img src={AboutView} alt="about" />
      </div>
    </div>
  );
};

export default AboutSection;
