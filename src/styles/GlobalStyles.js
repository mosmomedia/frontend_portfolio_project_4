import React from 'react';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';
import { createGlobalStyle } from 'styled-components';

const CustomStyles = createGlobalStyle`



:root {
	/* font-family: 'Noto Sans + Rubik', sans-serif; */
	/* --nav-height : 100px; */
	--nav-height : 150px;
	--key-color : #BEF9EE;
}


body {
	${tw`bg-body text-primary text-sm md:text-base tracking-wider`}
	word-break: keep-all;
}

h1{
	${tw`text-3xl sm:text-4xl font-bold text-[#2f2f2f] lg:text-5xl`}

}

h2{
	${tw`text-xl  sm:text-2xl font-bold text-primary lg:text-[28px]`}
}

h3,
h4{
	${tw`text-[20px] sm:text-[22px] font-medium text-primary`}
}

p {
	${tw`text-sm  sm:text-[15px] lg:text-base tracking-wide font-normal`}
}
`;

const GlobalStyles = () => (
	<>
		<BaseStyles />
		<CustomStyles />
	</>
);

export default GlobalStyles;
