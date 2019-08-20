import React, { Component } from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Project from "./Project";
import Images from "./Images";
import "./Window.scss";

class Window extends Component {
  constructor(props) {
    super(props);
    this.state = {
      about: false,
      portfolio: false,
      email: false,
      modalType: "",
      imageModal: false,
      imageStart: 0,
      renderPath: false
    };
  }

  menuRender = e => {
    const { about, portfolio, email } = this.state;
    e.stopPropagation();
    const { id } = e.target;
    if (id === "about") {
      this.setState({
        about: e.type === "click" ? !about : true,
        portfolio: false,
        email: false
      });
    } else if (id === "portfolio") {
      this.setState({
        portfolio: e.type === "click" ? !portfolio : true,
        about: false,
        email: false
      });
    } else if (id === "email") {
      this.setState({
        email: e.type === "click" ? !email : true,
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

  openImages = index => {
    this.setState({
      modalType: "image",
      imageStart: index,
      imageModal: true
    });
  };

  openVideo = link => {
    this.setState({
      modalType: "video",
      imageStart: link,
      imageModal: true
    });
  };

  closeImage = () => {
    this.setState({
      imageModal: false
    });
  };

  scrollToRef = comp => {
    if (this.props.match.path !== comp) {
      this.props.history.push(comp);
    } else {
      this.setState({ renderPath: !this.state.renderPath });
    }
  };

  render() {
    const {
      about,
      portfolio,
      email,
      imageModal,
      imageStart,
      modalType
    } = this.state;
    const { minimize } = this.props;
    const portfolioArray = [
      { name: "Road Trip", route: "roadTrip" },
      { name: "Jobs for Hope", route: "jobsForHope" },
      { name: "Hotel Project", route: "hotelReservation" },
      { name: "Math Challenge", route: "mathChallenge" }
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
          <div className="window-name">Bradley Fojas - Software Engineer</div>
          <button className="minimize-button" onClick={minimize}>
            <i className="fas fa-times" />
          </button>
        </div>
        <div className="window-menu">
          <ul>
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
                    // this.props.history.push(`/project`);
                    this.scrollToRef("/project");
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
                <li
                  style={{ textDecoration: "none" }}
                  onClick={() => {
                    // this.props.history.push("/about");
                    this.scrollToRef("/about");
                  }}
                >
                  Bradley
                </li>
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
          <ul className="menu-mobile">
            <li
              id="portfolio"
              style={{ color: portfolio ? "white" : "black" }}
              onClick={e => this.menuRender(e)}
            >
              Projects
            </li>
            <li
              id="email"
              style={{ color: email ? "white" : "black" }}
              onClick={e => this.menuRender(e)}
            >
              Contact
            </li>
            <li
              id="about"
              style={{ color: about ? "white" : "black" }}
              onClick={e => this.menuRender(e)}
            >
              About
            </li>
          </ul>
        </div>
        <div className="route-container">
          <Switch>
            <Route
              path="/about"
              render={props => <Home renderPath={this.state.renderPath} />}
            />
            <Route
              path="/project/:id"
              render={props => (
                <Project
                  openVideo={this.openVideo}
                  openImages={this.openImages}
                />
              )}
            />
            <Route
              path="/project"
              render={props => <Home renderPath={this.state.renderPath} />}
            />
          </Switch>
        </div>
        {imageModal ? (
          <Images start={imageStart} type={modalType} close={this.closeImage} />
        ) : null}
      </div>
    );
  }
}

export default withRouter(Window);
