import React from 'react';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';
import { createGlobalStyle } from 'styled-components';

// medium
import NotoSansRegular from '../styles/fonts/noto_sans_kr/NotoSansKR-Regular.otf';
import NotoSansMedium from '../styles/fonts/noto_sans_kr/NotoSansKR-Medium.otf';
import BiotifRegular from '../styles/fonts/biotif/Biotif-Regular.ttf';
import BiotifMedium from '../styles/fonts/biotif/Biotif-Medium.ttf';
import BiotifBlack from '../styles/fonts/biotif/Biotif-Black.ttf';
const CustomStyles = createGlobalStyle`

@font-face {
  font-family: 'NotoSansKr';
	src: url(${NotoSansRegular}) format('opentype');
	src: url(${NotoSansMedium}) format('opentype');
	font-style: normal;
}

@font-face {
  font-family: 'NotoSansKr';
	src: url(${BiotifRegular}) format('truetype');
	src: url(${BiotifBlack}) format('truetype');
	src: url(${BiotifMedium}) format('truetype');
	font-style: normal;
	unicode-range: U+0020-007E;
}


:root {
	font-family: 'NotoSansKr','biotif','Proxima Nova', 'Nunito Sans','Circular Std',  'Noto Sans', sans-serif;
	--nav-height : 180px
}


body {
	${tw`bg-body text-main_text  text-sm md:text-base `}
	word-break: keep-all
}

h1{
	${tw`text-5xl font-black  text-[#2f2f2f]`}
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
