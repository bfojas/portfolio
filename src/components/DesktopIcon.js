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
    };
  }

  componentDidUpdate = prevProps => {
    if (prevProps !== this.props) {
      this.setState({
        top: `${this.props.position[0]}`,
        left: this.props.position[1]
      });
    }
  };

  maximize = () => {
      const { route } = this.props
      this.props.history.push(`/${route}`)
      this.props.maximize()
  }

  render() {
    const { name, dragOn, dragOff, value, icon } = this.props;
    return (
      <React.Fragment>
        <div
          className="draggable-icon-container"
          style={{
            top: `${this.state.top}px`,
            left: `${this.state.left}px`,
          }}
          onMouseDown={() => dragOn(value)}
          onMouseUp={dragOff}
          onDoubleClick={this.maximize}
        >
          <div
            className="icon"
            style={{
              backgroundImage: `url(${icon})`
            }}
          />
          <div className="name">{name}</div>
        </div>
        <div
          className="icon-mobile-container"
          style={{
            bottom: `${this.state.left-15}px`,
            left: `20px`,
          }}
          onClick={this.maximize}
        >
          <img className="icon-mobile" src={icon} alt="icon" />
          <div className="name">{name}</div>
        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(DesktopIcon);
