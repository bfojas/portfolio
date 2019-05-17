import React from "react";
import { withRouter } from "react-router-dom"
import "./Head.scss";

const Head = (props) => {
    let backgroundImage = props.match.path === "/home" ?
    `url("https://s3.amazonaws.com/dev-fun-bucket/dog_profile.jpg")`
    :
    `url("https://s3.amazonaws.com/dev-fun-bucket/person_profile.jpg")`;
    
    let direction= props.match.path === "/home" ? 
    "head-forward"
    :
    "head-reverse"

    
    
  return (
    <div className={`head-content ${direction}`}>
      <div className="profile-image" style={{backgroundImage}}/>
      <div className="head-info">
        <h1>BRADLEY FOJAS</h1>
        <h3>FULL-STACK WEB DEVELOPER</h3>
      </div>
    </div>
  );
};

export default withRouter(Head);
