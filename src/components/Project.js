import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Images from "./Images";
import { renderProject } from "../ducks/reducer";
import "./Project.scss";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalType: "",
      imageModal: false,
      imageStart: 0
    };
  }

  componentDidMount = () => {
    this.renderPage();
  };

  componentDidUpdate = prevProps => {
    if (prevProps.match.params !== this.props.match.params) {
      this.renderPage();
    }
  };

  openImages = index => {
    this.setState({
      modalType: "image",
      imageStart: index,
      imageModal: true
    });
  };

  openVideo = link => {
    this.setState({
      modalType: "video",
      imageStart: link,
      imageModal: true
    });
  };

  closeImage = () => {
    this.setState({
      imageModal: false
    });
  };

  renderPage = () => {
    const { renderProject } = this.props;
    const { id } = this.props.match.params;
    switch (id) {
      case "roadTrip":
        return renderProject(0);
      case "cardFun":
        return renderProject(1);
      case "blackjack":
        return renderProject(2);
      case "ohmsLaw":
        return renderProject(3);
      case "portfolio":
        return renderProject(4);
      case "mathChallenge":
        return renderProject(5);
      default:
        return null;
    }
  };

  render() {
    const { imageModal, imageStart, modalType } = this.state;
    const {
      title,
      image,
      imageHeight,
      about,
      techUsed,
      projectLink
    } = this.props;
    const images =
      imageHeight === "700px" ? (
        <div
          key={0}
          className="images"
          onClick={() => this.openImages(0)}
          style={{
            backgroundImage: `url(${image[[0]]})`,
            height: imageHeight
          }}
        />
      ) : (
        image &&
        image.map((val, i) => {
          return (
            <div
              key={i}
              className="images"
              onClick={() => this.openImages(i)}
              style={{
                backgroundImage: `url(${val})`,
                height: imageHeight
              }}
            />
          );
        })
      );
    const links =
      projectLink &&
      projectLink.map((val, i) => {
        return val.linkType !== "fas fa-video" ? (
          <a key={i} href={val.link} target="_blank" rel="noopener noreferrer">
            <i className={val.linkType} />
          </a>
        ) : (
          <i
            key={i}
            onClick={() => this.openVideo(val.link)}
            className="fas fa-video"
          />
        );
      });
    return (
      <div className="project-container">
        <div className="project-head">{`${title} PROJECT`}</div>
        <div className="project-body">
          <div className="image-box">{images}</div>
          <div className="summary-box">
            <div className="project-about">{about}</div>
            <div className="project-subject">LINK:</div>
            <div className="links-box">{links}</div>
            <div className="project-subject">TECHNOLOGIES USED:</div>
            <div className="project-tech">{techUsed}</div>
          </div>
        </div>
        {imageModal ? (
          <Images start={imageStart} type={modalType} close={this.closeImage} />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.name,
    title: state.title,
    image: state.image,
    imageHeight: state.imageHeight,
    about: state.about,
    techUsed: state.techUsed,
    projectLink: state.projectLink
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { renderProject }
  )(Project)
);
