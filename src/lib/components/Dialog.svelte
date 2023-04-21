<script lang="ts">
	import { portal } from '$lib/scripts/portal';
	import { X } from 'lucide-svelte';

	export let dialog: HTMLDialogElement;
	let classes: string = '';
	export { classes as class };
</script>

<dialog bind:this={dialog} on:close class="card modal-body pt-9 {classes}" use:portal>
	<slot />
	<button class="close-btn" title="close window" on:click={() => dialog.close()}>
		<X size={20} strokeWidth={3} />
	</button>
</dialog>

<style lang="postcss">
	dialog {
		width: min(90%, 700px);

		&::backdrop {
			@apply bg-dark/50;
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
