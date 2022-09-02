import tw, { styled } from 'twin.macro';

export const Styles = styled.section``;

export const WrapperStyles = styled.section`
	/* ${tw`py-[var(--nav-height)] space-y-32`} */
	${tw`space-y-24 pb-40`}
`;

export const SectionStyles = styled.div`
	${tw`p-10 bg-seconday  rounded-2xl space-y-10 tracking-wider`}
`;

export const HeaderStyles = styled.div`
	${tw`space-y-4`}

	#pf_title {
		h2 {
			${tw`text-[#fbfbfb]`}
		}
		${tw`flex justify-between`}
	}
	#pf_role {
		${tw`text-key_col1`}
	}

	#pf_tech {
		${tw`text-white`}
		${tw`flex space-x-4`}
	}
`;
export const ContentStyles = styled.div`
	${tw`grid grid-cols-2 gap-4`}
`;
export const LeftStyles = styled.div`
	${tw`space-y-8 text-[#e8e8e8]`}

	#link_st {
		${tw`text-key_col1`}
	}

	#pf_feat {
		${tw`space-y-4`}
		h4 {
			${tw`text-white`}
		}

		ul {
			${tw`pl-4 space-y-1`}
		}

		li {
			${tw`list-disc `}
		}
	}

	#pf_links {
		${tw`space-x-4 pt-8`}
	}
	.pf_link {
		${tw`text-xs border border-key_col1  rounded-md border-opacity-40 bg-[#333333] px-4 py-1`}
	}
`;

export const RightStyles = styled.div`
	${tw`bg-[#171616] rounded-md p-4`}

	div {
		${tw`h-full bg-white`}
	}
`;

// export const Styles = styled.div``
// export const Styles = styled.div``
