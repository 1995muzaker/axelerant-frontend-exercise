import React from "react";
import NavBar from "../organisms/navbar/index";
import FirstSection from "../organisms/FirstSection";
import AboutSection from "../organisms/AboutSection";
import Testimonial from "../organisms/Testimonial";
import ContactSection from "../organisms/ContactSection";
import Footer from "../molecules/footer";

const Templates = () => {
  return (
    <React.Fragment>
      <NavBar />
      <FirstSection />
      <AboutSection />
      <Testimonial />
      <ContactSection />
      <Footer />
    </React.Fragment>
  );
};

export default Templates;
