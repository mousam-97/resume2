import React from "react";
import "./portfolio.scss";
// import Fade from "react-reveal/Fade";

function Portfolio() {
	return (
		<div className="portfolio" id="portfolio">
			<h3>Projects</h3>
			<div className="container">
				{/* <Fade left> */}
				<a
					href="https://amazon-ecommerce-store-frontend-ldwacgirz.vercel.app/"
					rel="noopener noreferrer"
					target="_blank"
				>
					<div className="item">
						<img src="assets/projects/amazon-clone.png" alt="project1" />
						<h3>Amazon (MERN stack)</h3>
					</div>
				</a>

				{/* </Fade> */}
				{/* <Fade right> */}
				<a
					href="https://simple-image-editor-v2.netlify.app/"
					rel="noopener noreferrer"
					target="_blank"
				>
					<div className="item">
						<img src="assets/projects/image-editor.PNG" alt="project2" />
						<h3>Image Editor</h3>
					</div>
				</a>
				<a
					href="https://stirring-sprinkles-d313d4.netlify.app/"
					rel="noopener noreferrer"
					target="_blank"
				>
					<div className="item">
						<img src="assets/projects/instagram-clone.PNG" alt="project2" />
						<h3>Instagram</h3>
					</div>
				</a>
				{/* </Fade> */}
				{/* <Fade left> */}

				{/* </Fade> */}
				{/* <Fade right> */}
				{/* <a
					href="https://rick-and-morty-application.netlify.app/"
					rel="noopener noreferrer"
					target="_blank"
				>
					<div className="item">
						<img src="assets/Rick and Morty.PNG" alt="project4" />
						<h3>Rick and Morty characters </h3>
					</div>
				</a> */}
				{/* </Fade> */}
			</div>
		</div>
	);
}

export default Portfolio;
