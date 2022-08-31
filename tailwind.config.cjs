const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				dark: '#0b0e1f',
				'dark-transparent': 'rgb(11 14 31 / 10%)',
				pink: '#ff61c7',
				light: '#f9f8ff',
				purple: '#372952',
				coral: '#f69080',
				periwinkle: '#a2a7ec',
				red: '#ff6161',
				green: '#61ff8d'
			}
		}
	},

	plugins: []
};

module.exports = config;
