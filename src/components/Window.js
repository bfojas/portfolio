import React, { Component } from "react";
import { withRouter, Link, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Project from "./Project";
import AllProjects from "./AllProjects";
import Head from "./Head"
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
    e.stopPropagation();
    // const { portfolio, about, email } = this.state;
    const { id } = e.target;
    console.log("hit", id);
    if (id === "about") {
      this.setState({
        about: true,
        portfolio: false,
        email: false
      });
    } else if (id === "portfolio") {
      this.setState({
        portfolio: true,
        about: false,
        email: false
      });
    } else if (id === "email") {
      this.setState({
        email: true,
        about: false,
        portfolio: false
      });
    }
  }; //Window (menus)

  menuClose = () => {
    this.setState({
      about: false,
      portfolio: false,
      email: false
    });
  };

  render() {
    const { about, portfolio, email } = this.state;
    const { minimize } = this.props;
    const portfolioArray = [
      { name: "Road Trip", route: "roadTrip" },
      { name: "Hotel Project", route: "hotelReservation" },
      { name: "Math Challenge", route: "mathChallenge" },
      { name: "Card Fun", route: "cardFun" }
    ];

    const portfolioStyle = portfolio
      ? { height: `${(portfolioArray.length + 1) * 30}px` }
      : { height: 0, border: 0, fontSize: 0 };
    const aboutStyle = about
      ? { height: "120px" }
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
        onClick={this.menuClose}
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
            {/* <Link
              to="/home"
              style={{ textDecoration: "none" }}
              onClick={this.menuClose}
              onMouseEnter={this.menuClose}
            >
              <li>Home</li>
            </Link> */}
            <li
              id="portfolio"
              onMouseEnter={e => this.menuRender(e)}
              onClick={e => this.menuRender(e)}
            >
              Projects
              <ul
                className="portfolio-menu"
                style={portfolioStyle}
                onClick={this.menuClose}
              >
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
            <li
              id="email"
              onMouseEnter={e => this.menuRender(e)}
              onClick={e => this.menuRender(e)}
            >
              Contact
              <ul
                className="email-menu"
                style={emailStyle}
                onClick={this.menuClose}
              >
                <li>
                  <a href="mailto:bradfojas@gmail.com">bradfojas@gmail.com</a>
                </li>
              </ul>
            </li>
            <li
              id="about"
              onMouseEnter={e => this.menuRender(e)}
              onClick={e => this.menuRender(e)}
            >
              About
              <ul
                className="about-menu"
                style={aboutStyle}
                onClick={this.menuClose}
              >
                
              <li><Link
              to="/home"
              style={{ textDecoration: "none" }}
              onClick={this.menuClose}
            >
              Bradley
              </Link></li>
            
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
            <Route path="/project/:id" render={props => <Project />} />
            <Route exact path="/project" component={AllProjects} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(Window);
