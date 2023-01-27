export const load: PageLoad = async () => {
	const imgs = [
		'dive',
		'painting',
		'pink-ballerina-painting',
		'pixel-ballerina',
		'expressive-oil',
		'expressive-oil-sitting',
		'spenser',
		'elbow-stand-oil',
		'beam-oil',
		'van-gogh-ballerina'
	];
	const img = imgs[Math.round(Math.random() * imgs.length - 1)];

	return {
		img
	};
};
