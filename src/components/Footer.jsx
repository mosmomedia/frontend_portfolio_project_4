import { WrapperStyles } from '../styles/FooterStyles';
import { LinksStyles } from '../styles/AboutStyles';
import { GrDocumentUser, GrGithub } from 'react-icons/gr';

function Footer() {
	return (
		<WrapperStyles>
			<div id="footer_container">
				<div id="footer_line"></div>
				{/* copyright && link */}
				<div id="footer_links_copyright">
					<LinksStyles>
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
					</LinksStyles>
					<div id="footer_dj_copyright">&#169; 2022 Dongjoo Kim</div>
				</div>
			</div>
		</WrapperStyles>
	);
}

export default Footer;
