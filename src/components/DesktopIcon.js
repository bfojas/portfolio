import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./DesktopIcon.scss";

class DesktopIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: `${this.props.position[0]}`,
      left: this.props.position[1],
      dragging: false,
      cursor: "pointer"
    };
  }

  componentDidUpdate = prevProps => {
    if (prevProps !== this.props) {
      this.setState({
        top: `${this.props.position[0]}`,
        left: this.props.position[1]
        // cursor: "grab"
      });
    }
  };

  render() {
    const { name, maximize, dragOn, dragOff, value } = this.props;
    return (
      <React.Fragment>
        <div
          className="draggable-icon-container"
          style={{
            top: `${this.state.top}px`,
            left: `${this.state.left}px`,
            cursor: this.state.cursor
          }}
          onMouseDown={() => dragOn(value)}
          onMouseUp={dragOff}
          onDoubleClick={() => maximize(value)}
        >
          <div
            className="icon"
            style={{
              backgroundImage: `url("https://dev-fun-bucket.s3.amazonaws.com/icon-transparent.png")`
            }}
          />
          <div className="name">{name}</div>
        </div>
        <div
          className="icon-mobile-container"
          style={{
            bottom: `${this.state.left-35}px`,
            left: `20px`,
            cursor: this.state.cursor
          }}
          onClick={()=>maximize(value)}
        >
          <img className="icon-mobile" src="https://dev-fun-bucket.s3.amazonaws.com/icon-transparent.png" alt="icon" />
          <div className="name">{name}</div>
        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(DesktopIcon);
