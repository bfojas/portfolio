import React from "react";
import { withRouter } from "react-router-dom";
import "./Home.scss";
import Head from "./Head";

const Home = props => {
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
    <div className="home-container">
      <Head />
      <div className="icon-wrap">
        <div className="icon-container">{mapIcons}</div>
      </div>
      <div className="home-content">
        <div className="home-text">
          <p>
            I'm a Web Developer focusing mostly on React, React-Native, NodeJS, and PostgreSQL. I got my start in development after finishing the DevMountain (Phoenix) Web Dev Immersive program as a fully badged graduate and hackathon champion. 
          </p>
          <p>
            I've also got a brain full of useless facts, in case you're down for some bar trivia.
          </p>
          <p className="last-p">
            Feel free to click around the menus above to find more info about
            me and my projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Home);
