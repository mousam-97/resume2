import React from "react";
import Slider from "react-slick";
import "./companies-served.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CompaniesServed() {
	var settings = {
		dots: false,
		// lazyLoad: true,
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 2000,
		cssEase: "linear",
		// variableWidth: true,
		pauseOnHover: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div className="companies-served" id="companies-served">
			<h1>Clients Served</h1>

			<div className="slider-container">
				<Slider {...settings}>
					<div className="image-container">
						<img src="assets/brands/accel.png" alt="" />
					</div>
					<div className="image-container">
						<img src="assets/brands/adobe.png" alt="" />
					</div>
					<div className="image-container">
						<img src="assets/brands/amazon.png" alt="" />
					</div>
					<div className="image-container">
						<img src="assets/brands/asia-berlin.png" alt="" />
					</div>
					<div className="image-container">
						<img src="assets/brands/cii.png" alt="" />
					</div>
					<div className="image-container">
						<img src="assets/brands/currency-research.png" alt="" />
					</div>
					<div className="image-container">
						<img src="assets/brands/daikin.png" alt="" />
					</div>
					<div className="image-container">
						<img src="assets/brands/daktronics.png" alt="" />
					</div>
					<div className="image-container">
						<img src="assets/brands/deloitte.png" alt="" />
					</div>
					<div className="image-container">
						<img src="assets/brands/genpact.png" alt="" />
					</div>
					<div className="image-container">
						<img src="assets/brands/gitex.png" alt="" />
					</div>
					<div className="image-container">
						<img src="assets/brands/jsconf.jpg" alt="" />
					</div>
					<div className="image-container">
						<img src="assets/brands/legrand.png" alt="" />
					</div>
					<div className="image-container">
						<img src="assets/brands/mercedes.png" alt="" />
					</div>
					<div className="image-container">
						<img src="assets/brands/nas.png" alt="" />
					</div>
					<div className="image-container">
						<img src="assets/brands/nasscom.png" alt="" />
					</div>
					<div className="image-container">
						<img src="assets/brands/nordstrom.png" alt="" />
					</div>
					<div className="image-container">
						<img src="assets/brands/presidents-secretariat.png" alt="" />
					</div>
					<div className="image-container">
						<img src="assets/brands/saasboomi.png" alt="" />
					</div>
					<div className="image-container">
						<img src="assets/brands/samsung.png" alt="" />
					</div>
					<div className="image-container">
						<img src="assets/brands/shell1.png" alt="" />
					</div>
					<div className="image-container">
						<img src="assets/brands/starbucks.png" alt="" />
					</div>
					<div className="image-container">
						<img src="assets/brands/ted.png" alt="" />
					</div>
					<div className="image-container">
						<img src="assets/brands/verizon.png" alt="" />
					</div>
					<div className="image-container">
						<img src="assets/brands/publicis.jpeg" alt="" />
					</div>
				</Slider>
			</div>

			{/* <a href="/assets/mousam_cv.pdf" download="Mousam mousam_cv.pdf">
				<button className="resume-button">Get Resume</button>
			</a> */}
		</div>
	);
}
