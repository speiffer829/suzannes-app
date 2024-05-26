import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$toast: './src/lib/components/toast/toast.ts',
			$store: './src/lib/store.ts',
			$types: './src/lib/types.ts'
		}
	}
};

export default config;
