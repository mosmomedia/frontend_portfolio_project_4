import { useState, useEffect } from 'react';
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
	const [showNav, setShowNav] = useState(false);
	const [isTopZeroPostion, setIsTopZeroPostion] = useState(false);

	useEffect(() => {
		if (mainRef) {
			setShowNav(true);
			setIsTopZeroPostion(true);
		}
	}, [mainRef]);

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
				// console.log(mainRef.scrollTop, floorScrollTop, y, pageHeight);
				if (floorScrollTop >= pageHeight) {
					setIsTopZeroPostion(false);

					if (
						aboutOffsetTop === floorScrollTop ||
						portfolioOffsetTop === floorScrollTop ||
						contactOffsetTop === floorScrollTop
					) {
						setShowNav(true);
					}
					// when scrolling up
					else if (y > floorScrollTop) {
						setShowNav(true);
					}
					// when scrolling down
					else if (y < floorScrollTop) {
						setShowNav(false);
						setIsTopZeroPostion(true);
					}
				} else {
					console.log(floorScrollTop);
					if (floorScrollTop === 0) {
						setShowNav(true);
						setIsTopZeroPostion(true);
					} else {
						if (y > floorScrollTop) {
						}
						setShowNav(false);
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
		<HeaderStyles showNav={showNav}>
			<WrapperStyles isTopZeroPostion={isTopZeroPostion}>
				{/* nav */}
				<NavStyles>
					{/* logo */}
					<div>
						<HashLink smooth to="#landing">
							<title>Logo</title>
							<LogoStyles src={Logo} alt="logo" />
						</HashLink>
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
