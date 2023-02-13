<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import { enhance } from '$app/forms';
	import { is_full_screen_loading } from '$store';
	import { toast } from '$toast';
	import BubbleMenu from '$lib/components/BubbleMenu.svelte';
	import { flip } from 'svelte/animate';
	import { fade, slide } from 'svelte/transition';
	import supabase from '$lib/db';
	import { invalidateAll } from '$app/navigation';
	import { CreditCard, Plus } from 'lucide-svelte';
	import type { scannerCardType } from '$lib/types';
	import type { ActionResult } from '@sveltejs/kit';

	export let scanner_cards: scannerCardType[];
	export let student_id: number;
	export let form;

	let is_add_card_modal_open = false;

	async function removeCard(id: number) {
		const { data, error } = await supabase.from('scanner_cards').delete().eq('id', id);
		if (!error) {
			scanner_cards = [...scanner_cards].filter((card) => card.id !== id);
			toast.send('Card Removed');
		} else {
			toast.send('There was an error. Try again', { color: 'red' });
		}
	}

	async function handleForm({}) {
		$is_full_screen_loading = true;
		return async ({ result }: { result: ActionResult }) => {
			$is_full_screen_loading = false;
			is_add_card_modal_open = false;
			console.log(result);

			if (result.type === 'success' && result.data) {
				invalidateAll();
				toast.send(`Card #${result?.data.card_number} Has Been Added!`, { color: 'green' });
			} else if (result.type === 'error') {
				toast.send(`Error: ${result.error.details}`, { duration: 10000, color: 'red' });
			}
		};
	}
</script>

<section class="cards-card">
	<div class="card">
		<h2 class="text-xl font-bold pink-underline">Scanner Cards</h2>
		{#if scanner_cards.length}
			<ul class="mt-3">
				{#each scanner_cards as { id, card_number } (id)}
					<li
						class="py-2 flex items-center gap-2 border-b-dark border-b-2"
						animate:flip
						in:slide
						out:fade|local
					>
						<CreditCard />
						<span class="text-xl flex-1">{card_number}</span>
						<BubbleMenu
							options={[{ text: `Delete Card #${card_number}`, callback: () => removeCard(id) }]}
						/>
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
			title="Add Scan Card"
			class="btn small-btn mx-auto mt-4"
			class:mx-auto={!scanner_cards.length}
			on:click={() => (is_add_card_modal_open = !is_add_card_modal_open)}
		>
			<Plus size={20} />
			Add A Card
		</button>
	</div>
</section>

<Modal bind:is_open={is_add_card_modal_open}>
	<form method="POST" action="?/add_card" use:enhance={handleForm}>
		<Input
			name="card_number"
			placeholder="12345"
			label="Card Number"
			autofocus
			other_stuff={{ autocomplete: 'off' }}
		/>
		<input type="hidden" value={student_id} name="student_id" />
		<button class="btn" type="submit"><Plus /> Add Card</button>
	</form>
</Modal>
