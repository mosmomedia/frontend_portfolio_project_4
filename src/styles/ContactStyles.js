import tw, { styled } from 'twin.macro';

export const WrapperStyles = styled.section`
	${tw`pt-20 space-y-16 sm:space-y-28 lg:h-screen lg:pt-52`}

	h1 {
		${tw`text-3xl md:text-4xl xl:text-[40px] 2xl:text-5xl`}
	}
`;

export const HeaderStyles = styled.div`
	${tw`space-y-6`}

	p {
		${tw`text-gray-700 text-base  xs:text-[17px] md:text-[19px]`}
	}
`;

export const MainStyles = styled.div`
	${tw`space-y-6`}

	p {
		${tw`text-lg  sm:text-2xl  text-[#333333] pl-0.5`}
	}
`;

export const MailToStyles = styled.a`
	${tw`inline-flex items-center space-x-8 bg-white font-bold text-xl sm:text-3xl xl:text-4xl px-6 py-4 shadow-md`}

	${tw`xs:hover:bg-key_col1 xs:hover:text-purple-600 xs:hover:cursor-pointer xs:hover:shadow duration-300`}

${tw`border border-main_text rounded-2xl`}

svg {
		${tw`animate-pulse`}
	}
`;
