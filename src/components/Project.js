import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Images from "./Images";
import {
  renderCardFun,
  renderRoadTrip,
  renderBlackjack,
  renderOhms,
  renderPortfolio
} from "../ducks/reducer";
import "./Project.scss";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   images: [],
      imageModal: false,
      imageStart: 0
    };
  }

  componentDidMount = () => {
    this.renderProject();
  };

  componentDidUpdate = prevProps => {
    if (prevProps.match.params !== this.props.match.params) {
      this.renderProject();
    }
  };

  openImages = (index) => {
      this.setState({
        imageStart: index,
        imageModal: true
      })
  }

  closeImage = () => {
      this.setState({
          imageModal: false
      })
  }

  renderProject = () => {
    const {
      renderCardFun,
      renderRoadTrip,
      renderBlackjack,
      renderOhms,
      renderPortfolio
    } = this.props;
    const { id } = this.props.match.params;
    if (id === "roadTrip") {
      renderRoadTrip();
    }
    if (id === "cardFun") {
      renderCardFun();
    }
    if (id === "blackjack") {
      renderBlackjack();
    }
    if (id === "ohmsLaw") {
      renderOhms();
    }
    if (id === "portfolio") {
      renderPortfolio();
    }
  };

  render() {
    const { imageModal, imageStart } = this.state;
    const {
      name,
      image,
      imageHeight,
      about,
      techUsed,
      projectLink
    } = this.props;
    const images =
      image &&
      image.map((val, i, arr) => {
        return (
          <div
            key={i}
            className="images"
            onClick={()=>this.openImages(i)}
            style={{ backgroundImage: `url(${val})`, height: imageHeight }}
          />
        );
      });
    const links =
      projectLink &&
      projectLink.map((val, i) => {
        return (
          <a key={i} href={val.link} target="_blank" rel="noopener noreferrer">
            <i className={val.linkType} />
          </a>
        );
      });
    return (
      <div className="project-container">
        <div className="project-head">{`${name} PROJECT`}</div>
        <div className="project-body">
          <div className="image-box">{images}</div>
          <div className="summary-box">
            <div className="project-about">{about}</div>
            <div className="project-subject">LINK:</div>
            {/* <div className="project-text">{projectLink}</div> */}
            {/* <a href={projectLink}>{projectLink}</a> */}
            <div className="links-box">{links}</div>
            <div className="project-subject">TECHNOLOGIES USED:</div>
            <div className="project-tech">{techUsed}</div>
          </div>
        </div>
        {imageModal ? <Images start={imageStart} close={this.closeImage}/> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.name,
    image: state.image,
    imageHeight: state.imageHeight,
    about: state.about,
    techUsed: state.techUsed,
    projectLink: state.projectLink
  };
};

const mapDispatchToProps = {
  renderCardFun,
  renderRoadTrip,
  renderBlackjack,
  renderOhms,
  renderPortfolio
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Project)
);
