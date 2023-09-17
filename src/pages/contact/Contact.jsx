import React, { useState } from "react";
import "./contact.css";
import Navlink from "../../components/navlink/Navlink";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";
import { Link } from "react-router-dom";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    const textArea = document.createElement("textarea");
    textArea.value = "hkunder0@gmail.com"; // Replace with your email address
    document.body.appendChild(textArea);
    textArea.select();

    try {
      document.execCommand("copy");
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    } catch (err) {
      console.error("Unable to copy email: ", err);
    }

    document.body.removeChild(textArea);
  };

  return (
    <section className="my-contact">
      <Navlink />
      <div className="contact-title">
        <h1>
          Let's make <br /> something great!
        </h1>
      </div>
      <div className="my-contact-content">
        <h3>Contact</h3>
        <p>
          I'm seeking out opportunities to collaborate with companies / agencies
          / individuals, not just work for them. I want to bring my collective
          design experience to the table where we can work together to solve
          real business-problems in a way that optimizes all of our respective
          experience and knowledge.
        </p>
        <p>
          I want to avoid subjective pissing-matches, and favor open-minded
          collaborators where egos are out of the equation. If that all sounds
          about right, then lets for sure chat about how we can work together.
        </p>
        <p>Feel free to reach out through any platforms below:</p>
        <div className="social-box">
          <a href="https://www.linkedin.com/in/hkunder/">
            <LinkedInIcon className="social-icon" />
          </a>
          <a href="https://github.com/Hemantkunder2422?tab=repositories">
            <GitHubIcon className="social-icon" />
          </a>
          <Link href="#" onClick={handleCopyClick}>
            <MarkAsUnreadIcon className="social-icon" />
          </Link>
          {copied && (
            <p style={{ color: "#00c100" }}>Email copied to clipboard!</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
