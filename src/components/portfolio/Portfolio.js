import React from "react";
import "./portfolio.scss";
import Fade from "react-reveal/Fade";

function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Projects</h1>
      <div className="container">
        <Fade left>
          <a href="https://ecommerce-store4.herokuapp.com/" rel="noopener noreferrer" target="_blank" >
            <div className="item">
              <img src="assets/Ecommerce-Store.png" alt="project1" />
              <h3>
                Ecommerce-App
              </h3>
              
            </div>
          </a>

        </Fade>

        <Fade right>
          <a href="https://mousam-97.github.io/Simon-Game/" rel="noopener noreferrer" target="_blank" >
            <div className="item">
              <img src="assets/Simon-Game.PNG" alt="project2" />
              <h3>Simon Game </h3>
            </div>
          </a>
        </Fade>
        <Fade left>
          <a href="https://mousam-97.github.io/Drum-Kit/" rel="noopener noreferrer" target="_blank" >
            <div className="item">
              <img src="assets/drum-kit.PNG" alt="project3" />
              <h3>Drum Kit </h3>
            </div>
          </a>
        </Fade>
        <Fade right>
          <a href="https://afternoon-escarpment-45003.herokuapp.com/" rel="noopener noreferrer" target="_blank" >
            <div className="item">
              <img src="assets/toDo.PNG" alt="project4" />
              <h3>To-Do App </h3>
            </div>
          </a>
        </Fade>
      </div>
    </div>
  );
}

export default Portfolio;
