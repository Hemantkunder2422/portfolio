import React from "react";
import Navlink from "../../components/navlink/Navlink";
import "./work.css";
import { data } from "../../projectdata";

const Work = () => {
  return (
    <section class="myworks">
      <Navlink />
      <div className="myworks-wrapper">
        <ul>
          {data.map((project, index) => {
            const { projectName, desc, img, url } = project;
            return (
              <li key={index} className="work-card">
                <div className="img-box">
                  <img src={img} alt="poster" />
                </div>
                <div className="content-box">
                  <h3>{projectName}</h3>
                  <p>{desc}</p>
                  <a href={url}>View</a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Work;
