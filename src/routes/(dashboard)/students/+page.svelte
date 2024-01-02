<script lang="ts">
	import { page } from '$app/stores';
	import { format } from 'date-fns';
	import { scale } from 'svelte/transition';
	import type { PageData } from './$types';
	import { browser } from '$app/environment';
	import { invalidateAll, goto } from '$app/navigation';

	let { data } = $props<{ data: PageData }>();
	const students = $derived(data.students);

	let search_input: HTMLInputElement | undefined = $state();

	let search_form: HTMLFormElement | undefined = $state();
	let student_search: string = $state($page.url.searchParams.get('search') || '');

	const is_mac = $derived(browser ? navigator?.userAgent.includes('Mac') : false);
	$inspect(is_mac);

	export const snapshot = {
		capture: () => {
			return student_search;
		},
		restore: (value: string) => {
			student_search = value;
		}
	};

	async function allStudents() {
		student_search = '';
		$page.url.searchParams.delete('search');

		history.pushState({}, '', $page.url);
	}

	function handleHotKey(e: KeyboardEvent) {
		if (e.metaKey && e.key === 'k') {
			search_input?.focus();
			search_input?.select();
		}
	}
</script>

<svelte:window onkeydown={handleHotKey} />

<svelte:head>
	<title>Students | SuzApp</title>
</svelte:head>

<form bind:this={search_form} method="GET">
	<input
		type="search"
		name="search"
		bind:this={search_input}
		bind:value={student_search}
		placeholder={`Search Students ${is_mac ? `(⌘ + k)` : `(ctrl + k)`}`}
		autocomplete="off"
	/>
	{#if student_search}
		<button
			value="clear"
			transition:scale={{ duration: 250 }}
			type="button"
			on:click|preventDefault={allStudents}
			class="clear-btn"
			title="Clear Search"
		>
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
				class="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg
			>
		</button>
	{/if}
	<button type="submit" title="Submit Search">
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
			class="lucide lucide-search"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg
		>
	</button>
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
		class="lucide lucide-user-plus"
		><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><line
			x1="19"
			x2="19"
			y1="8"
			y2="14"
		/><line x1="22" x2="16" y1="11" y2="11" /></svg
	>
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
						href={`/students/${student.id}${$page.url.search}`}
						title={`View ${student.first_name} ${student.last_name}'s Profile`}
						>{student.first_name} <strong>{student.last_name}</strong></a
					></td
				>
				<!-- <td><a href={`/students/${student.id}`}>{student.dob}</a></td> -->
				<td
					><a
						href={`/students/${student.id}${$page.url.search}`}
						title={`View ${student.first_name} ${student.last_name}'s Profile`}
						>{format(new Date(student.dob), 'MM/dd/yyyy')}</a
					></td
				>
				<td
					><a
						href={`/students/${student.id}${$page.url.search}`}
						title={`View ${student.first_name} ${student.last_name}'s Profile`}>{student.grade}</a
					></td
				>
			</tr>
		{/each}
	</tbody>
</table>

<style lang="postcss">
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
			border-radius: 16px;
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
