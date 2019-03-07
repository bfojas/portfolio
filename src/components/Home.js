import React from "react";
import { withRouter } from "react-router-dom";
import "./Home.scss";

export function Home(props) {
  return (
    <div className="home-container">
      <div className="head-content">
        <div className="profile-image" />
        <div className="head-info">
          <h1>BRADLEY FOJAS</h1>
          <h3>FULL-STACK WEB DEVELOPER</h3>
        </div>
      </div>
      <div className="icon-container">
        <div>
          <i className="fab fa-react" />
          React
        </div>
        <div>
          <i className="fab fa-node-js" />
          Node.js
        </div>
        <div>
          <i className="devicon-postgresql-plain" />
          PostgreSQL
        </div>
        <div>
          <i className="fab fa-js-square" />
          JavaScript
        </div>
        <div>
          <i className="fab fa-html5" />
          HTML5
        </div>
        <div>
          <i className="fab fa-css3-alt" />
          CSS3
        </div>
      </div>
      <div className="home-content">
        <p>
          After many years as a biomedical technician tackling complex technical
          issues, Bradley recently completed the Full-Stack Web Development
          Immersive program at DevMountain where he received much praise from
          his instructors and peers for his enthusiastic approach to learning
          and troubleshooting.
        </p>
        <p>
          Although he attended the coding bootcamp with no prior coding
          experience, Bradley was not only able to quickly gain comprehension of
          JavaScript, HTML and CSS, but also of a full-stack that included
          ReactJs, NodeJs and PostgreSQL.
        </p>
        <p className="last-p">
          Feel free to click around the menus above to find more info about
          Bradley and his projects.
        </p>
      </div>
    </div>
  );
}

export default withRouter(Home);
