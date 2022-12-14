import supabase from '$lib/db';
import { error } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const form_data = await request.formData();
		const new_data = Object.fromEntries(form_data.entries());

		return { ...new_data };
	}
};
