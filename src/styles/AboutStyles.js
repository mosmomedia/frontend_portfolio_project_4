import tw, { styled } from 'twin.macro';

export const WrapperStyles = styled.section`
	${tw`pt-32 sm:pt-36 pb-20 md:pt-40 lg:pt-32 lg:pb-96 space-y-16 xs:space-y-32`}
`;

export const HeaderStyles = styled.div`
	${tw` xs:space-y-0  flex justify-between items-center tracking-wider`}
	h1 {
		${tw`text-[26px] xs:text-3xl md:text-4xl xl:text-[40px] 2xl:text-5xl`}
	}
`;
export const LinksStyles = styled.div`
	${tw`flex space-x-3 sm:space-x-5`}

	a {
		${tw`flex items-center  xs:items-start bg-seconday text-white text-[10px] xs:text-xs sm:text-[13px] tracking-widest rounded-[0.2rem]  xs:rounded-[3px] space-x-3 font-light duration-300`}

		${tw`px-2.5 py-0.5 xs:py-1 sm:py-1.5 md:py-2 lg:py-1.5`}

		${tw`xs:hover:text-key_col1`}
	}

	.djResume svg {
		${tw`text-xs xs:text-sm`}
		${tw` xs:mt-[2px] sm:mt-0`}
	}

	.djResume path {
		stroke: var(--key-color);
	}

	.djGithub svg {
		${tw`text-base xs:text-lg sm:text-[16px] text-key_col1`}
	}
`;

export const SectionStyles = styled.div`
	${tw`space-y-24 xs:space-y-36`}
`;

export const SubStyles = styled.div`
	h2 {
		${tw`pb-10 2xl:pb-14`}
	}

	p {
		${tw`tracking-wider text-primary  md:text-base 2xl:text-lg pr-4 xs:pr-0 leading-7 md:leading-7 2xl:leading-9`}
	}

	.bigger_title {
		${tw`text-2xl xs:text-3xl`}
	}

	.skill_set {
		${tw`font-bold text-base  xs:text-lg sm:text-2xl text-gray-700 tracking-wide`}
	}
`;

export const ExpStyles = styled.div`
	${tw`mt-5 grid grid-rows-2 gap-10 xl:grid-rows-1  xl:grid-cols-2 xl:gap-16`}

	${tw`items-center xl:items-stretch`}
`;

export const SubExpStyles = styled.div`
	${tw`bg-white border border-[#2f2f2f] rounded-[3px] py-8 px-4 sm:px-8 space-y-4`}

	.exp_header {
		${tw`flex justify-between`}
	}

	.exp_header_title {
		* {
			${tw` text-black font-medium`}
		}

		h3 {
			${tw`mb-1.5 font-bold`}
		}

		${tw`sm:flex sm:space-x-8`}
	}
	.exp_info {
		${tw`flex space-x-4 text-gray-700 2xl:text-[17px]`}
	}

	a {
		${tw`hover:text-purple-700 duration-200`}
	}

	p {
		${tw`text-sm leading-6 sm:text-[15px] 2xl:text-[17px] py-6 tracking-wider 2xl:font-medium`}
	}

	ul {
		${tw`pl-4 space-y-3`}
	}

	li {
		${tw`list-disc text-primary text-[13px] xs:text-sm sm:text-[15px] 2xl:text-[17px] 2xl:opacity-95`}
	}

	svg {
		${tw`text-base xs:text-xl `}
	}
`;
