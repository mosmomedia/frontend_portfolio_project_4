import tw, { styled } from 'twin.macro';

export const WrapperStyles = styled.section`
	${tw`pt-20 space-y-16 sm:space-y-28 lg:h-screen lg:pt-52`}
`;

export const HeaderStyles = styled.div`
	${tw`space-y-6`}

	h4 {
		${tw`text-gray-500 text-base  xs:text-lg sm:text-[22px]`}
	}
`;

export const MainStyles = styled.div`
	${tw`space-y-6`}

	h4 {
		${tw`text-lg  xs:text-xl sm:text-3xl text-[#333333] pl-0.5`}
	}

	#dj_email {
		${tw`inline-flex items-center space-x-8 bg-white font-bold text-xl sm:text-4xl px-6 py-4 shadow-md`}

		${tw`xs:hover:bg-key_col1 xs:hover:text-purple-600 xs:hover:cursor-pointer xs:hover:shadow duration-300`}

		${tw`border border-main_text rounded-2xl`}

		svg {
			${tw`animate-pulse`}
		}
	}
`;
