import { AuthApiError } from '@supabase/supabase-js';
import { fail, redirect } from '@sveltejs/kit';
import { getErrorMap } from 'zod';

export const actions: Actions = {
	default: async (event) => {
		const { request, locals } = event;
		const body = Object.fromEntries(await request.formData());

		const { data, error: err } = await locals.sb.auth.signInWithPassword({
			email: body.email,
			password: body.password
		});

		if (err) {
			if (err instanceof AuthApiError && err.status === 400) {
				return fail(400, {
					error: 'Invalid credentials'
				});
			}
			return fail(500, {
				error: 'Server Error 500',
				msg: err
			});
		}
		const redirect_to = event.url.searchParams.get('redirect_to');

		if (redirect_to) {
			redirect(303, `${redirect_to}`);
		}
		redirect(303, '/');
	}
};
