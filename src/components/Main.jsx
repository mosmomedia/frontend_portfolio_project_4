import Landing from './Landing';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

import { MainStyles } from '../styles';

function Main() {
	return (
		<MainStyles>
			<Landing />
			<About />
			<Portfolio />
			<Contact />
		</MainStyles>
	);
}

export default Main;
