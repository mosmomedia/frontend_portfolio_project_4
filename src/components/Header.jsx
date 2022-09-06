import { useState, useEffect, useRef } from 'react';
import { HashLink } from 'react-router-hash-link';

import {
	HeaderStyles,
	WrapperStyles,
	LogoStyles,
	NavStyles,
	MenuStyles,
} from '../styles/HeaderStyles';

import Logo from '../assets/icons/logo100.png';

function Header({ mainRef }) {
	const [y, setY] = useState(0);

	const targetNav = useRef();
	const targetDisplayName = useRef();

	useEffect(() => {
		if (mainRef) {
			// page Height
			const pageHeight = window.innerHeight;
			// get each section offsetTop
			const aboutOffsetTop = mainRef.childNodes[1].offsetTop;
			const portfolioOffsetTop = mainRef.childNodes[2].offsetTop;
			const contactOffsetTop = mainRef.childNodes[3].offsetTop;

			// detecting scroll event
			const handleScroll = ({ target: { scrollTop } }) => {
				const floorScrollTop = Math.floor(scrollTop);
				if (floorScrollTop >= pageHeight) {
					targetNav.current.classList.add('changeNav');
					targetDisplayName.current.classList.add('hideName');

					if (
						aboutOffsetTop === floorScrollTop ||
						portfolioOffsetTop === floorScrollTop ||
						contactOffsetTop === floorScrollTop
					) {
						targetNav.current.classList.remove('hideNav');
					}
					// when scrolling up
					else if (y > floorScrollTop) {
						targetNav.current.classList.remove('hideNav');
					}
					// when scrolling down
					else if (y < floorScrollTop) {
						targetNav.current.classList.add('hideNav');
					}
				} else {
					if (floorScrollTop === 0) {
						targetNav.current.classList.remove('hideNav');
						targetNav.current.classList.remove('changeNav');
						targetDisplayName.current.classList.remove('hideName');
					} else {
						targetNav.current.classList.add('hideNav');
					}
				}

				setY(floorScrollTop);
			};

			mainRef.addEventListener('scroll', handleScroll);

			return () => {
				mainRef.removeEventListener('scroll', handleScroll);
			};
		}
	}, [mainRef, y]);

	return (
		<HeaderStyles ref={targetNav}>
			<WrapperStyles>
				{/* nav */}
				<NavStyles>
					{/* logo */}
					<div id="logo_wrraper">
						<HashLink smooth to="#landing">
							<title>Logo</title>
							<LogoStyles src={Logo} alt="logo" />
						</HashLink>
						<div ref={targetDisplayName} id="displayName">
							Dongjoo Kim
						</div>
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
			</WrapperStyles>
		</HeaderStyles>
	);
}

export default Header;
