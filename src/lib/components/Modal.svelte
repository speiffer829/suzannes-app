<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import Portal from '$lib/components/Portal.svelte';
	import { backInOut } from 'svelte/easing';
	import Icon from './Icon.svelte';

	export let is_open: boolean = false;
</script>

{#if is_open}
	<Portal>
		<div class="overlay" transition:fade={{ duration: 500 }} on:click={() => (is_open = false)} />
	</Portal>

	<Portal>
		<div class="card modal-body" transition:scale={{ easing: backInOut, duration: 500 }}>
			<button class="close-btn" title="close window" on:click={() => (is_open = false)}>
				<Icon icon="x" size={20} stroke_width={3} />
			</button>
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
