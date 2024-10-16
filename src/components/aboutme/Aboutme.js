import React from "react";
import "./aboutme.scss";
// import Fade from "react-reveal/Fade";

function Aboutme() {
  return (
		<div className="aboutme" id="aboutme">
			<h3>About Me</h3>
			<div className="slider">
				<div className="container">
					{/* <Fade left> */}
					<div className="item">
						<div className="left">
							<img src="/assets/frontend3.jpg" alt="my pic large" />
						</div>
						<div className="right">
							<p>
								Frontend Software Engineer with 3.8 years of experience, delivering
								solutions for global brands and Fortune 500 companies. B.Tech
								graduate from NIT Silchar, with experience at Deloitte and Premagic.
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
							{/* <a href="/assets/mousam_cv.pdf" download="Mousam mousam_cv.pdf">
								<button className="button">GET RESUME</button>
							</a> */}
							<a
								href="https://drive.google.com/file/d/1DW0DFSjmp6boeNMuUeQP4f5i7j7Aba75/view"
								target="_blank"
								rel="noopener noreferrer"
							>
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
