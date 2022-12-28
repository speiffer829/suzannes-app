import supabase from '$lib/db';
import { error, fail } from '@sveltejs/kit';
import type { scannerCardType } from '$types';
import { z } from 'zod';

export const load: PageLoad = async ({ params }) => {
	const { id } = params;
	const { data: student, error: err } = await supabase
		.from<studentType>('students')
		.select(`*, phones(*), scanner_cards(*)`)
		.eq('id', id)
		.single();

	if (err) {
		throw fail(err);
	}

	return {
		student
	};
};

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
				throw error(400, 'Card Length Should Be 5 Numbers');
			}

			const { data: new_card, error: err } = await supabase
				.from('scanner_cards')
				.insert([formObj])
				.single();
			if (err) {
				throw error('Supabase Error', err);
			}

			console.log('new card', new_card);

			return { ...new_card };
		} catch (err) {
			console.error('err', err);
			const { fieldErrors: errors } = err.flatten();
			return {
				data: formObj,
				errors
			};
		}
	}
};
