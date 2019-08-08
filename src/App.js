import React, { Component } from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import Desktop from "./components/Desktop";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/about" component={Desktop} />
          <Route path="/project/:id" component={Desktop} />
          <Route path="/project" component={Desktop} />
          <Route path="/" component={Desktop} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
