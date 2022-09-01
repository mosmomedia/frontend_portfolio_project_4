import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';

function App() {
	return (
		<Router>
			<Header />
			<Main />
		</Router>
	);
}

export default App;
