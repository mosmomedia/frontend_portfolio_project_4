import React from 'react';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';
import { createGlobalStyle } from 'styled-components';

import NotoSansLight from '../styles/fonts/noto_sans_kr/NotoSansKR-Light.otf';
import NotoSansRegular from '../styles/fonts/noto_sans_kr/NotoSansKR-Regular.otf';
import NotoSansMedium from '../styles/fonts/noto_sans_kr/NotoSansKR-Medium.otf';
import BiotifLight from '../styles/fonts/biotif/Biotif-Light.ttf';
import BiotifRegular from '../styles/fonts/biotif/Biotif-Regular.ttf';
import BiotifMedium from '../styles/fonts/biotif/Biotif-Medium.ttf';
import BiotifBlack from '../styles/fonts/biotif/Biotif-Black.ttf';
const CustomStyles = createGlobalStyle`

@font-face {
  font-family: 'NotoSansKr';
	src: url(${NotoSansLight}) format('opentype');
	font-weight: 300;
	font-style: normal;
}

@font-face {
  font-family: 'NotoSansKr';
	src: url(${NotoSansRegular}) format('opentype');
	font-weight: 400;
	font-style: normal;
}

@font-face {
  font-family: 'NotoSansKr';
	src: url(${NotoSansMedium}) format('truetype');
	font-style: normal;
	font-weight: 500;
	unicode-range: U+0020-007E;
}


@font-face {
  font-family: 'NotoSansKr';
	src: url(${BiotifLight}) format('truetype');
	font-style: normal;
	font-weight: 300;
	unicode-range: U+0020-007E;
}


@font-face {
  font-family: 'NotoSansKr';
	src: url(${BiotifRegular}) format('truetype');
	font-style: normal;
	font-weight: 400;
	unicode-range: U+0020-007E;
} 

@font-face {
  font-family: 'NotoSansKr';
	src: url(${BiotifMedium}) format('truetype');
	font-style: normal;
	font-weight: 500;
	unicode-range: U+0020-007E;
} 

@font-face {
  font-family: 'NotoSansKr';
	src: url(${BiotifBlack}) format('truetype');
	font-style: normal;
	font-weight: 900;
	unicode-range: U+0020-007E;
} 

:root {
	font-family: 'NotoSansKr','biotif','Proxima Nova', 'Nunito Sans','Circular Std',  'Noto Sans', sans-serif;
	--nav-height : 180px;
	--key-color : #BEF9EE;
}


body {
	${tw`bg-body text-primary text-sm md:text-base tracking-wide`}
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

p {
	${tw`font-normal`}
}


`;

const GlobalStyles = () => (
	<>
		<BaseStyles />
		<CustomStyles />
	</>
);

export default GlobalStyles;
