import supabase from '$lib/db';

export async function load() {
	const student = await supabase
		.from('students')
		.select()
		.eq('id', 1)
		.single()
		.then(({ data }) => data);
	return {
		...student
	};
}
