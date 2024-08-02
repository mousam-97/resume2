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
							<img src="/assets/frontend3.jpg" alt="my pic large" />
						</div>
						<div className="right">
							<p>
								Software Engineer (Frontend) with over 3.5 years of experience,
								including collaboration with Fortune 500 companies and international
								remote teams at Deloitte. Demonstrated success in a fast-paced
								product company working directly with the CTO. A B.Tech graduate
								from NIT Silchar, excelling at the intersection of art and code.
							</p>
							{/* <ul>
								<li>
									<ArrowRightIcon />
									Full Stack web development
								</li>

								<li>
									<ArrowRightIcon />
									Data structures and Algorithms
								</li>
							</ul> */}
							<a href="/assets/mousam_cv.pdf" download="Mousam mousam_cv.pdf">
								<button className="button">GET RESUME</button>
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
