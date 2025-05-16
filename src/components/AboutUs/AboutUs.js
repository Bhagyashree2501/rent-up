import React from "react";
import AboutComponentMini from "../../subComponents/About";
const AboutUs = () => {
  return (
    <section id="aboutPage" className="page">
      <div className="container">
        <img src="/about.jpg" alt="about" />
        <div className="content">
          <h3>Your peace of mind, our priority!</h3>
          <p>Nestled in the heart of breathtaking landscapes, our luxury villas offer an unparalleled retreat that combines sophistication, comfort, and exclusivity. </p>
          
        </div>
      </div>
      <AboutComponentMini />
    </section>
  );
};

export default AboutUs;