import React, { useEffect, useRef } from "react";
import "./intro.scss";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { init } from "ityped";

function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 50,
      strings: ["Software Engineer", "B.Tech - NIT Silchar", "Deloitte."],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/mypic.jpg" alt="man" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Mousam Kalita</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#skills">
          <ExpandMoreIcon className="logo" />
        </a>
      </div>
    </div>
  );
}

export default Intro;
