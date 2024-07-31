import React from "react";
import "./reviews.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ArrowRight from "@material-ui/icons/ArrowRight";
import { ArrowLeft } from "@material-ui/icons";
import { useRef } from "react";

export default function Reviews() {
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
		speed: 1500,
		autoplaySpeed: 5000,
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
		<div className="reviews" id="reviews">
			<h1>What others has to say</h1>
			<div className="container">
				<Slider {...settings} ref={$ref}>
					<div className="review-image">
						<img className="image" src="assets/mevin-review.jpg" alt="mevin-review" />
					</div>
					<div className="review-image">
						<img className="image" src="assets/anenth-review.jpg" alt="anenth-review" />
					</div>
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
