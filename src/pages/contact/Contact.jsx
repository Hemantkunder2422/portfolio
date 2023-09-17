import React from "react";
import "./contact.css";
import Navlink from "../../components/navlink/Navlink";

const Contact = () => {
  return (
    <section className="aboutus">
      <main>
        <Navlink />
        <h1>
          Let's make <br />
          something great!
        </h1>
      </main>
      <section id="about-desc">
        <article className="title">
          <h2>About</h2>
          <p>
            I am a skilled front-end developer with expertise in a wide range of
            technologies. My foundation lies in HTML, CSS, and JavaScript, which
            I use to create visually appealing and interactive web interfaces. I
            have honed my abilities in ReactJS, a popular JavaScript library for
            building user interfaces, allowing me to develop dynamic and
            responsive web applications.
          </p>
          <p>
            In addition to my proficiency in front-end technologies, I have
            experience working with REST APIs, facilitating seamless
            communication between the front-end and back-end systems. I am
            familiar with MongoDB, a NoSQL database, and have knowledge of
            ExpressJS, a web application framework, enabling me to build robust
            server-side applications.
          </p>
          <p>
            I am adept at utilizing Redux, a powerful state management library,
            to handle complex data flows and maintain application states
            efficiently. Additionally, I have worked with WordPress, a widely
            used content management system, which has equipped me with the
            ability to create and customize websites with ease.
          </p>
          <p>
            To ensure exceptional performance and user experience, I incorporate
            mobile-responsive design principles, ensuring that websites adapt
            seamlessly to various screen sizes and devices. With a keen eye for
            UI design, I am experienced in using Figma for prototyping and
            Photoshop for graphic design tasks.
          </p>
          <p>
            Furthermore, I am skilled in integrating Google Analytics, enabling
            me to collect and analyze valuable user data to optimize website
            performance and make data-driven decisions.
          </p>
          <p>
            With my comprehensive skill set and a passion for creating intuitive
            and visually appealing web experiences, I am ready to make a
            significant impact as a front-end developer.
          </p>
        </article>
      </section>
    </section>
  );
};

export default Contact;
