import { useState, useEffect, useRef } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Landing from '../components/Landing';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

import { MainStyles } from '../styles';

function Home() {
	const targetMain = useRef();
	const [mainRef, setMainRef] = useState();

	useEffect(() => {
		const targetMainRef = targetMain.current;
		if (targetMainRef) {
			setMainRef(targetMainRef);
		}
	}, []);

	return (
		<>
			<Header mainRef={mainRef} />
			<MainStyles ref={targetMain}>
				<Landing />
				<About />
				<Portfolio />
				<Contact />
			</MainStyles>
			<Footer mainRef={mainRef} />
		</>
	);
}

export default Home;
