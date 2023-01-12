import type { studentType } from '$lib/types';
import supabase from '$lib/db';
import { fail } from '@sveltejs/kit';

export const load: PageLoad = async ({ url }) => {
	const search = url.searchParams.get('search');

	if (search) {
		const { data, error: err } = await supabase.rpc<studentType>('fuzzy_search', {
			search_string: search
		});
		if (err) {
			console.error('error stuff', err);
			throw fail(500, err);
		}
		return {
			students: data
		};
	} else {
		const { data, error: err } = await supabase
			.from<studentType[]>('students')
			.select('*')
			.order('last_name', { ascending: true })
			.limit(100);
		if (err) {
			console.error('error stuff', err);
			throw fail(500, err);
		}
		return {
			students: data
		};
	}
};

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
