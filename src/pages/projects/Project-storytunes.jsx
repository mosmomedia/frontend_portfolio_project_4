import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import FireSpinner from '../../assets/gifs/fire-red.gif';

import Header from '../../components/projects/Header';
import MainImage from '../../assets/imgs/projects/storytunes/main.png';
import AuthImg_1 from '../../assets/imgs/projects/storytunes/auth/auth-1.png';
import AuthImg_2 from '../../assets/imgs/projects/storytunes/auth/auth-2.png';
import AuthImg_3 from '../../assets/imgs/projects/storytunes/auth/auth-3.png';
import AuthImg_4 from '../../assets/imgs/projects/storytunes/auth/auth-4.png';
import St_1 from '../../assets/imgs/projects/storytunes/student/st-1.png';
import St_2 from '../../assets/imgs/projects/storytunes/student/st-2.png';
import St_3 from '../../assets/imgs/projects/storytunes/student/st-3.png';
import St_4 from '../../assets/imgs/projects/storytunes/student/st-4.png';
import Work_1 from '../../assets/imgs/projects/storytunes/student/work-1.png';
import Work_2 from '../../assets/imgs/projects/storytunes/student/work-2.png';
import Work_3 from '../../assets/imgs/projects/storytunes/student/work-3.png';
import Work_4 from '../../assets/imgs/projects/storytunes/student/work-4.png';
import Admin_1 from '../../assets/imgs/projects/storytunes/admin/admin-1.png';
import Admin_2 from '../../assets/imgs/projects/storytunes/admin/admin-2.webp';
import Admin_3 from '../../assets/imgs/projects/storytunes/admin/admin-3.png';
import Admin_4 from '../../assets/imgs/projects/storytunes/admin/admin-4.png';
import ClassReg from '../../assets/imgs/projects/storytunes/video/class_registration.webm';
import DebutList from '../../assets/imgs/projects/storytunes/video/debut_list.webm';

import {
	WrapperStyles,
	ContainerStyles,
	TopSectionStyles,
	HeaderSectionStyles,
	SectionStyles,
	SubSectionStyles,
	TitleStyles,
	DescStyles,
	ImgListStyles,
	VideoListStyles,
} from './StorytunesStyles';

import { LoadingStyles, SpinnerStyles } from '../../styles';

