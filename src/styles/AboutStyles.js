import tw, { styled } from 'twin.macro';

export const WrapperStyles = styled.section`
	${tw`pt-32 sm:pt-36 pb-20 md:pt-40 lg:pb-72 space-y-32`}
`;

export const HeaderStyles = styled.div`
	${tw`xs:flex xs:justify-between xs:items-center tracking-wider`}
`;
export const LinksStyles = styled.div`
	${tw`flex space-x-3 sm:space-x-5`}

	a {
		${tw`flex items-start bg-seconday text-white text-[12px] sm:text-[14px] tracking-widest rounded-md px-2 py-1  sm:px-4 sm:pt-2 sm:pb-1 space-x-3 font-light duration-300`}

		${tw`xs:hover:text-key_col1`}
	}

	#dj_resume svg {
		${tw`text-base sm:text-lg`}
		${tw`sm:mt-[1px]`}
	}

	#dj_resume path {
		stroke: var(--key-color);
	}

	#dj_github svg {
		${tw`text-lg  sm:text-[21px] text-key_col1`}
	}
`;

export const SectionStyles = styled.div`
	${tw`space-y-36`}
`;

export const SubStyles = styled.div`
	h2 {
		${tw`pb-10`}
	}
	p {
		${tw`tracking-wide text-primary leading-7 md:text-[16px] lg:text-[17px]  md:leading-8`}
	}

	.bigger_title {
		${tw`text-3xl`}
	}

	.skill_set {
		${tw`font-bold text-lg sm:text-2xl text-gray-700 tracking-wide`}
	}
`;

export const ExpStyles = styled.div`
	${tw`mt-5 `}
	${tw`grid grid-rows-2 gap-10 xl:grid-rows-1  xl:grid-cols-2 xl:gap-16`}
`;

export const SubExpStyles = styled.div`
	${tw`bg-white border border-[#2f2f2f] rounded-[3px] py-10 px-4 sm:px-8 space-y-4`}

	.exp_header {
		${tw`flex justify-between`}
	}

	.exp_header_title {
		* {
			${tw` text-black font-medium`}
		}

		h3 {
			${tw`mb-1.5`}
		}

		${tw`sm:flex sm:space-x-8`}
	}
	.exp_info {
		${tw`flex space-x-4 text-gray-700`}
	}
	a {
		${tw`hover:text-purple-700 duration-200`}
	}
	p {
		${tw`sm:text-base py-6 tracking-wide font-medium`}
	}

	ul {
		${tw`pl-4 space-y-2`}
	}

	li {
		${tw`list-disc text-primary`}
	}

	svg {
		${tw`text-xl `}
	}
`;
