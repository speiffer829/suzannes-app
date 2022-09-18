/** @type {import('./$types').Actions} */
export const actions = {
	add_card: async ({ request }) => {
		const data = await request.formData();
		const formObj = Object.fromEntries(data.entries());
		console.log(formObj);

		const thing = new Promise((resolve) => {
			setTimeout(() => {
				resolve({
					msg: `oh snap! you returned ${data.get('card_number')}`
				});
			}, 500);
		});
		return thing;
	}
};
