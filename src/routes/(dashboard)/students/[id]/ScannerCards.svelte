<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import supabase from '$lib/db';
	import { enhance } from '$app/forms';
	import { is_full_screen_loading } from '$lib/store';
	import Icon from '$lib/components/Icon.svelte';

	export let scanner_cards, student_id;
	export let pathname: string;

	$: console.log(scanner_cards);

	let is_add_card_modal_open = false;
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
		use:enhance={() => {
			$is_full_screen_loading = true;
			return async (result) => {
				$is_full_screen_loading = false;
				is_add_card_modal_open = false;
			};
		}}
	>
		<Input name="card_number" placeholder="12345" label="Card Number" autofocus />
		<button class="btn" type="submit">Save</button>
	</form>
</Modal>
