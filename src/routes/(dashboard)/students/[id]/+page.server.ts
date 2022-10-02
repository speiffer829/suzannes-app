import supabase from '$lib/db';

/** @type {import('./$types').Actions} */
export const actions = {
	add_card: async ({ request }) => {
		const formStuff = await request.formData();
		const formObj = Object.fromEntries(formStuff.entries());
		console.log(formObj);

		const { data, error } = await supabase.from('scanner_cards').insert([formObj]);
		console.log('data', data);

		return { data, error };
	}
};
