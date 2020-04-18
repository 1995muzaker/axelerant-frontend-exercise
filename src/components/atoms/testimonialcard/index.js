import React from "react";
import "./testimonialcard.scss";
import Quote from "../../../assets/quote-img.png";
import Client from "../../../assets/profile-img.png";

const TestimonialCard = ({para}) => {
  return (
    <div className="testimonial-view">
      <div className="testimonial-card">
        <img src={Quote} alt="Quote" />
        <p className="box arrow-bottom">
          {para}
        </p>
      </div>
      <div className="client">
        <img src={Client} alt="client" />
        <div>
          <h3>CLIENT NAME</h3>
          <p>Position, ORG</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
