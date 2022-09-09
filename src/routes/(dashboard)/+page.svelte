<script>
	import { browser } from '$app/environment';
	if (browser) {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		console.log(queryString);
	}
</script>

<h1>Welcome to SvelteKit</h1>

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<a href="/sign-in">Sign In</a>
