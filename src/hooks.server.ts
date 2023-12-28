import '$lib/db';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const { session, supabaseClient } = await getSupabase(event);
	event.locals.sb = supabaseClient;
	event.locals.session = session;

	if (event?.route?.id?.includes('(dashboard)') && !event.locals.session) {
		const last_url = event.url.pathname + event.url.search;
		redirect(303, `/login?redirect_to=${last_url}`);
	}

	return resolve(event);
};
