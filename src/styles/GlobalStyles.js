import React from 'react';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';
import { createGlobalStyle } from 'styled-components';

import NotoSansLight from '../styles/fonts/noto_sans_kr/NotoSansKR-Light.otf';
import NotoSansRegular from '../styles/fonts/noto_sans_kr/NotoSansKR-Regular.otf';
import NotoSansMedium from '../styles/fonts/noto_sans_kr/NotoSansKR-Medium.otf';

import RubikLight from '../styles/fonts/rubik/rubik-v21-latin-300.woff';
import RubikRegular from '../styles/fonts/rubik/rubik-v21-latin-regular.woff';
import RubikMedium from '../styles/fonts/rubik/rubik-v21-latin-500.woff';
import RubikBold from '../styles/fonts/rubik/rubik-v21-latin-700.woff';

const CustomStyles = createGlobalStyle`
@font-face {
  font-family: 'NotoSansKr+Rubik';
	src: url(${NotoSansLight}) format('opentype');
	font-weight: 300;
	font-style: normal;
}

@font-face {
  font-family: 'NotoSansKr+Rubik';
	src: url(${NotoSansRegular}) format('opentype');
	font-weight: 400;
	font-style: normal;
}

@font-face {
  font-family: 'NotoSansKr+Rubik';
	src: url(${NotoSansMedium}) format('truetype');
	font-weight: 500;
	font-style: normal;
}

/* rubik-300 - latin */
@font-face {
  font-family: 'NotoSansKr+Rubik';
  font-style: normal;
  font-weight: 300;
  src: url('../styles/fonts/rubik/rubik-v21-latin-300.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../styles/fonts/rubik/rubik-v21-latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../styles/fonts/rubik/rubik-v21-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
       url(${RubikLight}) format('woff'), /* Modern Browsers */
       url('../styles/fonts/rubik/rubik-v21-latin-300.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../styles/fonts/rubik/rubik-v21-latin-300.svg#Rubik') format('svg'); /* Legacy iOS */
			 unicode-range: U+0020-007E;
}

/* rubik-regular - latin */
@font-face {
  font-family: 'NotoSansKr+Rubik';
  font-style: normal;
  font-weight: 400;
	unicode-range: U+0020-007E;
  src: url('../styles/fonts/rubik/rubik-v21-latin-regular.eot'); /* IE9 Compat Modes */	
  src: local(''),
       url('../styles/fonts/rubik/rubik-v21-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../styles/fonts/rubik/rubik-v21-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */

			 url(${RubikRegular}) format('woff'),
       /* url('../styles/fonts/rubik/rubik-v21-latin-regular.woff') format('woff'), */
			  /* Modern Browsers */

       url('../styles/fonts/rubik/rubik-v21-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../styles/fonts/rubik/rubik-v21-latin-regular.svg#Rubik') format('svg'); /* Legacy iOS */
}

/* rubik-500 - latin */
@font-face {
  font-family: 'NotoSansKr+Rubik';
  font-style: normal;
  font-weight: 500;
	unicode-range: U+0020-007E;
  src: url('../styles/fonts/rubik/rubik-v21-latin-500.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../styles/fonts/rubik/rubik-v21-latin-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../styles/fonts/rubik/rubik-v21-latin-500.woff2') format('woff2'), /* Super Modern Browsers */
       url(${RubikMedium}) format('woff'), /* Modern Browsers */
       url('../styles/fonts/rubik/rubik-v21-latin-500.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../styles/fonts/rubik/rubik-v21-latin-500.svg#Rubik') format('svg'); /* Legacy iOS */
}

/* rubik-700 - latin */
@font-face {
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 700;
	unicode-range: U+0020-007E;
  src: url('../styles/fonts/rubik/rubik-v21-latin-700.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../styles/fonts/rubik/rubik-v21-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../styles/fonts/rubik/rubik-v21-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
       url(${RubikBold}) format('woff'), /* Modern Browsers */
       url('../styles/fonts/rubik/rubik-v21-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../styles/fonts/rubik/rubik-v21-latin-700.svg#Rubik') format('svg'); /* 
			 Legacy iOS */
}			


:root {
	font-family:'NotoSansKr+Rubik', sans-serif;
	--nav-height : 180px;
	--key-color : #BEF9EE;
}


body {
	${tw`bg-body text-primary text-sm md:text-base tracking-wider`}
	word-break: keep-all
}

h1{
	${tw`text-5xl font-bold text-[#2f2f2f]`}
}

h2{
	${tw`text-[28px] font-bold text-primary`}
}

h3,
h4{
	${tw`text-[22px] font-medium text-primary`}
}

p {
	${tw`font-normal tracking-wide`}
}
`;

const GlobalStyles = () => (
	<>
		<BaseStyles />
		<CustomStyles />
	</>
);

export default GlobalStyles;
