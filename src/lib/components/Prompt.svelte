<script lang="ts">
	import type { Snippet } from 'svelte';
	import Dialog from './Dialog.svelte';

	interface Props {
		prompt?: HTMLDialogElement;
		class?: string;
		confirm_text?: string;
		confirm_color?: 'red' | 'gray' | 'green' | 'pink' | 'coral' | 'yellow';
		cancel_text?: string;
		cancel_color?: 'red' | 'gray' | 'green' | 'pink' | 'coral' | 'yellow';
		oncancel?: () => void;
		onconfirm?: () => void;
		children: Snippet;
		btns?: Snippet;
	}

	let {
		prompt = $bindable(),
		oncancel = () => {},
		onconfirm = () => {},
		class: classes,
		confirm_text = 'Confirm',
		confirm_color = 'pink',
		cancel_text = 'Cancel',
		cancel_color = 'gray',
		children,
		btns
	}: Props = $props();

	function handleCancel() {
		prompt?.close();
		oncancel();
	}
</script>

<Dialog bind:dialog={prompt} class={classes}>
	<div class="text-lg">
		{@render children()}
	</div>

	<div class="grid grid-cols-1 sm:flex justify-end flex-wrap gap-2 mt-8">
		<button title={cancel_text} onclick={handleCancel} class="btn cancel-btn {cancel_color}"
			>{cancel_text}</button
		>
		{#if btns}
			{@render btns()}
		{/if}
		<button
			title={confirm_text}
			onclick={() => onconfirm()}
			class="btn confirm-btn {confirm_color}">{confirm_text}</button
		>
	</div>
</Dialog>

<!--
@component

## Prompt 
Shows a prompt window with a default confirm btn and cancel btn

**default slot** - The Main question area

**btns slot** - option to add additional buttons in between the cancel and confirm buttons

### props
`is_open` - `boolean` - is the window open or not

`confirm_text` - `string` - Text on the confirm button

`confirm_color` - `'red' | 'gray' | 'green' | 'pink' | 'coral' | 'yellow'` - color of confirm button

`cancel_text` - `string` - Text on the cancel button

`cancel_color` - `'red' | 'gray' | 'green' | 'pink' | 'coral' | 'yellow'` - color of cancel button

### events
`onconfirm` = on confirm
`oncancel` = on cancel, default close window
-->
<style lang="postcss">
	.btn {
		@apply bg-slate-300 hover:text-slate-300 hover:bg-dark;

		&.red {
			@apply bg-red hover:text-red hover:bg-dark;
		}
		&.pink {
			@apply bg-pink hover:text-pink hover:bg-dark;
		}
		&.green {
			@apply bg-green hover:text-green hover:bg-dark;
		}
		&.coral {
			@apply bg-coral hover:text-coral hover:bg-dark;
		}
		&.yellow {
			@apply bg-amber-300 hover:text-amber-300 hover:bg-dark;
		}
	}
</style>
