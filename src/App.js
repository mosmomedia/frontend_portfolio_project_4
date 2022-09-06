import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import Landing from './components/Landing';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { MainStyles } from './styles';

function App() {
	const targetMain = useRef();
	const [mainRef, setMainRef] = useState();
	useEffect(() => {
		const targetMainRef = targetMain.current;
		if (targetMainRef) {
			setMainRef(targetMainRef);
		}
	}, []);

	return (
		<Router>
			<Header mainRef={mainRef} />
			<MainStyles ref={targetMain}>
				<Landing />
				<About />
				<Portfolio />
				<Contact />
			</MainStyles>
			<Footer mainRef={mainRef} />
		</Router>
	);
}

export default App;
