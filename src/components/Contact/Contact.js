import React from "react";
import { RiFacebookBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <section id="contact">
        <h1>CONTACT US</h1>
        <p>We'd love to hear from you! Whether you're planning a special getaway, inquiring about availability, or seeking more information about our luxurious villas, our dedicated team is here to assist you. Reach out today, and let us help you create the perfect escape.</p>
        
        <div className="container">
          <img src="/about.jpg" alt="about" />
          <div className="content">
              <h3>Let's connect</h3>
              <div>
                <p>Phone</p>
                <span>+91 9987453261</span>
              </div>
              <div>
                <p>Email</p>
                <span>Itb@gmail.com</span>
              </div>
              <div>
                <p>Address</p>
                <span>House No.121 Sector A-3</span>
              </div>
              <ul>
                <Link to={"/facebook"} target="_blank">
                  <RiFacebookBoxLine />
                </Link>
                <Link to={"/facebook"} target="_blank">
                  <RiFacebookBoxLine />
                </Link>
                <Link to={"/facebook"} target="_blank">
                  <RiFacebookBoxLine />
                </Link>
              </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;