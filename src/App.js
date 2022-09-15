import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './components/shared/NotFound';

import Home from './pages/Home';
import ProjectStorytunes from './pages/projects/Project-storytunes';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/*" element={<NotFound />} />
				<Route path="/" element={<Home />} />
				{/* Portfolio - project links */}
				<Route path="/project/storytunes" element={<ProjectStorytunes />} />
			</Routes>
		</Router>
	);
}

export default App;
