import { RiSendPlaneFill } from 'react-icons/ri';
import {
	WrapperStyles,
	HeaderStyles,
	MainStyles,
	MailToStyles,
} from '../styles/ContactStyles';

function Contact() {
	return (
		// wapper
		<WrapperStyles id="contact">
			{/* header */}
			<HeaderStyles>
				<h1>Contact</h1>
				<p>
					고객에게 가치있고 동료에게 영감을 주는 서비스를 함께 만들어 봅시다!
				</p>
			</HeaderStyles>
			{/* main */}
			<MainStyles>
				<p>Say Hello&#33;</p>
				<MailToStyles
					href="mailto:mosmomedia@gmail.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<div>hello&#64;dongjookim.dev</div>
					<RiSendPlaneFill />
				</MailToStyles>
			</MainStyles>
		</WrapperStyles>
	);
}

export default Contact;
