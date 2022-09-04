import tw, { styled } from 'twin.macro';

export const WrapperStyles = styled.footer`
	#footer_container {
		${tw`space-y-12 py-16 sm:py-24 `}
	}

	#footer_line {
		${tw`h-0.5  sm:h-[3px]  bg-main_text`}
	}

	#footer_links_copyright {
		${tw`flex flex-col space-y-6 sm:space-y-0 sm:flex-row  sm:justify-between sm:items-start`}
	}

	#footer_dj_copyright {
		${tw`text-2xl   text-main_text`}
	}
`;
