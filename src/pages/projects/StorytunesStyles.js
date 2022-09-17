import tw, { styled } from 'twin.macro';

export const styles = styled.div``;

export const WrapperStyles = styled.div`
	${tw`bg-seconday py-10 space-y-20`}
`;

export const TopSectionStyles = styled.section`
	${tw`container m-auto`}

	h2 {
		${tw`text-[#FECFFF] text-2xl`}
	}

	p {
		${tw`text-white py-10`}
	}
`;

export const SectionStyles = styled.section`
	${tw`container m-auto space-y-8`}
`;

export const HeadTitleStyles = styled.div`
	${tw` px-2
flex flex-col space-y-12 lg:space-y-0  lg:justify-between lg:space-x-8
`}

	#title_left {
		${tw`pt-20 space-y-4 lg:w-2/5`}

		h1 {
			${tw`text-key_col1`}
		}

		h2 {
			${tw`text-white text-sm`}
		}
	}

	#title_right {
		${tw`lg:w-3/5 lg:max-w-[unset]`}
		${tw`lg:relative lg:overflow-hidden`}

		img {
			/* ${tw`absolute`} */
			/* ${tw`max-w-[unset] max-h-[1000px]`} */
		}
	}
`;

export const TitleStyles = styled.div`
	h2 {
		${tw`text-key_col1 text-2xl`}
	}
`;
export const DescStyles = styled.div`
	${tw`space-y-8`}

	div {
		${tw`space-y-6`}
	}

	h3 {
		${tw`text-[#FFCFCF]`}
	}

	p {
		${tw`text-white`}
	}
`;
export const ImgListStyles = styled.ul`
	${tw`grid grid-cols-2 gap-3 lg:grid-cols-4`}

	li {
		${tw`max-w-[350px]`}/* ${tw`bg-black w-80 h-96`} */
	}
`;
