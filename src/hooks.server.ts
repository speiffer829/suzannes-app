import '$lib/db';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const { session, supabaseClient } = await getSupabase(event);
	event.locals.sb = supabaseClient;
	event.locals.session = session;

	if (event?.route?.id?.includes('(dashboard)') && !event.locals.session) {
		throw redirect(303, '/login');
	}

	return resolve(event);
};
