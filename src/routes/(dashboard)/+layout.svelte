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
		padding-left: 300px;
	}
</style>
