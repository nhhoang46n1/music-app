import "./background.css";

import React from "react";
import videoBg from "../../assets/videoBg.mp4";
function Background() {
  return (
    <div>
      <video autoPlay loop className="background">
        <source src={videoBg} type="video/mp4"></source>
      </video>
    </div>
  );
}

export default Background;
