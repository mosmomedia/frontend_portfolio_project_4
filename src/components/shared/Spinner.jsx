import tw from 'twin.macro';
import FireSpinner from '../../assets/gifs/fire-red.gif';

const LoadingStyles = tw.div`fixed inset-0  z-50 flex justify-center items-center bg-primary `;

const SpinnerStyles = tw.img`max-w-[3rem] animate-bounce`;

function Spinner() {
	return (
		<LoadingStyles>
			{/* <SpinnerStyles /> */}
			<SpinnerStyles src={FireSpinner} />
		</LoadingStyles>
	);
}

export default Spinner;
