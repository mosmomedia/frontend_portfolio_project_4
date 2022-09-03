import { MainStyles } from '../styles';
import { WrapperStyles } from '../styles/FooterStyles';
import { GrDocumentUser, GrGithub } from 'react-icons/gr';

function Footer() {
	return (
		<MainStyles>
			{/* line */}
			<WrapperStyles>
				<div id="footer_line"></div>
				{/* copyright && link */}
				<div id="footer_links_copyright">
					<div id="footer_dj_links">
						<a
							id="footer_dj_resume"
							href="http://"
							target="_blank"
							rel="noopener noreferrer"
						>
							<GrDocumentUser />
							<span>Résumé</span>
						</a>

						<a
							id="footer_dj_github"
							href="http://"
							target="_blank"
							rel="noopener noreferrer"
						>
							<GrGithub />
							<span>Github</span>
						</a>
					</div>
					<div id="footer_dj_copyright">&#169; 2022 Dongjoo Kim</div>
				</div>
			</WrapperStyles>
		</MainStyles>
	);
}

export default Footer;