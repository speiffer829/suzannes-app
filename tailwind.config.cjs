const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				light: '#f9f8ff',
				dark: {
					DEFAULT: '#0B0E1F',
					50: '#A6AEDF',
					100: '#96A1DA',
					200: '#7885CF',
					300: '#5A6AC5',
					400: '#4052B6',
					500: '#364497',
					600: '#2B3779',
					700: '#20295B',
					800: '#161C3D',
					900: '#0B0E1F'
				},
				'dark-transparent': 'rgb(11 14 31 / 10%)',
				pink: {
					DEFAULT: '#FF61C7',
					50: '#FFFFFF',
					100: '#FFFFFF',
					200: '#FFDBF2',
					300: '#FFB3E4',
					400: '#FF8AD5',
					500: '#FF61C7',
					600: '#FF29B3',
					700: '#F0009B',
					800: '#B80077',
					900: '#800052'
				},
				light: '#f9f8ff',
				purple: {
					DEFAULT: '#372952',
					50: '#8F77BB',
					100: '#836AB4',
					200: '#6E52A4',
					300: '#5B4488',
					400: '#49376D',
					500: '#372952',
					600: '#1E162D',
					700: '#050407',
					800: '#000000',
					900: '#000000'
				},
				coral: {
					DEFAULT: '#F69080',
					50: '#FFFFFF',
					100: '#FFFFFF',
					200: '#FEF4F2',
					300: '#FBD3CC',
					400: '#F9B1A6',
					500: '#F69080',
					600: '#F2624C',
					700: '#EF3417',
					800: '#C0260E',
					900: '#8C1C0A'
				},
				periwinkle: {
					DEFAULT: '#A2A7EC',
					50: '#FFFFFF',
					100: '#FFFFFF',
					200: '#FFFFFF',
					300: '#E6E7FA',
					400: '#C4C7F3',
					500: '#A2A7EC',
					600: '#737BE2',
					700: '#454FD9',
					800: '#2731BF',
					900: '#1D2590'
				},
				red: {
					DEFAULT: '#FF6161',
					50: '#FFFFFF',
					100: '#FFFFFF',
					200: '#FFDBDB',
					300: '#FFB3B3',
					400: '#FF8A8A',
					500: '#FF6161',
					600: '#FF2929',
					700: '#F00000',
					800: '#B80000',
					900: '#800000'
				},
				green: {
					DEFAULT: '#61FF8D',
					50: '#FFFFFF',
					100: '#FFFFFF',
					200: '#DBFFE5',
					300: '#B3FFC8',
					400: '#8AFFAA',
					500: '#61FF8D',
					600: '#29FF65',
					700: '#00F043',
					800: '#00B833',
					900: '#008024'
				}
			}
		}
	},

	plugins: []
};

module.exports = config;
