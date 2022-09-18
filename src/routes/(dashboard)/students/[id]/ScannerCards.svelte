<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import supabase from '$lib/db';
	import { enhance } from '$app/forms';
	import { is_full_screen_loading } from '$lib/store';

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
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="feather feather-credit-card"
							><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line
								x1="1"
								y1="10"
								x2="23"
								y2="10"
							/></svg
						>
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
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="feather feather-plus"
				><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg
			>
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
