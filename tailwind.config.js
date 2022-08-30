module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		test: '100px',
		screens: {
			xs: '426px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},

		container: {
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem',
			},
		},

		extend: {
			colors: {
				body: '#BEF9EE',
				main_text: '#1A1919',
			},

			backgroundColor: {
				primary: '#BEF9EE',
			},

			textColor: {
				primary: '#1A1919',
			},
		},
	},
	plugins: [],
};
