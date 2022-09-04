import tw, { styled } from 'twin.macro';

export const HeaderStyles = styled.header`
	${tw`z-50 fixed inset-x-0 top-0  h-[var(--nav-height)] flex tracking-wider font-bold duration-500`}

	${tw`bg-primary bg-opacity-90 backdrop-blur-[6px]`}

	h2 {
		${tw`font-bold pt-6 text-xl`}
	}

	${({ showNav }) => (showNav ? tw`opacity-100` : tw`opacity-0`)}/*  */
`;

export const LogoStyles = styled.img`
	${tw`h-7`}
`;

export const NavStyles = styled.nav`
	${tw`container m-auto flex justify-between items-start`}
`;

export const MenuStyles = styled.ul`
	${tw`flex md:space-x-10  md:text-lg md:tracking-wider`}

	a {
		${tw`text-[#000] px-2 py-1 hover:text-[#2e2e2e] duration-75`}
		${tw`md:relative`}

		:hover::before {
			${tw`md:content md:absolute md:w-1 md:h-1 md:rounded-full md:top-0 md:left-3  
			md:bg-black`}
		}
	}
`;
