import supabase from '$lib/db';
import { error, fail } from '@sveltejs/kit';
import type { scannerCardType } from '$types';
import { z } from 'zod';

//ZOD Stuff
const registerSchema = z.object({
	card_number: z
		.string()
		.min(5, { message: 'Must be 5 digits' })
		.max(5, { message: 'Must be 5 digits' })
		.trim()
});

/** @type {import('./$types').Actions} */
export const actions = {
	add_card: async ({ request }) => {
		const formStuff = await request.formData();
		const formObj: scannerCardType = Object.fromEntries(formStuff.entries());
		formObj.student_id = parseInt(formObj.student_id);

		try {
			const checked_stuff = registerSchema.parse(formObj);
			console.log(checked_stuff);

			if (formObj.card_number.length !== 5) {
				return fail(500, 'Card Length Should Be 5 Numbers');
			}

			const { data: new_card, error: err } = await supabase
				.from('scanner_cards')
				.upsert(formObj, { ignoreDuplicates: true, onConflict: 'card_number' })
				.select()
				.single();

			console.log('new_card', new_card);
			console.log('err', err);
			if (err) {
				throw error('Supabase Error', err);
			}

			console.log('new card', new_card);

			return { ...new_card };
		} catch (err) {
			console.error('err', err);
			return fail(500, err);
			// const { fieldErrors: errors } = err.flatten();
		}
	}
};
