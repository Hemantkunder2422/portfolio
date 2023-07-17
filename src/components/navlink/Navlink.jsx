import React, { useState } from "react";
import "./navlink.css";
import { Link } from "react-router-dom";

const Navlink = () => {
  const [navtext, setNavText] = useState("");

  const navEnterHandler = () => {
    setNavText("works");
  };
  const navLeaveHandler = () => {
    setNavText("");
  };

  return (
    <nav
      className="navlink"
      onMouseEnter={navEnterHandler}
      onMouseLeave={navLeaveHandler}
    >
      <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
        hemant.{navtext}
      </Link>
    </nav>
  );
};

export default Navlink;
