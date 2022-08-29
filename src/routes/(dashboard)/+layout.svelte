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
	}
</style>
