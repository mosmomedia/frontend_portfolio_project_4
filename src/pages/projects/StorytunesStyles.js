import tw, { styled } from 'twin.macro';

export const WrapperStyles = styled.div`
	${tw`bg-seconday py-24 lg:py-20`}
`;

export const ContainerStyles = styled.div`
	${tw`container mx-auto space-y-32 `}
`;

export const HeaderSectionStyles = styled.section`
	${tw`
flex flex-col lg:flex-row space-y-12 lg:space-y-0  lg:justify-between
`}

	#title_left {
		${tw`lg:pt-28 xl:pt-40 space-y-2  lg:pl-2 lg:w-1/4 
		`}

		h1 {
			${tw`text-key_col1 lg:font-medium lg:text-4xl xl:text-5xl 2xl:text-[3.25rem]`}
		}

		h2 {
			${tw`text-white text-sm md:text-lg xl:text-lg 2xl:text-xl`}
		}
	}

	#title_right {
		${tw`md:pl-20 lg:pl-0  lg:max-w-[unset] lg:w-3/4 `}
	}
`;

export const TopSectionStyles = styled.section`
	${tw`space-y-10 lg:space-y-12 xl:w-2/3 2xl:w-2/3 xl:m-auto xl:pt-20 xl:pb-0 `}

	h2 {
		${tw`text-[#FECFFF] text-2xl xs:text-[28px] lg:text-3xl xl:text-[40px] lg:pb-5`}
	}

	h3 {
		${tw`text-base xs:text-lg lg:text-xl 2xl:text-2xl`}
	}

	span {
		${tw`text-red-300 font-medium lg:font-normal`}
	}

	div {
		${tw`text-gray-100 tracking-wider text-sm leading-6 xs:text-base xs:leading-7 lg:text-[17px] lg:leading-8 2xl:text-[19px]`}
	}

	ol {
		${tw`pl-1 xs:pl-4 space-y-4 2xl:space-y-6 py-5 2xl:py-10`}
	}
`;

export const SectionStyles = styled.section`
	${tw`space-y-10 lg:py-10`}

	&#videoSection {
		${tw`hidden xs:block`}
	}
`;

export const SubSectionStyles = styled.div`
	${tw`space-y-6 py-3`}

	h3 {
		${tw`text-base lg:text-lg 2xl:text-xl text-indigo-100 pl-4 xs:pl-0`}
	}
`;

export const TitleStyles = styled.div`
	h2 {
		${tw`text-key_col1 text-2xl xs:text-[26px] lg:text-[28px]  xl:text-3xl`}
	}
`;

export const DescStyles = styled.div`
	${tw`space-y-14 w-[97%] m-auto xl:w-2/3 2xl:w-2/3 xl:pt-20`}

	div {
		${tw`space-y-6`}
	}

	h3 {
		${tw`text-[#FFCFCF] text-lg xs:text-xl  lg:text-2xl`}
	}

	p {
		${tw`text-white tracking-wider leading-6  lg:text-[17px] 2xl:text-[19px] xl:leading-8`}
	}
`;
export const ImgListStyles = styled.ul`
	${tw`grid grid-cols-2 gap-3 lg:grid-cols-4`}

	li {
		${tw`max-w-[350px]`}
	}
`;

export const VideoListStyles = styled.ul`
	${tw`xs:grid xs:grid-rows-2 xs:gap-10 md:grid-cols-2 md:grid-rows-1 sm:py-8`}

	${tw`lg:border-[1px] lg:rounded lg:border-key_col1 lg:border-opacity-20 lg:bg-seconday`}	

	li {
		${tw`max-w-[450px] m-auto`}
	}

	video {
		${tw`w-full h-auto rounded-[2px]`}
	}
`;
