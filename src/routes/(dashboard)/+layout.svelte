<script>
	import Sidebar from './Sidebar.svelte';
	import Breadcrumbs from './Breadcrumbs.svelte';
</script>

<div id="page" class="pt-16 lg:pt-0">
	<Sidebar />
	<main>
		<Breadcrumbs />
		<slot />
	</main>
</div>

<style lang="scss">
	#page {
		max-width: 1330px;
		width: 90%;
		margin: 0 auto;

		@media screen and (min-width: 1024px) {
			padding-left: 300px;
		}
	}

	main {
		padding: 1rem 0;
	}
</style>
