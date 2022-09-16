import React from 'react';

import Logo from '../../assets/icons/logo100.png';

import {
	HeaderStyles,
	WrapperStyles,
	LogoStyles,
	NavStyles,
} from './HeaderStyles';

function Header() {
	return (
		<HeaderStyles>
			<WrapperStyles>
				{/* nav */}
				<NavStyles>
					{/* logo */}
					<div id="logo_wrraper">
						<title>Logo</title>
						<LogoStyles src={Logo} alt="logo" />
					</div>
					{/* menu */}
				</NavStyles>
			</WrapperStyles>
		</HeaderStyles>
	);
}

export default Header;
