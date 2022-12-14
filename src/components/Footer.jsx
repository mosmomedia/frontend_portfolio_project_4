import { useEffect, useRef } from 'react';

import { WrapperStyles } from '../styles/FooterStyles';
import { LinksStyles } from '../styles/AboutStyles';
import { GrDocumentUser, GrGithub } from 'react-icons/gr';

import CVPDF from '../assets/pdf/dongjoo_cv.pdf';

function Footer({ mainRef }) {
	const targetFooter = useRef();

	useEffect(() => {
		if (mainRef) {
			// detecting scroll event
			const handleScroll = ({ target: { scrollTop } }) => {
				const contactOffsetTop = mainRef.childNodes[3].offsetTop;

				const floorScrollTop = Math.floor(scrollTop);
				if (floorScrollTop >= contactOffsetTop) {
					targetFooter.current.classList.add('showFooter');
				} else {
					targetFooter.current.classList.remove('showFooter');
				}
			};

			mainRef.addEventListener('scroll', handleScroll);

			return () => {
				mainRef.removeEventListener('scroll', handleScroll);
			};
		}
	}, [mainRef]);

	return (
		<WrapperStyles ref={targetFooter}>
			<div id="footer_container">
				<div id="footer_line"></div>
				{/* copyright && link */}
				<div id="footer_links_copyright">
					<LinksStyles>
						<a
							className="djResume"
							href={CVPDF}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="link to resume page"
						>
							<GrDocumentUser />
							<span>Résumé</span>
						</a>

						<a
							className="djGithub"
							href="https://github.com/mosmomedia"
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
