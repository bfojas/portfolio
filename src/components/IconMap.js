import React from "react";
import { withRouter } from "react-router-dom";
import "./IconMap.scss";

const IconMap = props => {
  let iconsList = [
    { icon: "fab fa-react", text: "React/ React-Native" },
    { icon: "fab fa-node-js", text: "NodeJs/ Express" },
    { icon: "devicon-postgresql-plain", text: "PostgreSQL" },
    { icon: "fab fa-js-square", text: "JavaScript ES6" },
    { icon: "fab fa-html5", text: "HTML5" },
    { icon: "fab fa-sass", text: "CSS/ SASS" },
    {
      icon: "https://s3.amazonaws.com/dev-fun-bucket/redux_transparent.png",
      text: "Redux",
      type: "image"
    },
    { icon: "fab fa-github-square", text: "Git/ GitHub" }
  ];

  let iconMapper = val => {
    return val.type === "image" ? (
      <div className="single-icon" key={val.text}>
        <img className="tech-icon"
          style={{ height: "64px", width: "64px" }}
          src={val.icon}
          alt={val.text}
        />
        {val.text}
      </div>
    ) : (
      <div className="single-icon" key={val.text}>
        <i className={`${val.icon} tech-icon`} />
        {val.text}
      </div>
    );
  };

  return (
    <div className={`icon-wrap ${props.className}`}>
      <div className="icon-container">
        <div className="four-icons">
          <div className="two-icons">
            {iconMapper(iconsList[0])}
            {iconMapper(iconsList[1])}
          </div>
          <div className="two-icons">
            {iconMapper(iconsList[2])}
            {iconMapper(iconsList[3])}
          </div>
        </div>
        <div className="four-icons">
          <div className="two-icons">
            {iconMapper(iconsList[4])}
            {iconMapper(iconsList[5])}
          </div>
          <div className="two-icons">
            {iconMapper(iconsList[6])}
            {iconMapper(iconsList[7])}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(IconMap);
