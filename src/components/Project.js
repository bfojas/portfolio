import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { renderProject } from "../ducks/reducer";
import "./Project.scss";

class Project extends Component {

  selectorRef = React.createRef();

  componentDidMount = () => {
    this.renderPage();
  };

  componentDidUpdate = prevProps => {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.renderPage();
      
    }
  };

  scrollIn = () => {
    this.selectorRef.current.scrollIntoView({
      behavior: "smooth"
    });
  }

  renderPage = () => {
    const { renderProject } = this.props;
    const { id } = this.props.match.params;

    this.scrollIn()

    switch (id) {
      case "roadTrip":
        return renderProject(0);
      case "jobsForHope":
        return renderProject(1);
      case "portfolio":
        return renderProject(2);
        case "cardFun":
        return renderProject(3);
      case "blackjack":
        return renderProject(4);
      case "hotelReservation":
        return renderProject(5);
      case "mathChallenge":
        return renderProject(6);
      case "ohmsLaw":
        return renderProject(7);
      default:
        return null;
    }
  };

  render() {
    const { openImages, openVideo } = this.props
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
          onClick={() => openImages(0)}
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
              onClick={() => openImages(i)}
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
            <i className={`links ${val.linkType}`} />
          </a>
        ) : (
          <i
            key={i}
            onClick={() => openVideo(val.link)}
            className="links fas fa-video"
          />
        );
      });
    return (
      <React.Fragment>
      <div className="project-container" key={this.props.match.params.id} ref={this.selectorRef}>
        <div className="project-head">
          <div className="project-name">{`${title} PROJECT`}</div>
        </div>
        <div className="project-body">
          <div className="image-box">{images}</div>
          <div className="summary-box">
            <div className="project-about">
              {about &&
                about.map((val,i) => {
                  return <p key={i}>{val}</p>;
                })}
            </div>
            <div className="project-subject">LINKS:</div>
            <div className="links-box">{links}</div>
            <div className="project-subject">TECHNOLOGIES USED:</div>
            <div className="project-tech">{techUsed}</div>
          </div>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
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
