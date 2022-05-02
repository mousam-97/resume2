import React from "react";
import "./topbar.scss";
// import EmailIcon from "@mui/icons-material/icons/Email";
import EmailIcon from '@mui/icons-material/Email';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import GitHubIcon from '@mui/icons-material/GitHub';

function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            MOUSAM.
          </a>
          {/* <div className="itemContainer">
            <PersonPinIcon className="icon" />
            <span>123-123-123</span>
          </div> */}
          <div className="itemContainer">
            <EmailIcon className="icon" />
            <span>mousam.kalita.official@gmail.com</span>
          </div>
          {/* <div className="itemContainer">
            <a href="https://www.linkedin.com/in/mousam-kalita" rel="noopener noreferrer" target="_blank">
              <LinkedInIcon className="icon" />
              <span>Linkedin</span>
            </a>

          </div>
          <div className="itemContainer">
            <a href="https://github.com/mousam-97" rel="noopener noreferrer" target="_blank">
              <GitHubIcon className="icon" />
              <span>Github</span>
            </a>
          </div> */}
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
