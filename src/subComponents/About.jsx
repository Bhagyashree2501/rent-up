import React from "react";

const About = () => {
  return (
    <>
      <section id="aboutUs_Mini">
        <div className="first_container">
          <div className="content">
          <h1>ABOUT US</h1>
          <p>
            Designed for discerning travelers, each villa features state-of-the-art amenities, breathtaking views, and world-class service, ensuring an unforgettable experience. 
          </p>
          <p>
          Whether you seek a tranquil escape or an adventurous getaway, our villas provide the perfect blend of privacy and luxury. 
          </p>
          <p>
          Immerse yourself in elegance, where every detail has been thoughtfully crafted to deliver an extraordinary stay.
          </p>
          
          </div>
          <button>We strive to offer you best possible homes to stay!</button>
        </div>
        <div className="second_container">
          <div className="image_1">
            <img src="/people.jpg" alt="people" />
          </div>
          <div className="image_2">
            <img src="people2.jpg" alt="people2" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;