import { getServerSession } from '@supabase/auth-helpers-sveltekit';

export async function load(e): { session: any } {
	return {
		session: await getServerSession(e)
	};
}
