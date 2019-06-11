import React from "react";
import { withRouter } from "react-router-dom";
import "./IconMap.scss"

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
        {
          icon: "https://s3.amazonaws.com/dev-fun-bucket/socket_transparent.png",
          text: "Socket.io",
          type: "image"
        },
        { icon: "fab fa-github-square", text: "Git/ GitHub" }
      ];
    
      let iconMapper = (val, i) => {
        return val.type === "image" ? (
          <div key={i}>
            <img
              style={{ height: "64px", width: "64px" }}
              src={val.icon}
              alt={val.text}
            />
            {val.text}
          </div>
        ) : (
          <div key={i}>
            <i className={val.icon} />
            {val.text}
          </div>
        );
      };
    
      let mapIcons = iconsList.map(iconMapper);
  return (
    <div className={`icon-wrap ${props.className}`}>
      <div className="icon-container">{mapIcons}</div>
    </div>
  );
};


export default withRouter(IconMap);