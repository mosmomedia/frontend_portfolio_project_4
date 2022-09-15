import tw from 'twin.macro';

const LoadingStyles = tw.div`fixed inset-0  z-50 flex justify-center items-center bg-primary`;

const SpinnerStyles = tw.div`w-14 h-14 border-8 border-solid border-l-purple-500 border-b-transparent  border-r-gray-500 border-t-transparent  rounded-full animate-spin`;

function Spinner() {
	return (
		<LoadingStyles>
			<SpinnerStyles />
		</LoadingStyles>
	);
}

export default Spinner;
