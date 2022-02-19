import React from "react";
import "./topbar.scss";
import EmailIcon from "@material-ui/icons/Email";

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
