import { MainStyles } from '../styles';
import { WrapperStyles } from '../styles/FooterStyles';
import { GrDocumentUser, GrGithub } from 'react-icons/gr';

function Footer() {
	return (
		<MainStyles>
			{/* line */}
			<WrapperStyles>
				<div id="line"></div>
				{/* copyright && link */}
				<div id="links_copyright">
					<div id="dj_links">
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
							href="http://"
							target="_blank"
							rel="noopener noreferrer"
						>
							<GrGithub />
							<span>Github</span>
						</a>
					</div>
					<div id="dj_copyright">&#169; 2022 Dongjoo Kim</div>
				</div>
			</WrapperStyles>
		</MainStyles>
	);
}

export default Footer;
