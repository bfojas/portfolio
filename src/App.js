import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./App.css";
import routes from "./routes";

class App extends Component {
  constructor() {
    super();
    this.state = { screenHeight: window.innerHeight };
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateWindow());
  }

  updateWindow = () => {
    window.addEventListener("resize", () => {
      this.setState({ screenHeight: window.innerHeight });
    });
  };

  render() {
    return <div className="App" style={{ height: this.state.screenHeight }}>{routes}</div>;
  }
}

export default withRouter(App);
