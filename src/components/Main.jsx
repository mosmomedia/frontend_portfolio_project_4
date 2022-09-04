import Landing from './Landing';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

import { MainStyles } from '../styles';

function Main() {
	return (
		<MainStyles>
			<Landing />
			<About />
			<Portfolio />
			<Contact />
			<Footer />
		</MainStyles>
	);
}

export default Main;
