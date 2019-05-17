import React from "react";
import { withRouter } from "react-router-dom";
import "./ProjectTiles.scss";

const ProjectTiles =  props  => {
    const {val} = props
  let imageClass = val.imageHeight === "250px" ? "web" : "mobile";
  return (
    <React.Fragment>
      <div
        className={`project-image ${imageClass}`}
        style={{
          backgroundImage: `url(${val.image[0]})`
        }}
        onClick={() => {
          props.history.push(`/project/${val.route}`);
        }}
      >
        <div className="hover-cover">{`${val.name} PROJECT`}</div>
      </div>
    </React.Fragment>
  );
};

export default withRouter(ProjectTiles);
