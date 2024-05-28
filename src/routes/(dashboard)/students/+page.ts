import type { studentType } from '$lib/types';
import supabase from '$lib/db';
import { fail, error } from '@sveltejs/kit';

export const load: PageLoad = async ({ url }) => {
	const search: string = url.searchParams.get('search');
	const page: number = parseInt(url.searchParams.get('page')) || 1;

	if (search) {
		const { data, error: err } = await supabase.rpc('fuzzy_search', {
			search_string: search
		});
		if (err) {
			console.error('error stuff', err);
			return error(500, err);
		}
		return {
			students: data,
			totalRows: 0,
			currentPage: page
		};
	} else {
		const {
			data,
			error: err,
			count
		} = await supabase
			.from<studentType[]>('students')
			.select('*', { count: 'exact' })
			.order('last_name', { ascending: true })
			.range((page - 1) * 50, (page - 1) * 50 + 49);
		if (err) {
			console.error('error stuff', err);
			return error(500, err);
		}

		return {
			students: data,
			totalRows: count || 0,
			currentPage: page
		};
	}
};
