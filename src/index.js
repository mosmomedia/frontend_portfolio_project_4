import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import './styles/fontStyles.css';
import GlobalStyles from './styles/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<GlobalStyles />
		<App />
	</React.StrictMode>
);
