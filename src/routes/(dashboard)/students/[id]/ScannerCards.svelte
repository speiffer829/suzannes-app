<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import { enhance } from '$app/forms';
	import { is_full_screen_loading } from '$store';
	import Icon from '$lib/components/Icon.svelte';
	import { toast } from '$toast';

	export let scanner_cards, student_id;
	export let pathname: string;

	let is_add_card_modal_open = false;

	async function handleResult({ result }) {
		console.log(result);
	}
</script>

<section class="cards-card">
	<div class="card">
		<h2 class="text-xl font-bold pink-underline">Scanner Cards</h2>
		{#if scanner_cards.length}
			<ul class="mt-3">
				{#each scanner_cards as { id, card_number } (id)}
					<li class="py-2 flex items-center gap-2 border-b-dark border-b-2">
						<Icon icon="credit-card" />
						<span class="text-xl">{card_number}</span>
					</li>
				{/each}
			</ul>
		{:else}
			<p class="text-center mt-4 mb-2 mx-auto text-gray-400 font-semibold text-3xl">
				No Scanner Cards
			</p>
			<p class="text-gray-400 mb-4 text-center">Hit the button to add one.</p>
		{/if}
		<button
			class="btn small-btn mx-auto mt-4"
			class:mx-auto={!scanner_cards.length}
			on:click={() => (is_add_card_modal_open = !is_add_card_modal_open)}
		>
			<Icon icon="plus" />
			Add A Card
		</button>
	</div>
</section>

<Modal bind:is_open={is_add_card_modal_open}>
	<form
		method="POST"
		action="?/add_card"
		use:enhance={({ form, data, cancel }) => {
			$is_full_screen_loading = true;
			return async ({ result }) => {
				$is_full_screen_loading = false;
				is_add_card_modal_open = false;
				if (result.type === 'success') {
					scanner_cards = [...scanner_cards, result.data];
				} else {
					toast.send('Uh Oh. There Was An Error');
				}
			};
		}}
	>
		<Input name="card_number" placeholder="12345" label="Card Number" autofocus />
		<input type="hidden" value={student_id} name="student_id" />
		<button class="btn" type="submit"><Icon icon="plus" /> Add Card</button>
	</form>
</Modal>
