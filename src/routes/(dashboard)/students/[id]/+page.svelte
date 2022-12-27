<script lang="ts">
	import type { studentType } from '$lib/types';
	import { format } from 'date-fns';
	import { page } from '$app/stores';
	import supabase from '$lib/db';
	import Loading from '$lib/components/Loading.svelte';
	import { parseISO, differenceInYears } from 'date-fns';
	import ScannerCards from './ScannerCards.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ student } = data);
	$: ({ phones, scanner_cards } = student);

	function getAge(dob: string): number {
		const date = parseISO(dob);
		const age = differenceInYears(new Date(), date);
		return age;
	}
</script>

<svelte:head>
	<title>{student.first_name} {student.last_name}</title>
</svelte:head>

<div id="student-grid" class="grid xl:grid-cols-2 gap-8  mt-14">
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
			{#if phones.length === 1}
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

	<ScannerCards {scanner_cards} student_id={student.id} />
</div>

<style lang="scss">
	.grey-box {
		@apply bg-dark-transparent rounded-lg py-1.5 px-2.5 mb-4;

		&.mb-0 {
			margin-bottom: 0;
		}
	}

	h1 {
		position: relative;
		font-weight: 900;
		font-size: 2.875rem;
		text-align: center;
		padding: 10px;
		margin-bottom: 30px;

		&::after {
			content: '';
			width: 70px;
			height: 10px;
			background: var(--pink);
			border-radius: 100px;
			position: absolute;
			bottom: -10px;
			left: 50%;
			transform: translateX(-50%);
		}
	}

	.phones-list {
		list-style: none;
		padding: 0;
	}
</style>
