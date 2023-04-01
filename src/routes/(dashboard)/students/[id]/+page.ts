import supabase from '$lib/db';
import type { studentType } from '$lib/types';

export const load = (async ({ params }) => {
	const { id } = params;

	const { data: student, error: err } = await supabase
		.from('students')
		.select(`*, phones(*), scanner_cards(*)`)
		.eq('id', id)
		.single();

	if (err) {
		throw fail(err);
	}

	return {
		student
	};
}) satisfies PageLoad<studentType>;
