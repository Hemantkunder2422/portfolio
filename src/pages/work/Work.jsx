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
            const { projectName, desc } = project;
            return (
              <li key={index}>
                <h3>{projectName}</h3>
                <p>{desc}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Work;
