import tw, { styled } from 'twin.macro';

export const styles = styled.div``;

export const WrapperStyles = styled.div`
	${tw`bg-[#1A1919] h-screen py-10`}
`;

export const SectionStyles = styled.section`
	${tw`container m-auto`}
`;

export const TitleStyles = styled.div`
	${tw`
flex justify-between space-x-8
`}

	#title_left {
		${tw`pt-20 space-y-4`}

		h1 {
			${tw`text-key_col1 text-2xl`}
		}

		h2 {
			${tw`text-white text-[12px]`}
		}
	}
`;
