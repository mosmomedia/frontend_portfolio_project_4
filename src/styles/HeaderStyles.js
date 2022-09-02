import tw, { styled } from 'twin.macro';

export const HeaderStyles = styled.header`
	${tw`z-50 fixed inset-x-0 top-0  h-[var(--nav-height)] flex tracking-wider font-black`}

	h2 {
		${tw`font-black pt-6 text-lg`}
	}

	${({ showNav }) => (showNav ? tw`flex` : tw`hidden`)}

	${({ isScrollTopZero }) =>
		isScrollTopZero
			? tw`h-[var(--nav-height)]`
			: tw`h-[unset] py-5 bg-primary bg-opacity-90 backdrop-blur-[6px]`}
`;

export const LogoStyles = styled.img`
	${tw`h-7`}
`;

export const NameStyles = styled.h2`
	${({ isScrollTopZero }) => (isScrollTopZero ? tw`block` : tw`hidden`)}
`;

export const NavStyles = styled.nav`
	${tw`container m-auto flex justify-between items-start`}
`;

export const MenuStyles = styled.ul`
	${tw`flex md:space-x-12  md:text-[17px] md:tracking-wider`}
`;
