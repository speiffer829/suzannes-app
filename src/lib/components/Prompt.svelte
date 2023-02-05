<script lang="ts">
	/*
		Prompt
	*/

	import { createEventDispatcher } from 'svelte';
	import Modal from './Modal.svelte';

	export let is_open: boolean = false;

	export let confirm_text = 'Confirm';
	export let confirm_color: 'red' | 'gray' | 'green' | 'pink' | 'coral' = 'pink';

	export let cancel_text = 'Cancel';
	export let cancel_color: 'red' | 'gray' | 'green' | 'pink' | 'coral' = 'gray';

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
		<button
			title="Confirm"
			on:click={() => dispatch('confirm')}
			class="btn confirm-btn {confirm_color}">{confirm_text}</button
		>
	</div>
</Modal>

<style lang="postcss">
	.btn {
		@apply bg-gray-300 hover:text-gray-300 hover:bg-dark;

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
	}
</style>
