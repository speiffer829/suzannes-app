<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import Portal from '$lib/components/Portal.svelte';
	import { backInOut } from 'svelte/easing';
	import { X } from 'lucide-svelte';

	export let is_open: boolean = false;
	let classes = '';
	export { classes as class };
	export let ariaDescribedby = '';
	export let ariaLabelledby = '';

	function handleKeyDown(e) {
		if (e.key === 'Escape') is_open = false;
	}
</script>

<svelte:window on:keydown={handleKeyDown} />

{#if is_open}
	<div
		class="overlay"
		on:click|self={() => (is_open = false)}
		on:keydown={handleKeyDown}
		role="alertdialog"
		aria-labelledby={ariaLabelledby}
		aria-describedby={ariaDescribedby}
		aria-modal="true"
	>
		<div
			class="card modal-body pt-9 {classes}"
			transition:scale={{ easing: backInOut, duration: 500 }}
		>
			<button class="close-btn" title="close window" on:click={() => (is_open = false)}>
				<X size={20} strokeWidth={3} />
			</button>
			<slot />
		</div>
	</div>
{/if}

<style lang="scss">
	.modal-body {
		position: relative;
		width: min(90%, 700px);
		z-index: 1002;
	}

	.overlay {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgb(0 0 0 / 50%);
		z-index: 1000;

		display: flex;
		justify-content: center;
		align-items: center;

		overflow-y: auto;
		padding: 3rem 0;
		max-height: 100vh;

		@media screen and (min-height: 1000px) {
			align-items: center;
		}
	}

	.close-btn {
		position: absolute;
		right: 10px;
		top: 10px;
		width: 30px;
		height: 30px;
		border-radius: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: var(--dark);
		transition: all 250ms;

		&:hover {
			background: var(--red);
		}
	}
</style>
