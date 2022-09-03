import { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import {
	HeaderStyles,
	LogoStyles,
	NameStyles,
	NavStyles,
	MenuStyles,
} from '../styles/HeaderStyles';

import Logo from '../assets/icons/logo100.png';

function Header() {
	const [y, setY] = useState(window.scrollY);

	const [showNav, setShowNav] = useState(false);
	const [isScrollTopZero, setIsScrollTopZero] = useState(true);

	const handleNavigation = useCallback(
		(e) => {
			const { scrollY } = window;
			if (scrollY === 0) {
				setIsScrollTopZero(true);
			} else {
				setIsScrollTopZero(false);
			}

			if (y > scrollY) {
				setShowNav(true);
			} else if (y < scrollY) {
				setShowNav(false);
			}
			setY(scrollY);
		},
		[y]
	);

	useEffect(() => {
		console.log(window.scrollY);
		if (window.scrollY === 0) {
			setShowNav(true);
		}
	}, []);

	useEffect(() => {
		window.addEventListener('scroll', handleNavigation);

		return () => {
			window.removeEventListener('scroll', handleNavigation);
		};
	}, [handleNavigation]);

	return (
		<HeaderStyles showNav={showNav} isScrollTopZero={isScrollTopZero}>
			{/* nav */}
			<NavStyles>
				{/* logo */}
				<div>
					<Link to="/">
						<title>Logo</title>
						<LogoStyles src={Logo} alt="logo" />
					</Link>
					<NameStyles isScrollTopZero={isScrollTopZero}>Dongjoo Kim</NameStyles>
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
