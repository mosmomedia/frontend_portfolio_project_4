import tw, { styled } from 'twin.macro';

export const Styles = styled.header``;

export const HeaderStyles = styled.header`
	${tw`h-[var(--nav-height)] flex tracking-wider font-black`}

	h2 {
		${tw`font-bold pt-6 text-[17px]`}
	}
`;

export const LogoStyles = styled.img`
	${tw`h-[30px]`}
`;

export const NavStyles = styled.nav`
	${tw`container m-auto flex justify-between items-start`}
`;

export const MenuStyles = styled.ul`
	${tw`flex md:space-x-12  md:text-base md:tracking-wider`}
`;
