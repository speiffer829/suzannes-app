<script>
	import { fly, scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { backIn } from 'svelte/easing';
	import Portal from '$lib/components/Portal.svelte';
	import { toast } from './toast';
	import ToastMessage from './ToastMessage.svelte';
</script>

<div class="toast-wrapper">
	{#each $toast as { msg, duration, id, color, isPersisting } (id)}
		<div
			class="toast {color}"
			out:scale={{ easing: backIn }}
			in:fly={{ x: 100 }}
			animate:flip={{ duration: 1000, delay: 200 }}
			on:click={() => toast.remove(id)}
		>
			<ToastMessage {isPersisting} {id} {msg} {duration} />
		</div>
	{/each}
</div>

<style lang="scss">
	.toast-wrapper {
		position: fixed;
		bottom: 20px;
		right: 20px;
		width: min(80%, 300px);
		z-index: 1001;
	}

	.toast {
		margin-bottom: 1rem;
		padding: 20px;
		border-radius: 15px;
		box-shadow: var(--shadow);
		background: var(--pink);
		color: var(--dark);
		display: block;

		&.green {
			background: var(--green);
		}
		&.red {
			background: var(--red);
		}
		&.periwinkle {
			background: var(--periwinkle);
		}
		&.yellow {
			background: var(--yellow);
		}
	}
</style>
