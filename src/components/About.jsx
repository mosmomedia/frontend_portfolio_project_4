import {
	SubExpStyles,
	ExpStyles,
	WrapperStyles,
	HeaderStyles,
	SubStyles,
	SectionStyles,
	LinksStyles,
} from '../styles/AboutStyles';

import { GrDocumentUser, GrGithub } from 'react-icons/gr';
import { GoLinkExternal } from 'react-icons/go';

function About() {
	return (
		<WrapperStyles id="about">
			{/* header */}
			<HeaderStyles>
				<h1>About Me.</h1>
				{/* links */}
				<LinksStyles id="dj_links">
					<a
						id="dj_resume"
						href="http://"
						target="_blank"
						rel="noopener noreferrer"
					>
						<GrDocumentUser />
						<span>Résumé</span>
					</a>

					<a
						id="dj_github"
						href="https://github.com/mosmomedia"
						target="_blank"
						rel="noopener noreferrer"
					>
						<GrGithub />
						<span>Github</span>
					</a>
				</LinksStyles>
			</HeaderStyles>

			{/* section */}
			<SectionStyles>
				{/* sub */}
				<SubStyles className="text_kr">
					<h2>디자인 전공의 예비 프론트엔드 개발자</h2>
					<p>
						디자인도 개발과 마찬가지로 문제 해결형 비즈니스라고 생각합니다.
						대학에서 공간 디자인을 전공했습니다. 그때 비주얼 스크립팅을 이용한
						3D 모델링 툴을 처음 접했습니다. 그리고 곧 데이터에 기반한 공간 설계
						및 시각화에 매료 되었습니다. 프로젝트들을 진행하면서 자연스럽게
						프로그래밍에 대한 관심이 생겼고 학습의 필요성을 느꼈습니다. 졸업 후
						컴퓨테이셔널 디자인 유학 준비 중에 개인 사정으로 진로를 바꾸게
						되었고 2019년 말에 웹 개발자가 되기 위한 첫 여정을 시작했습니다.
						여러 온라인 강의들을 수강하며 개발을 해보면서 UX / UI 디자인 컨셉과
						시각화에 직접 관련이 있는 프론트엔드에 흥미를 느꼈습니다. 이제는
						프론트엔드 개발자가 되어 나, 회사 그리고 사용자 모두에게 가치 있는
						서비스를 제공하고자 합니다.
					</p>
				</SubStyles>
				{/* sub */}
				<SubStyles className="text_kr">
					<h2>인간과 컴퓨터의 라이프사이클</h2>
					<p>
						우리의 삶은 문제투성이입니다. 우리는 저마다 다른 해결 방식을 통해
						자신의 삶을 디자인하고 개발합니다. 나는 일상 속에 만나는 문제들을
						집요하게 들여다 보고 논리적 추론과 창의적 사고를 바탕으로 최선의
						결과를 도출하려 합니다. 이런 일상의 태도는 컴퓨팅(computing)에도
						마찬가지로 적용된다고 봅니다. 개발은 주어진 미션, 즉 커다란 하나의
						문제를 해결하기 위해 필연적으로 여러 작은 문제들을 새롭게 만들어
						내고 그것을 해결해 나가면서 최적의 결과를 도출하는 협업의 행위라고
						생각합니다. 이러한 개발 환경에서 얻게 되는 문제 해결 능력과 경험이
						우리가 일상에서 만나는 여러 문제들을 효율적으로 해결하는데 큰 도움이
						된다고 생각합니다. 이것이 내가 개발을 하는 이유들 중 하나입니다.
					</p>
				</SubStyles>
				{/* skill */}
				<SubStyles>
					<h2 className="bigger_title">Web Dev Skills</h2>
					<div className="skill_set">
						HTML5 &#47; CSS3 &#47; JavaScript&#40;ES6&#41; &#47;
						React&#40;.js&#41;
					</div>
				</SubStyles>

				<SubStyles>
					{/* exp */}
					<h2 className="bigger_title">Experience (Freelance)</h2>
					{/* sub */}
					<ExpStyles>
						<SubExpStyles>
							{/* header */}
							<div className="exp_header">
								<div className="exp_header_title">
									<h3>온라인 실시간 강의 반응형 웹</h3>
									<span>2021.</span>
								</div>
								<a
									href="https://storytunes.co.kr"
									target="_blank"
									rel="noopener noreferrer"
								>
									<GoLinkExternal />
								</a>
							</div>
							{/* info */}
							<div className="exp_info">
								<div>3인 팀 프로젝트</div>
								<div>UX / UI 디자인&#44; 퍼블리싱</div>
							</div>
							<p>
								스토리튠즈는 한국 최초의 웹 소설 전문 아카데미입니다. 비대면
								온라인 교육 플랫폼의 필요성과 카카오페이지와 공동으로 기획한
								프로젝트를 위해 실시간 온라인 수업이 중심인 웹 서비스를 제작
								했습니다.
							</p>
							<ul>
								<li>
									기획자 1명, 풀 스택 개발자 1명과 함께 진행한 프로젝트입니다.{' '}
								</li>
								<li>
									Figma로 디자인하고 HTML, CSS, JQuery로 퍼블리싱을 했습니다.
								</li>
								<li>
									{' '}
									몇 가지 API 통신을 통한 기능 (강의 관련 목록 필터링, 회원 정보
									수정 및 표시) 및 쿠키 사용 레이어 팝업 등을 구현을 했습니다.
								</li>
								<li>
									이 프로젝트 경험이 프론트엔드 기술 성장과 타 개발자와의 협업
									능력 향상을 위한 구직 활동으로 이끌었습니다.{' '}
								</li>
							</ul>
						</SubExpStyles>

						<SubExpStyles>
							{/* header */}
							<div className="exp_header">
								<div className="exp_header_title">
									<h3>소규모 이커머스 반응형 웹</h3>
									<span>2020.</span>
								</div>
								<a
									href="https://silvertrade.co.kr"
									target="_blank"
									rel="noopener noreferrer"
								>
									<GoLinkExternal />
								</a>
							</div>
							{/* info */}
							<div className="exp_info">
								<div>개인 프로젝트</div>
								<div>디자인 및 개발</div>
							</div>
							<p>
								은빛무역은 부산의 수산물 도매 소상공 업체입니다. 회사 브랜딩 및
								소매 영역 확장을 위해 온라인 커머스 사업을 시작했습니다. 지인인
								업체 대표에게 작업 의뢰를 받았습니다.
							</p>
							<ul>
								<li>
									개발 공부를 시작한지 4개월 차에 시작한 첫 프로젝트입니다.{' '}
								</li>
								<li>
									당시 온라인 강의를 통해 배운 HTML, CSS, Vanila JS, MERN stack
									기술들을 가지고 제작을 시도했으나 여러 이슈들(결제, 인증,
									보안, 퍼포먼스, CMS 등)에 한계를 경험했습니다.
								</li>
								<li>
									워드프레스 + 우커머스 플러그인 기반으로 커스텀 CSS와 PHP
									Snippets을 편집해서 이커머스사이트를 만들었습니다.
								</li>
							</ul>
						</SubExpStyles>
					</ExpStyles>
				</SubStyles>
			</SectionStyles>
		</WrapperStyles>
	);
}

export default About;
