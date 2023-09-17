import React from "react";
import Navlink from "../../components/navlink/Navlink";
import "./work.css";
import { data } from "../../projectdata";

const Work = () => {
  return (
    <section class="myworks">
      <Navlink />
      <div className="myworks-wrapper">
        <div className="my-works-title">
          <h1>My Sample Works</h1>
        </div>
        <ul className="my-works-grid">
          {data.map((project) => {
            const { projectName, url, desc } = project;
            return (
              <li>
                <div className="img-box">
                  <img src="https://i.ibb.co/GCygp6H/image-1-1.png" alt="" />
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
