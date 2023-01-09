<script lang="ts">
	import { page } from '$app/stores';
	import { format } from 'date-fns';
	import { scale } from 'svelte/transition';
	import Icon from '$lib/components/Icon.svelte';
	import type { PageData } from './$types';
	import { invalidateAll, goto } from '$app/navigation';

	export let data: PageData;
	$: ({ students } = data);

	let search_form;
	let student_search = $page.url.searchParams.get('search') || '';

	async function allStudents() {
		student_search = '';
		$page.url.searchParams.delete('search');

		goto('/students');
	}
</script>

<svelte:head>
	<title>Students | SuzApp</title>
</svelte:head>

<form bind:this={search_form} method="GET">
	<input
		type="text"
		name="search"
		bind:value={student_search}
		placeholder="Search Students"
		autocomplete="off"
	/>
	{#if student_search}
		<button
			value="clear"
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

<table id="students-contain">
	<thead>
		<tr>
			<td>Name</td>
			<td>D.O.B.</td>
			<td>Grade</td>
		</tr>
	</thead>
	<tbody>
		{#each students as student (student.id)}
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
