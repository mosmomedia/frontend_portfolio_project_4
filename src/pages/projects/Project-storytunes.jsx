import Header from '../../components/projects/Header';
import MainImage from '../../assets/imgs/projects/storytunes/main.png';
import { WrapperStyles, SectionStyles, TitleStyles } from './StorytunesStyles';

import 'twin.macro';
import 'styled-components/macro';

function ProjectStorytunes() {
	return (
		<WrapperStyles>
			<Header />
			<SectionStyles>
				<TitleStyles>
					{/* left */}
					<div id="title_left">
						<h1>Storytunes</h1>
						<h2>UX / UI, Development. 2022</h2>
					</div>

					{/* right */}
					<img tw="w-[1000px] m-auto" src={MainImage} alt="" />
				</TitleStyles>
			</SectionStyles>
		</WrapperStyles>
	);
}

export default ProjectStorytunes;
