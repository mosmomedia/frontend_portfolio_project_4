import {
	WrapperStyles,
	SectionStyles,
	HeaderStyles,
	ContentStyles,
	LeftStyles,
	RightStyles,
} from '../styles/PortfolioStyles';

function Portfolio() {
	return (
		<WrapperStyles id="portfolio">
			<h1>Portfolio</h1>
			<SectionStyles>
				{/* header */}
				<HeaderStyles>
					<div id="pf_title">
						<h2>Storytunes</h2>
						<div id="pf_role">UX &#47; UI Development 2022</div>
					</div>
					<ul id="pf_tech">
						<li>React&#46; js</li>
						<li>Express&#46; js</li>
						<li>Node&#46; js</li>
						<li>MongoDB</li>
						<li>Firebase</li>
						<li>styled&#45;components</li>
						<li>Tailwind CSS</li>
					</ul>
				</HeaderStyles>
				{/* main */}
				<ContentStyles>
					{/* left item */}
					<LeftStyles>
						{/* desc */}
						<div id="pf_desc">
							<p>
								<a
									id="link_st"
									href="https://storytunes.co.kr"
									target="_blank"
									rel="noopener noreferrer"
								>
									스토리튠즈
								</a>
								는 실시간 온라인 강의 서비스를 제공하는 한국 최초의 웹 소설 전문
								아카데미입니다. 2021년에 프리랜서로 기획, UX / UI 디자인 그리고
								퍼블리싱을 담당했습니다.{' '}
							</p>
							<br />
							<p>
								jQuery + 그누보드(PHP + MySQL)로 만들어진 이 서비스를 프론트엔드
								학습 및 포트폴리오 제작을 위해 MERN 스택으로 구현해서 클론
								코딩했습니다. 개인 풀 사이클 프로젝트입니다.
							</p>
							<br />
							<p>현재 몇몇 기능들은 구현 및 업데이트 중 입니다. </p>
						</div>
						{/* features */}
						<div id="pf_feat">
							<h4>Features</h4>
							<ul>
								<li>Single Page Application with React(.js)</li>
								<li>
									Styling Components with styled-componets and Tailwind CSS
								</li>
								<li>RESTful API with Node.js, Express and MongoDB</li>
								<li>Firebase Authentication</li>
							</ul>
						</div>
						{/* links */}
						<div id="pf_links">
							<a className="pf_link" href="/" target="_blank" rel="noreferrer">
								View Project
							</a>
							<a className="pf_link" href="/" target="_blank" rel="noreferrer">
								View Demo
							</a>
							<a className="pf_link" href="/" target="_blank" rel="noreferrer">
								View Source
							</a>
						</div>
					</LeftStyles>
					{/* right item */}
					<RightStyles>
						<div></div>
					</RightStyles>
				</ContentStyles>
			</SectionStyles>
		</WrapperStyles>
	);
}

export default Portfolio;
