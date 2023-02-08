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
`on:confirm` = on confirm
`on:cancel` = on cancel, default close window
-->
<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Modal from './Modal.svelte';

	export let is_open: boolean = false;

	export let confirm_text = 'Confirm';
	export let confirm_color: 'red' | 'gray' | 'green' | 'pink' | 'coral' | 'yellow' = 'pink';

	export let cancel_text = 'Cancel';
	export let cancel_color: 'red' | 'gray' | 'green' | 'pink' | 'coral' | 'yellow' = 'gray';

	const dispatch = createEventDispatcher();

	function handleCancel() {
		is_open = false;
		dispatch('cancel');
	}
</script>

<Modal bind:is_open>
	<div class="text-lg">
		<slot />
	</div>

	<div class="flex justify-end gap-2 mt-8">
		<button title="Cancel" on:click={handleCancel} class="btn cancel-btn {cancel_color}"
			>{cancel_text}</button
		>
		<slot name="btns" />
		<button
			title="Confirm"
			on:click={() => dispatch('confirm')}
			class="btn confirm-btn {confirm_color}">{confirm_text}</button
		>
	</div>
</Modal>

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
