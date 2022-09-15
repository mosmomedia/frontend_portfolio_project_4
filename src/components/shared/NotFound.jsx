import 'twin.macro';
import 'styled-components/macro';

import { useNavigate } from 'react-router-dom';

function NotFound() {
	const navitage = useNavigate();
	return (
		<div tw="bg-black  h-screen grid place-content-center ">
			<div tw=" mx-auto flex flex-col space-y-20 text-center">
				<div tw=" space-y-5 lg:space-y-10">
					<h1 tw="text-white text-6xl px-0.5 lg:text-7xl">x 404 x</h1>
					<h2 tw="text-gray-200 text-lg px-1 lg:text-xl">
						This is <span tw="text-purple-600">not</span> the web page you are
						looking for.
					</h2>
				</div>
				<button
					navtigate_to="/"
					onClick={() => navitage('/')}
					tw="bg-primary text-primary rounded-lg shadow-md text-lg py-3 px-8 mx-auto lg:text-xl lg:px-9 sm:hover:opacity-80 sm:hover:text-gray-800 duration-200"
				>
					Bact To Home
				</button>
			</div>
		</div>
	);
}

export default NotFound;
