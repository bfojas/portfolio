import React, { Component } from "react";
import { withRouter, Link, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Project from "./Project";
import AllProjects from "./AllProjects";
import "./Window.scss";

class Window extends Component {
  constructor(props) {
    super(props);
    this.state = {
      about: false, 
      portfolio: false, 
      email: false 
    };
  }

  menuRender = e => {
    const { portfolio, about, email } = this.state;
    const { id } = e.target;
    if (id === "about") {
      this.setState({
        about: !about,
        portfolio: false,
        email: false
      });
    } else if (id === "portfolio") {
      this.setState({
        portfolio: !portfolio,
        about: false,
        email: false
      });
    } else if (id === "email") {
      this.setState({
        email: !email,
        about: false,
        portfolio: false
      });
    } else {
      this.setState({
        about: false,
        portfolio: false,
        email: false
      });
    }
  }; //Window (menus)

  render() {
    const { about, portfolio, email } = this.state;
    const { minimize } = this.props;
    const portfolioArray = [
      { name: "Road Trip", route: "roadTrip" },
      { name: "Math Challenge", route: "mathChallenge" },
      { name: "Card Fun", route: "cardFun" },
      { name: "Ohm's Law", route: "ohmsLaw" }
    ];

    const portfolioStyle = portfolio
      ? { height: `${(portfolioArray.length + 1) * 30}px` }
      : { height: 0, border: 0, fontSize: 0 };
    const aboutStyle = about
      ? { height: "100px" }
      : { height: 0, border: 0, fontSize: 0 };
    const emailStyle = email
      ? { height: "30px" }
      : { height: 0, border: 0, fontSize: 0 };

    const portfolioMap = portfolioArray.map((val, i) => {
      return (
        <li
          key={i}
          onClick={() => {
            this.props.history.push(`/project/${val.route}`);
          }}
        >
          {val.name}
        </li>
      );
    });

    return (
      <div
        className="window-container"
        onClick={e => this.menuRender(e)}
        style={{ display: `${this.props.hidden}` }}
      >
        <div className="window-top">
          <div className="window-name">Bradley Fojas</div>
          <button className="minimize-button" onClick={minimize}>
            <i className="fas fa-caret-down" />
          </button>
        </div>
        <div className="window-menu">
          <ul>
            <Link to="/home" style={{ textDecoration: "none" }}>
              <li>Home</li>
            </Link>
            <li id="portfolio" onClick={e => this.menuRender(e)}>
              Projects
              <ul className="portfolio-menu" style={portfolioStyle}>
                <li
                  style={{
                    borderBottom: portfolio ? "1px solid black" : "0"
                  }}
                  key="all"
                  onClick={() => {
                    this.props.history.push(`/project`);
                  }}
                >
                  View All
                </li>
                {portfolioMap}
              </ul>
            </li>
            <li id="email" onClick={e => this.menuRender(e)}>
              Email
              <ul className="email-menu" style={emailStyle}>
                <li>
                  <a href="mailto:bradfojas@gmail.com">bradfojas@gmail.com</a>
                </li>
              </ul>
            </li>
            <li id="about" onClick={e => this.menuRender(e)}>
              About
              <ul className="about-menu" style={aboutStyle}>
                <li>
                  <a
                    href="https://www.linkedin.com/in/bradley-fojas/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/bfojas"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.hackerrank.com/dollartaco"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    HackerRank
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="route-container">
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/project/:id" component={Project} />
            <Route exact path="/project" component={AllProjects} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(Window);
