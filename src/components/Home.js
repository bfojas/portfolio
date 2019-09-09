import React from "react";
import { withRouter } from "react-router-dom";
import "./Home.scss";
import Head from "./Head";
import IconMap from "./IconMap";
import About from "./About";
import AllProjects from "./AllProjects";

class Home extends React.Component {
  constructor(props) {
    super();
    this.state = { path: "" };
  }

  homeSelector = React.createRef();
  aboutRef = React.createRef();
  projectRef = React.createRef();

  componentDidMount = () => {
    this.setState({ path: this.props.match.path });
    if (this.props.match.path === "/project") {
      setTimeout(()=>{
      this.scrollIn()}, 500)
    } else {
      this.scrollIn()
    }
  };

  componentDidUpdate = prevProps => {
    if (prevProps.match.path !== this.props.match.path) {
      if (this.props.match.path === "/project") {
        setTimeout(()=>{
        this.scrollIn()}, 500)
      } else {
        this.scrollIn()
      }
    }
    if (prevProps.renderPath !== this.props.renderPath) {
      this.scrollIn();
    }
  };

  scrollIn = () => {
    let scrollRef = this.props.match.path === "/about" ? this.aboutRef : this.projectRef
    scrollRef.current.scrollIntoView({
      behavior: "smooth"
    });
    return
  };

  render() {
    return (
      <div className="home-container" ref={this.aboutRef}>
        <div className="home-top">
          <div className="home-top-transparent">
          <div className="home-top-split-1" />
          <div className="home-top-split-2" />
          <div className="home-top-split-3" />
          </div>
          <Head />
          <IconMap />
        </div>
        <div ref={this.homeSelector} />
        <div
          className="home-path"
          style={{
            display: "flex",
            flexDirection: "column"
              // this.state.path === "/project" ? "column" : "column-reverse"
          }}
        >
          <About />
          <AllProjects scrollRef={this.projectRef} />
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
