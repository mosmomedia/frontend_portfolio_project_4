import tw, { styled } from 'twin.macro';

export const WrapperStyles = styled.section`
	${tw`pt-20 pb-20 md:pt-40  lg:pb-96 xl:pt-32 space-y-16 `}

	h1 {
		${tw`text-3xl md:text-4xl xl:text-[40px] 2xl:text-5xl`}
	}
`;

export const SectionWrapperStyles = styled.div`
	${tw`
	space-y-40
	`}
`;

export const SectionStyles = styled.div`
	* {
		${tw`tracking-wider`}
	}

	${tw`px-5  xs:px-6 sm:px-10 py-7  xs:py-12 bg-seconday  rounded-2xl space-y-20 md:px-14`}
`;

export const HeaderStyles = styled.div`
	${tw`space-y-7`}

	#pf_title {
		${tw`space-y-2 xl:space-y-0  xl:flex xl:justify-between xl:items-center`}

		h2 {
			${tw`text-[#fbfbfb] text-2xl md:text-3xl 2xl:text-4xl tracking-wider`}
		}
	}

	#pf_role {
		${tw`text-key_col1 text-base md:text-[17px] 2xl:text-lg `}
	}

	#pf_tech {
		${tw`text-[#ffffff] text-sm  xs:text-base 2xl:text-lg font-light`}

		${tw`flex flex-wrap xl:space-x-5  2xl:space-x-8 `}

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
			${tw`font-light leading-7 md:text-sm xl:text-[15px]  2xl:text-base 2xl:leading-7 2xl:font-normal`}
		}
	}

	#pf_feat {
		${tw`space-y-4`}

		h3 {
			${tw`text-white`}
		}

		ul {
			${tw`pl-4 space-y-2`}
		}

		li {
			${tw`list-disc text-[15px] md:text-sm 2xl:text-base font-light`}
		}
	}

	#pf_links {
		${tw`flex flex-wrap sm:space-x-4 pt-8 `}
	}

	.pf_link {
		${tw`flex items-center text-sm space-x-4 mr-4 mt-6 sm:mr-0 sm:mt-0`}

		${tw`min-w-[55%] xs:min-w-[unset]`}

		${tw`border border-key_col1  rounded-md border-opacity-40 bg-[#333333] px-4 py-2 pb-1.5 hover:bg-black duration-300`}

		svg {
			${tw`text-key_col1`}
		}
	}

	.pf_project_link svg {
		${tw`text-xl mb-0.5 animate-pulse pl-0.5 xs:pl-0`}
	}

	.pf_demo_link {
		${tw`space-x-5 xs:space-x-4`}
	}

	.pf_demo_link svg {
		${tw`text-lg xs:text-[16px] mb-0.5 pl-0.5 xs:pl-0`}
	}

	.pf_github_link svg {
		${tw`text-xl mb-0.5`}
	}
`;
