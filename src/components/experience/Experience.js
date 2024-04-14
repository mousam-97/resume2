import React from "react";
import "./experience.scss";
// import Fade from "react-reveal/Fade";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

function Experience() {
  return (
    <div className="experience" id="experience">
      <h1>Work Experience</h1>
      <div className="slider">
        <div className="container">
          {/* <Fade left> */}
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
                    Conceptualized and implemented a software which could automate the creation of validation sheets for clients
                    that could help reduce the workload of an analyst by 3 hours per report.
                  </li>
                  <li>
                    <ArrowRightIcon />
                    Analyzed IT systems across many platforms and technologies for various Fortune 500 companies.
                  </li>

                  <li>
                    <ArrowRightIcon />
                    Analyzed the robustness of IT controls in clients in the areas of access security, change management, and
                    backup to address the risk of material misstatement.
                  </li>

                  <li>
                    <ArrowRightIcon />
                    Worked with multiple global teams of more than 8 members and tested control procedures for various US
                    companies.
                  </li>

                </ul>
              </div>
            </div>
          {/* </Fade> */}
        </div>
      </div>
    </div>
  );
}

export default Experience;
