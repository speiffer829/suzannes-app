<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import Portal from '$lib/components/Portal.svelte';
	import { backInOut } from 'svelte/easing';
	export let is_open: boolean = false;
</script>

{#if is_open}
	<Portal>
		<div class="overlay" transition:fade={{ duration: 500 }} on:click={() => (is_open = false)} />
	</Portal>

	<Portal>
		<div class="card modal-body" transition:scale={{ easing: backInOut, duration: 500 }}>
			<slot />
		</div>
	</Portal>
{/if}

<style lang="scss">
	.modal-body {
		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: min(90%, 700px);
		z-index: 1002;
	}

	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: hsl(var(--darkHSL) / 50%);
		z-index: 1001;
	}
</style>
