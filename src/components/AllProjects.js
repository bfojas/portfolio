import React from "react";
import { projects } from "../ducks/reducer";
import "./AllProjects.scss"


const AllProjects = props => {
    let imageMapper = (val, i) => {
        return (
          <React.Fragment>
            <div
              className="project-image"
              style={{ 
                backgroundImage: `url(${val.image[0]})`,
                marginLeft: i ? `-100px` : 0,
                marginTop: `${i * 5}px`}}
            />
    
            <div
              className="project-image-mobile"
              style={{ 
                backgroundImage: `url(${val.image[0]})`,
                marginTop: i ? `-100px` : 0,
                marginLeft: `${i * 5}px`}}
            />
          </React.Fragment>
        );
      };

  let mapImages = projects.slice().reverse().map(imageMapper);

    return (
        <React.Fragment>
            {mapImages}
            
        </React.Fragment>
    )

}

export default AllProjects