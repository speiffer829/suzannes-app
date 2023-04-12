import supabase from '$lib/db';
import { error } from '@sveltejs/kit';
import { z } from 'zod';

// Zod Schema
const zod_schema = z.object({
	first_name: z
		.string({ required_error: 'Must Have a First Name' })
		.min(1, { message: 'Must Have a First Name' })
		.trim(),
	last_name: z
		.string({ required_error: 'Must Have a last name' })
		.min(1, { message: 'Must Have a last name' })
		.trim(),
	grade: z
		.string({ required_error: 'This Is Required' })
		.min(1, { message: 'This Is Required' })
		.max(64)
		.trim(),
	email: z
		.string({ required_error: 'This Is Required' })
		.email({ message: 'Must be valid email' })
		.min(1, { message: 'This Is Required' })
		.max(64)
		.trim(),
	dob: z
		.string({ required_error: 'This Is Required' })
		.min(1, { message: 'This Is Required' })
		.max(64)
		.trim()
});

export const actions = {
	default: async ({ request }) => {
		const form_data = await request.formData();
		form_data.delete('ignore-label');
		form_data.delete('ignore-phone');
		form_data.delete('ignore-phone');

		const new_data = Object.fromEntries(await form_data);
		// Validate form data
		try {
			const result = zod_schema.parse(new_data);
			console.log('res', result);
			return;
		} catch (zod_error) {
			const { fieldErrors: error } = zod_error.flatten();
			console.log('err', error);
			return {
				error,
				data: new_data
			};
		}

		// const new_phones = new_data.phones;

		//remove phones from new_data
		// delete new_data.phones;

		// Add student to database
		const { data, error } = await supabase
			.from('students')
			.insert([
				{
					...new_data
				}
			])
			.select()
			.single();

		if (error) {
			return { error };
		}

		return { ...data };
	}
};
