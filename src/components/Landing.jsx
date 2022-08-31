import {
	WrapperStyles,
	MainStyles,
	UpperSectionStyles,
	BottomSectionStyles,
	LeftStyles,
	RightStyles,
	TitleStyles,
	TextStyles,
} from '../styles/LandingStyles';

function Landing() {
	return (
		<WrapperStyles>
			<MainStyles>
				<UpperSectionStyles>
					{/* left */}
					<LeftStyles>
						{/* main title */}
						<TitleStyles>
							<h2>I’m an aspiring FE developer</h2>
							<h2>with my background in design.</h2>
						</TitleStyles>
						{/* main paragraph */}
						<TextStyles>
							<p>환영합니다. 예비 프론트엔드 신입 개발자, 동주입니다.</p>
							<br />
							<p>
								과거 서울에서 공간 디자인을 전공했습니다. 현재 클라언트 사이드
								개발에 전력 중입니다.{' '}
							</p>
							<p>
								디자인 언어의 창의성과 개발 언어의 논리성 사이의 균형을 통한
								잠재성을 탐구하고 있습니다.{' '}
							</p>
							<br />
							<p>
								리서치 / 융합 / 학습 / 도전 / 책무를 바탕으로 작업을 합니다.
							</p>
						</TextStyles>
					</LeftStyles>
					{/* right */}
					<RightStyles>
						{/* img */}
						<div className="landing_img"></div>
					</RightStyles>
				</UpperSectionStyles>
				<BottomSectionStyles>
					<span className="line">
						<span className="arrow">
							<span></span>
							<span></span>
						</span>
					</span>
				</BottomSectionStyles>
			</MainStyles>
		</WrapperStyles>
	);
}

export default Landing;
