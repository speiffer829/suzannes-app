<script>
	import Sidebar from './Sidebar.svelte';
</script>

<div id="page">
	<Sidebar />
	<main>
		<slot />
	</main>
</div>

<style lang="scss">
	#page {
		display: grid;
		grid-template-columns: 250px 1fr;
	}
</style>
