<script>
	import { page } from '$app/stores';

	$: console.log($page);

	let crumbs;

	$: {
		// Remove zero-length tokens.
		const tokens = $page.url.pathname.split('/').filter((t) => t !== '');
		console.log(tokens);

		// Create { label, href } pairs for each token.
		let tokenPath = '';
		crumbs = tokens.map((t) => {
			tokenPath += '/' + t;
			return {
				label: t,
				href: tokenPath
			};
		});

		// Add a way to get home too.
		// crumbs.unshift({ label: 'home', href: '/' });
	}
</script>

<div id="breadcrumbs" class="w-full border-b-2 pt-5 pb-2 mb-3">
	{#each crumbs as c, i}
		{#if i == crumbs.length - 1}
			{c.label}
		{:else}
			<a href={c.href}>{c.label}</a> &gt;&nbsp;
		{/if}
	{/each}
</div>
