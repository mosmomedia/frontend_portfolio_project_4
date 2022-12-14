import tw, { styled } from 'twin.macro';

export const HeaderStyles = styled.header`
	${tw`z-50 fixed inset-x-0 top-0 h-[80px]  xs:h-[100px]  xl:h-[var(--nav-height)] bg-primary duration-100 ease-in bg-opacity-90 backdrop-blur-[6px] xs:bg-opacity-100 xs:backdrop-blur-[unset]`}

	&.hideNav {
		${tw`opacity-0`}
	}

	&.changeNav {
		${tw`h-[unset] py-4 bg-opacity-90 backdrop-blur-[6px]`}
	}
`;

export const WrapperStyles = styled.div`
	${tw`relative w-full h-full flex`}

	#displayName {
		${tw`absolute hidden lg:block  lg:text-base  lg:-bottom-0	xl:text-lg font-medium text-primary tracking-wide`}
	}

	#displayName.hideName {
		${tw`hidden`}
	}
`;

export const NavStyles = styled.nav`
	${tw`container m-auto flex justify-between items-center tracking-wider font-medium`}
`;

export const LogoStyles = styled.img`
	${tw`w-6 h-6 2xl:h-7 2xl:w-7`}
`;

export const MenuStyles = styled.ul`
	${tw`flex text-base  xs:space-x-4  sm:space-x-6 sm:text-base 2xl:text-lg md:space-x-10 2xl:space-x-11 md:tracking-wider`}

	a {
		${tw`text-[#000] px-3 xs:px-2 py-1 xs:hover:text-[#2e2e2e] duration-75`}

		${tw`xs:relative`}

		:hover::before {
			${tw`xs:content xs:absolute xs:w-1 xs:h-1 xs:rounded-full xs:top-0 xs:left-3  
			xs:bg-black`}
		}
	}
`;
