import supabase from '$lib/db';
import { error } from '@sveltejs/kit';
import type { scannerCardType } from '$types';

/** @type {import('./$types').Actions} */
export const actions = {
	add_card: async ({ request }) => {
		const formStuff = await request.formData();

		const formObj: scannerCardType = Object.fromEntries(formStuff.entries());
		formObj.student_id = parseInt(formObj.student_id);

		if (formObj.card_number.length !== 5) {
			throw error(400, 'Card Length Should Be 5 Numbers');
		}

		const { data, error: err } = await supabase.from('scanner_cards').insert([formObj]).single();
		if (err) {
			throw error('Supabase Error', err);
		}

		return { ...data };
	}
};
