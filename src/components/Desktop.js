import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Window from "./Window";
import Bradley from "./Bradley";
import "./Desktop.scss";

class Desktop extends Component {
  constructor() {
    super();
    this.state = {
      top: `${window.innerHeight - 125}`,
      left: 50,
      dragging: false,
      hidden: "none", //prop to window
      screenHeight: window.innerHeight,
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
    console.log('match', this.props.match)
    if (this.props.match.path !== "/") {
      this.maximize();
    } else {
      this.props.history.push("/project");
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


  render() {
    return (
      <div
        className="desktop"
        onMouseMove={e => this.mouseMove(e)}
        style={{
          height: this.state.screenHeight,
        }}
        onMouseLeave={this.dragOff}
      >
        <Bradley/>
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
          {/* <i className="fas fa-keyboard" /> */}
          <img src="https://dev-fun-bucket.s3.amazonaws.com/icon-transparent.png"/>
          <div className="name">Bradley</div>
        </div>
        <div className="icon-mobile" onClick={this.maximize}>
          {/* <i className="fas fa-keyboard" /> */}
          <img src="https://dev-fun-bucket.s3.amazonaws.com/icon-transparent.png"/>
          <div className="name">Bradley</div>
        </div>
        <Window minimize={this.minimize} hidden={this.state.hidden} />
      </div>
    );
  }
}

export default withRouter(Desktop);
