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
      hidden: "block", //prop to window
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

  changePaper = () => {
    this.setState({
      background: Math.floor(Math.random() * 13)
    });
  }; //Desktop

  render() {
    return (
      <div
        className="desktop"
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
        <Bradley changePaper={this.changePaper} />
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
        <Window minimize={this.minimize} hidden={this.state.hidden} />
      </div>
    );
  }
}

export default withRouter(Desktop);
