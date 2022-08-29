<script>
	import { page } from '$app/stores';
	import supabase from '$lib/db';

	let student = supabase
		.from('students')
		.select(`*, phones(*)`)
		.eq('id', $page.params.id)
		.single()
		.then((res) => {
			console.log(res);
			return res;
		});
</script>

<svelte:head>
	{#await student}
		<title>Getting Student...</title>
	{:then { data }}
		<title>{data.first_name} {data.last_name}</title>
	{:catch error}
		<title>Error</title>
	{/await}
</svelte:head>

{#await student}
	...loading
{:then { data }}
	<h1>{data.first_name} {data.last_name}</h1>
	<ul>
		{#each data.phones as phone}
			<li>{phone.label}:{phone.phone}</li>
		{/each}
	</ul>
{:catch error}
	<!-- student was rejected -->
{/await}
