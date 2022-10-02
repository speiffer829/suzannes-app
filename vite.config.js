import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$toast: '/src/lib/components/toast/toast.ts',
			$store: '/src/lib/store.ts'
		}
	}
};

export default config;
