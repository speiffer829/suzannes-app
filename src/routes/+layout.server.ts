import type { LayoutServerLoad } from './$types';
import { getServerSession } from '@supabase/auth-helpers-sveltekit';

export async function load(e): LayoutServerLoad {
	return {
		session: await getServerSession(e)
	};
}
