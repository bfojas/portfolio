import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import Home from "./Home";
import Project from "./Project";

import "./Window.scss";

class Window extends Component {
  constructor() {
    super();
    this.state = {
      top: `${window.innerHeight - 125}`,
      left: 50,
      dragging: false,
      hidden: "none",
      about: false,
      portfolio: false,
      email: false,
      screenHeight: window.innerHeight,
      background: 9
    };
  }

  componentDidMount() {
    this.windowCheck();
    window.addEventListener("resize", this.updateWindow());
  }

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  windowCheck = () => {
    if (this.props.match.path !== "/") {
      this.setState({ hidden: "block" });
    } else {
      this.props.history.push("/home");
    }
  };

  updateWindow = () => {
    window.addEventListener("resize", () => {
      this.setState({
        screenHeight: window.innerHeight
      });
      this.mouseDefault();
    });
  };

  mouseDefault = () => {
    this.setState({
      top: `${window.innerHeight - 125}`,
      left: 50
    });
  };

  dragOn = () => {
    this.setState({
      dragging: true
    });
  };
  mouseMove = e => {
    if (this.state.dragging) {
      this.setState({
        top: e.clientY - 25,
        left: e.clientX - 25
      });
    }
  };

  dragOff = e => {
    this.setState({
      dragging: false
    });
  };
  maximize = () => {
    this.setState({ hidden: "block" });
  };

  minimize = () => {
    this.setState({ hidden: "none" });
  };

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
  };

  changePaper = () => {
    this.setState({
      background: Math.floor(Math.random() * 13)
    });
  };

  render() {
    const { about, portfolio, email } = this.state;
    const portfolioArray = [
      { name: "Road Trip", route: "roadTrip" },
      { name: "Math Challenge", route: "mathChallenge"},
      { name: "Card Fun", route: "cardFun" },
      { name: "Ohm's Law", route: "ohmsLaw" },
      { name: "Blackjack", route: "blackjack" },
      { name: "Windows Clone", route: "portfolio" }
    ];
    const portfolioStyle = portfolio
      ? { height: `${portfolioArray.length * 30}px` }
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
        className="home"
        onMouseMove={e => this.mouseMove(e)}
        style={{
          height: this.state.screenHeight,
          background: this.state.background
            ? `url(https://s3.amazonaws.com/dev-fun-bucket/background${
                this.state.background
              }.jpg) no-repeat center /cover`
            : null
        }}
        onMouseLeave={this.dragOff}
      >
        <div className="pic-contain">
          <div className="bradley" />
          <div className="bubble" onClick={this.changePaper}>
            <span>Hi, I'm a Web Developer! </span>
            <p><span className="mobile-span"> Double-</span>
            Click the icon in the corner to learn more about me.</p>
            <div className="change-wall">Change the Wallpaper?</div>
          </div>
        </div>
        <div
          className="icon"
          style={{
            top: `${this.state.top}px`,
            left: `${this.state.left}px`
          }}
          onMouseDown={this.dragOn}
          onMouseUp={e => this.dragOff(e)}
          onDoubleClick={this.maximize}
        >
          <i className="fas fa-keyboard" />
          <div className="name">Bradley</div>
        </div>
        <div className="icon-mobile" onClick={this.maximize}>
          <i className="fas fa-keyboard" />
          <div className="name">Bradley</div>
        </div>
        <div
          className="window-container"
          onClick={e => this.menuRender(e)}
          style={{ display: `${this.state.hidden}` }}
        >
          <div className="window-top">
            <div className="window-name">Bradley Fojas</div>
            <button className="minimize-button" onClick={() => this.minimize()}>
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
            {this.props.match.path === "/home" && <Home />}
            {this.props.match.path === "/project/:id" && <Project />}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Window);
