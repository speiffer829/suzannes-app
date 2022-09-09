<script lang="ts">
	export let scanner_cards;
</script>

<section class="cards-card">
	<div class="card">
		<h2 class="text-xl font-bold pink-underline">Scanner Cards</h2>
		{#if scanner_cards.length}
			<ul>
				{#each scanner_cards as { id, card_number }}
					<li>{card_number}</li>
				{/each}
			</ul>
		{:else}
			<p class="text-center mt-4 mb-2 mx-auto text-gray-400 font-semibold text-3xl">
				No Scan Cards
			</p>
			<p class="text-gray-400 mb-4 text-center">Hit the button to add one.</p>
			<button class="btn small-btn mx-auto">
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
		{/if}
	</div>
</section>
