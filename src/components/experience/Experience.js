import React from "react";
import "./experience.scss";
import Fade from "react-reveal/Fade";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

function Experience() {
  return (
    <div className="experience" id="experience">
      <h1>Work Experience</h1>
      <div className="slider">
        <div className="container">
          <Fade left>
            <div className="item">
              <div className="left">
                <h1>
                  Deloitte<span>.</span>
                </h1>
              </div>
              <div className="right">
                <h2>Technology Analyst (2019-2020)</h2>
                <ul>
                  <li>
                    <ArrowRightIcon />
                    Conducted Sarbanes-Oxley IT Risk assessment spread across different
                    platforms and technologies.
                  </li>

                  <li>
                    <ArrowRightIcon />
                    Advised clients to improve their processes for various IT
                    controls like Authentication, Role Based Access, Change
                    Management etc.
                  </li>

                  <li>
                    <ArrowRightIcon />
                    Responsible for conducting walkthrough meetings, designing and testing control procedures for various Fortune 500 clients including Starbucks, Nordstorm, Daktronics and Daikin.
                  </li>
                  <li>
                    <ArrowRightIcon />
                    Built a software project which could automate the creation of Validation sheets for clients which helped reduce the workload of an analyst by 2 hours per report.
                  </li>
                </ul>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Experience;
