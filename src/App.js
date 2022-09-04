import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';
import Landing from './components/Landing';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { MainStyles } from './styles';

function App() {
	const targetMain = useRef();
	const [y, setY] = useState(window.scrollY);
	const [mainRef, setMainRef] = useState();

	const [showNav, setShowNav] = useState(false);
	const [showFooter, setShowFooter] = useState(false);

	useEffect(() => {
		const targetMainRef = targetMain.current;
		if (targetMainRef) {
			setMainRef(targetMainRef);
		}
	}, []);

	useEffect(() => {
		if (mainRef) {
			setShowNav(true);
		}
	}, [mainRef]);

	useEffect(() => {
		if (mainRef) {
			// page Height
			const pageHeight = window.innerHeight;
			// get each section offsetTop
			const aboutOffsetTop = mainRef.childNodes[1].offsetTop;
			const portfolioOffsetTop = mainRef.childNodes[2].offsetTop;
			const contactOffsetTop = mainRef.childNodes[3].offsetTop;

			console.log();

			// detecting scroll event
			const handleScroll = ({ target: { scrollTop } }) => {
				const floorScrollTop = Math.floor(scrollTop);

				if (floorScrollTop >= pageHeight) {
					if (
						aboutOffsetTop === floorScrollTop ||
						portfolioOffsetTop === floorScrollTop ||
						contactOffsetTop === floorScrollTop
					) {
						setShowNav(true);
					}
					// when scrolling up
					else if (y > floorScrollTop) {
						setShowNav(true);
					}
					// when scrolling down
					else if (y < floorScrollTop) {
						setShowNav(false);
					}

					// show footer when scrolling to bottom
					if (mainRef.scrollHeight - (scrollTop + pageHeight) <= 100) {
						setShowFooter(true);
					} else {
						setShowFooter(false);
					}
				} else {
					if (y < floorScrollTop) {
						setShowNav(true);
					}
				}

				setY(floorScrollTop);
			};

			mainRef.addEventListener('scroll', handleScroll);

			return () => {
				mainRef.removeEventListener('scroll', handleScroll);
			};
		}
	}, [mainRef, y]);

	return (
		<Router>
			<Header showNav={showNav} />
			<MainStyles ref={targetMain}>
				<Landing />
				<About />
				<Portfolio />
				<Contact />
			</MainStyles>
			<Footer showFooter={showFooter} />
		</Router>
	);
}

export default App;
