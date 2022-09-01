import React from 'react';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';
import { createGlobalStyle } from 'styled-components';

const CustomStyles = createGlobalStyle`
:root {
	font-family: 'Avenir', 'Noto Sans', sans-serif;
	--nav-height : 180px
}


body {
	${tw`bg-body text-main_text  text-sm md:text-base `}
	word-break: keep-all
}

h1{
	${tw`text-5xl font-black text-[#2f2f2f]`}
}

h2{
	${tw`text-[28px] font-black text-primary`}
}

h3,
h4{
	${tw`text-[22px] font-medium text-primary`}
}

p{
	/* ${tw`text-base`} */
}

`;

const GlobalStyles = () => (
	<>
		<BaseStyles />
		<CustomStyles />
	</>
);

export default GlobalStyles;
