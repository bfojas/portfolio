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
      icon: "https://s3.amazonaws.com/dev-fun-bucket/reduxLogo.png",
      text: "Redux",
      type: "image"
    },
    {
      icon: "https://s3.amazonaws.com/dev-fun-bucket/socket_icon.png",
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
            After many years as a biomedical technician tackling complex
            technical issues, Bradley recently completed the Full-Stack Web
            Development Immersive program at DevMountain where he received much
            praise from his instructors and peers for his enthusiastic approach
            to learning and troubleshooting.
          </p>
          <p>
            Although he attended the coding bootcamp with no prior coding
            experience, Bradley was not only able to quickly gain comprehension
            of JavaScript, HTML and CSS, but also of a full-stack that included
            ReactJs, NodeJs and PostgreSQL. Other technologies Bradley has been
            able to learn include SASS, React-Native, Firebase, Nginx, Amazon
            S3, Socket.io, jQuery, and Jest.
          </p>
          <p className="last-p">
            Feel free to click around the menus above to find more info about
            Bradley and his projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Home);
