<script lang="ts">
	import Sidebar from './Sidebar.svelte';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};
	let { children } = $props<Props>();
</script>

<div id="page" class="pt-16 lg:pt-0">
	<Sidebar />
	<main>
		{@render children()}
	</main>
</div>

<style lang="postcss">
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