function ProjectStorytunes() {
	const [loading, setLoading] = useState(true);

	const handleLoad = () => {
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	};

	// if (loading) return <FireSpinner />;

	return (
		<>
			<Header />
			<LoadingStyles loadingState={loading}>
				<SpinnerStyles src={FireSpinner} />
			</LoadingStyles>
			<WrapperStyles>
				<ContainerStyles>
					<HeaderSectionStyles>
						{/* left */}
						<div id="title_left">
							<h1>Storytunes</h1>
							<h2>UX / UI, Development. 2022</h2>
						</div>

						{/* right */}
						<div id="title_right">
							<img
								src={MainImage}
								alt=""
								width={1500}
								height={1500}
								onLoad={handleLoad}
							/>
						</div>
					</HeaderSectionStyles>

					<TopSectionStyles>
						{/* header */}
						<h2>Overview</h2>
						<p>
							<span>이 프로젝트를 선택한 이유</span>는 디자인, 개발 그리고
							배포까지 풀 사이클이 가능 했기 때문입니다.{' '}
							<span>이 프로젝트에서 경험한 어려움</span>은 이 것입니다.{' '}
							<span>이 프로젝트를 통해 배운 것들</span>은 이 것입니다.{' '}
							<span>만약 다시 만든다면</span> 이것을 다르게 할 것입니다.{' '}
							<span>작업 중에 막혔던 몇몇 시점이 있었는데</span> 이것을 통해
							해결했습니다.
						</p>
					</TopSectionStyles>

					<SectionStyles>
						{/* header */}
						<TitleStyles>
							<h2>Authentication</h2>
						</TitleStyles>
						<ImgListStyles>
							<li>
								<LazyLoadImage
									src={AuthImg_1}
									width={400}
									height={740}
									alt=""
									srcSet=""
								/>
							</li>
							<li>
								<LazyLoadImage
									src={AuthImg_2}
									width={400}
									height={740}
									alt=""
									srcSet=""
								/>
							</li>{' '}
							<li>
								<LazyLoadImage
									src={AuthImg_3}
									width={400}
									height={740}
									alt=""
									srcSet=""
								/>
							</li>{' '}
							<li>
								<LazyLoadImage
									src={AuthImg_4}
									width={400}
									height={740}
									alt=""
									srcSet=""
								/>
							</li>
						</ImgListStyles>
						<DescStyles>
							<div>
								<h3>Approach</h3>
								<p>Paragraph</p>
							</div>
							<div>
								<h3>Challenges</h3>
								<p>Paragraph</p>
							</div>
							<div>
								<h3>Learning</h3>
								<p>Paragraph</p>
							</div>
						</DescStyles>
					</SectionStyles>

					<SectionStyles>
						{/* header */}
						<TitleStyles>
							<h2>Student Dashboard</h2>
						</TitleStyles>
						<SubSectionStyles>
							<h3>강의 게시판</h3>
							<ImgListStyles>
								<li>
									<LazyLoadImage
										src={St_1}
										width={400}
										height={740}
										alt=""
										srcSet=""
									/>
								</li>
								<li>
									<LazyLoadImage
										src={St_2}
										width={400}
										height={740}
										alt=""
										srcSet=""
									/>
								</li>{' '}
								<li>
									<LazyLoadImage
										src={St_3}
										width={400}
										height={740}
										alt=""
										srcSet=""
									/>
								</li>{' '}
								<li>
									<LazyLoadImage
										src={St_4}
										width={400}
										height={740}
										alt=""
										srcSet=""
									/>
								</li>
							</ImgListStyles>
						</SubSectionStyles>

						<SubSectionStyles>
							<h3>연재 게시판</h3>
							<ImgListStyles>
								<li>
									<LazyLoadImage
										src={Work_1}
										width={400}
										height={740}
										alt=""
										srcSet=""
									/>
								</li>
								<li>
									<LazyLoadImage
										src={Work_2}
										width={400}
										height={740}
										alt=""
										srcSet=""
									/>
								</li>{' '}
								<li>
									<LazyLoadImage
										src={Work_3}
										width={400}
										height={740}
										alt=""
										srcSet=""
									/>
								</li>{' '}
								<li>
									<LazyLoadImage
										src={Work_4}
										width={400}
										height={740}
										alt=""
										srcSet=""
									/>
								</li>
							</ImgListStyles>
						</SubSectionStyles>

						<DescStyles>
							<div>
								<h3>Approach</h3>
								<p>Paragraph</p>
							</div>
							<div>
								<h3>Challenges</h3>
								<p>Paragraph</p>
							</div>
							<div>
								<h3>Learning</h3>
								<p>Paragraph</p>
							</div>
						</DescStyles>
					</SectionStyles>

					<SectionStyles>
						{/* header */}
						<TitleStyles>
							<h2>Admin Dashboard</h2>
						</TitleStyles>
						<ImgListStyles>
							<li>
								<LazyLoadImage
									src={Admin_1}
									width={400}
									height={740}
									alt=""
									srcSet=""
								/>
							</li>
							<li>
								<LazyLoadImage
									src={Admin_2}
									width={400}
									height={740}
									alt=""
									srcSet=""
								/>
							</li>{' '}
							<li>
								<LazyLoadImage
									src={Admin_3}
									width={400}
									height={740}
									alt=""
									srcSet=""
								/>
							</li>{' '}
							<li>
								<LazyLoadImage
									src={Admin_4}
									width={400}
									height={740}
									alt=""
									srcSet=""
								/>
							</li>
						</ImgListStyles>
						<DescStyles>
							<div>
								<h3>Approach</h3>
								<p>Paragraph</p>
							</div>
							<div>
								<h3>Challenges</h3>
								<p>Paragraph</p>
							</div>
							<div>
								<h3>Learning</h3>
								<p>Paragraph</p>
							</div>
						</DescStyles>
					</SectionStyles>

					<SectionStyles id="videoSection">
						{/* header */}
						<TitleStyles>
							<h2>Pages &amp; Components</h2>
						</TitleStyles>
						<VideoListStyles>
							<li>
								<video autoPlay loop>
									<source src={ClassReg} type="video/webm" />
									{/* <source src="/media/cc0-videos/flower.mp4" type="video/mp4" /> */}
									Sorry, your browser doesn't support embedded videos.
								</video>
							</li>
							<li>
								<video autoPlay loop>
									<source src={DebutList} type="video/webm" />
									{/* <source src="/media/cc0-videos/flower.mp4" type="video/mp4" /> */}
									Sorry, your browser doesn't support embedded videos.
								</video>
							</li>
						</VideoListStyles>
						<DescStyles>
							<div>
								<h3>Approach</h3>
								<p>Paragraph</p>
							</div>
							<div>
								<h3>Challenges</h3>
								<p>Paragraph</p>
							</div>
							<div>
								<h3>Learning</h3>
								<p>Paragraph</p>
							</div>
						</DescStyles>
					</SectionStyles>
				</ContainerStyles>
			</WrapperStyles>
		</>
	);
}

export default ProjectStorytunes;
