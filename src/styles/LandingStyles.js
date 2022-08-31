import tw, { styled } from 'twin.macro';

export const Styles = styled.div``;

export const WrapperStyles = styled.div`
	${tw`lg:h-screen pt-[var(--nav-height)]`}
`;

export const MainStyles = styled.div`
	${tw`container m-auto h-full flex flex-col justify-between  pt-20 pb-10 `}
`;

export const UpperSectionStyles = styled.div`
	${tw`lg:flex lg:justify-between`}
`;

export const LeftStyles = styled.div`
	/* flex-basis: content; */
	${tw`flex flex-col justify-between space-y-28 pb-6`}
`;

export const TitleStyles = styled.div`
	${tw`font-black text-5xl tracking-wide space-y-4`}

	h2:last-child {
		${tw`text-[#606065]`}
	}
`;

export const TextStyles = styled.div`
	font-family: 'Noto Sans KR';

	${tw`relative border border-[#2f2f2f] rounded-[3px] bg-white text-black px-8 py-8 font-medium tracking-wider leading-7 md:text-[15px]  w-[99%]`}

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
		${tw` bottom-0 -right-8`}
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

export const BottomSectionStyles = styled.div`
	${tw`relative h-36 w-[1px] bg-[#2f2f2f]`}

	::before {
		content: '';
		${tw`absolute bottom-[1px] right-0 w-1 h-[1px] bg-[#2f2f2f] rotate-45`}
	}

	::after {
		content: '';
		${tw`absolute bottom-[1px] left-0 w-1 h-[1px] bg-[#2f2f2f] -rotate-45`}
	}
`;