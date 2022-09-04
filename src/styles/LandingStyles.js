import tw, { styled } from 'twin.macro';

export const WrapperStyles = styled.section`
	${tw`lg:h-screen pt-[var(--nav-height)]`}
	${tw`flex flex-col justify-between  pb-10`}
`;

export const UpperSectionStyles = styled.div`
	${tw`xs:pt-32 sm:pt-44 lg:pt-40 lg:flex lg:justify-between`}

	${tw`relative`}
	
	#displayName {
		${tw`absolute  top-0 left-0 text-lg  xl:text-xl font-bold text-primary tracking-wide`}
	}
`;

export const LeftStyles = styled.div`
	${tw`flex flex-col justify-between space-y-28 pb-6`}
	${tw`lg:w-64 lg:flex-auto`}
`;

export const TitleStyles = styled.div`
	${tw`font-bold tracking-wide space-y-6`}

	h1 {
		${tw`pl-2 md:pl-0 xs:text-3xl  sm:text-4xl   md:text-[44px] lg:text-4xl  xl:text-[42px]   2xl:text-5xl`}
	}

	h1:last-child {
		${tw`text-[#606065]`}
	}
`;

export const TextStyles = styled.div`
	${tw`relative border border-[#2f2f2f] rounded-[3px] bg-white text-black px-8 py-8 font-medium tracking-wider leading-7 text-sm  md:text-[15px] lg:text-base  w-[99%]`}

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
	${tw`hidden lg:block lg:flex-auto lg:pl-32`}
`;

export const ImageWrapper = styled.div`
	${tw`relative h-full`}
	img {
		${tw` bottom-0 -right-2`}
	}

	.img_fire {
		${tw`absolute z-30 w-14 -top-10 right-1/2 translate-x-1/2`}
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
