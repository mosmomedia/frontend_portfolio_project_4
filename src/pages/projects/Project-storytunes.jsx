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
	TopSectionStyles,
	SectionStyles,
	SubSectionStyles,
	HeadTitleStyles,
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
				<SectionStyles>
					<HeadTitleStyles>
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
					</HeadTitleStyles>
				</SectionStyles>

				<TopSectionStyles>
					{/* header */}
					<h2>Overview</h2>
					<p id="overview_desc">
						Days is a beautiful countdown app to all the events that matter to
						you. Events are important, they're the small things in life that
						matter the most. Whether it's a wedding, a holiday or just a night
						out with your friends, Days helps you countdown to those special
						moments.
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

				<SectionStyles>
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
			</WrapperStyles>
		</>
	);
}

export default ProjectStorytunes;
