import tw, { styled } from 'twin.macro';

export const WrapperStyles = styled.section`
	${tw`py-[var(--nav-height)] space-y-32`}
`;
export const HeaderStyles = styled.div`
	${tw`flex justify-between items-center tracking-wider`}

	#dj_links {
		${tw`flex space-x-5`}

		a {
			${tw`flex items-start bg-seconday text-white text-[14px] tracking-widest rounded-md px-4 pt-2 pb-1 space-x-3 font-light`}
		}

		#dj_resume svg {
			${tw`text-lg`}
			${tw`mt-[1px]`}
		}

		#dj_resume path {
			stroke: var(--key-color);
		}

		#dj_github svg {
			${tw`text-[21px]`}
		}

		#dj_github path {
			fill: var(--key-color);
		}
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
		${tw`text-[17px] tracking-wider leading-8 text-black font-medium`}
	}

	.bigger_title {
		${tw`text-3xl`}
	}

	.skill_set {
		${tw`font-black text-2xl text-gray-700 tracking-wide`}
	}
`;

export const ExpStyles = styled.div`
	* {
	}
	${tw`grid grid-cols-2 gap-16 mt-10`}
`;

export const SubExpStyles = styled.div`
	${tw`bg-white border border-[#2f2f2f] rounded-[3px] py-10 px-8 space-y-4 font-medium`}

	.exp_header {
		${tw`flex justify-between`}
	}

	.exp_header_title {
		* {
			${tw` text-black font-medium`}
		}

		${tw`flex space-x-8`}
	}
	.exp_info {
		${tw`flex space-x-4 text-gray-700`}
	}

	p {
		${tw`text-base py-6 tracking-wide`}
	}

	ul {
		${tw`pl-4 space-y-2`}
	}

	li {
		${tw`list-disc`}
	}

	svg {
		${tw`text-xl `}
	}
`;
