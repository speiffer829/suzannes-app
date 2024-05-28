<script lang="ts">
	type Props = {
		currentPage: number;
		totalRows: number;
		perPage?: number;
	};
	let { currentPage = 0, totalRows = 0, perPage = 50 }: Props = $props();

	const totalPages = totalRows ? Math.ceil(totalRows / perPage) : 0;
</script>

{#if totalRows >= perPage}
	<nav class="py-4 flex justify-center gap-2 relative" aria-label="Pagination">
		<a href="?page={currentPage - 1}" class="page-link">
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
				class="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg
			>
			<span class="sr-only">Previous Page</span>
		</a>

		<!-- <div
			id="pages-popover"
			class="absolute bg-white shadow-xl border border-dark rounded-lg p-4 grid grid-cols-7 bottom-full"
		>
			{#each Array.from({ length: totalPages }, (_, i) => i + 1) as page}
				<a
					href="?page={page}"
					class="flex justify-center items-center aspect-square py-2 px-4"
					class:font-bold={page === currentPage}
				>
					{page}
				</a>
			{/each}
		</div> -->

		<button popovertarget="pages-popover">
			{currentPage} / {totalPages}
		</button>
		<a href="?page={currentPage + 1}" class="page-link">
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
				class="lucide lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg
			>
			<span class="sr-only">Next Page</span>
		</a>
	</nav>
{/if}

<style>
	nav a {
		border-radius: 999px;
		padding: theme('spacing.2');
		transition:
			background-color 300ms,
			color 300ms;
	}

	nav a:hover {
		background-color: theme('colors.dark.DEFAULT');
		color: theme('colors.pink.DEFAULT');
	}
</style>
