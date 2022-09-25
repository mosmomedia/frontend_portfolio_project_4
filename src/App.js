import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NotFound from './components/shared/NotFound';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ProjectStorytunes from './pages/projects/Project-storytunes';

function App() {
	return (
		<Router>
			<ScrollToTop>
				<Routes>
					<Route path="/*" element={<NotFound />} />
					<Route path="/" element={<Home />} />

					{/* Portfolio - projects pages */}
					<Route path="/project/storytunes" element={<ProjectStorytunes />} />
				</Routes>
			</ScrollToTop>
		</Router>
	);
}

export default App;
