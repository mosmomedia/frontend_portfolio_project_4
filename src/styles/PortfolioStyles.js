import tw, { styled } from 'twin.macro';

export const Styles = styled.section``;

export const WrapperStyles = styled.section`
	${tw`space-y-32 py-40`}
`;

export const SectionStyles = styled.div`
	* {
		${tw`tracking-wider`}
	}

	${tw`px-14 py-12 bg-seconday  rounded-2xl space-y-20`}
`;

export const HeaderStyles = styled.div`
	${tw`space-y-7`}

	#pf_title {
		h2 {
			${tw`text-[#fbfbfb] text-[38px] tracking-wider`}
		}
		${tw`flex justify-between`}
	}
	#pf_role {
		${tw`text-key_col1 text-lg`}
	}

	#pf_tech {
		${tw`text-[#ffffff] text-[17px] font-light`}

		${tw`flex space-x-8`}
	}
`;
export const ContentStyles = styled.div`
	${tw`xl:flex xl:flex-row-reverse`}
`;

export const LeftStyles = styled.div`
	${tw`bg-[#171616] rounded-md p-4 flex-auto w-32`}

	div {
		${tw`h-full bg-white`}
	}
`;

export const RightStyles = styled.div`
	${tw`space-y-8 text-[#e8e8e8]  flex-auto w-52`}

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
		${tw`space-x-4 pt-8 flex`}
	}

	.pf_link {
		${tw`flex items-center text-sm space-x-4`}
		${tw`border border-key_col1  rounded-md border-opacity-40 bg-[#333333] px-4 py-2 pb-1.5`}

		svg path {
			fill: var(--key-color);
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
