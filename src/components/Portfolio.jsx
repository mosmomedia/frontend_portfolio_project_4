import { Link } from 'react-router-dom';

import {
	WrapperStyles,
	SectionWrapperStyles,
	SectionStyles,
	HeaderStyles,
	ContentStyles,
	LeftStyles,
	RightStyles,
	ThumbnailStyles,
} from '../styles/PortfolioStyles';

import StorytunesMainImage1045 from '../assets/imgs/projects/storytunes/main/main_1045.png';
import StorytunesMainImage1453 from '../assets/imgs/projects/storytunes/main/main_1453.png';

import HomepageImg1045 from '../assets/imgs/projects/homepage/main/pf2_main_1045.png';
import HomepageImg1453 from '../assets/imgs/projects/homepage/main/pf2_main_1453.png';

import Pf3Img1045 from '../assets/imgs/projects/vanilla-spa/pf3_main_1045.png';
import Pf3Img1453 from '../assets/imgs/projects/vanilla-spa/pf3_main_1453.png';

import { GrGithub } from 'react-icons/gr';
import { GoLinkExternal } from 'react-icons/go';
import { BsGlobe } from 'react-icons/bs';

function Portfolio() {
	return (
		<WrapperStyles id="portfolio">
			<h1>Portfolio</h1>
			<SectionWrapperStyles>
				<SectionStyles>
					{/* header */}
					<HeaderStyles>
						<div id="pf_title">
							<h2>Storytunes</h2>
							<div id="pf_role">UX &#47; UI &#43; Development 2022</div>
						</div>
						<ul id="pf_tech">
							<li>React&#46; js</li>
							<li>Express&#46; js</li>
							<li>Node&#46; js</li>
							<li>MongoDB</li>
							<li>Firebase</li>
							<li>styled&#45;components</li>
							<li>Tailwind CSS</li>
							<li>Heroku</li>
						</ul>
					</HeaderStyles>
					{/* main */}
					<ContentStyles>
						<LeftStyles>
							<ThumbnailStyles
								sizes="(max-width: 1279px) 100vw, 1453px"
								srcSet={`${StorytunesMainImage1045} 1045w, ${StorytunesMainImage1453} 
								1453w`}
								src={StorytunesMainImage1045}
								alt=""
							/>
						</LeftStyles>
						{/* left item */}
						<RightStyles>
							{/* desc */}
							<div id="pf_desc">
								<p>
									<a
										id="link_st"
										href="https://storytunes.co.kr"
										target="_blank"
										rel="noopener noreferrer"
										aria-label="link to storytunes page"
									>
										스토리튠즈
									</a>
									는 실시간 온라인 강의 서비스를 제공하는 한국 최초의 웹 소설
									전문 아카데미입니다. 2021년에 프리랜서로 공동 기획, UX / UI
									디자인 그리고 퍼블리싱을 담당했습니다.{' '}
								</p>
								<br />
								<p>
									jQuery + 그누보드&#40;PHP + MySQL&#41;로 만들어진 이 서비스를
									프론트엔드 학습 및 포트폴리오 제작을 위해 MERN 스택으로
									구현해서 클론 코딩했습니다. 개인 풀 사이클 프로젝트입니다.
								</p>
								<br />
								<p>현재 몇몇 기능들은 구현 및 업데이트 중입니다. </p>
							</div>
							{/* features */}
							<div id="pf_feat">
								<h3>Features</h3>
								<ul>
									<li>Single Page Application with React&#40;.js&#41;</li>
									<li>
										Styling Components with styled-components and Tailwind CSS
									</li>
									<li>RESTful API with Node.js, Express and MongoDB</li>
									<li>Firebase Authentication</li>
									<li>Heroku Deployment</li>
								</ul>
							</div>
							{/* links */}
							<div id="pf_links">
								<Link
									to="/project/storytunes"
									id="pf_project_link"
									className="pf_link"
									aria-label="link to project page"
								>
									<GoLinkExternal />
									<div>View Project</div>
								</Link>

								<a
									href="https://storytunes.herokuapp.com/"
									id="pf_demo_link"
									className="pf_link"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="link to demo page"
								>
									<BsGlobe />
									<span>View Demo</span>
								</a>

								<a
									href="https://github.com/mosmomedia/frontend_portfolio_project_3"
									id="pf_github_link"
									className="pf_link"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="link to github page"
								>
									<GrGithub />
									<span>View Source</span>
								</a>
							</div>
						</RightStyles>
						{/* right item */}
					</ContentStyles>
				</SectionStyles>

				<SectionStyles>
					{/* header */}
					<HeaderStyles>
						<div id="pf_title">
							<h2>Vanilla JS SPA</h2>
							<div id="pf_role">Development 2022</div>
						</div>
						<ul id="pf_tech">
							<li>HTML5</li>
							<li>CSS3</li>
							<li>JS&#40;ES6&#41;</li>
							<li>Webpack</li>
							<li>Node&#46; js</li>
							<li>MongoDB</li>
							<li>Heroku</li>
						</ul>
					</HeaderStyles>
					{/* main */}
					<ContentStyles>
						<LeftStyles>
							<ThumbnailStyles
								sizes="(max-width: 1279px) 100vw, 1453px"
								srcSet={`${Pf3Img1045} 1045w, ${Pf3Img1453} 
								1453w`}
								src={Pf3Img1045}
								alt=""
							/>
						</LeftStyles>
						{/* left item */}
						<RightStyles>
							{/* desc */}
							<div id="pf_desc">
								<p>
									직접 프레임 워크 구현 및 웹팩&바벨 환경 구축을 이용해 만든
									SPA입니다.
								</p>
								<br />
								<p>
									이 프로젝트는{' '}
									<a
										id="zoom_link"
										href="https://zuminternet.github.io/zum-front-recurit-review/"
										target="blank"
									>
										줌인터넷의 주니어 프론트엔드 개발자 채용 과제
									</a>
									를 바탕으로 만들어졌습니다.
								</p>
								<br />
								<p>
									리엑트 프레임워크와 클론 코딩 중심의 포트폴리오를 완성 후 채용
									프로세스 및 이력서 관련 검색 중에 이 블로그의 포스트를
									보았습니다. 이 회사가 기대하는 주니어 개발자의 역량을 목표로
									이 프로젝트를 포트폴리오에 추가했습니다.
								</p>
								<br />
								<p>
									직접 프레임워크를 만들고 웹팩+바벨을 통해 개발환경을 구축하는
									경험으로 모던 웹 페러다임을 이해하고자 했습니다.
								</p>
							</div>
							{/* features */}
							<div id="pf_feat">
								<h3>Features</h3>
								<ul>
									<li>Single Page Application을 컴포넌트 기반으로 설계하기</li>
									<li>간단한 프레임워크 만들기를 통해 내부 동작 이해하기</li>
									<li> webpack + babel를 이용하여 개발환경 구축하기</li>
									<li> NodeJS로 간단한 API 구축하기.</li>
								</ul>
							</div>
							{/* links */}
							<div id="pf_links">
								<a
									href="https://dongjoo-pf-webcomponent.herokuapp.com"
									id="pf_demo_link"
									className="pf_link"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="link to demo page"
								>
									<BsGlobe />
									<span>View Demo</span>
								</a>
								<a
									href="https://github.com/mosmomedia/frontend_portfolio_project_6"
									id="pf_github_link"
									className="pf_link"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="link to github page"
								>
									<GrGithub />
									<span>View Source</span>
								</a>
							</div>
						</RightStyles>
						{/* right item */}
					</ContentStyles>
				</SectionStyles>

				<SectionStyles>
					{/* header */}
					<HeaderStyles>
						<div id="pf_title">
							<h2>Personal Website</h2>
							<div id="pf_role">Design &#43; Development 2022</div>
						</div>
						<ul id="pf_tech">
							<li>React&#46; js</li>
							<li>styled&#45;components</li>
							<li>Tailwind CSS</li>
							<li>Vercel</li>
						</ul>
					</HeaderStyles>
					{/* main */}
					<ContentStyles>
						<LeftStyles>
							<ThumbnailStyles
								sizes="(max-width: 1279px) 100vw, 1453px"
								srcSet={`${HomepageImg1045} 1045w, ${HomepageImg1453} 
								1453w`}
								src={HomepageImg1045}
								alt=""
							/>
						</LeftStyles>
						{/* left item */}
						<RightStyles>
							{/* desc */}
							<div id="pf_desc">
								<p>프론트엔드 포트폴리오 목적으로 만든 개인 웹 사이트입니다.</p>
								<br />
								<p>
									CSS 스크롤 스냅 모듈로 전체 화면 스크롤 웹사이트 만들어 단일
									페이지의 About, Portfolio, Contact의 구역을 명확하게 나눠
									사용자 경험을 향상 시켰습니다.
								</p>
								<br />
								<p>
									빠른 제작을 위해 최근에 자주 사용했던 React와
									Styled-components + Tailwind CSS를 사용했습니다. 다시 만든다면
									HTML, CSS, Vanila JS로 만들겠습니다.
								</p>
								<br />
								<p>
									이 프로젝트를 통해 Lazy loading, 반응형 이미지, 웹 폰트
									최적화와 같은 웹 성능 향상의 여러 방법들을 학습했습니다.
								</p>
							</div>
							{/* features */}
							<div id="pf_feat">
								<h3>Features</h3>
								<ul>
									<li>Single Page Application with React&#40;.js&#41;</li>
									<li>
										Styling Components with styled-components and Tailwind CSS
									</li>
									<li>Vercel Frontend Deployment</li>
								</ul>
							</div>
							{/* links */}
							<div id="pf_links">
								<a
									href="https://github.com/mosmomedia/frontend_portfolio_project_4"
									id="pf_github_link"
									className="pf_link"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="link to github page"
								>
									<GrGithub />
									<span>View Source</span>
								</a>
							</div>
						</RightStyles>
						{/* right item */}
					</ContentStyles>
				</SectionStyles>
			</SectionWrapperStyles>
		</WrapperStyles>
	);
}

export default Portfolio;
