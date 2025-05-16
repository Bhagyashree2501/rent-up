import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      <footer className={isHomePage ? 'homePage_footer otherPage_footer': "otherPage_footer"}>
        <div className="container">
          <h4>LUXURY RENT UP</h4>
          <p>
          LIVE LIKE A KING IN OUR BEST HOUSES...!
          </p>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/termsandconditions"}>Terms&Conditions</Link>
            </li>
            <li>
              <Link to={"/"}>Contact</Link>
            </li>
          </ul>
          <p>Developed By ITBrainsConsultancyAndServicesPvtLtd.</p>
        </div>
        <div className="container">
          <h4>Connect with us</h4>
          <p>+91 998745326</p>
          <p>Itb@gmail.com</p>
          <p>© All Rights Reserved By Luxury Rent up.</p>
          
        </div>
      </footer>
    </>
  );
};

export default Footer;