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
                    Analyzed the robustness of GITC Controls in clients in the
                    areas of Access Security, Change management, and Backup
                    to address the risk of material misstatement.
                  </li>
                  <li>
                    <ArrowRightIcon />
                    Conceptualized and implemented an innovative software
                    project which could Automate the creation of validation
                    sheets for clients that could help reduce the workload of an
                    analyst by 2 hours per report.
                  </li>

                  <li>
                    <ArrowRightIcon />
                    Responsible for conducting walkthrough meetings,
                    designing and testing control procedures for Fortune 500
                    companies.
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
