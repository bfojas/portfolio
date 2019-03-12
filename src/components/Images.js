import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./Images.scss";

export class Images extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0
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

  startInterval = () => {
    setInterval(this.nextImage, 10000);
  };

  previousImage = () => {
    const { position } = this.state;
    const { image } = this.props;
    if (position === 0) {
      this.setState({
        position: image.length - 1
      });
    } else {
      this.setState({
        position: position - 1
      });
    }
  };

  nextImage = () => {
    const { position } = this.state;
    const { image } = this.props;
    if (position === image.length - 1) {
      this.setState({
        position: 0
      });
    } else {
      this.setState({
        position: position + 1
      });
    }
  };

  render() {
    const { position } = this.state;
    const { image, close, type } = this.props;
    const imageHidden = type === "image" ? "flex" : "none";
    const videoHidden = type === "video" ? "flex" : "none";
    return (
      <div className="image-container">
        <div className="image-cover" onClick={close} />
        <div className="image-window">
          <div className="image-top-bar">
            <div className="image-name">Preview</div>
            <button className="close-button" onClick={close}>
              X
            </button>
          </div>
          <div
            className="image-content"
            style={{
              backgroundImage: `url(${image[position]})`,
              display: imageHidden
            }}
          >
            <i className="fas fa-caret-left" onClick={this.previousImage} />
            <i className="fas fa-caret-right" onClick={this.nextImage} />
          </div>
          <div className="image-content" style={{ display: videoHidden }}>
            <video controls autoplay height="100%" width="auto">
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
    image: state.image,
    imageHeight: state.imageHeight
  };
};

export default withRouter(connect(mapStateToProps)(Images));
