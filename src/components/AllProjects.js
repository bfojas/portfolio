import React, { useState } from "react";
import { projects } from "../ducks/reducer";
import Head from "./Head";
import ProjectTiles from "./ProjectTiles";
import "./AllProjects.scss";

const AllProjects = props => {
  const [selected, setSelected] = useState("web");

  let webProjects = [];
  let mobileProjects = [];

  projects.forEach(val => {
    val.imageHeight === "250px"
      ? webProjects.push(val)
      : mobileProjects.push(val);
  });

  let imageMapper = (val, i) => {
    return <ProjectTiles val={val} />;
  };

  let selector = tab => {
    setSelected(tab);
  };

  let webImages = webProjects.map(imageMapper);
  let mobileImages = mobileProjects.map(imageMapper);

  return (
    <div className="all-container">
      <Head />
      <div className="selector-container">
        <div className="selector-tabs">
          <p
            className={`selector ${selected === "web" ? "active" : null}`}
            onClick={() => selector("web")}
          >
            <p className="break">|</p>Web Projects<p className="break">..</p>
          </p>
          <p
            className={`selector ${selected === "mobile" ? "active" : null}`}
            onClick={() => selector("mobile")}
          >
            Mobile Projects
          </p>
        </div>
        <div className={`image-container ${selected === 'web' ? 'web-images' : 'mobile-images'}`}>
          {selected === "web" ? webImages : mobileImages}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
