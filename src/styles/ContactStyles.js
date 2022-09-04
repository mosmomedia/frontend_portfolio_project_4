import tw, { styled } from 'twin.macro';

export const WrapperStyles = styled.section`
	${tw`pt-52 space-y-28 h-screen`}
`;

export const HeaderStyles = styled.div`
	${tw`space-y-6`}

	h4 {
		${tw`text-[#606065] text-xl`}
	}
`;

export const MainStyles = styled.div`
	${tw`space-y-6`}

	h4 {
		${tw`text-3xl text-[#333333] pl-0.5`}
	}
	#dj_email {
		${tw`inline-flex items-center space-x-8 bg-white font-bold text-4xl px-6 py-4 shadow-md`}

		${tw`border border-main_text rounded-2xl`}

		svg {
			${tw`animate-pulse`}
		}
	}
`;
