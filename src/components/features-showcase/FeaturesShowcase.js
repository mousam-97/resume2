import './features-showcase-styles.scss';




export default function FeaturesShowcase() {

    return (
		<div className="features-showcase-container">
			<h1>Sample features</h1>
			<div className="scrollable-container">
				<div className="feature">
					<video controls autoPlay loop className="image">
						<source src="assets/features/jsconf.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</div>
				<div className="feature">
					<img
						className="image"
						src="assets/features/customization1.png"
						alt="feature1"
					/>
				</div>

				<div className="feature">
					<img className="image" src="assets/features/4.png" alt="feature1" />
				</div>
				<div className="feature">
					<img className="image" src="assets/features/7.png" alt="feature1" />
				</div>
				<div className="feature">
					<img className="image" src="assets/features/8.png" alt="feature1" />
				</div>
				<div className="jsconf-container">
					<div className="feature">
						<img className="image" src="assets/features/19.png" alt="feature1" />
					</div>
					<div className="feature">
						<img className="image" src="assets/features/20.png" alt="feature1" />
					</div>
					<div className="feature">
						<img className="image" src="assets/features/22.png" alt="feature1" />
					</div>
				</div>
			</div>
		</div>
	);
}