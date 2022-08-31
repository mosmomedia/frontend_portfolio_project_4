import tw, { styled } from 'twin.macro';

export const Styles = styled.header``;

export const HeaderStyles = styled.header`
	${tw`fixed inset-x-0 top-0  h-[var(--nav-height)] flex tracking-wider font-black`}

	h2 {
		${tw`font-black pt-6 text-lg`}
	}
`;

export const LogoStyles = styled.img`
	${tw`h-7`}
`;

export const NavStyles = styled.nav`
	${tw`container m-auto flex justify-between items-start`}
`;

export const MenuStyles = styled.ul`
	${tw`flex md:space-x-12  md:text-[17px] md:tracking-wider`}
`;
