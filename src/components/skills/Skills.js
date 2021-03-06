import React from "react";
import "./skills.scss";
import ProgressBar from 'react-bootstrap/ProgressBar';


function Skills() {
  return (
    <div className="skills" id="skills">
      <h1>Skills</h1>
      <div className="container">

        <div className="item">
          <h3>React</h3>
          <ProgressBar animated now={83} />
        </div>

        <div className="item">
          <h3>Javascript</h3>
          <ProgressBar animated now={80} />

        </div>
        <div className="item">
          <h3>HTML</h3>
          <ProgressBar animated now={81} />

        </div>
        <div className="item">
          <h3>CSS</h3>
          <ProgressBar animated now={82} />
        </div>

        <div className="item">
          <h3>Datastructures and Algorithms</h3>
          <ProgressBar animated now={85} />
        </div>

        <div className="item">
          <h3>C++</h3>
          <ProgressBar animated now={80} />
        </div>

        <div className="item">
          <h3>Node.js</h3>
          <ProgressBar animated now={72} />

        </div>
        <div className="item">
          <h3>MongoDB</h3>
          <ProgressBar animated now={70} />

        </div>
      </div>
    </div>
  );
}

export default Skills;
