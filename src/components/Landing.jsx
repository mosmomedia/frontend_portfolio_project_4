import { useState } from 'react';

import 'twin.macro';
import 'styled-components/macro';

import {
	WrapperStyles,
	TopSectionStyles,
	MiddleSectionStyles,
	BottomArrowStyles,
	LeftStyles,
	RightStyles,
	TitleStyles,
	TextStyles,
	ImageWrapper,
} from '../styles/LandingStyles';

import Spinner from './shared/Spinner';

import djFire from '../assets/gifs/fire-red.gif';

import djText from '../assets/imgs/dj-text.png';
import djPic from '../assets/imgs/dj-pic.png';
import djBg from '../assets/imgs/dj-bg.png';

function Landing() {
	const [loading, setLoading] = useState(true);

	// dectect when all images are loaded
	// closure
	function after(count, callback) {
		let noOfCalls = 0;
		return function (...rest) {
			noOfCalls = noOfCalls + 1;
			if (count === noOfCalls) {
				callback(...rest);
			}
		};
	}

	const logWhen = after(4, () => {
		setLoading(false);
	});

	return (
		<>
			{loading && <Spinner />}

			<WrapperStyles id="landing">
				<TopSectionStyles />

				<MiddleSectionStyles>
					{/* left */}
					<LeftStyles>
						{/* main title */}
						<TitleStyles>
							<h1>I’m an aspiring FE developer</h1>
							<h1>with my background in design.</h1>
						</TitleStyles>

						{/* main paragraph */}
						<TextStyles>
							<p>환영합니다. 예비 신입 프론트엔드 개발자, 동주입니다.</p>
							<br />
							<p>
								과거 서울에서 공간 디자인을 전공했습니다. 현재 클라이언트 사이드
								개발에 전력 중입니다.{' '}
							</p>
							<p>
								디자인 언어의 창의성과 개발 언어의 논리성 사이의 균형을 통한
								잠재성을 탐구하고 있습니다.{' '}
							</p>
							<br />
							<p>
								리서치 &#47; 융합 &#47; 학습 &#47; 도전 &#47; 책무를 바탕으로
								작업을 합니다.
							</p>
						</TextStyles>
					</LeftStyles>
					{/* right */}
					<RightStyles>
						{/* img */}
						<ImageWrapper>
							<img className="img_fire" src={djFire} alt="" onLoad={logWhen} />
							<img className="img_text" src={djText} alt="" onLoad={logWhen} />
							<img className="img_pic" src={djPic} alt="" onLoad={logWhen} />
							<img className="img_bg" src={djBg} alt="" onLoad={logWhen} />
						</ImageWrapper>
					</RightStyles>
				</MiddleSectionStyles>
				<BottomArrowStyles />
			</WrapperStyles>
		</>
	);
}

export default Landing;
