import supabase from '$lib/db';
import { error } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const form_data = await request.formData();
		form_data.delete('ignore-phone-label');
		form_data.delete('ignore-phone');
		const new_data = Object.fromEntries(form_data.entries());
		new_data.phones = JSON.parse(new_data.phones);
		console.log(new_data);

		return { ...new_data };
	}
};
