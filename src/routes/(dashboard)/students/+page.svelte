<script>
	import { studentSearch } from '$lib/store';
	import { format } from 'date-fns';
	import supabase from '$lib/db';
	import { scale } from 'svelte/transition';
	import Loading from '$lib/components/Loading.svelte';

	let students = $studentSearch
		? supabase.rpc('fuzzy_search', { search_string: $studentSearch })
		: supabase.from('students').select('*').order('last_name', { ascending: true }).limit(100);

	async function searchStudents() {
		if ($studentSearch === '') {
			students = supabase
				.from('students')
				.select('*')
				.order('last_name', { ascending: true })
				.limit(100);
			return;
		}
		students = supabase.rpc('fuzzy_search', { search_string: $studentSearch });
	}

	async function allStudents() {
		$studentSearch = '';
		students = supabase
			.from('students')
			.select('*')
			.order('last_name', { ascending: true })
			.limit(100);
	}
</script>

<svelte:head>
	<title>Students | SuzApp</title>
</svelte:head>
<form on:submit|preventDefault={searchStudents}>
	<input type="text" bind:value={$studentSearch} placeholder="Search Students" />
	{#if $studentSearch}
		<!-- content here -->
		<button
			transition:scale|local={{ duration: 250 }}
			type="button"
			on:click|preventDefault={allStudents}
			class="clear-btn"
			title="Clear Search"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="feather feather-x"
				><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg
			></button
		>
	{/if}
	<button type="submit" title="Submit Search"
		><svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="feather feather-search"
			><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg
		></button
	>
</form>

<a href="/students/add-student" class="btn mb-2" title="Add A New Students">
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
		class="feather feather-user-plus"
		><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line
			x1="20"
			y1="8"
			x2="20"
			y2="14"
		/><line x1="23" y1="11" x2="17" y2="11" /></svg
	>
	<span>New Student</span>
</a>

{#await students}
	<Loading style="min-height: 500px;" />
{:then { data, error }}
	<table id="students-contain">
		<thead>
			<tr>
				<td>Name</td>
				<td>D.O.B.</td>
				<td>Grade</td>
			</tr>
		</thead>
		<tbody>
			{#each data as student (student.id)}
				<tr>
					<td
						><a
							href={`/students/${student.id}`}
							title={`View ${student.first_name} ${student.last_name}'s Profile`}
							>{student.first_name} <strong>{student.last_name}</strong></a
						></td
					>
					<!-- <td><a href={`/students/${student.id}`}>{student.dob}</a></td> -->
					<td
						><a
							href={`/students/${student.id}`}
							title={`View ${student.first_name} ${student.last_name}'s Profile`}
							>{format(new Date(student.dob), 'MM/dd/yyyy')}</a
						></td
					>
					<td
						><a
							href={`/students/${student.id}`}
							title={`View ${student.first_name} ${student.last_name}'s Profile`}>{student.grade}</a
						></td
					>
				</tr>
			{/each}
		</tbody>
	</table>
{:catch error}
	<h1>Uh oh!</h1>
	<pre>
			{error}
		</pre>
{/await}

<style lang="scss">
	table {
		width: 100%;
		border-radius: 16px;
		overflow: hidden;

		tbody tr {
			transition: all 150ms;
			&:hover {
				border-radius: 10px;
				background-color: var(--pink);
				color: var(--dark);
			}
		}
		tr:nth-of-type(even) {
			background: rgb(11 14 31 / 10%);
		}

		td {
			a {
				padding: 1rem;
				width: 100%;
				display: block;
			}
		}
	}

	thead {
		background: var(--dark);
		color: var(--light);

		td {
			padding: 1rem;
		}
	}

	form {
		position: relative;
		width: min(680px, 90%);
		margin: 2rem auto;

		input {
			width: 100%;
			font-size: 32px;
			padding: 0.5rem 1rem;
			background: #fff;
			border: solid 2px var(--dark);
			border-radius: 16px;
			color: var(--dark);
			outline: none;
			box-shadow: var(--shadow);

			&:focus {
				border-color: var(--pink);
			}
		}

		button {
			background: var(--pink);
			color: var(--dark);
			padding: 12px 12px;
			border-radius: 12px;
			position: absolute;
			right: 15px;
			top: 50%;
			transform: translateY(-50%);
			font-size: 20px;
			font-weight: 700;
			box-shadow: var(--shadow);
			transition: all 250ms;

			&.clear-btn {
				right: 70px;
				background: var(--red);
			}
			&:hover {
				background: var(--dark);
				color: var(--pink);
			}
		}
	}
</style>
