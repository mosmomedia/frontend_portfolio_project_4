import { RiSendPlaneFill } from 'react-icons/ri';
import {
	WrapperStyles,
	HeaderStyles,
	MainStyles,
} from '../styles/ContactStyles';

function Contact() {
	return (
		// wapper
		<WrapperStyles id="contact">
			{/* header */}
			<HeaderStyles>
				<h1>Contact</h1>
				<h4>
					고객에게 가치있고 동료에게 영감을 주는 서비스를 함께 만들어 봅시다!
				</h4>
			</HeaderStyles>
			{/* main */}
			<MainStyles>
				<h4>Say Hello&#33;</h4>
				<div id="dj_email">
					<div>hello&#64;dongjookim.com</div>
					<RiSendPlaneFill />
				</div>
			</MainStyles>
		</WrapperStyles>
	);
}

export default Contact;
