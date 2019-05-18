import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Desktop from "./components/Desktop"
import "./App.scss";

class App extends Component {
  render() {
    return <div className="App"><Desktop/></div>;
  }
}

export default withRouter(App);
