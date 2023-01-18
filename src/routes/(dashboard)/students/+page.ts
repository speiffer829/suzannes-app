import type { studentType } from '$lib/types';
import supabase from '$lib/db';
import { fail, error } from '@sveltejs/kit';

export const load: PageLoad = async ({ url }) => {
	const search = url.searchParams.get('search');

	if (search) {
		const { data, error: err } = await supabase.rpc<studentType>('fuzzy_search', {
			search_string: search
		});
		if (err) {
			console.error('error stuff', err);
			return error(500, err);
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
			return error(500, err);
		}
		return {
			students: data
		};
	}
};
