import React from "react";
import "./menu.scss";

function Menu({ menuOpen, setMenuOpen }) {
  return (
		<div className={"menu " + (menuOpen && "active")}>
			<ul>
				<li onClick={() => setMenuOpen(false)}>
					<a href="#intro">Home</a>
				</li>
				<li onClick={() => setMenuOpen(false)}>
					<a href="#aboutme">About me</a>
				</li>

				<li onClick={() => setMenuOpen(false)}>
					<a href="#skills">Skills</a>
				</li>
				<li onClick={() => setMenuOpen(false)}>
					<a href="#portfolio">Projects</a>
				</li>
				{/* <li onClick={() => setMenuOpen(false)}>
          <a href="#experience">Experience</a>
        </li> */}
				<li onClick={() => setMenuOpen(false)}>
					<a href="#works">Hobby</a>
				</li>
				{/* <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li> */}
			</ul>
		</div>
  );
}

export default Menu;
