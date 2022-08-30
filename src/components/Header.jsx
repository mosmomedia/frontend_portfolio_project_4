import { Link } from 'react-router-dom';

import {
	HeaderStyles,
	LogoStyles,
	NavStyles,
	MenuStyles,
} from '../styles/HeaderStyles';

import Logo from '../assets/icons/logo100.png';

function Header() {
	return (
		<HeaderStyles>
			{/* nav */}
			<NavStyles>
				{/* logo */}
				<div>
					<Link to="/">
						<title>Logo</title>
						<LogoStyles src={Logo} alt="logo" />
					</Link>
					<h2 className="displayName">Dongjoo Kim</h2>
				</div>
				{/* menu */}
				<MenuStyles>
					{/* about */}
					<li>About</li>
					<li>Portfolio</li>
					<li>Contact</li>
				</MenuStyles>
			</NavStyles>
		</HeaderStyles>
	);
}

export default Header;
