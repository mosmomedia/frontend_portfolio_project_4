import tw, { styled } from 'twin.macro';

export const WrapperStyles = styled.section`
	${tw`pt-0 xs:pt-[100px]  lg:pt-0 lg:h-screen`}
	${tw`flex flex-col justify-between xs:pb-10`}
`;

export const TopSectionStyles = styled.div`
	${tw`h-[100px] lg:h-[var(--nav-height)]`}
	${tw`relative`}
`;

export const MiddleSectionStyles = styled.div`
	${tw`pt-8 lg:flex lg:justify-between `}
`;

export const LeftStyles = styled.div`
	${tw`flex flex-col justify-between space-y-28 pb-6`}
	${tw`lg:w-40 xl:w-64  lg:flex-auto`}
`;

export const TitleStyles = styled.div`
	${tw` tracking-wide space-y-6`}

	h1 {
		${tw`pl-1 md:pl-0  xs:text-4xl  sm:text-4xl   md:text-[44px] lg:text-[34px]  xl:text-[42px]   2xl:text-5xl`}

		${tw`font-medium`}
	}

	h1:last-child {
		${tw`text-[#606065]`}
	}
`;

export const TextStyles = styled.div`
	${tw`relative border border-[#2f2f2f] rounded-[3px] bg-white text-black px-8 py-8 font-medium tracking-wider leading-7 lg:w-[88%] 2xl:w-[93%]`}

	p {
		${tw`py-1  xs:py-0 text-sm md:text-[15px] lg:text-sm  xl:text-base`}
	}

	::before {
		content: '';
		${tw`absolute left-3 top-3 w-[7px] h-[7px] rounded-full bg-black`}
	}

	::after {
		content: '';
		${tw`absolute w-full h-full border border-[#2f2f2f] rounded-[3px] bg-white top-2.5 left-2`};
		z-index: -1;
	}
`;

export const RightStyles = styled.div`
	${tw`hidden lg:block lg:flex-auto lg:pt-20  2xl:pt-8  2xl:pl-36`}
`;

export const ImageWrapper = styled.div`
	${tw`relative h-full`}

	img {
		${tw`-right-2`}
	}

	.img_fire {
		${tw`absolute z-30 lg:w-20  2xl:w-16 -top-24 2xl:-top-20 right-1/2 translate-x-1/2`}
	}

	.img_text {
		${tw`absolute z-20`}
	}

	.img_pic {
		${tw`absolute z-10`}
	}

	.img_bg {
		${tw`absolute`}
	}
`;

export const BottomArrowStyles = styled.div`
	${tw`hidden lg:block  lg:relative h-36 w-[1px] bg-[#2f2f2f]`}
	::before {
		content: '';
		${tw`absolute bottom-[1px] right-0 w-1 h-[1px] bg-[#2f2f2f] rotate-45`}
	}

	::after {
		content: '';
		${tw`absolute bottom-[1px] left-0 w-1 h-[1px] bg-[#2f2f2f] -rotate-45`}
	}
`;
