import supabase from '$lib/db';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	add_card: async ({ request }) => {
		const formStuff = await request.formData();
		const formObj = Object.fromEntries(formStuff.entries());
		formObj.student_id = parseInt(formObj.student_id);
		console.log(formObj);

		const { data, error: err } = await supabase.from('scanner_cards').insert([formObj]).single();
		if (err) {
			throw error('Supabase Error', err);
		}

		return { ...data };
	}
};
