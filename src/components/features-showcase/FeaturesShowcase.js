import React from "react";
import "./features-showcase-styles.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ArrowRight from "@material-ui/icons/ArrowRight";
import { ArrowLeft } from "@material-ui/icons";
import { useRef } from "react";

export default function FeaturesShowcase() {
	const $ref = useRef(null);

	function goToNextSlide() {
		if ($ref?.current) {
			$ref.current.slickNext();
		}
	}

	function goToPreviousSlide() {
		if ($ref?.current) {
			$ref.current.slickPrev();
		}
	}

	const settings = {
		dots: false,
		infinite: true,
		speed: 1000,
		autoplaySpeed: 3000,
		pauseOnHover: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: false,
		autoplay: true,
		arrows: true,

		centerMode: false,
		centerPadding: "15px",
		swipeToSlide: true,
		variableWidth: false,

		// lazyLoad: 'ondemand'/'progressive'
		// responsive: [
		//   {
		//     breakpoint: 1024,
		//     settings: {
		//       slidesToShow: 1,
		//       slidesToScroll: 1,
		//     },
		//   },
		//   {
		//     breakpoint: 800,
		//     settings: {
		//       slidesToShow: 1,
		//       slidesToScroll: 1,
		//     },
		//   },
		//   {
		//     breakpoint: 480,
		//     settings: {
		//       slidesToShow: 1,
		//       slidesToScroll: 1,
		//     },
		//   },
		// ],
	};
	return (
		<div className="feature-showcase" id="feature-showcase">
			<h3>Showcase of Implemented Features</h3>
			<div className="container">
				<Slider {...settings} ref={$ref}>
					{Array.from({ length: 63 }).map((_, idx) => (
						<div className="feature-image" key={idx}>
							<img
								className="image"
								src={`assets/features/${idx + 1}.jpg`}
								alt="feature"
							/>
						</div>
					))}
				</Slider>
				<div className="row">
					<button className="button-arrow" onClick={goToPreviousSlide}>
						<ArrowLeft />
					</button>
					<button className="button-arrow" onClick={goToNextSlide}>
						<ArrowRight />
					</button>
				</div>
			</div>
		</div>
	);
}
