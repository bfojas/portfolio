import React from "react";
import { Route, Switch } from "react-router-dom";
import Window from "./components/Window";

export default (
  <Switch>
    <Route path="/home" component={Window} />
    <Route path="/project/:id" component={Window} />
    <Route path="/project" component={Window} />
    <Route path="/" component={Window} />
  </Switch>
);
