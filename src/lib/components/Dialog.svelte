<script lang="ts">
	import { portal } from '$lib/scripts/portal';
	import { X } from 'lucide-svelte';

	export let dialog: HTMLDialogElement;
	let classes: string = '';
	export { classes as class };

	$: dialog?.querySelector('::backdrop')?.addEventListener('click', () => dialog.close());

	function click_stuff(e: MouseEvent) {
		if (e.target === dialog) dialog.close();
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog bind:this={dialog} on:close on:click={click_stuff} class="card modal-body p-0 {classes}">
	<div class="pt-9 pb-6 px-10">
		<slot />
		<button class="close-btn" title="close window" on:click={() => dialog.close()}>
			<X size={20} strokeWidth={3} />
		</button>
	</div>
</dialog>

<style lang="postcss">
	dialog {
		width: min(90%, 700px);

		&::backdrop {
			@apply bg-dark/70 backdrop-blur-sm;
		}
	}

	dialog[open] {
		animation: show 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275) normal;
	}
	@keyframes show {
		from {
			scale: 0;
		}
		to {
			scale: 1;
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
