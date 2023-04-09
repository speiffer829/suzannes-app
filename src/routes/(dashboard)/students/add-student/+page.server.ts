import supabase from '$lib/db';
import { error } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const form_data = await request.formData();
		form_data.delete('ignore-label');
		form_data.delete('ignore-phone');
		form_data.delete('ignore-phone');
		const new_data = Object.fromEntries(form_data.entries());
		const new_phones = new_data.phones;

		//remove phones from new_data
		delete new_data.phones;

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
