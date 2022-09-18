<script lang="ts">
	import { studentSearch } from '$lib/store';
	import { format } from 'date-fns';
	import supabase from '$lib/db';
	import { scale } from 'svelte/transition';
	import Loading from '$lib/components/Loading.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import type { studentType } from '$lib/types';

	let students = $studentSearch
		? supabase.rpc<studentType>('fuzzy_search', { search_string: $studentSearch })
		: supabase
				.from<studentType>('students')
				.select('*')
				.order('last_name', { ascending: true })
				.limit(100);

	async function searchStudents() {
		if ($studentSearch === '') {
			students = supabase
				.from<studentType>('students')
				.select('*')
				.order('last_name', { ascending: true })
				.limit(100);
			return;
		}
		students = supabase.rpc<studentType>('fuzzy_search', { search_string: $studentSearch });
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
		>
			<Icon icon="x" />
		</button>
	{/if}
	<button type="submit" title="Submit Search">
		<Icon icon="search" />
	</button>
</form>

<a href="/students/add-student" class="btn mb-2" title="Add A New Students">
	<Icon icon="user-plus" />
	<span>New Student</span>
</a>

{#await students}
	<Loading style="min-height: 500px;" />
{:then { data, error }}
	{#if error}
		<div class="block bg-red rounded-lg p-3">
			<h2 class="text-center text-2xl">Error</h2>
			<p>{error}</p>
		</div>
	{:else}
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
								title={`View ${student.first_name} ${student.last_name}'s Profile`}
								>{student.grade}</a
							></td
						>
					</tr>
				{/each}
			</tbody>
		</table>
	{/if}
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
