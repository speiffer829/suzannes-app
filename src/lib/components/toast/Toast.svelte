<script>
	import { fly, scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import Portal from '$lib/components/Portal.svelte';
	import { toast } from './toast';
	import ToastMessage from './ToastMessage.svelte';
</script>

<Portal>
	<div class="toast-wrapper">
		{#each $toast as { msg, duration, id, color } (id)}
			<div
				class="toast {color}"
				in:fly={{ opacity: 0, x: 100 }}
				out:scale
				animate:flip
				on:click={() => toast.remove(id)}
			>
				<ToastMessage {id} {msg} {duration} />
			</div>
		{/each}
	</div>
</Portal>

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
		box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.3);
		background: var(--pink);
		color: var(--dark);

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
