<script lang="ts">
	import { JsonView } from '@zerodevx/svelte-json-view';
	import { page } from '$app/stores';
	import { slide } from 'svelte/transition';
	import { ChevronDown } from 'lucide-svelte';

	let is_code_open = false;
</script>

<svelte:head>
	<title>Error 404! | Suzanne's</title>
</svelte:head>

<div class="min-h-screen flex justify-center items-center py-7">
	<div>
		<img src="/dog_shrug.webp" alt="dog shrugging" class="max-w-full mx-auto h-auto max-h-96" />
		<h1 class="text-center mt-8 text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black">
			Page Not Found!
		</h1>
		<div class="mt-14 text-periwinkle-500 bg-dark pt-0 rounded-lg overflow-hidden">
			<button
				class=" p-4 w-full flex justify-between hover:bg-pink-500 hover:text-dark transition-all"
				on:click={() => (is_code_open = !is_code_open)}
			>
				{is_code_open ? 'Hide' : 'View'} Error Object
				<span class:rotate-180={is_code_open} class="transition-transform duration-300">
					<ChevronDown />
				</span>
			</button>
			{#if is_code_open}
				<div transition:slide|local class="p-4 pt-0 font-mono">
					<div class="border-t-periwinkle-500/50 border-t-2 pt-4">
						<JsonView json={$page} --jsonBracketColor="var(--pink)" />
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>
