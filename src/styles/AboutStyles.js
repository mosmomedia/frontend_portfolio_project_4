import tw, { styled } from 'twin.macro';

export const WrapperStyles = styled.section`
	${tw` py-[var(--nav-height)] space-y-32`}
`;
export const HeaderStyles = styled.div`
	${tw`flex justify-between items-end tracking-wider`}

	ul {
		${tw`flex space-x-6`}

		li {
			${tw`bg-seconday text-white rounded-md px-5 py-1`}
		}
	}
`;

export const SectionStyles = styled.div`
	${tw`space-y-36`}
`;

export const SubStyles = styled.div`
	h2 {
		${tw`pb-10`}
	}
	p {
		font-family: 'Noto Sans KR';

		${tw`text-[17px] tracking-wider leading-8 text-black font-medium`}
	}

	.bigger_title {
		${tw`text-3xl`}
	}

	.skill_set {
		${tw`font-black text-2xl text-gray-700 tracking-wide`}
	}
`;

export const ExpStyles = styled.div`
	* {
		font-family: 'Noto Sans KR';
	}
	${tw`grid grid-cols-2 gap-20 mt-10`}
`;

export const SubExpStyles = styled.div`
	${tw`bg-white border border-[#2f2f2f] rounded-[3px] py-10 px-8 space-y-2 font-medium`}

	.exp_header {
		${tw`flex justify-between`}
	}

	.exp_header_title {
		* {
			font-family: 'Avenir';
			${tw` text-black font-medium`}
		}

		${tw`flex space-x-8`}
	}
	.exp_info {
		${tw`flex space-x-4 text-gray-700 text-[15px]`}
	}

	p {
		${tw`text-base py-6 tracking-wide`}
	}

	ul {
		${tw`pl-4 space-y-1`}
	}

	li {
		${tw`list-disc`}
	}
`;
