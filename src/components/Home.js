import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./Home.scss";
import Head from "./Head";
import IconMap from "./IconMap";

const Home = props => {
  return (
    <div className="home-container">
      <Head />
      <IconMap />
      <div className="home-content">
        <div className="home-text">
          <p>
            I'm a Software Engineer focusing mostly on React, React-Native,
            NodeJS, and PostgreSQL. I got my start in development after
            finishing the DevMountain (Phoenix) Web Dev Immersive program as a
            fully badged graduate and hackathon champion.
          </p>
          <p>
            I've also got a brain full of useless facts, in case you're down for
            some bar trivia.
          </p>
          <p>
            Feel free to click around the menus above to find more info about me
            and my projects. Check out this picture of me awkwardly holding my
            dog.
          </p>
          <p className="last-p">Contact me at &nbsp;<a href="mailto:bradfojas@gmail.com">bradfojas@gmail.com</a>.</p>
          <div className="about-icons-container">
            <Link className="single-about-icon" to="/projects">
              <i className="fas fa-folder-open about-icon" />
              <div className="about-icon-text">Projects</div>
            </Link>
            <a
              href="https://www.linkedin.com/in/bradley-fojas/"
              target="_blank"
              rel="noopener noreferrer"
              className="single-about-icon"
            >
              <i className="fab fa-linkedin about-icon" />
              <div className="about-icon-text">LinkedIn</div>
            </a>
            <a
              href="https://github.com/bfojas"
              target="_blank"
              rel="noopener noreferrer"
              className="single-about-icon"
            >
              <i className="fab fa-github about-icon" />
              <div className="about-icon-text">GitHub</div>
            </a>
          </div>
        </div>
        <div className="home-image" />
      </div>
    </div>
  );
};

export default withRouter(Home);
