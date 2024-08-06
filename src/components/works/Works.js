import React from "react";
import "./works.scss";
// import Fade from "react-reveal/Fade";

function Works() {
  return (
		<div className="works" id="works">
			<h3>Hobby(Art)</h3>
			<div className="container">
				{/* <Fade left> */}
				<div className="item">
					<img src="assets/sketch3.jpg" alt="sketch3"></img>
				</div>
				{/* </Fade> */}

				{/* <Fade left> */}
				<div className="item">
					<img src="assets/sketch1.jpg" alt="sketch1"></img>
				</div>
				{/* </Fade> */}

				{/* <Fade right> */}
				<div className="item">
					<img src="assets/sketch2.jpg" alt="sketch2"></img>
				</div>
				{/* </Fade> */}

				{/* <Fade right> */}
				<div className="item">
					<img src="assets/sketch4.jpg" alt="sketch4"></img>
				</div>
				{/* </Fade> */}
			</div>
		</div>
  );
}
export default Works;
