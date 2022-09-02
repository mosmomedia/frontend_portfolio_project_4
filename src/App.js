import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
	return (
		<Router>
			<Header />
			<Main />
			<Footer />
		</Router>
	);
}

export default App;
