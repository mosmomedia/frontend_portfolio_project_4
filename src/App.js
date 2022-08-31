import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Landing from './components/Landing';

function App() {
	return (
		<Router>
			<Header />
			<Landing />
		</Router>
	);
}

export default App;
