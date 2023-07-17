import React, { useState } from "react";
import "./home.css";
import Profilepic from "../../../src/assets/images/DejanHome.png";
import { Link } from "react-router-dom";

const Home = () => {
  const [about, setAbout] = useState("Hello.");
  const [work, setWork] = useState("I am");
  const [contact, setContact] = useState("Hemant");

  const AboutenterHandler = () => {
    setAbout("About");
  };
  const AboutLeaveHandler = () => {
    setAbout("Hello.");
  };

  const WorkEnterHandler = () => {
    setWork("Work");
  };
  const WorkLeaveHandler = () => {
    setWork("I am");
  };
  const ContactEnterHandler = () => {
    setContact("Contact");
  };
  const ContactLeaveHandler = () => {
    setContact("Hemant");
  };

  return (
    <div className="home">
      <div className="home__wrapper">
        <div className="home__text">
          <ul>
            <Link to="/about" style={{ textDecoration: "none", color: "#fff" }}>
              <li
                className="about"
                onMouseEnter={AboutenterHandler}
                onMouseLeave={AboutLeaveHandler}
              >
                {about}
              </li>
            </Link>
            <Link to="/work" style={{ textDecoration: "none" }}>
              <li
                className="text-red work"
                onMouseEnter={WorkEnterHandler}
                onMouseLeave={WorkLeaveHandler}
              >
                {work}
              </li>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <li
                className="text-red contact"
                onMouseEnter={ContactEnterHandler}
                onMouseLeave={ContactLeaveHandler}
              >
                {contact}
              </li>
            </Link>
          </ul>
        </div>
        <div className="home__image">
          <img src={Profilepic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
