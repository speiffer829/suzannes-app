<script>
	import { fly, scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import Portal from '$lib/components/Portal.svelte';
	import { toast } from './toast';
	import ToastMessage from './ToastMessage.svelte';
	export let duration = 1000;
</script>

<Portal>
	<div class="toast-wrapper">
		{#each $toast as msg (msg)}
			<div
				class="toast"
				in:fly={{ opacity: 0, x: 100 }}
				out:scale
				animate:flip
				on:click={toast.remove}
			>
				<ToastMessage {msg} {duration} />
			</div>
		{/each}
	</div>
</Portal>

<style>
	.toast-wrapper {
		position: fixed;
		inset: auto 20px 0 auto;
	}

	.toast {
		margin-bottom: 1rem;
		padding: 20px;
		border-radius: 15px;
		box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.3);
		background: coral;
		color: aliceblue;
	}
</style>
