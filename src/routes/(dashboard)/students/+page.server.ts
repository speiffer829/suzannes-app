import type { studentType } from '$lib/types';
import supabase from '$lib/db';
import { fail } from '@sveltejs/kit';

export const actions: Actions = {
	search: async ({ request }) => {
		const formStuff = await request.formData();
		const { search } = Object.fromEntries(formStuff.entries());
		const { data: students, error: err } = await supabase.rpc<studentType>('fuzzy_search', {
			search_string: search
		});

		if (err) {
			throw fail(500, err);
		}

		return {
			students,
			err
		};
	}
};
