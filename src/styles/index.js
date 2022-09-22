import tw, { styled } from 'twin.macro';

export const MainStyles = styled.main`
	${tw`container m-auto lg:overflow-y-scroll lg:h-screen `}
	/* Hide scrollbar for Chrome, Safari and Opera */
		::-webkit-scrollbar {
		display: none;
	}
	/* Hide scrollbar for IE, Edge and Firefox */
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */

	@media (min-width: 1024px) {
		scroll-behavior: smooth;
		scroll-snap-type: y mandatory;

		section {
			scroll-snap-align: start;
		}
	}
`;

export const LoadingStyles = styled.div`
	${tw` fixed  inset-0  z-50 flex justify-center items-center bg-primary duration-700`}

	${({ loadingState }) => !loadingState && tw`opacity-0 invisible`}
`;

export const SpinnerStyles = styled.img`
	${tw`w-14 h-auto  md:w-16 xl:w-[4.25rem] animate-bounce`}
`;
