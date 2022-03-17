import React from "react";
import "./aboutme.scss";
import Fade from "react-reveal/Fade";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

function Aboutme() {
  return (
    <div className="aboutme" id="aboutme">
      <h1>About Me</h1>
      <div className="slider">
        <div className="container">
          <Fade left>
            <div className="item">
              <div className="left">
                <img src="/assets/aboutme.jpg" alt="my pic large" />
              </div>
              <div className="right">
                <h2>Creative software engineer with strong design and problem-solving skills. NIT Silchar graduate with
                  experience working at Deloitte. Innovative thinker with hands-on, well-developed skills in Full-stack (MERN)
                  web development. Passionate about building great products. Strong communication skills and an
                  empathetic team player. Experienced working with international teams and Fortune 500 companies.</h2>
                <ul>
                  <li>
                    <ArrowRightIcon />
                    Full Stack web development
                  </li>

                  <li>
                    <ArrowRightIcon />
                    Data structures and Algorithms
                  </li>

                </ul>
                <a href="/assets/mousam_cv.pdf" download="Mousam mousam_cv.pdf">
                  <button className="button">Get Resume</button>
                </a>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
