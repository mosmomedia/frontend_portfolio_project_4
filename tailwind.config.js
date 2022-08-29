module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			xs: '426px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},

		extend: {
			colors: {
				body: '#CFFFF6',
				main_text: '#1A1919',
			},

			backgroundColor: {
				primary: '#CFFFF6',
			},

			textColor: {
				primary: '#1A1919',
			},
		},
	},
	plugins: [],
};
