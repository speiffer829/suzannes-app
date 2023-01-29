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
	const num = Math.floor(Math.random() * imgs.length);
	const img = imgs[num];

	return {
		img,
		num
	};
};
