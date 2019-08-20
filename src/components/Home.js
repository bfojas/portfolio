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

  componentDidMount = () => {
    this.setState({ path: this.props.match.path });
    // this.scrollIn();
  };

  componentDidUpdate = prevProps => {
    if (prevProps.match.path !== this.props.match.path) {
      this.setState({ path: this.props.match.path });
      this.scrollIn()
    }
    if (prevProps.renderPath !== this.props.renderPath) {
      this.scrollIn()
    }
  };

  scrollIn = () => {
    this.homeSelector.current.scrollIntoView({
      behavior: "smooth"
    });
  };

  render() {
    return (
      <div className="home-container" >
        <Head />
        <IconMap />
        <div ref={this.homeSelector}/>
        <div
          className="home-path"
          style={{
            display: "flex",
            flexDirection:
              this.state.path === "/project" ? "column" : "column-reverse"
          }}
        >
          <AllProjects />
          <About />
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
