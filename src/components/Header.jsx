import { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';

import {
	HeaderStyles,
	LogoStyles,
	NameStyles,
	NavStyles,
	MenuStyles,
} from '../styles/HeaderStyles';

import Logo from '../assets/icons/logo100.png';

function Header({ showNav }) {
	const [isScrollTopZero, setIsScrollTopZero] = useState(true);

	return (
		<HeaderStyles showNav={showNav}>
			{/* nav */}
			<NavStyles>
				{/* logo */}
				<div>
					<HashLink smooth to="#landing">
						<title>Logo</title>
						<LogoStyles src={Logo} alt="logo" />
					</HashLink>
					{/* <NameStyles isScrollTopZero={isScrollTopZero}>Dongjoo Kim</NameStyles> */}
				</div>
				{/* menu */}
				<MenuStyles>
					{/* about */}
					<HashLink smooth to="/#about">
						About
					</HashLink>
					<HashLink smooth to="/#portfolio">
						Portfolio
					</HashLink>
					<HashLink smooth to="/#contact">
						Contact
					</HashLink>
				</MenuStyles>
			</NavStyles>
		</HeaderStyles>
	);
}

export default Header;
