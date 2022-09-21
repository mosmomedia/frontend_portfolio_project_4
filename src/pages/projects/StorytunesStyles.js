import tw, { styled } from 'twin.macro';

export const styles = styled.div``;

export const WrapperStyles = styled.div`
	${tw`bg-seconday space-y-28 py-24`}
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
flex flex-col lg:flex-row space-y-12 lg:space-y-0  lg:justify-between
`}

	#title_left {
		${tw`lg:pt-20 xl:pt-36 space-y-4  lg:pl-2 
		lg:w-1/4 
		`}

		h1 {
			${tw`text-key_col1 lg:font-medium lg:text-4xl xl:text-5xl 2xl:text-[3.25rem]`}
		}

		h2 {
			${tw`text-white text-sm md:text-lg xl:text-lg 2xl:text-xl`}
		}
	}

	#title_right {
		${tw` lg:max-w-[unset] lg:w-3/4 `}
		/* ${tw`lg:relative lg:overflow-hidden`} */

		img {
			/* ${tw`absolute`} */
			/* ${tw`max-w-[unset] max-h-[1000px]`} */
		}
	}
`;

export const SubSectionStyles = styled.div`
	${tw`space-y-6	`}
	h3 {
		${tw`text-white`}
	}
`;

export const TitleStyles = styled.div`
	h2 {
		${tw`text-key_col1 text-2xl`}
	}
`;
export const DescStyles = styled.div`
	${tw`space-y-14 pt-10`}

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
