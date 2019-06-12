import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./Images.scss";

export class Images extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
      width: `calc(100% - 10px)`,
      left: "5px",
      zIndex: "500"
    };
  }

  componentDidMount() {
    this.setState({
      position: this.props.start
    });
    if (this.props.type === "image") {
      this.startInterval();
    }
  }

  componentWillUnmount() {
    clearInterval(this.startInterval)
  }

  startInterval = () => {
    if (this.props.image.length > 1) {
      setInterval(this.nextImage, 10000);
    }
  };

  previousImage = () => {
    const { position } = this.state;
    const { image } = this.props;
    this.setState({
      width: "0",
      left: "calc(100% - 10px)",
      zIndex: "-900"
    });
    if (position === 0) {
      this.setState({
        position: image.length - 1
      });
    } else {
      this.setState({
        position: position - 1
      });
    }
    setTimeout(() => this.setState({ left: "5px" }), 250);
    setTimeout(() => {
      this.setState({
        zIndex: "500",
        width: `calc(100% - 10px)`
      });
    }, 500);
  };

  nextImage = () => {
    const { position } = this.state;
    const { image } = this.props;
    this.setState({
      width: "0",
      left: "5px",
      zIndex: "-900",
      backgroundSize: "cover"
    });
    if (position === image.length - 1) {
      this.setState({
        position: 0
      });
    } else {
      this.setState({
        position: position + 1
      });
    }
    setTimeout(() => this.setState({ left: "calc(100% - 10px)" }), 250);
    setTimeout(() => {
      this.setState({
        zIndex: "500",
        width: `calc(100% - 10px)`,
        backgroundSize: "contain",
        left: "5px"
      });
    }, 500);
  };

  render() {
    const { position, width, left, zIndex } = this.state;
    const { image, close, type, name } = this.props;
    const imageHidden = type === "image" ? "flex" : "none";
    const videoHidden = type === "video" ? "flex" : "none";
    return (
      <div className="image-container">
        <div className="image-cover" onClick={close} />
        <div className="image-window">
          <div className="image-top-bar">
            <div className="image-name">{name} Preview</div>
            <button className="close-button" onClick={close}>
              <i className="fas fa-times" />
            </button>
          </div>
          <div
            className="image-content"
            style={{
              backgroundImage: `url(${image[position]})`,
              display: imageHidden,
              width: width,
              left: left,
              zIndex: zIndex
            }}
          />
          {type === "image" && image.length > 1 ? (
            <div className="nav-container">
              <i className="fas fa-caret-left" onClick={this.previousImage} />
              <i className="fas fa-caret-right" onClick={this.nextImage} />
            </div>
          ) : null}

          <div className="image-content" style={{ display: videoHidden }}>
            <video
              controls
              autoPlay
              height="100%"
              width="auto"
              style={{ maxWidth: "calc(100% - 6px" }}
            >
              <source src={position} />
            </video>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.name,
    image: state.image,
    imageHeight: state.imageHeight
  };
};

export default withRouter(connect(mapStateToProps)(Images));
