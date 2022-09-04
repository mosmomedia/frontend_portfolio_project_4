import tw, { styled } from 'twin.macro';

export const WrapperStyles = styled.section`
	${tw`lg:h-screen pt-[var(--nav-height)]`}
	${tw`flex flex-col justify-between  pb-10`}

	#bottomS {
		${tw`h-full w-full`}
		.line {
			${tw`relative h-36 w-[1px] bg-[#2f2f2f]`}

			::before {
				content: '';
				${tw`absolute bottom-[1px] right-0 w-1 h-[1px] bg-[#2f2f2f] rotate-45`}
			}

			::after {
				content: '';
				${tw`absolute bottom-[1px] left-0 w-1 h-[1px] bg-[#2f2f2f] -rotate-45`}
			}
		}
	}
`;

export const UpperSectionStyles = styled.div`
	${tw`lg:flex lg:justify-between pt-40`}
`;

export const LeftStyles = styled.div`
	/* flex-basis: content; */
	${tw`flex flex-col justify-between space-y-28 pb-6`}
`;

export const TitleStyles = styled.div`
	${tw`font-bold text-5xl tracking-wide space-y-4`}

	h1:last-child {
		${tw`text-[#606065]`}
	}
`;

export const TextStyles = styled.div`
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

export const BottomArrowStyles = styled.div`
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
