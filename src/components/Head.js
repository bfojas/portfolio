import React from "react";
import { withRouter } from "react-router-dom"
import "./Head.scss";
import IconMap from "./IconMap"

const Head = (props) => {

  return (
    <div className="head-content">
      <div className="head-info">
        <h1>BRADLEY FOJAS</h1>
        <h3>SOFTWARE ENGINEER</h3>
      </div>
    </div>
  );
};

export default withRouter(Head);
