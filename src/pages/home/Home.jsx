import React, { useState } from "react";
import "./home.css";
import Profilepic from "../../../src/assets/images/DejanHome.png";
import { Link } from "react-router-dom";

const Home = () => {
  const [hoveredText, setHoveredText] = useState(null);

  const handleMouseEnter = (text) => {
    setHoveredText(text);
  };

  const handleMouseLeave = () => {
    setHoveredText(null);
  };

  return (
    <div className="home">
      <div className="home__wrapper">
        <div className="home__text">
          <ul>
            <Link to="/about" style={{ textDecoration: "none", color: "#fff" }}>
              <li
                className={hoveredText === "About" ? "about" : ""}
                onMouseEnter={() => handleMouseEnter("About")}
                onMouseLeave={handleMouseLeave}
              >
                {hoveredText === "About" ? "About" : "Hello."}
              </li>
            </Link>
            <Link to="/work" style={{ textDecoration: "none" }}>
              <li
                className={
                  hoveredText === "Work" ? "text-red work" : "text-red"
                }
                onMouseEnter={() => handleMouseEnter("Work")}
                onMouseLeave={handleMouseLeave}
              >
                {hoveredText === "Work" ? "Work" : "I am"}
              </li>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <li
                className={
                  hoveredText === "Contact" ? "text-red contact" : "text-red"
                }
                onMouseEnter={() => handleMouseEnter("Contact")}
                onMouseLeave={handleMouseLeave}
              >
                {hoveredText === "Contact" ? "Contact" : "Hemant"}
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
