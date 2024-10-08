import React, { useEffect, useRef } from "react";
import "./intro.scss";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { init } from "ityped";
import CompaniesServed from "../companies-served/CompaniesServed";

function Intro() {
	const textRef = useRef();

	useEffect(() => {
		init(textRef.current, {
			showCursor: true,
			backDelay: 1500,
			backSpeed: 50,
			strings: [
				"Software Engineer",
				"Frontend",
				"Premagic, ex-Deloitte",
				"Serving Global Brands",
				"B.Tech - NIT Silchar",
			],
		});
	}, []);
	return (
		<div className="intro" id="intro">
			<div className="left">
				<div className="imageContainer">
					<img src="assets/mypic.jpg" alt="man" />
				</div>
			</div>
			<div className="right">
				<div className="wrapper">
					<h2>Hi There, I'm</h2>
					<h1>Mousam Kalita</h1>
					<h3>
						<span ref={textRef}></span>
					</h3>
					<div className="companies-served">
						<CompaniesServed />
					</div>
				</div>
				<a href="#aboutme">
					<ExpandMoreIcon className="logo" />
				</a>
			</div>
		</div>
	);
}

export default Intro;
