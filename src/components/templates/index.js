import React from "react";
import NavBar from "../organisms/navbar/index";
import FirstSection from "../organisms/main";
import AboutSection from "../organisms/about";
import Testimonial from "../organisms/testimonial";
import ContactSection from "../organisms/contact";
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
