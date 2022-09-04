import tw, { styled } from 'twin.macro';

export const MainStyles = styled.main`
	${tw`container m-auto overflow-y-scroll h-screen `}
	/* Hide scrollbar for Chrome, Safari and Opera */
		::-webkit-scrollbar {
		display: none;
	}
	/* Hide scrollbar for IE, Edge and Firefox */
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */

	/* scroll-padding-top: 10px; */
	scroll-behavior: smooth;
	scroll-snap-type: y mandatory;

	section {
		scroll-snap-align: start;
	}
`;
