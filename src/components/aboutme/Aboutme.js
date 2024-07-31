import React from "react";
import "./aboutme.scss";
// import Fade from "react-reveal/Fade";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

function Aboutme() {
  return (
		<div className="aboutme" id="aboutme">
			<h1>About Me</h1>
			<div className="slider">
				<div className="container">
					{/* <Fade left> */}
					<div className="item">
						<div className="left">
							<img src="/assets/frontend_boy.jpg" alt="my pic large" />
						</div>
						<div className="right">
							<p>
								Software Engineer with over 3 years of experience, specializing in
								Frontend engineering while maintaining a strong grasp of backend
								technologies. I've had the privilege of collaborating with Fortune
								500 companies during my tenure at Deloitte and subsequently in a
								fast-paced product company (Premagic), where I worked closely with
								the CTO and CPO to deliver impactful solutions. Notable clients
								include Mercedes, Shell, Starbucks, Nordstrom, Amazon, G20,
								Saasboomi, Gitex Dubai, JS Conf, React Conf, among others. I am
								B.Tech graduate from NIT Silchar, an institute of national
								importance.
							</p>
							<ul>
								<li>
									<ArrowRightIcon />
									Full Stack web development
								</li>

								<li>
									<ArrowRightIcon />
									Data structures and Algorithms
								</li>
							</ul>
							<a href="/assets/mousam_cv.pdf" download="Mousam mousam_cv.pdf">
								<button className="button">Get Resume</button>
							</a>
						</div>
					</div>
					{/* </Fade> */}
				</div>
			</div>
		</div>
  );
}

export default Aboutme;
