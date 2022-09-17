import tw, { styled } from 'twin.macro';

export const HeaderStyles = styled.header`
	${tw`z-50 fixed inset-x-0 top-0 h-[80px] `}
	${tw`bg-seconday bg-opacity-90 backdrop-blur-[6px]`}
`;

export const WrapperStyles = styled.div`
	${tw`relative w-full h-full flex`}
`;

export const NavStyles = styled.nav`
	${tw`container m-auto`}
`;

export const LogoStyles = styled.img`
	${tw`h-6 xs:h-7`}
`;
