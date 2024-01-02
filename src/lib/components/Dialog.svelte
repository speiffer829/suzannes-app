<script lang="ts">
	import { portal } from '$lib/scripts/portal';
	import type { Snippet } from 'svelte';

	type Props = {
		dialog: HTMLDialogElement | undefined;
		class?: string;
		children: Snippet;
	};
	let { dialog, class: classes, children } = $props<Props>();

	$effect(() => {
		dialog?.querySelector('::backdrop')?.addEventListener('click', () => dialog?.close());
	});

	function click_stuff(e: MouseEvent) {
		if (e.target === dialog) dialog.close();
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<dialog bind:this={dialog} on:close on:click={click_stuff} class="card modal-body p-0 {classes}">
	<div class="pt-9 pb-6 px-10">
		{@render children()}
		<button class="close-btn" title="close window" on:click={() => dialog?.close()}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="3"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg
			>
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
