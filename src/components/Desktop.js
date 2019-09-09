import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Window from "./Window";
import Bradley from "./Bradley";
import "./Desktop.scss";
import DesktopIcon from "./DesktopIcon";

class Desktop extends Component {
  constructor() {
    super();
    this.state = {
      bradDragging: false,
      about: [window.innerHeight - 125, 25],
      project: [window.innerHeight - 125, 125],
      hidden: "block", //prop to window
      screenHeight: window.innerHeight
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateWindow());
    this.windowCheck();
  }

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  windowCheck = () => {
    const { match } = this.props;
    if (match.path === "/") {
      this.props.history.push("/about")
    }
  };

  updateWindow = () => {
    window.addEventListener("resize", () => {
      this.setState({
        screenHeight: window.innerHeight
      });
      this.iconDefault();
    });
  };

  iconDefault = () => {
    this.setState({
      about: [window.innerHeight - 125, 50],
      project: [window.innerHeight - 125, 150],
    });
  };

  dragOn = iconName => {
    this.setState({
      dragging: iconName
    });
    window.addEventListener("mousemove", this.mouseMove);
    window.addEventListener("mouseup", this.dragOff);
  };

  mouseMove = e => {
    if (this.state.dragging) {
      this.setState({
        [this.state.dragging]: [e.clientY - 50, e.clientX - 35]
      });
    }
  };

  dragOff = () => {
    this.setState({
      dragging: false
    });
    window.removeEventListener("mousemove", this.mouseMove);
    window.removeEventListener("mouseup", this.dragOff);
  };

  maximize = value => {
    this.setState({ hidden: "block" });
  };

  minimize = () => {
    this.setState({ hidden: "none" });
  };

  render() {
    return (
      <div
        className="desktop"
        style={{
          height: this.state.screenHeight
        }}
        onMouseLeave={this.dragOff}
      >
        <Bradley />
        <DesktopIcon
          value="about"
          name="About"
          route="/about"
          position={this.state.about}
          maximize={this.maximize}
          dragOn={this.dragOn}
          dragOff={this.dragOff}
          icon="https://dev-fun-bucket.s3.amazonaws.com/icon-transparent.png"
        />
        <DesktopIcon
          value="project"
          name="Projects"
          route="/project"
          position={this.state.project}
          maximize={this.maximize}
          dragOn={this.dragOn}
          dragOff={this.dragOff}
          icon="https://dev-fun-bucket.s3.amazonaws.com/folder_icon_transparent.png"
        />
        <Window minimize={this.minimize} hidden={this.state.hidden} />
      </div>
    );
  }
}

export default withRouter(Desktop);
