import tw, { styled } from 'twin.macro';

export const WrapperStyles = styled.section`
	${tw`pt-20 pb-20 lg:pt-40  lg:pb-72 space-y-16`}
`;

export const SectionStyles = styled.div`
	* {
		${tw`tracking-wider`}
	}

	${tw`px-6 sm:px-10 py-12 bg-seconday  rounded-2xl space-y-20 md:px-14`}
`;

export const HeaderStyles = styled.div`
	${tw`space-y-7`}

	#pf_title {
		${tw`space-y-8 xl:space-y-0  xl:flex xl:justify-between`}

		h2 {
			${tw`text-[#fbfbfb] text-[38px] tracking-wider`}
		}
	}

	#pf_role {
		${tw`text-key_col1 text-lg`}
	}

	#pf_tech {
		${tw`text-[#ffffff] text-[17px] font-light`}

		${tw`flex flex-wrap  xl:space-x-8 `}

		li {
			${tw`pr-4 py-1`}
		}
	}
`;
export const ContentStyles = styled.div`
	${tw`xl:flex xl:flex-row-reverse`}
`;

export const LeftStyles = styled.div`
	${tw`bg-[#171616] rounded-md p-4 xl:flex-auto xl:w-32`}

	div {
		${tw`h-full bg-white`}
	}
`;

export const RightStyles = styled.div`
	${tw`space-y-8 text-[#e8e8e8]  xl:flex-auto xl:w-52`}

	#link_st {
		${tw`text-key_col1 font-medium`}
	}

	#pf_desc {
		p {
			${tw`font-light leading-7`}
		}
	}

	#pf_feat {
		${tw`space-y-4`}

		h4 {
			${tw`text-white`}
		}

		ul {
			${tw`pl-4 space-y-2`}
		}

		li {
			${tw`list-disc text-[15px]`}
		}
	}

	#pf_links {
		${tw`flex flex-wrap sm:space-x-4 pt-8 `}
	}

	.pf_link {
		${tw`flex items-center text-sm space-x-4 mr-4 mt-6 sm:mr-0 sm:mt-0`}
		${tw`border border-key_col1  rounded-md border-opacity-40 bg-[#333333] px-4 py-2 pb-1.5 hover:bg-black duration-300`}

	svg {
			${tw`text-key_col1`}
		}
	}

	#pf_project_link svg {
		${tw`text-xl mb-0.5`}
	}

	#pf_demo_link svg {
		${tw`text-[16px] mb-0.5`}
	}

	#pf_github_link svg {
		${tw`text-xl mb-0.5`}
	}
`;
