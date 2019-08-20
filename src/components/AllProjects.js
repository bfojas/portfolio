import React, { Component } from "react";
import { projects } from "../ducks/reducer";
import ProjectTiles from "./ProjectTiles";
import "./AllProjects.scss";

class AllProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "web"
    };
  }

  selectorRef = React.createRef();

  selector = tab => {
    this.setState({ selected: tab });
    this.selectorRef.current.scrollIntoView({
      behavior: "smooth"
    });
  };

  render() {
    const { selected } = this.state;
    let webProjects = [];
    let mobileProjects = [];

    projects.forEach(val => {
      val.imageHeight === "250px"
        ? webProjects.push(val)
        : mobileProjects.push(val);
    });

    let imageMapper = (val, i) => {
      return <ProjectTiles val={val} key={val.route}/>;
    };

    let webImages = webProjects.map(imageMapper);
    let mobileImages = mobileProjects.map(imageMapper);

    return (
      <div className="all-container">
        {/* <Head /> */}
        {/* <IconMap /> */}
        <div className="selector-container">
          <div ref={this.selectorRef} className="selector-tabs">
            <p
              className={`selector ${selected === "web" ? "active" : null}`}
              onClick={() => this.selector("web")}
            >
              {/* <span className="break">|</span> */}
              Web <br/>Projects
              {/* <span className="break">..</span> */}
            </p>
            <p
              className={`selector ${selected === "mobile" ? "active" : null}`}
              onClick={() => this.selector("mobile")}
            >
              Mobile<br/>Projects
            </p>
          </div>
          <div
            className={`all-image-container`}
          >
            <div className={
              selected === "web" ? "web-images" : "mobile-images"
            }>
            {selected === "web" ? webImages : mobileImages}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AllProjects;
