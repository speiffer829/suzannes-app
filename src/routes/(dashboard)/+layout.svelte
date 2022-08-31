<script>
	import Sidebar from './Sidebar.svelte';
	import Breadcrumbs from './Breadcrumbs.svelte';
</script>

<div id="page">
	<Sidebar />
	<main>
		<Breadcrumbs />
		<slot />
	</main>
</div>

<style lang="scss">
	#page {
		padding-left: 300px;
		max-width: 1630px;
		width: 90%;
		margin: 0 auto;
	}

	main {
		padding: 1rem 0;
	}
</style>
