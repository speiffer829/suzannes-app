<script>
	import supabase from '$lib/db';

	let students = supabase.from('students').select('first_name, id');
</script>

<h1>Students</h1>

{#await students}
	...loading
{:then students}
	{@const { data } = students}
	<ul>
		{#each data as student}
			<li><a href={`/students/${student.id}`}>{student.first_name}</a></li>
		{/each}
	</ul>
{:catch error}
	<h1>Uh oh!</h1>
	<pre>
		{error}
	</pre>
{/await}
