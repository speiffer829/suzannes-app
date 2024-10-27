<script lang="ts"></script>

<h1 class=" mx-auto w-fit p-6 pt-12 text-center text-4xl xl:text-6xl">Welcome, Spenser</h1>
<h2 class=" text-center font-sans text-xl xl:text-2xl">What would you like to do today?</h2>

{#snippet box(title: string, href: string, description: string, icon: string)}
	<a
		{href}
		class="group rounded-xl bg-slate-200 p-4 py-8 text-dark transition-colors duration-300 @container hover:bg-dark hover:text-pink"
	>
		<div
			class="mb-4 flex items-center justify-center text-pink-500 transition-colors duration-300 group-hover:text-white"
		>
			{@html icon}
		</div>
		<h3 class="text-center text-xl @md:text-2xl @lg:text-3xl">{title}</h3>
		<p class="text-center">{description}</p>
	</a>
{/snippet}

<div class="mt-9 grid gap-4 sm:grid-cols-2">
	{@render box(
		'Look Up A Student',
		'/students?open_search',
		'Search for a student and then edit or print',
		'<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-search"><path d="M21 6H3"/><path d="M10 12H3"/><path d="M10 18H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/></svg>'
	)}

	{@render box(
		'Add A New Student',
		'/students/new',
		'Create a new student in the database',
		'<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/></svg>'
	)}
</div>

