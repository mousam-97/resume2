import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";
import Skills from "./components/skills/Skills";
import Aboutme from "./components/aboutme/Aboutme";
import Reviews from "./components/reviews/Reviews";
import FeaturesShowcase from "./components/features-showcase/FeaturesShowcase";

function App() {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<div className="app">
			<Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<div className="sections">
				<Intro />
				<Aboutme />
				<Skills />
				<FeaturesShowcase />
				<Reviews />
				<Portfolio />
				{/* <Experience /> */}
				<Works />
				{/* <Contact /> */}
			</div>
		</div>
	);
}

export default App;
