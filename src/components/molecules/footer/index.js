import React from "react";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div>
        <p>&copy; 2017 Company. All Rights Reserved.</p>
      </div>
      <div className="social-icon">
        <p>
          Follow us on: <FaFacebookSquare />
          <FaLinkedin />
          <FaTwitter />
          <FaEnvelope />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
