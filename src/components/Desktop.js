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
      home: [window.innerHeight - 125, 50],
      project: [window.innerHeight - 125, 150],
      hidden: "none", //prop to window
      screenHeight: window.innerHeight
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateWindow());
    this.windowCheck();
  }

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
    // this.windowCheck();
  };

  windowCheck = () => {
    const { match } = this.props;
    if (match.path !== "/") {
      this.maximize(match.path);
    } else {
      this.props.history.push("/project");
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
      home: [window.innerHeight - 125, 50],
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
        [this.state.dragging]: [e.clientY - 25, e.clientX - 25]
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
    if (value !== this.props.match.path) {
      this.props.history.push(`/${value}`);
    }
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
          value="home"
          name="Bradley"
          position={this.state.home}
          maximize={this.maximize}
          dragOn={this.dragOn}
          dragOff={this.dragOff}
        />
        <DesktopIcon
          value="project"
          name="Projects"
          position={this.state.project}
          maximize={this.maximize}
          dragOn={this.dragOn}
          dragOff={this.dragOff}
        />
        <Window minimize={this.minimize} hidden={this.state.hidden} />
      </div>
    );
  }
}

export default withRouter(Desktop);
