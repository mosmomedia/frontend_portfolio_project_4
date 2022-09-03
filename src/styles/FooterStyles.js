import tw, { styled } from 'twin.macro';

export const WrapperStyles = styled.div`
	${tw`space-y-12 py-28`}

	#footer_line {
		${tw`h-[3px]  bg-main_text`}
	}

	#footer_links_copyright {
		${tw`flex justify-between items-start`}
	}

	#footer_dj_copyright {
		${tw`text-2xl   text-main_text`}
	}

	#footer_dj_links {
		${tw`flex space-x-5`}

		a {
			${tw`flex items-start bg-seconday text-white text-[14px] tracking-widest rounded-md px-4 pt-2 pb-1 space-x-3 font-light`}
		}

		#footer_dj_resume svg {
			${tw`text-lg`}
			${tw`mt-[1px]`}
		}

		#footer_dj_resume path {
			stroke: var(--key-color);
		}

		#footer_dj_github svg {
			${tw`text-[21px]`}
		}

		#footer_dj_github path {
			fill: var(--key-color);
		}
	}
`;
