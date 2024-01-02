<script lang="ts">
	import { page } from '$app/stores';
	import { slide } from 'svelte/transition';

	let is_code_open = $state(false);
</script>

<svelte:head>
	<title>Error 404! | Suzanne's</title>
</svelte:head>

<div class="min-h-screen flex justify-center items-center py-7 overflow-scroll max-w-full">
	<div class="max-w-full">
		<img
			src="/dog_shrug.webp"
			alt="dog shrugging"
			class="rounded-lg max-w-5xl mx-auto h-auto max-h-96"
		/>
		<h1 class="text-center mt-8 text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black">
			Page Not Found!
		</h1>
		<div class="mt-14 text-periwinkle-500 bg-dark pt-0 rounded-lg overflow-scroll max-w-full">
			<button
				class=" p-4 w-full flex justify-between hover:bg-pink-500 hover:text-dark transition-all"
				on:click={() => (is_code_open = !is_code_open)}
			>
				{is_code_open ? 'Hide' : 'View'} Error Object
				<span class:rotate-180={is_code_open} class="transition-transform duration-300">
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
						class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg
					>
				</span>
			</button>
			{#if is_code_open}
				<div transition:slide class="p-4 pt-0 font-mono max-w-full overflow-scroll">
					<div class="border-t-periwinkle-500/50 border-t-2 pt-4">
						<code>
							<pre>
								{$page}
							</pre>
						</code>
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>
