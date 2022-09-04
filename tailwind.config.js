module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				body: '#BEF9EE',
				main_text: '#1A1919',
				key_col1: '#BEF9EE',
			},

			backgroundColor: {
				primary: '#BEF9EE',
				seconday: '#1A1919',
			},

			textColor: {
				primary: '#1A1919',
			},
		},

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
				xs: '1rem',
				sm: '2rem',
				md: '2rem',
				lg: '2rem',
				xl: '3rem',
				'2xl': '4rem',
			},
		},
	},
	plugins: [],
};
