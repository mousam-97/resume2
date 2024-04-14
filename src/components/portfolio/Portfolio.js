import React from "react";
import "./portfolio.scss";
// import Fade from "react-reveal/Fade";

function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Projects</h1>
      <div className="container">
        {/* <Fade left> */}
          <a href="https://ecommerce-store4.herokuapp.com/" rel="noopener noreferrer" target="_blank" >
            <div className="item">
              <img src="assets/Ecommerce-Store.png" alt="project1" />
              <h3>
                Amazon Clone
              </h3>

            </div>
          </a>

        {/* </Fade> */}
        {/* <Fade right> */}
          <a href="https://instagram-clone1.netlify.app/" rel="noopener noreferrer" target="_blank" >
            <div className="item">
              <img src="assets/instagram.PNG" alt="project2" />
              <h3>Instagram Clone</h3>
            </div>
          </a>
        {/* </Fade> */}
        {/* <Fade left> */}
          <a href="https://notes-pro.netlify.app/" rel="noopener noreferrer" target="_blank" >
            <div className="item">
              <img src="assets/notespro.PNG" alt="project2" />
              <h3>Notes-Pro: A speech-to-text note taking app</h3>
            </div>
          </a>
        {/* </Fade> */}
        {/* <Fade right> */}
          <a href="https://rick-and-morty-application.netlify.app/" rel="noopener noreferrer" target="_blank" >
            <div className="item">
              <img src="assets/Rick and Morty.PNG" alt="project4" />
              <h3>Rick and Morty characters </h3>
            </div>
          </a>
        {/* </Fade> */}
      </div>
    </div>
  );
}

export default Portfolio;
