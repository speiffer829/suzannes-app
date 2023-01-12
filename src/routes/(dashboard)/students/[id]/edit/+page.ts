import type { PageLoad } from './$types';
import supabase from '$lib/db';

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
