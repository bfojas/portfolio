import React, { Component } from "react";
import { projects } from "../ducks/reducer";
import Head from "./Head";
import ProjectTiles from "./ProjectTiles";
import IconMap from "./IconMap";
import "./AllProjects.scss";

class AllProjects extends Component {
  // const [selected, setSelected] = useState("web");
  constructor(props) {
    super(props);
    this.state = {
      selected: "web"
    };
    this.scrollRef = React.createRef();
  }

  selector = tab => {
    this.setState({ selected: tab });
    this.scrollRef.current.scrollIntoView({
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
      return <ProjectTiles val={val} />;
    };

    let webImages = webProjects.map(imageMapper);
    let mobileImages = mobileProjects.map(imageMapper);

    return (
      <div className="all-container">
        <Head />
        <IconMap />
        <div className="selector-container">
          <div ref={this.scrollRef} className="selector-tabs">
            <p
              className={`selector ${selected === "web" ? "active" : null}`}
              onClick={() => this.selector("web")}
            >
              <p className="break">|</p>Web Projects<p className="break">..</p>
            </p>
            <p
              className={`selector ${selected === "mobile" ? "active" : null}`}
              onClick={() => this.selector("mobile")}
            >
              Mobile Projects
            </p>
          </div>
          <div
            className={`image-container ${
              selected === "web" ? "web-images" : "mobile-images"
            }`}
          >
            {selected === "web" ? webImages : mobileImages}
          </div>
        </div>
      </div>
    );
  }
}

export default AllProjects;
