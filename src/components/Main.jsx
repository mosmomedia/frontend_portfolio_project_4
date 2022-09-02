import Landing from './Landing';
import About from './About';
import Portfolio from './Portfolio';

import { MainStyles } from '../styles';

function Main() {
	return (
		<MainStyles>
			<Landing />
			<About />
			<Portfolio />
		</MainStyles>
	);
}

export default Main;
