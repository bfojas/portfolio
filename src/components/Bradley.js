import React from "react";
import "./Bradley.scss"

const Bradley = (props) => {
    const {changePaper} = props;
    return (
        <div className="pic-contain">
          <div className="bradley" />
          <div className="bubble" onClick={changePaper}>
            <span>Hi, I'm a Web Developer! </span>
            <p>
              <span className="mobile-span"> Double-</span>
              Click the icon in the corner to learn more about me.
            </p>
            <div className="change-wall">Change the Wallpaper?</div>
          </div>
        </div>
    )
}

export default Bradley