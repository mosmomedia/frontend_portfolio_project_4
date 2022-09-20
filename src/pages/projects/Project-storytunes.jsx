import { useState } from 'react';
import FireSpinner from '../../assets/gifs/fire-red.gif';

import Header from '../../components/projects/Header';
import MainImage from '../../assets/imgs/projects/storytunes/main.png';
import SampleImg from '../../assets/imgs/projects/storytunes/sample/sample.png';
import AuthImg_1 from '../../assets/imgs/projects/storytunes/auth/auth-1.png';
import AuthImg_2 from '../../assets/imgs/projects/storytunes/auth/auth-2.png';
import AuthImg_3 from '../../assets/imgs/projects/storytunes/auth/auth-3.png';
import AuthImg_4 from '../../assets/imgs/projects/storytunes/auth/auth-4.png';

import {
	WrapperStyles,
	TopSectionStyles,
	SectionStyles,
	HeadTitleStyles,
	TitleStyles,
	DescStyles,
	ImgListStyles,
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
							<img src={MainImage} alt="" onLoad={handleLoad} />
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
							<img src={AuthImg_1} alt="" srcSet="" />
						</li>
						<li>
							<img src={AuthImg_2} alt="" srcSet="" />
						</li>{' '}
						<li>
							<img src={AuthImg_3} alt="" srcSet="" />
						</li>{' '}
						<li>
							<img src={AuthImg_4} alt="" srcSet="" />
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
					<ImgListStyles>
						<li>
							<img src={SampleImg} alt="" srcSet="" />
						</li>
						<li>
							<img src={SampleImg} alt="" srcSet="" />
						</li>{' '}
						<li>
							<img src={SampleImg} alt="" srcSet="" />
						</li>{' '}
						<li>
							<img src={SampleImg} alt="" srcSet="" />
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
						<h2>Admin Dashboard</h2>
					</TitleStyles>
					<ImgListStyles>
						<li>
							<img src={SampleImg} alt="" srcSet="" />
						</li>
						<li>
							<img src={SampleImg} alt="" srcSet="" />
						</li>{' '}
						<li>
							<img src={SampleImg} alt="" srcSet="" />
						</li>{' '}
						<li>
							<img src={SampleImg} alt="" srcSet="" />
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
					<ImgListStyles>
						<li>
							<img src={SampleImg} alt="" srcSet="" />
						</li>
						<li>
							<img src={SampleImg} alt="" srcSet="" />
						</li>{' '}
						<li>
							<img src={SampleImg} alt="" srcSet="" />
						</li>{' '}
						<li>
							<img src={SampleImg} alt="" srcSet="" />
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
			</WrapperStyles>
		</>
	);
}

export default ProjectStorytunes;
