import React from "react";
import ContactForm from "../../molecules/contact-form";
import ContactImage from "../../../assets/footer-bg.png";
import "./contact.scss";

const contactBg = {
  width: "100%",
  height: "100%",
  background: `url(${ContactImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const ContactSection = () => {
  return (
    <div className="contact-div" style={contactBg}>
      <h2>Convinced To Work With Us?</h2>
      <h3>
        Company has helped agencies keep their promises to clients since 2005.
      </h3>
      <ContactForm />
    </div>
  );
};

export default ContactSection;
