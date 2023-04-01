<script lang="ts">
	import type { studentType } from '$lib/types';
	import { format } from 'date-fns';
	import { parseISO, differenceInYears } from 'date-fns';
	import ScannerCards from './ScannerCards.svelte';
	import type { PageData } from './$types';
	import { ArrowLeft, Edit, Printer, Trash2, Upload, Archive } from 'lucide-svelte';
	import Prompt from '$lib/components/Prompt.svelte';
	import { page } from '$app/stores';

	export let form: HTMLFormElement;
	export let data: PageData;
	let student: studentType;

	$: ({ student } = data);
	$: ({ phones, scanner_cards } = student);

	let show_archive_prompt = false;

	function getAge(dob: string): number {
		const date = parseISO(dob);
		const age = differenceInYears(new Date(), date);
		return age;
	}

	function handlePrint() {
		//TODO: Print functionality
	}

	function handleArchive() {
		console.log('archived');
	}
</script>

<svelte:head>
	<title>{student.first_name} {student.last_name}</title>
</svelte:head>

<Prompt
	bind:is_open={show_archive_prompt}
	confirm_color="red"
	cancel_text="Nevermind"
	confirm_text={`Yes, Archive ${student.first_name}`}
	on:confirm={handleArchive}
>
	<h4 class="text-2xl font-bold text-red-500">
		Are you Sure You Want To Archive {student.first_name}?
	</h4>
	<p class="mt-4">
		<strong class="font-bold">This will NOT permanently delete {student.first_name}</strong>
		but will more or less just hide them from the student page and search.
		<strong class="font-bold"> They can be recovered if need be </strong>.
	</p>
</Prompt>

<div id="student-grid" class="page-grid gap-8 mt-14">
	<div class="btn-panel">
		<div class="sticky z-10 top-10">
			<div class="absolute z-10 isolate">
				<a href={`/students${$page.url.search}`} title="Go Back To Students">
					<span class="icon">
						<ArrowLeft />
					</span>
					<span class="text">Go Back</span>
				</a>
				<a
					href={`/students/${student.id}/edit`}
					style="--color: var(--green)"
					title={`Edit ${student.first_name}`}
				>
					<span class="icon">
						<Edit />
					</span>
					<span class="text">Edit Student</span>
				</a>
				<button
					on:click={handlePrint}
					style="--color: var(--periwinkle)"
					title={`Print ${student.first_name}`}
				>
					<span class="icon">
						<Printer />
					</span>
					<span class="text">Print Student</span>
				</button>
				{#if student.active}
					<button
						on:click={() => (show_archive_prompt = true)}
						style="--color: var(--coral)"
						title={`Archive ${student.first_name}`}
					>
						<span class="icon">
							<Archive />
						</span>
						<span class="text">Archive Student</span>
					</button>
				{:else}
					<button
						on:click={() => (show_archive_prompt = true)}
						style="--color: var(--yellow)"
						title={`Unarchive ${student.first_name}`}
					>
						<span class="icon">
							<Upload />
						</span>
						<span class="text">Unarchive Student</span>
					</button>
				{/if}
				<!-- TODO: lock this behind a user level -->
				<button
					on:click={() => (show_archive_prompt = true)}
					style="--color: var(--red)"
					title={`Delete ${student.first_name}`}
				>
					<span class="icon">
						<Trash2 />
					</span>
					<span class="text">Delete Student</span>
				</button>
			</div>
		</div>
	</div>
	<div>
		<section id="main-card" class="card">
			<h1 class="pink-underline">{student.first_name} {student.last_name}</h1>
			<div class=" mb-4 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
				<div class="grey-box mb-0">
					<p class="text-sm">Age</p>
					<p class="text-2xl sm:text-center">{getAge(student.dob)}</p>
				</div>
				<div class="grey-box sm:col-span-2 md:col-span-3 mb-0">
					<p class="text-sm">Grade</p>
					<p class="text-2xl">
						{student.grade}
					</p>
				</div>
			</div>
			<div class="grey-box">
				<p class="text-sm">Date Of Birth</p>
				<p class="text-2xl">{format(new Date(student.dob), 'MMMM dd, yyyy')}</p>
			</div>
			<div class="grey-box">
				<p class="text-sm">Address</p>
				<address class="text-2xl">
					{student.address || '--'}<br />
					{#if student.address}
						{student.city}, PA {student.zip}
					{/if}
				</address>
			</div>
			<div class="grey-box">
				<p class="text-sm flex items-center gap-1">Email</p>
				<p class="text-2xl">{student.email}</p>
			</div>
			{#if !phones}
				<h2>No Phones</h2>
			{:else if phones.length === 1}
				{@const phone = phones[0]}
				<div class="grey-box">
					<p class="text-sm">Phone {phone.label ? `(${phone.label})` : ''}</p>
					<p class="text-2xl">{phone.phone}</p>
				</div>
			{:else if phones.length > 1}
				<section>
					<h2 class="text-3xl font-black mb-2 text-center">Phones</h2>
					<ul class="phones-list">
						{#each phones as phone (phone.phone_id)}
							<li>
								<div class="grey-box">
									<p class="text-sm flex items-center gap-1">
										<span class="block">{phone.label ? phone.label : 'Phone'}</span>
									</p>
									<p class="text-2xl">{phone.phone}</p>
								</div>
							</li>
						{/each}
					</ul>
				</section>
			{/if}
		</section>
	</div>

	<ScannerCards scanner_cards={scanner_cards || []} student_id={student.id} bind:form />
</div>

<style lang="postcss">
	.grey-box {
		@apply bg-dark-transparent rounded-lg py-1.5 px-2.5 mb-4;

		&.mb-0 {
			margin-bottom: 0;
		}
	}

	.page-grid {
		display: grid;
		grid-template-columns: 45px 1fr;

		.btn-panel {
			grid-row: 1/-3;
		}

		@media screen and (min-width: 1250px) {
			grid-template-columns: 45px 1fr 375px;
		}
	}

	h1 {
		@apply relative font-black text-5xl text-center p-3 mb-7;

		&::after {
			content: '';
			@apply bg-pink rounded-full absolute;
			width: 70px;
			height: 10px;
			bottom: -10px;
			left: 50%;
			transform: translateX(-50%);
		}
	}

	.phones-list {
		list-style: none;
		padding: 0;
	}

	.btn-panel {
		position: relative;
		z-index: 40;
		.absolute {
			width: 45px;
			transition: width 300ms;
			z-index: 100;

			&:hover {
				width: 200px;
			}
		}
		button,
		a {
			--color: var(--pink);
			width: 100%;
			overflow: hidden;
			background: var(--color);
			display: block;
			border-radius: 16px;
			box-shadow: var(--shadow);
			display: flex;
			padding: 10px 10px 10px 0;
			margin-bottom: 15px;
			transition: background 250ms, color 250ms;

			&:hover {
				background: var(--dark);
				color: var(--color);
			}

			.icon {
				flex: 0 0 45px;
				display: flex;
				justify-content: center;
				align-items: center;
			}

			.text {
				width: fit-content;
				text-align: left;
				white-space: nowrap;
			}
		}
	}
</style>
