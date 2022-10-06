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

import MainImage1045 from '../assets/imgs/projects/storytunes/main/main_1045.png';
import MainImage1453 from '../assets/imgs/projects/storytunes/main/main_1453.png';

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
							<div id="pf_role">UX &#47; UI &#43; Web Development 2022</div>
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
								srcSet={`${MainImage1045} 1045w, ${MainImage1453} 
								1453w`}
								src={MainImage1045}
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
								<p>현재 몇몇 기능들은 구현 및 업데이트 중 입니다. </p>
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
							<h2>Personal Website</h2>
							<div id="pf_role">UX &#47; UI &#43; Web Development 2022</div>
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
							<div></div>
						</LeftStyles>
						{/* left item */}
						<RightStyles>
							{/* desc */}
							<div id="pf_desc">
								<p>
									First version of my personal website. Designed and developed
									with a conscious effort to avoid using any superfluous
									frameworks like Bootstrap.
								</p>
								<br />
								<p>
									I probably didn't need to use React at all, but hey, at least
									I learned a few things!
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
