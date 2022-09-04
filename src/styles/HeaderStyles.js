import tw, { styled } from 'twin.macro';

export const HeaderStyles = styled.header`
	/* ${tw`z-50 fixed inset-x-0 top-0 pt-10 pb-5 flex tracking-wider font-bold`} */
	${tw`z-50 fixed inset-x-0 top-0  h-[var(--nav-height)] flex tracking-wider font-bold duration-500`}

	${tw`bg-primary bg-opacity-90 backdrop-blur-[6px]`}

	h2 {
		${tw`font-bold pt-6 text-xl`}
	}

	${({ showNav }) => (showNav ? tw`opacity-100` : tw`opacity-0`)} /*  */

	${({ isScrollTopZero }) =>
		isScrollTopZero ? tw`h-[var(--nav-height)]` : tw`h-[100px] `}
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
	${tw`flex md:space-x-12  md:text-lg md:tracking-wider`}
`;
