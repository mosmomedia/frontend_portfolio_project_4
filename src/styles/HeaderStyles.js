import tw, { styled } from 'twin.macro';

export const HeaderStyles = styled.header`
	${tw`z-50 fixed inset-x-0 top-0 h-[var(--nav-height)]`}

	${({ showNav }) => (showNav ? tw`opacity-100` : tw`opacity-0`)}
`;

export const WrapperStyles = styled.div`
	${tw`w-full h-full flex`}
	${tw`bg-primary`} 

		${({ isTopZeroPostion }) =>
		isTopZeroPostion
			? tw`lg:h-[150px]  bg-opacity-0 backdrop-blur-[unset]`
			: tw`h-[unset] py-3 bg-opacity-95 backdrop-blur-[6px] `}

	/*  */

	h2 {
		${tw`font-bold pt-6 text-xl`}
	}
`;

export const NavStyles = styled.nav`
	${tw`container m-auto flex justify-between items-start tracking-wider font-bold`}
`;

export const LogoStyles = styled.img`
	${tw`h-7`}
`;

export const MenuStyles = styled.ul`
	${tw`flex text-base xs:space-x-4  sm:space-x-6 sm:text-lg md:space-x-10 md:tracking-wider`}

	a {
		${tw`text-[#000] px-2 py-1 hover:text-[#2e2e2e] duration-75`}
		${tw`xs:relative`}

		:hover::before {
			${tw`xs:content xs:absolute xs:w-1 xs:h-1 xs:rounded-full xs:top-0 xs:left-3  
			xs:bg-black`}
		}
	}
`;
